import { useEffect, useState } from 'react'
import { activities } from '../../data/activities'
import type { Registration, YesNo } from '../../domain/registration'
import {
    getAvailablePlaces,
    submitRegistration,
    type ActivityAvailability,
} from '../../services/registrationService'

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
    const [submissionError, setSubmissionError] = useState('')

    const [availability, setAvailability] = useState<
        Record<string, ActivityAvailability> | null
    >(null)

    const [isLoadingAvailability, setIsLoadingAvailability] = useState(false)
    const [availabilityError, setAvailabilityError] = useState('')

    useEffect(() => {
        if (!isOpen) {
            return
        }

        let cancelled = false

        setAvailability(null)
        setAvailabilityError('')
        setIsLoadingAvailability(true)

        getAvailablePlaces()
            .then((result) => {
                if (!cancelled) {
                    setAvailability(result)
                }
            })
            .catch((error) => {
                if (!cancelled) {
                    setAvailabilityError(
                        error instanceof Error
                            ? error.message
                            : 'Não foi possível consultar as vagas.',
                    )
                }
            })
            .finally(() => {
                if (!cancelled) {
                    setIsLoadingAvailability(false)
                }
            })

        return () => {
            cancelled = true
        }
    }, [isOpen])

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

            workshop1Id: String(formData.get('oficina1') ?? ''),
            workshop2Id: String(formData.get('oficina2') ?? ''),
            workshop3Id: String(formData.get('oficina3') ?? ''),
            minicourseId: String(formData.get('minicurso') ?? ''),

            receipt,
        }
    }

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault()

        setIsSubmitting(true)
        setSubmissionError('')

        try {
            const formData = new FormData(event.currentTarget)

            const registration = createRegistration(
                formData,
                receipt,
            )

            const result = await submitRegistration(registration)

            if (result.status === 'sucesso') {
                setIsSuccess(true)
                return
            }

            setSubmissionError(
                result.mensagem ||
                'Não foi possível concluir sua inscrição.',
            )

        } catch (error) {
            setSubmissionError(
                error instanceof Error
                    ? error.message
                    : 'Ocorreu um erro inesperado ao enviar sua inscrição.',
            )
        } finally {
            setIsSubmitting(false)
        }
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
                                availability={availability}
                                isLoadingAvailability={isLoadingAvailability}
                                availabilityError={availabilityError}
                            />

                            <RegistrationPayment
                                onReceiptChange={setReceipt}
                            />

                            <button
                                type="submit"
                                className="btn registration-submit-button"
                                disabled={isSubmitting}
                            >
                                {isSubmitting
                                    ? 'Enviando e confirmando...'
                                    : 'Finalizar Inscrição'}
                            </button>
                        </form>
                    </>
                )}
            </div>
            {submissionError && (
                <div className="registration-error-overlay">
                    <div
                        className="registration-error-dialog"
                        role="alertdialog"
                        aria-modal="true"
                        aria-labelledby="registration-error-title"
                        aria-describedby="registration-error-message"
                    >
                        <div className="registration-error-icon">
                            !
                        </div>

                        <h3 id="registration-error-title">
                            Não foi possível concluir sua inscrição
                        </h3>

                        <p id="registration-error-message">
                            {submissionError}
                        </p>

                        <span>
                            Revise a mensagem acima. Se não foi possível confirmar o envio,
                            consulte a organização antes de tentar novamente.
                        </span>

                        <button
                            type="button"
                            className="registration-error-button"
                            onClick={() => setSubmissionError('')}
                        >
                            Entendi, vou revisar a inscrição
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default RegistrationModal
