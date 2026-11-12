import type { Book } from '../domain/book'

import capaLivro from '../assets/images/lancamento-livros/capa-a-matematica-nos-anos-iniciais-do-ensino-fundamental.webp'
import qrcodeLivro from '../assets/images/lancamento-livros/qrcode-a-matematica-nos-anos-iniciais-do-ensino-fundamental.webp'
import capaLivro2 from '../assets/images/lancamento-livros/capa-percursos-que-geram-resultados.webp'
import qrcodeLivro2 from '../assets/images/lancamento-livros/qrcode-percursos-que-geram-resultados.webp'


export const books: Book[] = [
    {
        id: 'matematica-anos-iniciais',
        title: 'A Matemática nos Anos Iniciais do Ensino Fundamental',
        subtitle: 'Dimensões Estruturantes da Prática Educativa',
        synopsis:
            'Ensinar Matemática nos anos iniciais do Ensino Fundamental vai muito além da transmissão de conteúdos. Exige compreender a complexidade da prática educativa, reconhecer os desafios da formação docente e construir estratégias que promovam uma aprendizagem significativa, crítica e contextualizada. Nessa obra você leitor é convidado a refletir sobre as dimensões estruturantes que sustentam o ensino e a aprendizagem da Matemática, articulando fundamentos teóricos, evidências produzidas em pesquisa de campo e experiências vividas na escola pública. Ao dar voz a professores, gestores e coordenadores pedagógicos, a autora revela como a formação continuada, o planejamento, as concepções pedagógicas e o trabalho colaborativo podem transformar a prática docente e fortalecer a aprendizagem dos estudantes. Com uma abordagem fundamentada na Educação Matemática e na valorização da escola como espaço de construção do conhecimento, este livro oferece subsídios para professores, formadores, gestores, pesquisadores e estudantes de licenciatura que buscam compreender e aprimorar o ensino da Matemática nos anos iniciais. Mais do que analisar desafios, esta obra apresenta caminhos para transformar a prática educativa em uma experiência reflexiva, inovadora e comprometida com a aprendizagem, a equidade e a qualidade da educação pública.',
        cover: capaLivro,
        qrCode: qrcodeLivro,
        purchaseUrl:
            'https://www.amazon.com.br/Matem%C3%A1tica-Anos-Iniciais-Ensino-Fundamental/dp/8547350608?linkId=8c3a61939d0122f5c6a50f23901ffc5a&btn_type=ss&btn_ref=srctok-2948c8335fae7f24',
        authorId: 'silmara-bezerra-paz-carvalho',
    },
    {
        id: 'percursos-que-geram-resultados',
        title: 'PERCURSOS QUE GERAM RESULTADOS',
        subtitle: 'Ciclos de Atividade de Leitura',
        synopsis:
            'O livro é resultado do produto educacional da dissertação de mestrado intitulada "Implicações da Prática Docente na Melhoria da Competência Leitora no Ensino Fundamental no Município de Prata do Piauí" e reflete uma preocupação com a aplicação prática, organizando seus capítulos de forma a explorar diferentes gêneros textuais e suas funcionalidades, integrando aspectos teóricos e atividades práticas alinhadas aos eixos cognitivos das matrizes de referência das avaliações externas, mas com enfoque ampliado na compreensão e interpretação textual. Outro destaque é a utilização de gêneros variados — como histórias em quadrinhos, textos informativos e contos — para contextualizar o ensino da leitura, promovendo uma experiência rica e diversificada, com a proposta de que esses percursos didáticos contribuam não apenas para a melhoria da proficiência leitora, mas também para o fortalecimento do papel da escola como espaço formador de leitores competentes. Assim, o livro apresenta-se como uma ferramenta pedagógica essencial para professores que enfrentam contextos de dificuldades na leitura, com uma abordagem inovadora fundamentada na Linguística Sistêmico-Funcional (LSF) e nos princípios da Escola de Sydney, buscando transformar o ensino da leitura em um processo significativo que promova tanto o desenvolvimento acadêmico quanto o prazer pela leitura.',
        cover: capaLivro2,
        qrCode: qrcodeLivro2,
        purchaseUrl: 'https://loja.editoradialetica.com/humanidades/percursos-que-geram-resultados-ciclos-de-atividades-de-leitura',
        authorId: 'jose-nilton-da-silva',
    },
]
