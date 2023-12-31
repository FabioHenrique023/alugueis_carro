# Aluguel De Carro
Projeto desenvolvido para a disciplina de programação orientada a objetos 2. Ela foi desenvolvida com Express e TypeORM para o backend, e React.js,  Bootstrap, HTML, CSS, para o frontend. Banco de dados utilizado foi o PostgreSQL. 


![captura da tela](/front-end/captura-tela.png)

## Clone do projeto
```bash
https://github.com/FabioHenrique023/alugueis_carro.git
```
## Recursos

- Layout responsivo
- Recuperando informações do banco de dados para visualização na página de produtos

## Instruções de Instalação e Uso

### Pré-requisitos

- Node.js e npm instalados.
- Banco de dados PostgreSQL configurado.

### Backend (Express, TypeORM)

1. Navegue até a pasta `backend`:

```bash
cd backend
```

2. Instale as dependencias:
```bash
npm install --legacy-peer-deps
```
3. Configure o banco de dados: Abra o arquivo data-source.ts e ajuste as configurações de conexão do banco de dados.

4. Configure o cors: abra o index.ts em corsOptions  adicione a url, http://localhost:3000 , em origin. 

5. Execute as migrações para criar as tabelas do banco de dados:
```bash
npm run migration:run
```
6. Inicie o servidor:
```bash
npm run dev
```
O servidor estará em execução em http://localhost:3001

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

### Levantamento de Requisitos

Requisitos do website aluguel de carros:

#### Requisitos Funcionais:

Responsividade:

+ A interface da aplicação deve ser responsiva, garantindo uma boa experiência em dispositivos móveis e desktop.

Usabilidade:

+ A interface deve ser intuitiva e fácil de usar, com feedback visual claro sobre as ações realizadas.

Performance:

+ A aplicação deve ser otimizada para carregamento rápido e eficiência no consumo de recursos

Routes:

+ /home: primeira tela do website
+ /produtos: rota para visualização dos produtos
+ /about: rota para visualização informativa
+ /admin: apenas tela de login