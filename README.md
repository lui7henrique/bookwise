# BookWise 

Plataforma Full-Stack de Avaliação de Livros

Sobre • Recursos • Layout • Como Funciona • Pilha Tecnológica • Autor

## Sobre
O Book Wise é uma plataforma dedicada a amantes de livros, onde você pode acessar uma vasta coleção de livros de diferentes gêneros previamente cadastrados. Além disso, você também tem a oportunidade de contribuir com suas próprias avaliações após fazer login na aplicação usando suas contas do Google ou GitHub.

## Features
- Autenticação social com Google e GitHub
- Listagem de livros com filtros por categorias
- Avaliações e comentários sobre livros
- Pesquisa por nomes de livros.

## Layout
O layout da aplicação está disponível no Figma:
[Link para o Layout no Figma](https://www.figma.com/file/VzEy348nnGTa5T0EmYDNZR/BookWise--%E2%80%A2-Desafio-React-(Copy)?type=design&node-id=1%3A17&mode=design&t=AbwxZ45cmC4VrU32-1)

## Como Funciona
### Pré-requisitos
Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina: Git, Node.js e Docker para executar um contêiner com o MySQL. Além disso, é bom ter um editor de código como o VSCode para trabalhar com o código.

### Executando o App
1. Crie um arquivo `.env` para adicionar as variáveis de ambiente. Deve se parecer com isso:

   ```
   # URL do banco de dados local do MySQL
   DATABASE_URL='mysql://.....'

   # Configurações do NextAuth e provedores

   # URL do projeto
   NEXTAUTH_URL="http://localhost:3000"
   # String aleatória
   NEXTAUTH_SECRET="dawodkiwdjufdkjnfueisfhisjfhsieuhyfhyfthfdgr"

   # Siga as etapas na documentação do NextAuth para configurar os provedores.

   # Provedor Google
   GOOGLE_CLIENT_ID="................"
   GOOGLE_CLIENT_SECRET=".............."

   # Configurações do Provedor GitHub
   GITHUB_CLIENT_ID="..................."
   GITHUB_CLIENT_SECRET="................."
   ```

2. Agora execute o projeto...

   ```
   # Clone este repositório
   $ git clone https://github.com/Artur-Poffo/Book-Wise-Ignite.git

   # Acesse a pasta do projeto via terminal
   $ cd Book-Wise-Ignite

   # Instale as dependências
   $ npm install

   # Inicie a aplicação no modo de desenvolvimento
   $ npm run dev

   # O servidor iniciará na porta: 3000 - acesse http://localhost:3000
   ```

## Technologies

- Next.js
- TypeScript
- Prisma ORM
- Axios
- @phosphor-icons
- radix-ui
- TailwindCSS
- react-query
- NextAuth

## Author

Luiz Henrique - Software Engineer

[Linkedin](https://www.linkedin.com/in/luiz-henrique7/) | [E-mail](mailto:7henrique18@gmail.com)
