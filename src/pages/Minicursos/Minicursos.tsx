import { activities } from '../../data/activities'

import rayVictorImage from '../../assets/images/professores/ray-victor-guimaraes-serra.webp'
import claytonImage from '../../assets/images/professores/clayton-robson-moreira-da-silva.webp'
import franciscoImage from '../../assets/images/professores/francisco-das-chagas-azevedo-dos-reis.webp'
import pabloImage from '../../assets/images/professores/pablo-dias-paiva.webp'

import './Minicursos.css'


const minicursoImages: Record<string, string> = {
  'minicurso-ray-victor': rayVictorImage,
  'minicurso-clayton-robson': claytonImage,
  'minicurso-francisco-chagas': franciscoImage,
  'minicurso-pablo-dias': pabloImage,
}

function getPersonName(
  academicTitle: string | undefined,
  name: string,
): string {
  return academicTitle ? `${academicTitle} ${name}` : name
}

function Minicursos() {
  const minicursos = activities.filter(
    (activity) => activity.type === 'minicurso',
  )

  return (
    <main>
      <section className="minicursos">
        <h2>Minicursos (10 de Dezembro - 20h às 22h)</h2>

        {minicursos.map((minicurso, index) => {
          const participant = minicurso.participants[0]
          const person = participant.person
          const image = minicursoImages[minicurso.id]

          return (
            <article className="card-conteudo" key={minicurso.id}>
              <div className="card-foto-espaco">
                {image && (
                  <img
                    src={image}
                    alt={getPersonName(person.academicTitle, person.name)}
                  />
                )}
              </div>

              <div className="card-info-detalhada">
                <h3>
                  Minicurso {index + 1}: {minicurso.title}
                </h3>

                {minicurso.vacancies && (
                  <h4>({minicurso.vacancies} vagas)</h4>
                )}

                <p>
                  <strong>{participant.role}:</strong>{' '}
                  {getPersonName(person.academicTitle, person.name)}
                </p>

                {(minicurso.description ||
                  minicurso.objective ||
                  minicurso.audience ||
                  minicurso.prerequisites ||
                  minicurso.location ||
                  (minicurso.resources && minicurso.resources.length > 0)) && (
                    <div className="info-destaque">
                      {minicurso.description && (
                        <>
                          <strong>Resumo/Objetivo:</strong>{' '}
                          {minicurso.description}
                        </>
                      )}

                      {minicurso.objective && (
                        <>
                          <strong>Objetivo geral:</strong>{' '}
                          {minicurso.objective}
                        </>
                      )}

                      {minicurso.audience && (
                        <>
                          <br />
                          <strong>Público-alvo:</strong>{' '}
                          {minicurso.audience}
                        </>
                      )}

                      {minicurso.prerequisites && (
                        <>
                          <br />
                          <strong>Pré-requisitos:</strong>{' '}
                          {minicurso.prerequisites}
                        </>
                      )}

                      {minicurso.location && (
                        <>
                          <br />
                          <strong>Local:</strong>{' '}
                          {minicurso.location}
                        </>
                      )}

                      {minicurso.resources &&
                        minicurso.resources.length > 0 && (
                          <>
                            <br />
                            <strong>Recursos didáticos necessários:</strong>{' '}
                            {minicurso.resources.join(', ')}
                          </>
                        )}
                    </div>
                  )}

                {person.curriculum && (
                  <div className="curriculo-box">
                    <strong>Currículo:</strong> {person.curriculum}
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </section>
    </main>
  )
}

export default Minicursos