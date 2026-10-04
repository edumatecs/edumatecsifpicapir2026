import type { Registration } from '../domain/registration'


const URL_PLANILHA_INSCRICAO =
    'https://script.google.com/macros/s/AKfycbzq_6F00yr_3GmCrPGUxbaDTgZyLKx1OtDeT7Eh7r6Tw-rGLNAH42_so3HUG6HkiEBp/exec'


interface RegistrationPayload {
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


export async function getAvailablePlaces(): Promise<
    Record<string, number>
> {
    const response = await fetch(URL_PLANILHA_INSCRICAO)

    if (!response.ok) {
        throw new Error('Não foi possível consultar as vagas.')
    }

    return response.json() as Promise<Record<string, number>>
}


export async function submitRegistration(
    registration: Registration,
): Promise<void> {
    const payload = await createPayload(registration)

    await fetch(URL_PLANILHA_INSCRICAO, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
    })
}