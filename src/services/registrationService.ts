import type { Registration } from '../domain/registration'

const URL_PLANILHA_INSCRICAO =
    'https://script.google.com/macros/s/AKfycbyRcZM-d5c-dw_INLHMBmpX6FFX5wB3NYTqGu9PXO4JL-ehWepK7ysuIWHiGW3Y3Rxlaw/exec'

export interface ActivityAvailability {
    limite: number
    inscritos: number
    disponiveis: number
    esgotada: boolean
}

interface RegistrationPayload {
    requestId: string
    nome: string
    cpf: string
    telefone: string
    cidade: string
    alojamento: string
    necessidade: string
    desc_necessidade: string
    submissao: string
    oficina1: string
    oficina2: string
    oficina3: string
    minicurso: string
    fileName: string
    mimeType: string
    fileData: string
}

interface SubmissionStatus {
    status: 'processando' | 'sucesso' | 'esgotado' | 'erro' | 'nao_encontrado'
    mensagem: string
}

const registrationActivityLabels: Record<string, string> = {
    'oficina-tangram-sala-de-aula': 'Oficina 1',
    'oficina-hp12c-celular': 'Oficina 2',
    'oficina-matematica-direitos-humanos': 'Oficina 3',
    'oficina-geometria-calculo-design': 'Oficina 4',
    'oficina-latex-gpt': 'Oficina 5',
    'oficina-harness-yourself': 'Oficina 6',
    'oficina-matematica-alem-dos-numeros': 'Oficina 7',
    'oficina-alfabetizacao-matematica': 'Oficina 8',
    'oficina-pesquisa-conhecimento-cientifico': 'Oficina 9',

    'minicurso-ray-victor': 'Minicurso 1',
    'minicurso-clayton-robson': 'Minicurso 2',
    'minicurso-francisco-chagas': 'Minicurso 3',
    'minicurso-pablo-dias': 'Minicurso 4',
}

function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()

        reader.onload = () => {
            const result = reader.result

            if (typeof result !== 'string') {
                reject(new Error('Não foi possível ler o comprovante.'))
                return
            }

            const [, base64Data] = result.split(',')

            if (!base64Data) {
                reject(new Error('Não foi possível converter o comprovante.'))
                return
            }

            resolve(base64Data)
        }

        reader.onerror = () => {
            reject(new Error('Não foi possível ler o comprovante.'))
        }

        reader.readAsDataURL(file)
    })
}

async function createPayload(
    registration: Registration,
): Promise<RegistrationPayload> {
    const fileData = await fileToBase64(registration.receipt)

    return {
        requestId: crypto.randomUUID(),

        nome: registration.name.trim(),
        cpf: registration.cpf.trim(),
        telefone: registration.phone.trim(),
        cidade: registration.city.trim(),

        alojamento: registration.accommodation,
        necessidade: registration.hasSpecialNeed,

        desc_necessidade:
            registration.specialNeedDescription?.trim() || 'Nenhuma',

        submissao: registration.hasSubmission,

        oficina1:
            registrationActivityLabels[registration.workshop1Id] ||
            'Não escolheu',

        oficina2:
            registrationActivityLabels[registration.workshop2Id] ||
            'Não escolheu',

        oficina3:
            registrationActivityLabels[registration.workshop3Id] ||
            'Não escolheu',

        minicurso:
            registrationActivityLabels[registration.minicourseId] ||
            'Não escolheu',

        fileName: registration.receipt.name,
        mimeType: registration.receipt.type,
        fileData,
    }
}

function jsonp<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) => {
        const callbackName =
            `edumatecsCallback_${crypto.randomUUID().replace(/-/g, '')}`

        const script = document.createElement('script')
        const timeout = window.setTimeout(() => {
            cleanup()
            reject(new Error('Tempo limite ao consultar o servidor.'))
        }, 15000)

        const callbacks = window as unknown as Record<
            string,
            (data: T) => void
        >

        function cleanup() {
            window.clearTimeout(timeout)
            delete callbacks[callbackName]
            script.remove()
        }

        callbacks[callbackName] = (data: T) => {
            cleanup()
            resolve(data)
        }

        script.onerror = () => {
            cleanup()
            reject(new Error('Não foi possível consultar o servidor.'))
        }

        const separator = url.includes('?') ? '&' : '?'

        script.src =
            `${url}${separator}callback=${encodeURIComponent(callbackName)}`

        document.head.appendChild(script)
    })
}

export async function getAvailablePlaces(): Promise<
    Record<string, ActivityAvailability>
> {
    return jsonp<Record<string, ActivityAvailability>>(
        URL_PLANILHA_INSCRICAO,
    )
}

function wait(milliseconds: number): Promise<void> {
    return new Promise((resolve) => {
        window.setTimeout(resolve, milliseconds)
    })
}

async function getSubmissionStatus(
    requestId: string,
): Promise<SubmissionStatus> {
    const url = new URL(URL_PLANILHA_INSCRICAO)

    url.searchParams.set('acao', 'status')
    url.searchParams.set('id', requestId)

    return jsonp<SubmissionStatus>(url.toString())
}

async function waitForSubmissionResult(
    requestId: string,
): Promise<SubmissionStatus> {
    const timeout = Date.now() + 60000

    while (Date.now() < timeout) {
        const result = await getSubmissionStatus(requestId)

        if (
            result.status === 'sucesso' ||
            result.status === 'esgotado' ||
            result.status === 'erro'
        ) {
            return result
        }

        await wait(1500)
    }

    throw new Error(
        'Não foi possível confirmar o resultado da inscrição. Consulte a organização antes de enviar novamente.',
    )
}

export async function submitRegistration(
    registration: Registration,
): Promise<SubmissionStatus> {
    const payload = await createPayload(registration)

    if (payload.mimeType === '' || !payload.mimeType) {
        throw new Error('O comprovante possui um formato inválido.')
    }

    if (payload.fileData.length * 3 / 4 > 5 * 1024 * 1024) {
        throw new Error('O comprovante deve ter no máximo 5 MB.')
    }

    await fetch(URL_PLANILHA_INSCRICAO, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
    })

    return waitForSubmissionResult(payload.requestId)
}
