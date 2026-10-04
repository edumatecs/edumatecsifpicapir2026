import { gallery2025 } from '../../data/gallery-2025'
import logo2025 from '../../assets/images/logos/logo-2025.webp'
import './Memorias.css'

const muralImages = import.meta.glob(
  '../../assets/images/eventos/*-mural.webp',
  {
    eager: true,
    import: 'default',
  },
) as Record<string, string>

function getMuralImage(src: string): string {
  const imagePath = `../../assets/images/eventos/${src}`
  const image = muralImages[imagePath]

  if (!image) {
    throw new Error(`Imagem do mural não encontrada: ${src}`)
  }

  return image
}

function Memorias() {
  return (
    <main>
      <section className="memorias">
        <h2>1ª Edição EDUMATEC'S (2025)</h2>

        <div className="mural-header-container">
          <div>
            <p>
              O <strong>EDUMATEC’S</strong> é um evento realizado pelo IFPI
              – Campus Piripiri, que articula Educação, Matemática e
              Tecnologias em contextos formativos contemporâneos.
            </p>
          </div>

          <img
            src={logo2025}
            alt="Logo EDUMATEC'S 2025"
            className="mural-logo"
          />
        </div>

        <h3>Memórias de 2025</h3>

        <div className="fotos-vertical-container">
          {gallery2025.images.map((image) => (
            <div className="item-foto-mural" key={image.id}>
              <img
                src={getMuralImage(image.src)}
                alt={image.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Memorias