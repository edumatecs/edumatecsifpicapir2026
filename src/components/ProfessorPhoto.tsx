interface ProfessorPhotoProps {
    src?: string
    alt: string
}

function ProfessorPhoto({ src, alt }: ProfessorPhotoProps) {
    if (!src) {
        return null
    }

    return (
        <div className="h-[180px] w-[180px] shrink-0 overflow-hidden rounded-lg border-2 border-dashed border-[var(--dourado)] bg-[#0a0a0a] p-[10px]">
            <img
                src={src}
                alt={alt}
                className="h-full w-full rounded-md object-cover"
            />
        </div>
    )
}

export default ProfessorPhoto