# alugueis_carro
Projeto desenvolvido para a disciplina de programação orientada a objeto 2

## Recursos

- Apenas front-end

## Instruções de Instalação e Uso

### Pré-requisitos

- Node.js e npm instalados.

### Frontend (React.js, Bootstrap, TypeScript)
1. Navegue até a pasta frontend:
```bash
cd frontend
```
2. Instale as dependências:
```bash
npm install --legacy-peer-deps
```
3. Configure a api: abra o arquivo api.ts localizado em "src/services/" e em baseURL adicione a URL do servidor em execução. http://localhost:3001 

4. Inicie o aplicativo de desenvolvimento:
```bash
npm start
```
O aplicativo estará acessível em http://localhost:3000

Routes:

+ /auth/signup: Rota para cadastro de novos usuários
+ /auth/login: Rota para autenticação e geração de token JWT
+ /auth/verify: Rota para verificar a autenticidade do token JWT
+ /task/: Rota criar uma nova tarefa do usuario autenticado
+ /task/id: Rota para recuperar, deletar e atualizar tarefa do usuário autenticado
+ /tasks: Rota para listar todas a tarefas e deletar as tarefas concluidas do usuário autenticado

