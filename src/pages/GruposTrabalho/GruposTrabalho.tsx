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
            <section className="grupos-trabalho">
                <h2>Grupos de Trabalho (GTs)</h2>

                <a
                    className="template-download"
                    href="/edumatecsifpicapir2026/template-comunicacao-oral-2026.pptx"
                    download
                >
                    Baixar template oficial<br />
                    (Para a apresentação oral)
                </a>

                {workGroups.map((group) => (
                    <div key={group.id}>
                        <h2>
                            {group.id.toUpperCase()}: {group.title}
                        </h2>

                        <p className="email-gt">
                            <strong>E-mail:</strong>{' '}
                            <a href={`mailto:${group.email}`}>
                                {group.email}
                            </a>
                        </p>

                        {group.coordinators.map((coordinator) => {
                            const person = people.find(
                                (person) =>
                                    `${person.academicTitle ?? ''} ${person.name}`.trim() === coordinator,
                            )

                            const imagePath = person?.image
                                ? `../../assets/images/professores/${person.image}`
                                : null

                            const image = imagePath
                                ? professorImages[imagePath]
                                : undefined

                            return (
                                <article
                                    className="card-conteudo"
                                    key={coordinator}
                                >
                                    <ProfessorPhoto
                                        src={image}
                                        alt={coordinator}
                                    />

                                    <div className="card-info-detalhada">
                                        <h3>{coordinator}</h3>

                                        <p>
                                            <strong>Coordenação do GT</strong>
                                        </p>

                                        {person?.curriculum && (
                                            <div className="curriculo-box">
                                                <strong>Currículo:</strong>{' '}
                                                {person.curriculum}
                                            </div>
                                        )}
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                ))}
            </section>
        </main>
    )
}

export default GruposTrabalho