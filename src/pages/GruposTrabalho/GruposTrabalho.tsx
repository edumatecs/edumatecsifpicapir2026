import { workGroups } from '../../data/work-groups'
import { people } from '../../data/people'
import ProfessorPhoto from '../../components/ProfessorPhoto'
import './GruposTrabalho.css'


const professorImages = import.meta.glob(
    '../../assets/images/professores/*.webp',
    {
        eager: true,
        import: 'default',
        query: '?url',
    },
)


function GruposTrabalho() {
    return (
        <main>
            <section>
                <h1>Grupos de Trabalho (GTs)</h1>

                <a
                    className="template-download"
                    href="/edumatecsifpicapir2026/template-comunicacao-oral-2026.pptx"
                    download
                >
                    Baixar template oficial<br />
                    (Para a apresentação oral)
                </a>

                {workGroups.map((group) => (
                    <article key={group.id}>
                        <h2>
                            {group.id.toUpperCase()}: {group.title}
                        </h2>

                        <h3>Coordenação</h3>

                        <div className="coordinators">
                            {group.coordinators.map((coordinator) => {
                                const person = people.find(
                                    (person) =>
                                        `${person.academicTitle ?? ''} ${person.name}`.trim() === coordinator
                                )

                                const imagePath = person?.image
                                    ? `../../assets/images/professores/${person.image}`
                                    : null

                                const image = imagePath
                                    ? professorImages[imagePath]
                                    : undefined

                                return (
                                    <div className="coordinator" key={coordinator}>
                                        {image && (
                                            <ProfessorPhoto
                                                src={image}
                                                alt={coordinator}
                                            />
                                        )}

                                        <div className="coordinator-info">
                                            <h3>
                                                {coordinator}
                                            </h3>

                                            <p>
                                                <strong>Coordenação</strong>
                                            </p>

                                            {person?.curriculum && (
                                                <div className="curriculo-box">
                                                    <strong>Currículo:</strong> {person.curriculum}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <p>
                            E-mail:{' '}
                            <a href={`mailto:${group.email}`}>
                                {group.email}
                            </a>
                        </p>
                    </article>
                ))}
            </section>
        </main>
    )
}

export default GruposTrabalho