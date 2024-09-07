# 🩸 Sistema de Agendamento de Doação de Sangue

## 📝 Descrição do Projeto
Este projeto tem como objetivo desenvolver um sistema para controlar o processo de agendamento de doações de sangue em uma instituição. O sistema possibilita o gerenciamento de entidades como tipos sanguíneos, pessoas, locais de coleta e doações, permitindo a criação, atualização, exclusão e recuperação de dados por meio de uma API RESTful.

## 📊 Diagrama do Banco de Dados
O diagrama completo do banco de dados pode ser acessado [aqui](https://github.com/fboliveira/CSI477-Sistemas-Web/blob/master/Assignments/Pratices/database-model/CSI606-sistema-doacao-sangue.png). Ele define o modelo utilizado para esta aplicação.

## 📋 Escopo das Atividades

### 🔧 Atividade Prática 1
Nesta atividade, foi desenvolvida uma API RESTful para as seguintes entidades:
- **Cidades**
- **Doações**
- **Estados**
- **Locais de Coleta**
- **Pessoas**
- **Tipos Sanguíneos**

As operações básicas disponíveis para cada entidade são:
- **Inserir (create)**: Adicionar novos registros.
- **Atualizar (update)**: Modificar registros existentes.
- **Excluir (delete)**: Remover registros.
- **Recuperar (read)**: Buscar todos os registros, por ID e por nome (quando aplicável).

### 🛠️ Tecnologias Utilizadas
As tecnologias escolhidas para o desenvolvimento da API incluem:
- **[Node.js](https://nodejs.org/en)**: Plataforma para execução de JavaScript no backend.
- **[Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)**: Linguagem de programação Web.
- **[Sequelize](https://sequelize.org/)**: ORM para gerenciar o banco de dados e definir os models e relações entre as entidades.
- **[MySQL](https://www.mysql.com/)**: Banco de dados relacional utilizado para armazenar as informações do sistema.

### 📂 Estrutura do Projeto
A estrutura do projeto segue a arquitetura de camadas, separando as responsabilidades em **routers**, **controllers** e **models**, de forma a garantir um código organizado e fácil de manter.

#### 🧬 Estrutura de Arquivos
- **common/**: Contém arquivos comuns utilizados em toda a aplicação, como configurações e funções utilitárias. 
- **config/**: Contém as configurações da aplicação, como as credenciais as definições do servidor.
- **routers/**: Contém as rotas da aplicação, mapeando as URLs para os controllers.
- **controllers/**: Contém a lógica de negócio e manipulação dos dados, interagindo com os models e retornando as respostas adequadas para as requisições.
- **database/**: Contém a definição das tabelas e entidades do banco de dados, utilizando o Sequelize para gerenciar a conexeão e sincronização com o banco.
- **server/**: Arquivo principal da aplicação, responsável por inicializar o servidor e definir as rotas.
- **app.js**: Arquivo de inicialização da aplicação, importando o servidor e iniciando a aplicação.

### 📦 Banco de Dados
O banco de dados utilizado para a aplicação é o MySQL, que armazena as informações das entidades do sistema. O Sequelize é utilizado para gerenciar a conexão com o banco e definir os modelos das entidades, facilitando a interação com o banco de dados.

Para configurar o banco de dados, basta informar as credenciais do seu banco de dados em um arquivo `.env` na raiz do projeto, seguindo o exemplo presente no arquivo `.env.example`.


### 🚀 Executando a Aplicação Localmente 
Para executar a aplicação localmente, siga os passos abaixo:

1. Clone o repositório:
```bash
git clone https://github.com/kevin504-max/server.git
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor:
```bash
npm run start
```

4. Acesse a API em `http://localhost:3300`, ou porta definida no arquivo `config/config.json`.
    - Obs.: Por padrão, a aplicação utiliza a porta 3300. E prefixo `/api/` para as rotas.
