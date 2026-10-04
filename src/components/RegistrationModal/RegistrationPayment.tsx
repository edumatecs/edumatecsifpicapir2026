import { useState } from 'react'
import qrcodeInscricoes from '../../assets/images/outros/qrcode-inscricoes.webp'

interface RegistrationPaymentProps {
    onReceiptChange: (file: File | null) => void
}

function RegistrationPayment({
    onReceiptChange,
}: RegistrationPaymentProps) {
    const [pixCopied, setPixCopied] = useState(false)

    const copyPixKey = async () => {
        await navigator.clipboard.writeText(
            'edumatecs.capir@ifpi.edu.br',
        )

        setPixCopied(true)

        setTimeout(() => {
            setPixCopied(false)
        }, 2000)
    }

    return (
        <>
            <div className="registration-payment">
                <h3>Pagamento via PIX</h3>

                <img
                    src={qrcodeInscricoes}
                    alt="QR Code para pagamento via PIX"
                />

                <div className="registration-payment-value">
                    Valor:{' '}
                    <strong>R$ 40,00</strong>
                </div>

                <div className="registration-pix-key">
                    <span>
                        edumatecs.capir@ifpi.edu.br
                    </span>

                    <button
                        type="button"
                        className="registration-copy-button"
                        onClick={copyPixKey}
                    >
                        {pixCopied ? 'Copiado!' : 'Copiar'}
                    </button>
                </div>

                <p>
                    Dúvidas ou espécie:{' '}
                    <strong>(86) 99963-4809</strong>
                </p>
            </div>

            <div className="registration-form-group">
                <label htmlFor="insc_comprovante">
                    Envio do Comprovante de Pagamento (Obrigatório)*
                </label>

                <input
                    type="file"
                    id="insc_comprovante"
                    name="comprovante"
                    accept="image/*,.pdf"
                    required
                    onChange={(event) => {
                        onReceiptChange(
                            event.target.files?.[0] ?? null,
                        )
                    }}
                />
            </div>
        </>
    )
}

export default RegistrationPayment