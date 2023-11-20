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

        await queryRunner.query(
            `
            INSERT INTO administrador (id, nome, email, senha)
            VALUES ('70cba0d0-876c-11ee-b9d1-0242ac120002' ,'admin', 'admin@gmail.com', '123456')
            `
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('administrador');

    }

}
