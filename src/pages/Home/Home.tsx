import { useState } from 'react'

import TourismCarousel from '../../components/TourismCarousel/TourismCarousel'
import ShirtOrderModal from '../../components/ShirtOrderModal/ShirtOrderModal'
import DeliveryCarousel from '../../components/DeliveryCarousel/DeliveryCarousel'
import RegistrationModal from '../../components/RegistrationModal/RegistrationModal'

import logo2026 from '../../assets/images/logos/logo-2026.webp'
import kit from '../../assets/images/outros/kit.webp'
import camisa from '../../assets/images/outros/camisa.webp'
import certificado from '../../assets/images/outros/certificado.webp'

import capaLivro from '../../assets/images/lancamento-livros/capa-a-matematica-nos-anos-iniciais-do-ensino-fundamental.webp'
import autoraLivro from '../../assets/images/lancamento-livros/autora-a-matematica-nos-anos-iniciais-do-ensino-fundamental.webp'
import qrcodeLivro from '../../assets/images/lancamento-livros/qrcode-a-matematica-nos-anos-iniciais-do-ensino-fundamental.webp'

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
          <div className="texto submissao-trabalhos">
            <h2>Submissão de Trabalhos</h2>

            <p>
              Estão abertas as submissões de trabalhos para o EDUMATEC'S 2026.
              Consulte o edital e confira os modelos oficiais antes de enviar seu
              trabalho.
            </p>

            <div className="cronograma-submissao">
              <h3>Cronograma</h3>

              <p>
                <strong>Início das submissões:</strong> 02/10/2026
              </p>

              <p>
                <strong>Fim das submissões:</strong> 13/11/2026
              </p>

              <p>
                <strong>Avaliação dos trabalhos:</strong> 14/11 a 30/11/2026
              </p>

              <p>
                <strong>Reavaliação:</strong> 23/11 a 29/11/2026
              </p>

              <p>
                <strong>Lista de trabalhos aprovados e local de apresentação:</strong>{' '}
                04/12/2026
              </p>
            </div>

            <div className="submissao-botoes">
              <a
                href="/edumatecsifpicapir2026/documentos/edumatecs-2026-chamada-para-submissao-de-trabalhos.docx"
                download
                className="btn"
              >
                Baixar Edital
              </a>

              <a
                href="/edumatecsifpicapir2026/documentos/edumatecs-2026-modelo-resumo-expandido.docx"
                download
                className="btn"
              >
                Modelo de Resumo Expandido
              </a>

              <a
                href="/edumatecsifpicapir2026/documentos/edumatecs-2026-template-artigo-completo-edumatecs.docx"
                download
                className="btn"
              >
                Template de Artigo Completo
              </a>

              <a
                href="/edumatecsifpicapir2026/template-comunicacao-oral-2026.pptx"
                download
                className="btn"
              >
                Baixar template oficial<br />
                (Para a apresentação oral)
              </a>
            </div>
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


      <section id="secao-lancamento-livros" className="home-section lancamento-livros">
        <h2>Lançamento de Livros</h2>

        <div className="livro-apresentacao">
          <div className="livro-capa-container">
            <img
              src={capaLivro}
              alt="Capa do livro A Matemática nos Anos Iniciais do Ensino Fundamental"
              className="livro-capa"
            />
          </div>

          <div className="livro-conteudo">
            <h3>A Matemática nos Anos Iniciais do Ensino Fundamental</h3>

            <p className="livro-sinopse">
              Ensinar Matemática nos anos iniciais do Ensino Fundamental vai
              muito além da transmissão de conteúdos. Exige compreender a
              complexidade da prática educativa, reconhecer os desafios da
              formação docente e construir estratégias que promovam uma
              aprendizagem significativa, crítica e contextualizada.

              Nessa obra você leitor é convidado a refletir sobre as dimensões
              estruturantes que sustentam o ensino e a aprendizagem da
              Matemática, articulando fundamentos teóricos, evidências
              produzidas em pesquisa de campo e experiências vividas na escola
              pública.

              Ao dar voz a professores, gestores e coordenadores pedagógicos,
              a autora revela como a formação continuada, o planejamento, as
              concepções pedagógicas e o trabalho colaborativo podem transformar
              a prática docente e fortalecer a aprendizagem dos estudantes.

              Com uma abordagem fundamentada na Educação Matemática e na
              valorização da escola como espaço de construção do conhecimento,
              este livro oferece subsídios para professores, formadores,
              gestores, pesquisadores e estudantes de licenciatura que buscam
              compreender e aprimorar o ensino da Matemática nos anos iniciais.

              Mais do que analisar desafios, esta obra apresenta caminhos para
              transformar a prática educativa em uma experiência reflexiva,
              inovadora e comprometida com a aprendizagem, a equidade e a
              qualidade da educação pública.
            </p>

            <div className="livro-acesso">
              <a
                href="https://www.amazon.com.br/Matem%C3%A1tica-Anos-Iniciais-Ensino-Fundamental/dp/8547350608?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=211HNRZLGS879&dib=eyJ2IjoiMSJ9.PXw9pDy8Blq9EZ1HRi8yennC3fG-jISRhoeLsmyrK0E1l5OwbEI7m_WLganWXWKZcOtuijlTWECrqZ8Mg6R8xOGx7oGC67MuWZtFPjI2vjf05pQcRmSDv-ky0GMQfshdwpVpGuDppMzu9hxyksBJDSKw1F2jcBADiGzbCmeY6INyXf9Jt71FhN3ImNjBe3yKBDFusCRlqw-on9A9VlvnvQFXEiUZdDxZguNTwvnlPaU8jHhHeeypwwQ_9J0x2Vd1SVeVsTGVulAid66hZGKKVrGyWt8rfvUnnEnj3phWqZk.7u40L-Ux4P5o-ca3krjUMCzAwHJsg7k1kPOpQGjOOK4&dib_tag=se&keywords=A+matem%C3%A1tica+nos+anos+iniciais+do+ensino+fundamental%3A&qid=1787672141&sprefix=entre+deus+e+o+estado+emancipa%C3%A7%C3%B5es+tuteladas+na+teologia+da+liberta%C3%A7%C3%A3o+e+no+programa+bolsa+fam%C3%ADlia%2Caps%2C274&sr=8-4&linkCode=sl2&tag=appriseditora-20&linkId=8c3a61939d0122f5c6a50f23901ffc5a&ref_=as_li_ss_tl_btn_assoc_p-other_o-2_srctok-2948c8335fae7f24_ht-t&ascsubtag=srctok-2948c8335fae7f24&btn_type=ss&btn_ref=srctok-2948c8335fae7f24"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Comprar na Amazon
              </a>

              <div className="livro-qrcode">
                <img
                  src={qrcodeLivro}
                  alt="QR Code para acessar o livro na Amazon"
                />
                <span>Acesse pelo QR Code</span>
              </div>
            </div>
          </div>
        </div>

        <div className="autora-apresentacao">
          <img
            src={autoraLivro}
            alt="Fotografia da autora do livro"
            className="autora-foto"
          />

          <div className="autora-biografia">
            <h3>Silmara Bezerra Paz Carvalho</h3>
            <p>Biografia da autora em breve.</p>
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