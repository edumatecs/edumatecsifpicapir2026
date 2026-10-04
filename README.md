# EDUMATEC'S IFPI Campus Piripiri

Aplicação web do EDUMATEC'S, desenvolvida para o IFPI Campus Piripiri.

O projeto foi desenvolvido em React + TypeScript e organiza as páginas do evento, programação, palestrantes, minicursos, oficinas, memórias de edições anteriores, além dos fluxos de inscrição e pedido de camisas.

## Tecnologias

- React
- TypeScript
- Vite
- React Router
- ESLint
- CSS

## Desenvolvimento

Instale as dependências:

```bash
npm install
````

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação ficará disponível no endereço informado pelo Vite.

## Validação

Para verificar o código com ESLint:

```bash
npm run lint
```

Para gerar o build de produção:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

## Estrutura

```text
src/
├── components/   # Componentes reutilizáveis
├── data/         # Dados estáticos do evento
├── domain/       # Tipos e modelos do domínio
├── pages/        # Páginas da aplicação
├── services/     # Integrações externas
├── assets/       # Imagens e outros recursos
└── styles/       # Estilos globais
```

## Integrações

Os formulários de inscrição e pedido de camisas utilizam serviços externos para registrar os dados enviados.

As integrações estão concentradas em:

```text
src/services/
```

## Build

O projeto utiliza o Vite para gerar a versão de produção em:

```text
dist/
```