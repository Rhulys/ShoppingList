# Shopping List App
Este é um aplicativo de lista de compras construído com Next.js no front-end, utilizando Apollo Client para fazer requisições GraphQL, e Apollo Server no back-end com Express e MongoDB. O aplicativo permite que você adicione e remova itens de uma lista de compras, usando um servidor GraphQL para gerenciar os dados.

## Funcionalidades
- Adicionar itens à lista de compras.
- Remover itens da lista.
- Interface gráfica interativa usando React e Tailwind CSS.
- Backend com Apollo Server para gerenciar operações GraphQL.
- Banco de dados MongoDB para armazenar os itens.

## Tecnologias Utilizadas

### Front-end
- Next.js: Estrutura React para renderização no servidor e navegação de páginas.
- Apollo Client: Biblioteca para gerenciar requisições GraphQL no front-end.
- TypeScript: Adiciona tipagem estática ao JavaScript para maior segurança e melhor desenvolvimento.
- Tailwind CSS: Framework de CSS para estilização rápida e responsiva.
- Framer Motion: Biblioteca para animações fluidas e interativas.

### Back-end
- Apollo Server: Servidor GraphQL para gerenciar consultas e mutações.
- Express: Framework Node.js para lidar com rotas e middlewares.
- MongoDB: Banco de dados NoSQL para armazenar os itens da lista de compras.
- Mongoose: Biblioteca para modelar dados do MongoDB em schemas.

## Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

Node.js (versão 16 ou superior)
MongoDB (rodando localmente ou em nuvem)

## Como rodar o projeto

### Clonar o repositório
git clone https://github.com/Rhulys/ShoppingList.git cd listasupermercado

### Instalar as dependências
No diretório do projeto, execute o comando abaixo para instalar as dependências:

npm install

### Configurar o MongoDB
Certifique-se de que o MongoDB esteja rodando localmente ou em um serviço de nuvem (como MongoDB Atlas). Por padrão, o projeto tenta se conectar a um MongoDB local na porta 27017.

Você pode modificar a URI de conexão no arquivo startServer do backend, se necessário:

mongoose.connect("mongodb://localhost:27017/listasupermercado");

### Rodar o servidor Apollo
Abra um terminal para o backend e execute:

npm run server

Este comando irá iniciar o servidor Apollo na porta 4000.

### Rodar o front-end
Abra outro terminal para o front-end e execute:

npm run dev

Isso irá iniciar o servidor de desenvolvimento Next.js na porta 3000. Abra seu navegador e acesse http://localhost:3000.

## API
O servidor Apollo expõe duas mutações principais e uma consulta:

- Query: items: Retorna todos os itens da lista.
- Mutation: addItem(name: String!): Adiciona um item com o nome especificado.
- Mutation: removeItem(id: ID!): Remove um item da lista usando o ID.
- Exemplo de requisição GraphQL:

Consulta para obter todos os itens:
query { 
  items { 
    id 
    name 
   } 
}

Mutações para adicionar e remover itens:
mutation { 
  addItem(name: "Bananas") {
    id 
    name 
  }

removeItem(id: "itemIdAqui") }

## Contribuindo
Se você deseja contribuir com o projeto, sinta-se à vontade para abrir um pull request. Qualquer ajuda é bem-vinda!

## Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
