import { useState } from 'react'
import { activities } from '../../data/activities'
import type { Registration, YesNo } from '../../domain/registration'
import { submitRegistration } from '../../services/registrationService'

import kit from '../../assets/images/outros/kit.webp'
import RegistrationFicha from './RegistrationFicha'
import RegistrationActivities from './RegistrationActivities'
import RegistrationPayment from './RegistrationPayment'

import './RegistrationModal.css'


interface RegistrationModalProps {
    isOpen: boolean
    onClose: () => void
}


function RegistrationModal({
    isOpen,
    onClose,
}: RegistrationModalProps) {

    const [receipt, setReceipt] = useState<File | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const getActivityById = (id: string) => {
        const activity = activities.find(
            (activity) => activity.id === id,
        )

        if (!activity) {
            throw new Error(`Atividade não encontrada: ${id}`)
        }

        return activity
    }

    function createRegistration(
        formData: FormData,
        receipt: File | null,
    ): Registration {
        if (!receipt) {
            throw new Error('Comprovante de pagamento não informado.')
        }

        return {
            name: String(formData.get('nome') ?? ''),
            cpf: String(formData.get('cpf') ?? ''),
            phone: String(formData.get('telefone') ?? ''),
            city: String(formData.get('cidade') ?? ''),

            accommodation:
                String(formData.get('alojamento') ?? 'Não') as YesNo,

            hasSpecialNeed:
                String(formData.get('necessidade') ?? 'Não') as YesNo,

            specialNeedDescription:
                String(formData.get('desc_necessidade') ?? ''),

            hasSubmission:
                String(formData.get('submissao') ?? 'Não') as YesNo,

            workshop1Id:
                String(formData.get('oficina1') ?? ''),

            workshop2Id:
                String(formData.get('oficina2') ?? ''),

            workshop3Id:
                String(formData.get('oficina3') ?? ''),

            minicourseId:
                String(formData.get('minicurso') ?? ''),

            receipt,
        }
    }

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault()

        setIsSubmitting(true)

        const formData = new FormData(event.currentTarget)

        const registration = createRegistration(
            formData,
            receipt,
        )

        await submitRegistration(registration)

        setIsSubmitting(false)
        setIsSuccess(true)
    }

    if (!isOpen) {
        return null
    }

    return (
        <div
            className="registration-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="registration-modal-title"
        >
            <div className="registration-modal-content">
                <button
                    type="button"
                    className="registration-modal-close"
                    onClick={onClose}
                    aria-label="Fechar inscrição"
                >
                    &times;
                </button>

                {isSuccess ? (
                    <div className="registration-success">
                        <div className="check-circle">✓</div>

                        <h3>Inscrição Realizada com Sucesso!</h3>

                        <button
                            type="button"
                            className="btn"
                            onClick={onClose}
                        >
                            Concluir
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="registration-kit">
                            <h4>Kit Exclusivo Incluso*</h4>

                            <img
                                src={kit}
                                alt="Kit EDUMATEC'S"
                            />

                            <p>Inscrição com Kit EDUMATEC'S Incluso</p>
                        </div>

                        <h2 id="registration-modal-title">
                            Ficha de Inscrição
                        </h2>

                        <form
                            className="registration-form"
                            onSubmit={handleSubmit}
                        >
                            <RegistrationFicha />

                            <RegistrationActivities
                                getActivityById={getActivityById}
                            />

                            <RegistrationPayment
                                receipt={receipt}
                                onReceiptChange={setReceipt}
                            />

                            <button
                                type="submit"
                                className="btn registration-submit-button"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Enviando...' : 'Finalizar Inscrição'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    )
}

export default RegistrationModal