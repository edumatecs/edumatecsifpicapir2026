import { useState } from 'react'
import './AnnouncementModal.css'

function AnnouncementModal() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) {
    return null
  }

  return (
    <div className="announcement-overlay">
      <div
        className="announcement-content"
        role="dialog"
        aria-modal="true"
        aria-label="Aviso sobre a prorrogação do prazo para submissão de trabalhos"
      >
        <button
          className="announcement-close"
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Fechar aviso"
        >
          ×
        </button>

        <img
          src={`${import.meta.env.BASE_URL}aviso-prorrogacao.webp`}
          alt="Atenção! O prazo para submissão de trabalhos foi prorrogado até terça-feira, 17 de novembro."
          className="announcement-image"
        />
      </div>
    </div>
  )
}

export default AnnouncementModal
