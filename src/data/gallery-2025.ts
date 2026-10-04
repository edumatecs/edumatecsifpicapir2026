import type { Gallery } from '../domain/gallery'

export const gallery2025: Gallery = {
    id: 'memorias-edumatecs-2025',
    title: "Memórias de 2025",
    description:
        "Registros da 1ª Edição do EDUMATEC'S, realizada em 2025 no IFPI Campus Piripiri.",
    images: Array.from({ length: 34 }, (_, index) => {
        const number = index + 1

        return {
            id: `mural-2025-${number}`,
            src: `${number}-mural.webp`,
            alt: `Memória da 1ª Edição EDUMATEC'S, foto ${number}`,
        }
    }),
}