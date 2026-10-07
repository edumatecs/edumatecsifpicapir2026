import type { Activity } from '../domain/activity'
import { people } from './people'

const findPerson = (id: string) => {
    const person = people.find((person) => person.id === id)

    if (!person) {
        throw new Error(`Pessoa não encontrada: ${id}`)
    }

    return person
}

export const activities: Activity[] = [
    {
        id: 'palestra-abertura',
        type: 'palestra',
        title: 'Palestra de Abertura',
        participants: [
            {
                person: findPerson('emanoela-moreira-maciel'),
                role: 'Palestrante de Abertura',
            },
        ],
    },

    {
        id: 'palestra-encerramento',
        type: 'palestra',
        title: 'Palestra de Encerramento',
        participants: [
            {
                person: findPerson('sandoel-de-brito-vieira'),
                role: 'Palestrante de Encerramento',
            },
        ],
        description: 'Tema: OBMEP e a formação de professores(as).',
    },

    {
        id: 'roda-de-conversa-homens-na-matematica',
        type: 'roda-de-conversa',
        title:
            'Homens na Matemática: compartilhando saberes profissionais.',
        participants: [
            {
                person: findPerson('alberto-cunha-alves'),
                role: 'Mediador',
            },
            {
                person: findPerson('alexsandro-de-sousa-santos'),
                role: 'Participante',
            },
            {
                person: findPerson('cicero-dos-santos-teixeira'),
                role: 'Participante',
            },
            {
                person: findPerson('gerson-misael-sousa-oliveira'),
                role: 'Participante',
            },
            {
                person: findPerson('jackson-de-oliveira'),
                role: 'Participante',
            },
        ],
    },

    {
        id: 'minicurso-ray-victor',
        type: 'minicurso',
        title:
            'Da Otimização Clássica à Otimização Multiobjetivo: Teoria, Algoritmos e Aplicações',
        participants: [
            {
                person: findPerson('ray-victor-guimaraes-serra'),
                role: 'Ministrante',
            },
        ],
        vacancies: 40,
        description:
            'A otimização matemática está presente em diversas situações nas quais é necessário tomar decisões buscando utilizar da melhor forma possível os recursos disponíveis. Problemas envolvendo minimização de custos, redução de tempo, maximização de desempenho, alocação de recursos e planejamento são exemplos naturais de problemas de otimização. Em muitos desses problemas, entretanto, não existe apenas um objetivo a ser considerado. Frequentemente, diferentes objetivos precisam ser otimizados simultaneamente e podem ser conflitantes entre si. Essa situação conduz aos chamados problemas de otimização multiobjetivo. O objetivo deste minicurso é apresentar uma introdução à otimização matemática, partindo de conceitos familiares do Cálculo Diferencial e chegando aos fundamentos da otimização multiobjetivo. Ao longo do minicurso serão discutidos aspectos teóricos, geométricos, algorítmicos e computacionais.',
    },

    {
        id: 'minicurso-clayton-robson',
        type: 'minicurso',
        title:
            'Construção de Instrumentos de Pesquisa: do Planejamento ao Campo',
        participants: [
            {
                person: findPerson('clayton-robson-moreira-da-silva'),
                role: 'Ministrante',
            },
        ],
        vacancies: 20,
        objective:
            'Desenvolver conhecimentos teórico-práticos sobre o planejamento, a construção e a aplicação de instrumentos de pesquisa.',
        location:
            'Laboratório (também é possível fazer em sala de aula)',
        resources: ['Computador'],
    },

    {
        id: 'minicurso-francisco-chagas',
        type: 'minicurso',
        title:
            'Uma Iniciação à Modelagem Matemática de Fenômenos Regidos por Equações Diferenciais Ordinárias',
        participants: [
            {
                person: findPerson('francisco-das-chagas-azevedo-dos-reis'),
                role: 'Ministrante',
            },
        ],
        vacancies: 40,
        objective:
            'Desenvolver competências na interpretação de problemas do mundo real em modelos matemáticos formulados por meio de Equações Diferenciais Ordinárias (EDOs). O minicurso visa aprimorar a transposição da teoria analítica para a prática aplicada, permitindo compreender e discutir a formulação e a análise de fenômenos físicos e biológicos tais como taxas de crescimento e decaimento, a Lei do Resfriamento de Newton, problemas de vazão, escoamento de líquidos em reservatórios, além de sistemas mecânicos como o movimento de paraquedas e osciladores harmônicos.',
        audience:
            'Acadêmicos e profissionais de Licenciatura em Matemática, Engenharias, Física, Economia e áreas afins.',
        prerequisites:
            'Conclusão ou domínio dos conteúdos de Cálculo Diferencial e Integral I.',
    },

    {
        id: 'minicurso-pablo-dias',
        type: 'minicurso',
        title: 'Práticas Extensionistas para a Formação Humana Integral',
        participants: [
            {
                person: findPerson('pablo-dias-paiva'),
                role: 'Ministrante',
            },
        ],
        vacancies: 25,
        objective:
            'Compreender as práticas extensionistas como possibilidades de articulação entre ensino, pesquisa e extensão, discutindo princípios e estratégias para o desenvolvimento de ações educativas que aproximem os conhecimentos construídos nos espaços formativos das demandas da realidade social e contribuam para a Formação Humana Integral.',
        location: 'Sala de aula',
    },

    {
        id: 'oficina-tangram-sala-de-aula',
        type: 'oficina',
        title:
            'Do Tangram à Sala de Aula: possibilidades para o ensino e a aprendizagem da Matemática na Educação Básica',
        participants: [
            {
                person: findPerson('irismar-da-silva-carvalho'),
                role: 'Ministrante',
            },
            {
                person: findPerson('silmara-bezerra-paz-carvalho'),
                role: 'Ministrante',
            },
        ],
        vacancies: 30,
        objective:
            'Potencializar o Tangram como recurso pedagógico e investigativo para o ensino e a aprendizagem da Matemática, possibilitando aos participantes desenvolver estratégias de visualização, composição e decomposição de figuras, raciocínio geométrico, resolução de problemas e pensamento matemático, articulando essas experiências à prática docente na Educação Básica.',
    },

    {
        id: 'oficina-hp12c-celular',
        type: 'oficina',
        title: 'Parcelado ou à vista? Domine a HP-12C no celular',
        participants: [
            {
                person: findPerson('guilherme-luiz-de-oliveira-neto'),
                role: 'Ministrante',
            },
        ],
        vacancies: 40,
        description:
            'Neste minicurso, você vai aprender a usar a calculadora HP-12C no celular para comparar compras à vista e parceladas de forma prática. Descubra como decisões simples no dia a dia podem gerar mais economia do que muitos investimentos. Ideal para quem quer gastar melhor e fazer o dinheiro render mais desde já!',
        audience:
            'Professores, técnicos administrativos e estudantes (do Ensino Médio ao Superior) interessados em transformar decisões cotidianas em economia real.',
        location: 'Sala de Aula',
    },

    {
        id: 'oficina-matematica-direitos-humanos',
        type: 'oficina',
        title:
            'Matemática e direitos humanos: transformando situações do cotidiano em problemas matemáticos',
        participants: [
            {
                person: findPerson('rosimeyre-vieira-da-silva'),
                role: 'Ministrante',
            },
            {
                person: findPerson('ana-thatila-de-lima-rodrigues'),
                role: 'Ministrante',
            },
            {
                person: findPerson('antonio-francisco-da-costa-rodrigues'),
                role: 'Ministrante',
            },
            {
                person: findPerson('leticia-soares-chaves'),
                role: 'Ministrante',
            },
        ],
        vacancies: 40,
        objective:
            'Vivenciar e elaborar atividades práticas que articulem conteúdos matemáticos a situações reais relacionadas aos Direitos Humanos, possibilitando aos professores desenvolver propostas de ensino fundamentadas na Educação Matemática Crítica.',
        resources: ['Data show', 'Aparelho de som'],
    },

    {
        id: 'oficina-geometria-calculo-design',
        type: 'oficina',
        title:
            'Da Geometria ao Cálculo: modelagem de formas, curvas e superfícies aplicada ao Design',
        participants: [
            {
                person: findPerson('rimena-canuto-oliveira'),
                role: 'Ministrante',
            },
            {
                person: findPerson('renata-resende-ibiapina-braga'),
                role: 'Ministrante',
            },
        ],
        vacancies: 30,
        description:
            'Mostrar como conceitos geométricos e de cálculo diferencial ajudam a descrever, construir e otimizar formas reais, utilizando exemplos provenientes do design, da modelagem do vestuário e de objetos tridimensionais. O minicurso trabalhará três eixos articulados: Geometria (proporção, escala, coordenadas cartesianas, distâncias, ângulos, áreas, circunferências, curvas e transformações geométricas); Cálculo diferencial (ideia intuitiva de função, taxa de variação, derivada, crescimento/decrescimento, máximos e mínimos e inclinação de curvas); Aplicação prática (construção e análise de uma forma, mostrando como a Matemática interfere no resultado final).',
    },

    {
        id: 'oficina-latex-gpt',
        type: 'oficina',
        title:
            'Preparando aulas de Matemática do Latex ao GPT: um passeio por ferramentas, métodos e objetivos',
        participants: [
            {
                person: findPerson('sergio-adriano-marques-da-silva'),
                role: 'Ministrante',
            },
        ],
        vacancies: 25,
        objective:
            'Discutir e divulgar métodos e recursos para preparar uma aula de Matemática no Ensino Médio.',
        resources: ['Notebook pessoal'],
    },

    {
        id: 'oficina-harness-yourself',
        type: 'oficina',
        title:
            'Harness yourself: como aparelhar modelos de IA para a sua área de atuação',
        participants: [
            {
                person: findPerson('iallen-gabio-de-sousa-santos'),
                role: 'Ministrante',
            },
        ],
        vacancies: 40,
        objective:
            'Capacitar estudantes de Análise e Desenvolvimento de Sistemas, Licenciatura em Matemática, Design de Moda e Administração a compreender o conceito de harness e a aplicá-lo na configuração de modelos de IA/LLM (instruções, contexto, exemplos, ferramentas e critérios de qualidade), de modo a obter resultados mais precisos, consistentemente úteis em tarefas reais de suas áreas de atuação, utilizando a tecnologia de forma crítica, ética e produtiva.',
        description:
            'Você já percebeu que a mesma IA pode dar respostas brilhantes ou frustrantes dependendo de como é usada? A diferença está no harness: o conjunto de instruções, contexto, exemplos, ferramentas e critérios de qualidade que "aparelha" o modelo para uma tarefa real. Nesta oficina prática de 2 a 3 horas, estudantes de ADS, Licenciatura em Matemática, Design de Moda e Administração vão aprender a sair do prompt solto e montar um harness próprio para a sua área, seja apoiando código e testes, planejando aulas e atividades, descrevendo coleções e fichas técnicas ou elaborando relatórios e análises. Você sai com um modelo de trabalho pronto para adaptar ao seu dia a dia acadêmico e profissional, usando a IA de forma mais precisa, crítica e produtiva.',
        location: 'LAB 2 ou LAB 03 (com internet)',
        resources: [
            'Não é obrigatório o uso de máquinas',
            'O aluno pode levar seu notebook ou apenas um bloquinho e caneta para anotar os conceitos fundamentais',
        ],
    },

    {
        id: 'oficina-matematica-alem-dos-numeros',
        type: 'oficina',
        title:
            'Matemática além dos números: lendo, interpretando e transformando o mundo',
        participants: [
            {
                person: findPerson('cleyciane-de-oliveira-melo'),
                role: 'Ministrante',
            },
        ],
        vacancies: 40,
        description:
            'Destina-se a acadêmicos de licenciatura em Matemática que atuarão nos anos finais do Ensino Fundamental (6º ao 9º ano). Com duração de 90 minutos, o objetivo é desenvolver o Letramento Matemático como uma competência essencial para que futuros professores capacitem seus alunos a compreender, interpretar, argumentar e tomar decisões informadas em situações reais, utilizando a Matemática de forma crítica e consciente. A atividade principal será uma situação-problema contextualizada que permite múltiplas estratégias e estimula o pensamento crítico. Recursos didáticos simples e acessíveis serão utilizados, e a avaliação será formativa, focando na participação, raciocínio, argumentação e trabalho colaborativo.',
    },

    {
        id: 'oficina-alfabetizacao-matematica',
        type: 'oficina',
        title:
            'Alfabetização Matemática na Prática: experiências, estratégias e aprendizagens no Ciclo de Alfabetização',
        participants: [
            {
                person: findPerson('pedro-alves-da-silva'),
                role: 'Ministrante',
            },
        ],
        vacancies: 40,
        objective:
            'Promover práticas pedagógicas para o desenvolvimento da Alfabetização Matemática no Ciclo de Alfabetização, por meio de situações significativas que envolvam números, cálculos, resolução de problemas, grandezas, medidas e geometria, em consonância com as orientações do CNCA/PPAIC.',
    },

    {
        id: 'oficina-pesquisa-conhecimento-cientifico',
        type: 'oficina',
        title: 'Aprendendo a pesquisar e produzindo conhecimento científico',
        participants: [
            {
                person: findPerson('joselma-ferreira-lima-e-silva'),
                role: 'Ministrante',
            },
        ],
        vacancies: 40,
        objective:
            'Orientar os participantes nas técnicas e ferramentas essenciais de investigação, para o desenvolvimento de habilidades necessárias para transformar ideias e problemas do cotidiano em projetos e produções científicas estruturadas. Nessa direção serão oportunizadas atividades e reflexões que estimulem o pensamento científico e a autonomia dos participantes na busca por fontes confiáveis, instrumentalizando-os para a construção e a divulgação de conhecimentos acadêmicos relevantes. Assim, esperamos que possam compreender as etapas essenciais do método científico, desenvolvendo habilidades práticas para planejar, executar pesquisas e produzir textos acadêmicos com autonomia.',
        resources: ['Data show', 'Papel A4', 'Fita gomada'],
    },
]