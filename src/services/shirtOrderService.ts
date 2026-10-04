import type { ShirtOrder } from '../domain/shirt-order'

const URL_PLANILHA_CAMISA =
    'https://script.google.com/macros/s/AKfycbw5_L3vF3RNFY4zcm4OoNLB5d48XSYAdUYqow7ftWws5mdfUCHyWfnMbfntBpDHKT8/exec'

interface ShirtOrderPayload {
    nome: string
    tamanho: string
    telefone: string
    email: string
    forma_pagamento: string
    fileName: string
    mimeType: string
    fileData: string
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
    order: ShirtOrder,
): Promise<ShirtOrderPayload> {
    let fileName = ''
    let mimeType = ''
    let fileData = ''

    if (order.receipt) {
        fileName = order.receipt.name
        mimeType = order.receipt.type
        fileData = await fileToBase64(order.receipt)
    }

    return {
        nome: order.name.trim(),
        tamanho:
            order.size === 'Outro'
                ? order.customSize?.trim() ?? ''
                : order.size,
        telefone: order.phone.trim(),
        email: order.email.trim(),
        forma_pagamento: order.paymentMethod,
        fileName,
        mimeType,
        fileData,
    }
}

export async function submitShirtOrder(
    order: ShirtOrder,
): Promise<void> {
    const payload = await createPayload(order)

    await fetch(URL_PLANILHA_CAMISA, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
    })
}