import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateTable1694455735896 implements MigrationInterface {

  
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'administrador',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: 'nome',
                    type: 'character varying',
                    isNullable: false
                },
                {
                    name: 'email',
                    type: 'character varying',
                    isNullable: false
                },
                {
                    name: 'senha',
                    type: 'character varying',
                    isNullable: false
                }
            ]
        }));

        await queryRunner.createTable(new Table({
            name: 'carros',
            columns: [
                {
                    name: 'idcarro',
                    type: 'uuid',
                    isPrimary: true,
                    isNullable: false,
                },
                {
                    name: 'nome',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'placa',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'quilometragem',
                    type: 'integer',
                    isNullable: false
                },
                {
                    name: 'ano',
                    type: 'integer',
                    isNullable: false
                },
                {
                    name: 'preco',
                    type: 'integer',
                    isNullable: false
                },
                {
                    name: 'imagem',
                    type: 'varchar',
                    isNullable: true // Isso depende se a imagem é obrigatória ou não
                }
            ]
        }));

        await queryRunner.query(
            `
            INSERT INTO administrador (id, nome, email, senha)
            VALUES ('550e8400-e29b-41d4-a716-446655440001','admin', 'admin@gmail.com', '123456')
            `
        )
        // Veículo 1
        await queryRunner.query(`
        INSERT INTO carros (idcarro, nome, placa, quilometragem, ano, preco, imagem)
        VALUES (
            '550e8400-e29b-41d4-a716-446655440000', 
            'Toyota RAV4', 
            'ABC1234', 
            10000, 
            2021, 
            550, 
            '../../uploads/car-1.jpg'
            )
        `);
        // // Veículo 2
        // await queryRunner.query(`
        // INSERT INTO carros (idcarro, nome, placa, quilometragem, ano, preco, imagem)
        // VALUES (
        //     'exemplo-idcarro-2', 
        //     'Carro Exemplo 2', 
        //     'XYZ5678', 
        //     15000, 
        //     2021, 
        //     60000.00, 
        //     'caminho/para/imagem2.jpg'
        // )
        // `);

        // // Veículo 3
        // await queryRunner.query(`
        // INSERT INTO carros (idcarro, nome, placa, quilometragem, ano, preco, imagem)
        // VALUES (
        //     'exemplo-idcarro-3', 
        //     'Carro Exemplo 3', 
        //     'DEF9876', 
        //     12000, 
        //     2023, 
        //     55000.00, 
        //     'caminho/para/imagem3.jpg'
        // )
        // `);

        // // Veículo 4
        // await queryRunner.query(`
        // INSERT INTO carros (idcarro, nome, placa, quilometragem, ano, preco, imagem)
        // VALUES (
        //     'exemplo-idcarro-4', 
        //     'Carro Exemplo 4', 
        //     'GHI6543', 
        //     20000, 
        //     2020, 
        //     70000.00, 
        //     'caminho/para/imagem4.jpg'
        // )
        // `);
        // // Veículo 5
        // await queryRunner.query(`
        // INSERT INTO carros (idcarro, nome, placa, quilometragem, ano, preco, imagem)
        // VALUES (
        //     'exemplo-idcarro-5', 
        //     'Carro Exemplo 5', 
        //     'JKL3210', 
        //     18000, 
        //     2022, 
        //     65000.00, 
        //     'caminho/para/imagem5.jpg'
        // )
        // `);

        // // Veículo 6
        // await queryRunner.query(`
        // INSERT INTO carros (idcarro, nome, placa, quilometragem, ano, preco, imagem)
        // VALUES (
        //     'exemplo-idcarro-6', 
        //     'Carro Exemplo 6', 
        //     'MNO8765', 
        //     22000, 
        //     2021, 
        //     75000.00, 
        //     'caminho/para/imagem6.jpg'
        // )
        // `);

    }

    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('administrador');
        await queryRunner.dropTable('carros');
    }

}
