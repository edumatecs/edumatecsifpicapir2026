import './Apoiadores.css'

import panificadoraGaviao from '../../assets/images/apoiadores/panificadora-gaviao.webp'
import poupaMoveis from '../../assets/images/apoiadores/poupa-moveis.webp'
import gutGut from '../../assets/images/apoiadores/gut-gut.webp'

const apoiadores = [
  {
    nome: 'Panificadora Gavião',
    imagem: panificadoraGaviao,
  },
  {
    nome: 'Poupa Moveis',
    imagem: poupaMoveis,
  },
  {
    nome: 'GUT GUT',
    imagem: gutGut,
  },
]

function Apoiadores() {
  return (
    <main className="pagina-apoiadores">
      <section className="apoiadores-hero">
        <div className="hero-conteudo">
          <span className="hero-edicao">
            <span className="hero-ponto" />
            EDUMATEC'S 2026
          </span>

          <h1>
            Grandes ideias
            <br />
            <span>não se constroem</span>
            <br />
            sozinhas.
          </h1>

          <p>
            Por trás de cada iniciativa transformadora, existem pessoas
            e organizações que acreditam no poder da educação.
            Conheça quem faz parte dessa jornada conosco.
          </p>

          <div className="hero-assinatura">
            <span />
            <span>PARCERIA QUE TRANSFORMA</span>
            <span />
          </div>
        </div>

        <div className="hero-elemento" aria-hidden="true">
          <span className="elemento-circulo elemento-circulo-1" />
          <span className="elemento-circulo elemento-circulo-2" />
          <span className="elemento-diamante">◆</span>
        </div>
      </section>

      <section className="apoiadores-secao">

        <div
          className="apoiadores-grid"
          aria-label="Empresas apoiadoras da EDUMATEC'S 2026"
        >
          {apoiadores.map((apoiador, index) => (
            <article className="apoiador-card" key={apoiador.nome}>
              <div className="card-topo">

                <span className="card-categoria">
                  APOIADOR OFICIAL
                </span>
              </div>

              <div className="card-logo">
                <img
                  src={apoiador.imagem}
                  alt={`Logotipo de ${apoiador.nome}`}
                  loading="lazy"
                />
              </div>

              <div className="card-rodape">
                <h3>{apoiador.nome}</h3>
                <span className="card-simbolo" aria-hidden="true">
                  ◆
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="apoiadores-fechamento">
        <span className="fechamento-linha" />
        <p>
          Juntos, fortalecemos ideias e construímos oportunidades.
        </p>
        <span className="fechamento-diamante">◆</span>
      </div>
    </main>
  )
}

export default Apoiadores
