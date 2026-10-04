import type { ScheduleDay } from '../domain/schedule'

export const schedule: ScheduleDay[] = [
  {
    date: '2026-12-09',
    label: '09 de Dezembro (Quarta-feira - Abertura)',
    items: [
      {
        id: '2026-12-09-credenciamento',
        date: '2026-12-09',
        time: '17h00',
        title: 'Credenciamento',
      },
      {
        id: '2026-12-09-jantar',
        date: '2026-12-09',
        time: '18h00',
        title: 'Jantar',
      },
      {
        id: '2026-12-09-acolhida',
        date: '2026-12-09',
        time: '18h30',
        title: 'Acolhida - Aperitivo Cultural',
        description: 'Dj. Lipy',
      },
      {
        id: '2026-12-09-dispositivo-honra',
        date: '2026-12-09',
        time: '19h30',
        title: 'Dispositivo de Honra',
      },
      {
        id: '2026-12-09-palestra-abertura',
        date: '2026-12-09',
        time: '20h00',
        activities: [
          {
            activityId: 'palestra-abertura',
          },
        ],
      },
      {
        id: '2026-12-09-lancamento-livro',
        date: '2026-12-09',
        time: '21h00',
        title: 'Lançamento de Livro',
      },
      {
        id: '2026-12-09-confraternizacao',
        date: '2026-12-09',
        time: '21h20',
        title: 'Confraternização',
        description: 'Dj. Lipy',
      },
    ],
  },

  {
    date: '2026-12-10',
    label: '10 de dezembro (Quinta-feira)',
    items: [
      {
        id: '2026-12-10-manha',
        date: '2026-12-10',
        time: 'Manhã',
        title: 'Livre',
        description: 'Sugestões no Guia Turístico de Piripiri',
      },
      {
        id: '2026-12-10-oficinas-1-2-3',
        date: '2026-12-10',
        time: '14h00 às 16h00',
        activities: [
          {
            activityId: 'oficina-tangram-sala-de-aula',
            label: '1',
          },
          {
            activityId: 'oficina-hp12c-celular',
            label: '2',
          },
          {
            activityId: 'oficina-matematica-direitos-humanos',
            label: '3',
          },
        ],
      },
      {
        id: '2026-12-10-oficinas-4-5-6',
        date: '2026-12-10',
        time: '16h00 às 18h00',
        activities: [
          {
            activityId: 'oficina-geometria-calculo-design',
            label: '4',
          },
          {
            activityId: 'oficina-latex-gpt',
            label: '5',
          },
          {
            activityId: 'oficina-harness-yourself',
            label: '6',
          },
        ],
      },
      {
        id: '2026-12-10-oficinas-7-8-9',
        date: '2026-12-10',
        time: '18h00 às 20h00',
        activities: [
          {
            activityId: 'oficina-matematica-alem-dos-numeros',
            label: '7',
          },
          {
            activityId: 'oficina-alfabetizacao-matematica',
            label: '8',
          },
          {
            activityId: 'oficina-pesquisa-conhecimento-cientifico',
            label: '9',
          },
        ],
      },
      {
        id: '2026-12-10-minicursos-1-2-3-4',
        date: '2026-12-10',
        time: '20h00 às 22h00',
        activities: [
          {
            activityId: 'minicurso-ray-victor',
            label: '1',
          },
          {
            activityId: 'minicurso-clayton-robson',
            label: '2',
          },
          {
            activityId: 'minicurso-francisco-chagas',
            label: '3',
          },
          {
            activityId: 'minicurso-pablo-dias',
            label: '4',
          },
        ],
      },
    ],
  },

  {
    date: '2026-12-11',
    label: '11 de dezembro (Sexta-feira)',
    items: [
      {
        id: '2026-12-11-circuito-matematico',
        date: '2026-12-11',
        time: '09h00 às 12h00',
        title: 'Espaço Recreativo: Circuito Matemático!',
        description: 'Pibidianos e GTs',
      },
      {
        id: '2026-12-11-palestra-encerramento',
        date: '2026-12-11',
        time: '13h30 às 15h00',
        activities: [
          {
            activityId: 'palestra-encerramento',
          },
        ],
      },
      {
        id: '2026-12-11-roda-conversa',
        date: '2026-12-11',
        time: '15h00 às 17h00',
        activities: [
          {
            activityId: 'roda-de-conversa-homens-na-matematica',
          },
        ],
      },
      {
        id: '2026-12-11-encerramento',
        date: '2026-12-11',
        time: '17h00',
        title: 'Encerramento',
      },
    ],
  },
]