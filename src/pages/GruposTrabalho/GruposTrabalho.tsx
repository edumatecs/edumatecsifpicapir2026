import { workGroups } from '../../data/work-groups'
import './GruposTrabalho.css'

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

                        <ul>
                            {group.coordinators.map((coordinator) => (
                                <li key={coordinator}>{coordinator}</li>
                            ))}
                        </ul>

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