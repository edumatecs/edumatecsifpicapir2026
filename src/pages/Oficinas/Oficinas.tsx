import { activities } from '../../data/activities'

import anaThatilaImage from '../../assets/images/professores/ana-thatila-de-lima-rodrigues.webp'
import cleycianeImage from '../../assets/images/professores/cleyciane-de-oliveira-melo.webp'
import franciscoImage from '../../assets/images/professores/francisco-das-chagas-azevedo-dos-reis.webp'
import guilhermeImage from '../../assets/images/professores/guilherme-luiz-de-oliveira-neto.webp'
import iallenImage from '../../assets/images/professores/iallen-gabio-de-sousa-santos.webp'
import irismarImage from '../../assets/images/professores/irismar-da-silva-carvalho.webp'
import joselmaImage from '../../assets/images/professores/joselma-ferreira-lima-e-silva.webp'
import leticiaImage from '../../assets/images/professores/leticia-soares-chaves.webp'
import renataeRimenaImage from '../../assets/images/professores/renata-resende-ibiapina-braga-e-rimena-canuto-oliveira.webp'
import rosymeireImage from '../../assets/images/professores/rosimeyre-vieira-da-silva.webp'
import sergioImage from '../../assets/images/professores/sergio-adriano-marques-da-silva.webp'
import silmaraImage from '../../assets/images/professores/silmara-bezerra-paz-carvalho.webp'
import pedroImage from '../../assets/images/professores/pedro-alves-da-silva.webp'

import './Oficinas.css'


const oficinaImages: Record<string, string[]> = {
  'oficina-tangram-sala-de-aula': [irismarImage, silmaraImage],
  'oficina-hp12c-celular': [guilhermeImage],
  'oficina-matematica-direitos-humanos': [
    rosymeireImage,
    anaThatilaImage,
    franciscoImage,
    leticiaImage,
  ],
  'oficina-geometria-calculo-design': [renataeRimenaImage],
  'oficina-latex-gpt': [sergioImage],
  'oficina-harness-yourself': [iallenImage],
  'oficina-matematica-alem-dos-numeros': [cleycianeImage],
  'oficina-alfabetizacao-matematica': [pedroImage],
  'oficina-pesquisa-conhecimento-cientifico': [joselmaImage],
}

function getPersonName(
  academicTitle: string | undefined,
  name: string,
): string {
  return academicTitle ? `${academicTitle} ${name}` : name
}

function Oficinas() {
  const oficinas = activities.filter(
    (activity) => activity.type === 'oficina',
  )

  return (
    <main>
      <section className="oficinas">
        <h2>Oficinas do Evento</h2>

        {oficinas.map((oficina, index) => {
          const images = oficinaImages[oficina.id]
          const isHarnessWorkshop =
            oficina.id === 'oficina-harness-yourself'

          return (
            <article className="card-conteudo" key={oficina.id}>
              <div className="oficina-fotos">
                {images?.map((image, imageIndex) => (
                  <div className="card-foto-espaco" key={image}>
                    <img
                      src={image}
                      alt={`${oficina.title} - imagem ${imageIndex + 1}`}
                    />
                  </div>
                ))}
              </div>

              <div className="card-info-detalhada">
                <h3>
                  Oficina {index + 1}: {oficina.title}
                </h3>

                {oficina.vacancies && (
                  <h4>({oficina.vacancies} vagas)</h4>
                )}

                <p>
                  <strong>
                    {oficina.participants.length > 1
                      ? 'Ministrantes'
                      : 'Ministrante'}
                    :
                  </strong>{' '}
                  {oficina.participants.map((participant, participantIndex) => (
                    <span key={participant.person.id}>
                      {participantIndex > 0 && ' e '}
                      {getPersonName(
                        participant.person.academicTitle,
                        participant.person.name,
                      )}
                    </span>
                  ))}
                </p>

                {isHarnessWorkshop ? (
                  <>
                    {(oficina.objective ||
                      oficina.location ||
                      (oficina.resources && oficina.resources.length > 0)) && (
                        <div className="info-destaque">
                          {oficina.objective && (
                            <>
                              <strong>Objetivo Geral:</strong>{' '}
                              {oficina.objective}
                            </>
                          )}

                          {oficina.location && (
                            <>
                              <br />
                              <strong>Local:</strong>{' '}
                              {oficina.location}
                            </>
                          )}

                          {oficina.resources &&
                            oficina.resources.length > 0 && (
                              <>
                                <br />
                                <strong>Recursos:</strong>
                                <br />
                                {oficina.resources.map((resource) => (
                                  <span key={resource}>
                                    • {resource}
                                    <br />
                                  </span>
                                ))}
                              </>
                            )}
                        </div>
                      )}

                    {oficina.description && (
                      <div className="curriculo-box">
                        <strong>Minidescrição:</strong>
                        <br />
                        {oficina.description}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {(oficina.description ||
                      oficina.objective ||
                      oficina.audience ||
                      oficina.prerequisites ||
                      oficina.location ||
                      (oficina.resources &&
                        oficina.resources.length > 0)) && (
                        <div className="info-destaque">
                          {oficina.description && (
                            <>
                              <strong>Descrição:</strong>{' '}
                              {oficina.description}
                            </>
                          )}

                          {oficina.objective && (
                            <>
                              <strong>Objetivo Geral:</strong>{' '}
                              {oficina.objective}
                            </>
                          )}

                          {oficina.audience && (
                            <>
                              <br />
                              <strong>Público-alvo:</strong>{' '}
                              {oficina.audience}
                            </>
                          )}

                          {oficina.prerequisites && (
                            <>
                              <br />
                              <strong>Pré-requisitos:</strong>{' '}
                              {oficina.prerequisites}
                            </>
                          )}

                          {oficina.location && (
                            <>
                              <br />
                              <strong>Local:</strong>{' '}
                              {oficina.location}
                            </>
                          )}

                          {oficina.resources &&
                            oficina.resources.length > 0 && (
                              <>
                                <br />
                                <strong>
                                  Recursos Didáticos Necessários:
                                </strong>{' '}
                                {oficina.resources.join(', ')}
                              </>
                            )}
                        </div>
                      )}
                  </>
                )}

                {oficina.participants.map((participant) =>
                  participant.person.curriculum ? (
                    <div
                      className="curriculo-box"
                      key={participant.person.id}
                    >
                      <strong>
                        {oficina.participants.length > 1
                          ? `${participant.person.name.toUpperCase()}:`
                          : 'Currículo:'}
                      </strong>{' '}
                      {participant.person.curriculum}
                    </div>
                  ) : null,
                )}
              </div>
            </article>
          )
        })}
      </section>
    </main>
  )
}

export default Oficinas