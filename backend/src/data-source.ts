import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    url:"postgresql://postgres:123456@localhost:5432/aluguel_carro",
    type: "postgres",
    port: 5432,
    synchronize: true,
    logging: true,
    entities: [
        __dirname + "/entity/*.{ts,js}"
    ],
    migrations: [__dirname + "/database/migrations/*.{ts,js}"],
    subscribers: [],
})

AppDataSource.initialize().then(() => {
    console.log("Sucesso: inicializado");
}).catch(err => {
    console.error("Erro durante a inicialização", err);
})