import qrcodeCamisas from '../../assets/images/outros/qrcode-camisas.webp'
import camisa from '../../assets/images/outros/camisa.webp'

import { useState } from 'react'
import { submitShirtOrder } from '../../services/shirtOrderService'
import type { PaymentMethod, ShirtOrder, ShirtSize, } from '../../domain/shirt-order'

import './ShirtOrderModal.css'


interface ShirtOrderModalProps {
    isOpen: boolean
    onClose: () => void
}


function ShirtOrderModal({
    isOpen,
    onClose,
}: ShirtOrderModalProps) {
    const [size, setSize] = useState<ShirtSize | ''>('')
    const [paymentMethod, setPaymentMethod] =
        useState<PaymentMethod | ''>('')

    const [receipt, setReceipt] = useState<File | null>(null)

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const [copiedPix, setCopiedPix] = useState(false)

    const formatPhone = (value: string): string => {
        const numbers = value.replace(/\D/g, '').slice(0, 11)

        if (numbers.length <= 2) {
            return numbers
        }

        if (numbers.length <= 7) {
            return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
        }

        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
    }

    const copyPix = async () => {
        await navigator.clipboard.writeText(
            '00020126430014br.gov.bcb.pix0114+55869999114300203Pix5204000053039865802BR5924EMILLY_DE_CARVALHO_SILVA6007BATALHA62290525MdiUxJKmHhY6LyCB8tWKqF0g163042877',
        )

        setCopiedPix(true)

        setTimeout(() => {
            setCopiedPix(false)
        }, 2000)
    }

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault()

        if (!size || !paymentMethod) {
            return
        }

        const formData = new FormData(event.currentTarget)

        const customSize =
            String(formData.get('tamanho_outro') ?? '').trim()

        const order: ShirtOrder = {
            name: String(
                formData.get('nome_completo') ?? '',
            ),
            size,
            customSize:
                size === 'Outro'
                    ? customSize
                    : undefined,
            phone: String(
                formData.get('telefone') ?? '',
            ),
            email: `${String(
                formData.get('gmail_user') ?? '',
            ).trim()}@gmail.com`,
            paymentMethod,
            receipt:
                paymentMethod === 'pix'
                    ? receipt ?? undefined
                    : undefined,
        }

        setIsSubmitting(true)

        try {
            await submitShirtOrder(order)
            setIsSuccess(true)
        } catch {
            window.alert('Erro ao enviar pedido.')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (!isOpen) {
        return null
    }

    if (isSuccess) {
        return (
            <div
                className="shirt-order-modal"
                role="dialog"
                aria-modal="true"
            >
                <div className="shirt-order-modal-content">
                    <button
                        type="button"
                        className="shirt-order-modal-close"
                        onClick={onClose}
                        aria-label="Fechar pedido de camisa"
                    >
                        &times;
                    </button>

                    <div className="shirt-order-success">
                        <div className="check-circle">
                            ✓
                        </div>

                        <h3>Pedido Recebido!</h3>

                        <button
                            type="button"
                            className="btn"
                            onClick={onClose}
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div
            className="shirt-order-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="shirt-order-modal-title"
        >
            <div className="shirt-order-modal-content">
                <button
                    type="button"
                    className="shirt-order-modal-close"
                    onClick={onClose}
                    aria-label="Fechar pedido de camisa"
                >
                    &times;
                </button>

                <h2 id="shirt-order-modal-title">
                    Pedido de Camisa
                </h2>

                <form
                    className="shirt-order-form"
                    onSubmit={handleSubmit}
                >
                    <div className="shirt-order-form-group">
                        <label htmlFor="nome_completo">
                            Nome Completo*
                        </label>

                        <input
                            type="text"
                            id="nome_completo"
                            name="nome_completo"
                            required
                            placeholder="Digite seu nome completo"
                        />
                    </div>

                    <div className="shirt-order-form-group">
                        <label>
                            Tamanho da Camisa*
                        </label>

                        <img
                            src={camisa}
                            alt="Camisa EDUMATEC'S"
                            className="shirt-order-image"
                        />

                        <div className="shirt-order-size-options">
                            {(
                                [
                                    'PP',
                                    'P',
                                    'M',
                                    'G',
                                    'GG',
                                    'Outro',
                                ] as ShirtSize[]
                            ).map((shirtSize) => (
                                <label
                                    key={shirtSize}
                                    className="shirt-order-size-option"
                                >
                                    <input
                                        type="radio"
                                        name="tamanho"
                                        value={shirtSize}
                                        required
                                        checked={
                                            size ===
                                            shirtSize
                                        }
                                        onChange={() =>
                                            setSize(
                                                shirtSize,
                                            )
                                        }
                                    />

                                    <span>
                                        {shirtSize}
                                    </span>
                                </label>
                            ))}
                        </div>

                        {size === 'Outro' && (
                            <div className="shirt-order-custom-size">
                                <label htmlFor="tamanho_outro">
                                    Especifique o tamanho*
                                </label>

                                <input
                                    type="text"
                                    id="tamanho_outro"
                                    name="tamanho_outro"
                                    required
                                    placeholder="Ex: XGG"
                                />
                            </div>
                        )}
                    </div>

                    <div className="shirt-order-form-group">
                        <label htmlFor="telefone">
                            Telefone*
                        </label>

                        <input
                            type="text"
                            id="telefone"
                            name="telefone"
                            required
                            placeholder="(86) 90000-0000"
                            maxLength={15}
                            onChange={(event) => {
                                event.currentTarget.value =
                                    formatPhone(
                                        event.currentTarget
                                            .value,
                                    )
                            }}
                        />
                    </div>

                    <div className="shirt-order-form-group">
                        <label htmlFor="gmail_user">
                            E-mail (Gmail)*
                        </label>

                        <div className="shirt-order-gmail">
                            <input
                                type="text"
                                id="gmail_user"
                                name="gmail_user"
                                required
                                placeholder="seuusuario"
                            />

                            <span>@gmail.com</span>
                        </div>
                    </div>

                    <div className="shirt-order-form-group">
                        <label htmlFor="forma_pagamento">
                            Forma de Pagamento*
                        </label>

                        <select
                            id="forma_pagamento"
                            name="forma_pagamento"
                            required
                            value={paymentMethod}
                            onChange={(event) =>
                                setPaymentMethod(
                                    event.target
                                        .value as PaymentMethod | '',
                                )
                            }
                        >
                            <option value="">
                                Selecione...
                            </option>

                            <option value="especie">
                                Em espécie
                            </option>

                            <option value="pix">
                                Pix
                            </option>
                        </select>
                    </div>

                    {paymentMethod === 'pix' && (
                        <>
                            <div className="shirt-order-pix">
                                <img
                                    src={qrcodeCamisas}
                                    alt="QR Code Pix para pagamento da camisa"
                                />

                                <p>
                                    NOME: EMILLY DE CARVALHO
                                    SILVA
                                </p>

                                <strong>
                                    VALOR: R$ 35,00
                                </strong>

                                <code>
                                    00020126430014br.gov.bcb.pix0114+55869999114300203Pix5204000053039865802BR5924EMILLY_DE_CARVALHO_SILVA6007BATALHA62290525MdiUxJKmHhY6LyCB8tWKqF0g163042877
                                </code>

                                <button
                                    type="button"
                                    className="btn"
                                    onClick={copyPix}
                                >
                                    {copiedPix
                                        ? 'Chave copiada!'
                                        : 'Copiar chave'}
                                </button>
                            </div>

                            <div className="shirt-order-form-group">
                                <label htmlFor="comprovante">
                                    Envio do Comprovante*
                                </label>

                                <input
                                    type="file"
                                    id="comprovante"
                                    name="comprovante"
                                    accept="image/*,.pdf"
                                    required
                                    onChange={(
                                        event,
                                    ) => {
                                        setReceipt(
                                            event.target
                                                .files?.[0] ??
                                            null,
                                        )
                                    }}
                                />
                            </div>
                        </>
                    )}

                    <button
                        type="submit"
                        className="btn shirt-order-submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting
                            ? 'Enviando...'
                            : 'Finalizar Pedido'}
                    </button>
                </form>
            </div>
        </div>
    )
}


export default ShirtOrderModal