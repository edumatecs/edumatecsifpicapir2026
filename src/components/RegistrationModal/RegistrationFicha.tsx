import { useState } from 'react'

function RegistrationFicha() {
    const [hasSpecialNeed, setHasSpecialNeed] = useState(false)
    const [hasSubmission, setHasSubmission] = useState(false)
    const [copiedEmail, setCopiedEmail] = useState<string | null>(null)

    const formatCpf = (value: string): string => {
        const numbers = value.replace(/\D/g, '').slice(0, 11)

        if (numbers.length <= 3) {
            return numbers
        }

        if (numbers.length <= 6) {
            return `${numbers.slice(0, 3)}.${numbers.slice(3)}`
        }

        if (numbers.length <= 9) {
            return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`
        }

        return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9)}`
    }

    const formatPhone = (value: string): string => {
        const numbers = value.replace(/\D/g, '').slice(0, 11)

        if (numbers.length <= 2) {
            return numbers
        }

        if (numbers.length <= 7) {
            return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
        }

        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
    }

    const copyEmail = async (email: string) => {
        await navigator.clipboard.writeText(email)

        setCopiedEmail(email)

        setTimeout(() => {
            setCopiedEmail(null)
        }, 2000)
    }

    return (
        <>
            <section className="registration-section">
                <h3 className="registration-section-title">
                    Dados pessoais
                </h3>

                <div className="registration-form-group">
                    <label htmlFor="insc_nome">
                        Nome Completo*
                    </label>

                    <input
                        type="text"
                        id="insc_nome"
                        name="nome"
                        required
                        placeholder="Digite seu nome completo"
                    />
                </div>

                <div className="registration-form-group">
                    <label htmlFor="insc_cpf">
                        CPF*
                    </label>

                    <input
                        type="text"
                        id="insc_cpf"
                        name="cpf"
                        required
                        placeholder="000.000.000-00"
                        maxLength={14}
                        onChange={(event) => {
                            event.currentTarget.value = formatCpf(
                                event.currentTarget.value,
                            )
                        }}
                    />
                </div>

                <div className="registration-form-group">
                    <label htmlFor="insc_telefone">
                        Telefone (WhatsApp)*
                    </label>

                    <input
                        type="text"
                        id="insc_telefone"
                        name="telefone"
                        required
                        placeholder="(86) 90000-0000"
                        maxLength={15}
                        onChange={(event) => {
                            event.currentTarget.value = formatPhone(
                                event.currentTarget.value,
                            )
                        }}
                    />
                </div>

                <div className="registration-form-group">
                    <label htmlFor="insc_cidade">
                        Cidade*
                    </label>

                    <input
                        type="text"
                        id="insc_cidade"
                        name="cidade"
                        required
                        placeholder="Piripiri - PI"
                    />
                </div>
            </section>

            <section className="registration-section">
                <h3 className="registration-section-title">
                    Estrutura e acessibilidade
                </h3>

                <div className="registration-form-group">
                    <label>
                        Vai precisar de alojamento no campus?*
                    </label>

                    <div className="registration-radio-group">
                        <label className="registration-radio-card">
                            <input
                                type="radio"
                                name="alojamento"
                                value="Sim"
                                required
                            />
                            <span>Sim</span>
                        </label>

                        <label className="registration-radio-card">
                            <input
                                type="radio"
                                name="alojamento"
                                value="Não"
                                defaultChecked
                            />
                            <span>Não</span>
                        </label>
                    </div>
                </div>

                <div className="registration-form-group">
                    <label>
                        Possui alguma necessidade específica?*
                    </label>

                    <div className="registration-radio-group">
                        <label className="registration-radio-card">
                            <input
                                type="radio"
                                name="necessidade"
                                value="Sim"
                                required
                                onChange={() => setHasSpecialNeed(true)}
                            />
                            <span>Sim</span>
                        </label>

                        <label className="registration-radio-card">
                            <input
                                type="radio"
                                name="necessidade"
                                value="Não"
                                defaultChecked
                                onChange={() => setHasSpecialNeed(false)}
                            />
                            <span>Não</span>
                        </label>
                    </div>
                </div>

                {hasSpecialNeed && (
                    <div className="registration-form-group">
                        <label htmlFor="desc_necessidade">
                            Qual a sua necessidade específica?*
                        </label>

                        <input
                            type="text"
                            id="desc_necessidade"
                            name="desc_necessidade"
                            required
                            placeholder="Descreva aqui..."
                        />
                    </div>
                )}
            </section>

            <section className="registration-section">
                <h3 className="registration-section-title">
                    Submissão de trabalhos
                </h3>

                <div className="registration-form-group">
                    <label>
                        Deseja submeter um trabalho?*
                    </label>

                    <div className="registration-radio-group">
                        <label className="registration-radio-card">
                            <input
                                type="radio"
                                name="submissao"
                                value="Sim"
                                required
                                onChange={() => setHasSubmission(true)}
                            />
                            <span>Sim</span>
                        </label>

                        <label className="registration-radio-card">
                            <input
                                type="radio"
                                name="submissao"
                                value="Não"
                                defaultChecked
                                onChange={() => setHasSubmission(false)}
                            />
                            <span>Não</span>
                        </label>
                    </div>
                </div>

                {hasSubmission && (
                    <div className="registration-groups">
                        <div className="registration-groups-header">
                            <strong>
                                Escolha o Grupo de Trabalho
                            </strong>

                            <span>
                                Selecione o GT relacionado ao seu trabalho.
                            </span>
                        </div>

                        <div className="registration-gt-list">
                            <article className="registration-gt-card">
                                <strong>
                                    GT1 - Educação Matemática e múltiplas linguagens
                                </strong>

                                <div className="registration-gt-email">
                                    <code>
                                        gt1matematica.capir@ifpi.edu.br
                                    </code>

                                    <button
                                        type="button"
                                        className="registration-gt-copy-button"
                                        onClick={() =>
                                            copyEmail(
                                                'gt1matematica.capir@ifpi.edu.br',
                                            )
                                        }
                                    >
                                        {copiedEmail ===
                                        'gt1matematica.capir@ifpi.edu.br'
                                            ? 'Copiado!'
                                            : 'Copiar'}
                                    </button>
                                </div>
                            </article>

                            <article className="registration-gt-card">
                                <strong>
                                    GT2 - Formação, trabalho docente e Didática
                                </strong>

                                <div className="registration-gt-email">
                                    <code>
                                        gt2educacao.capir@ifpi.edu.br
                                    </code>

                                    <button
                                        type="button"
                                        className="registration-gt-copy-button"
                                        onClick={() =>
                                            copyEmail(
                                                'gt2educacao.capir@ifpi.edu.br',
                                            )
                                        }
                                    >
                                        {copiedEmail ===
                                        'gt2educacao.capir@ifpi.edu.br'
                                            ? 'Copiado!'
                                            : 'Copiar'}
                                    </button>
                                </div>
                            </article>

                            <article className="registration-gt-card">
                                <strong>
                                    GT3 - Tecnologias em contextos diversos
                                </strong>

                                <div className="registration-gt-email">
                                    <code>
                                        gt3tecnologias.capir@ifpi.edu.br
                                    </code>

                                    <button
                                        type="button"
                                        className="registration-gt-copy-button"
                                        onClick={() =>
                                            copyEmail(
                                                'gt3tecnologias.capir@ifpi.edu.br',
                                            )
                                        }
                                    >
                                        {copiedEmail ===
                                        'gt3tecnologias.capir@ifpi.edu.br'
                                            ? 'Copiado!'
                                            : 'Copiar'}
                                    </button>
                                </div>
                            </article>

                            <article className="registration-gt-card">
                                <strong>
                                    GT4 - Interdisciplinaridade e Interculturalidade
                                </strong>

                                <div className="registration-gt-email">
                                    <code>
                                        gt4interdisciplinar.capir@ifpi.edu.br
                                    </code>

                                    <button
                                        type="button"
                                        className="registration-gt-copy-button"
                                        onClick={() =>
                                            copyEmail(
                                                'gt4interdisciplinar.capir@ifpi.edu.br',
                                            )
                                        }
                                    >
                                        {copiedEmail ===
                                        'gt4interdisciplinar.capir@ifpi.edu.br'
                                            ? 'Copiado!'
                                            : 'Copiar'}
                                    </button>
                                </div>
                            </article>

                            <article className="registration-gt-card">
                                <strong>
                                    GT5 - Ensino, Pesquisa e Extensão
                                </strong>

                                <div className="registration-gt-email">
                                    <code>
                                        gt5extensao.capir@ifpi.edu.br
                                    </code>

                                    <button
                                        type="button"
                                        className="registration-gt-copy-button"
                                        onClick={() =>
                                            copyEmail(
                                                'gt5extensao.capir@ifpi.edu.br',
                                            )
                                        }
                                    >
                                        {copiedEmail ===
                                        'gt5extensao.capir@ifpi.edu.br'
                                            ? 'Copiado!'
                                            : 'Copiar'}
                                    </button>
                                </div>
                            </article>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}

export default RegistrationFicha