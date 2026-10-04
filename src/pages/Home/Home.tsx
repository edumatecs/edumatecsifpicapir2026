import { useState } from 'react'

import TourismCarousel from '../../components/TourismCarousel/TourismCarousel'
import ShirtOrderModal from '../../components/ShirtOrderModal/ShirtOrderModal'
import DeliveryCarousel from '../../components/DeliveryCarousel/DeliveryCarousel'
import RegistrationModal from '../../components/RegistrationModal/RegistrationModal'

import logo2026 from '../../assets/images/logos/logo-2026.webp'
import kit from '../../assets/images/outros/kit.webp'
import camisa from '../../assets/images/outros/camisa.webp'
import certificado from '../../assets/images/outros/certificado.webp'

import './Home.css'


function Home() {

  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)
  const [isShirtOrderOpen, setIsShirtOrderOpen] = useState(false)

  return (
    <main>
      <section className="hero-evento">
        <div className="hero-grid">
          <div className="hero-logo-col">
            <img
              src={logo2026}
              alt="Logo EDUMATEC'S 2026"
            />
          </div>

          <div className="hero-text-col">
            <h1>EDUMATEC'S 2026</h1>

            <p>
              Mais do que um Encontro, o <strong>EDUMATEC's</strong> é um
              convite para expandir seus horizontes, desafiar sua mente e
              conectar-se com outros apaixonados por Educação, Matemática e
              Tecnologias em seus mais diversos contextos formativos. Em sua
              2ª edição, o evento fomenta o compartilhar de saberes científicos
              e pedagógicos que emergem do ensino, da pesquisa e pela extensão.
              Aproveite cada momento, construa aprendizagens e deixe-se
              inspirar pela infinita beleza dessas Ciências!
            </p>

            <div className="badge-tema">
              Tema: Ensino, Pesquisa e Extensão na formação
            </div>
          </div>
        </div>
      </section>
      <section className="home-section">
        <div className="flex-container">
          <div className="imagem">
            <img
              src={kit}
              alt="Kit EDUMATEC'S"
              className="kit-img"
            />
          </div>

          <div className="texto">
            <h2>Faça já sua inscrição!</h2>

            <p>
              Participe desse grande evento que articula Educação, Matemática e
              Tecnologias. Inscreva-se agora e garanta seu{' '}
              <strong>Kit Exclusivo EDUMATEC'S</strong>.
            </p>

            <button
              type="button"
              className="btn"
              onClick={() => setIsRegistrationOpen(true)}
            >
              Garantir Minha Vaga
            </button>
          </div>
        </div>
      </section>
      <section className="home-section">
        <div className="flex-container">
          <div className="imagem">
            <img
              src={camisa}
              alt="Camisa EDUMATEC'S"
              className="camisa-img"
            />
          </div>

          <div className="texto">
            <h2>Vista essa Ideia!</h2>

            <p>
              Garanta sua camisa oficial do evento e mostre que você faz parte dessa
              imersão! Design exclusivo em{' '}
              <strong>preto com detalhes dourados.</strong>
            </p>

            <button
              type="button"
              className="btn"
              onClick={() => setIsShirtOrderOpen(true)}
            >
              Pedir Minha Camisa
            </button>
          </div>
        </div>
      </section>
      <section className="home-section">
        <div className="flex-container">
          <div className="imagem">
            <img
              src={certificado}
              alt="Certificado EDUMATEC'S"
              className="certificado-img"
            />
          </div>

          <div className="texto">
            <h2>Certificados Disponíveis!</h2>

            <p>
              Todos os certificados de participação, apresentação de trabalhos,
              minicursos e oficinas já estão liberados.
            </p>

            <a
              href="https://drive.google.com/drive/u/0/folders/1nRItqy93xkiOcozG0CvEKenvFgS0EQYF"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Certificados 2025
            </a>
          </div>
        </div>
      </section>
      <section id="secao-turismo">
        <h2>Guia Turístico de Piripiri!</h2>

        <p>
          Aproveite sua vinda e conheça nossos pontos turísticos.
        </p>

        <TourismCarousel />
      </section>
      <section id="secao-delivery">
        <h2>Chama no Delivery</h2>
        <p>
          Bateu aquela fome durante o evento? Confira as melhores opções de Piripiri!
        </p>

        <DeliveryCarousel />
      </section>
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
      <ShirtOrderModal
        isOpen={isShirtOrderOpen}
        onClose={() => setIsShirtOrderOpen(false)}
      />
    </main>
  )
}

export default Home