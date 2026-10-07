import { activities } from '../../data/activities'

import emanoelaImage from '../../assets/images/professores/emanoela-moreira-maciel.webp'
import sandoelImage from '../../assets/images/professores/sandoel-de-brito-vieira.webp'
import albertoImage from '../../assets/images/professores/alberto-cunha-alves.webp'
import alexsandroImage from '../../assets/images/professores/alexsandro-de-sousa-santos.webp'
import ciceroImage from '../../assets/images/professores/cicero-dos-santos-teixeira.webp'
import gersonImage from '../../assets/images/professores/gerson-misael-sousa-oliveira.webp'
import jacksonImage from '../../assets/images/professores/jackson-de-oliveira.webp'

import ProfessorPhoto from '../../components/ProfessorPhoto'

import './Palestrantes.css'


const personImages: Record<string, string> = {
  'emanoela-moreira-maciel': emanoelaImage,
  'sandoel-de-brito-vieira': sandoelImage,
  'alberto-cunha-alves': albertoImage,
  'alexsandro-de-sousa-santos': alexsandroImage,
  'cicero-dos-santos-teixeira': ciceroImage,
  'gerson-misael-sousa-oliveira': gersonImage,
  'jackson-de-oliveira': jacksonImage,
}

function getActivity(id: string) {
  const activity = activities.find((item) => item.id === id)

  if (!activity) {
    throw new Error(`Atividade não encontrada: ${id}`)
  }

  return activity
}

function getPersonName(
  academicTitle: string | undefined,
  name: string,
): string {
  return academicTitle ? `${academicTitle} ${name}` : name
}

function Palestrantes() {
  const palestraAbertura = getActivity('palestra-abertura')
  const palestraEncerramento = getActivity('palestra-encerramento')
  const rodaDeConversa = getActivity(
    'roda-de-conversa-homens-na-matematica',
  )

  return (
    <main>
      <section className="palestrantes">
        <h2>Palestrantes e Rodas de Conversa</h2>

        {palestraAbertura.participants.map((participant) => {
          const person = participant.person
          const image = personImages[person.id]

          return (
            <article className="card-conteudo" key={person.id}>
              <ProfessorPhoto
                src={image}
                alt={getPersonName(person.academicTitle, person.name)}
              />

              <div className="card-info-detalhada">
                <h3>
                  {getPersonName(person.academicTitle, person.name)}
                </h3>

                <p>
                  <strong>{participant.role}</strong>
                </p>

                {person.curriculum && (
                  <div className="curriculo-box">
                    <strong>Currículo:</strong> {person.curriculum}
                  </div>
                )}
              </div>
            </article>
          )
        })}

        {palestraEncerramento.participants.map((participant) => {
          const person = participant.person
          const image = personImages[person.id]
          const theme = palestraEncerramento.description?.replace(
            'Tema: ',
            '',
          )

          return (
            <article className="card-conteudo" key={person.id}>
              <ProfessorPhoto
                src={image}
                alt={getPersonName(person.academicTitle, person.name)}
              />

              <div className="card-info-detalhada">
                <h3>
                  {getPersonName(person.academicTitle, person.name)}
                </h3>

                <p>
                  <strong>{participant.role}:</strong> {theme}
                </p>

                {person.curriculum && (
                  <div className="curriculo-box">
                    <strong>Currículo:</strong> {person.curriculum}
                  </div>
                )}
              </div>
            </article>
          )
        })}

        <h2 className="titulo-roda">
          Roda de Conversa: Homens na Matemática
        </h2>

        {rodaDeConversa.participants.map((participant) => {
          const person = participant.person
          const image = personImages[person.id]

          return (
            <article className="card-conteudo" key={person.id}>
              <ProfessorPhoto
                src={image}
                alt={getPersonName(person.academicTitle, person.name)}
              />

              <div className="card-info-detalhada">
                <h3>
                  {getPersonName(person.academicTitle, person.name)}
                </h3>

                <p>
                  <strong>{participant.role} da Roda de Conversa</strong>
                </p>

                <div className="info-destaque">
                  Homens na Matemática: compartilhando saberes profissionais e da formação.
                </div>

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

export default Palestrantes