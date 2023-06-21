import { MigrationInterface, QueryRunner } from "typeorm";

export class MigracionCliente1687365744913 implements MigrationInterface {
    name = 'MigracionCliente1687365744913'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE OR REPLACE TABLE \`CLIENTE\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE OR REPLACE TABLE \`USUARIO\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(255) NOT NULL, \`clave\` varchar(255) NOT NULL, \`fechaCreacion\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`USUARIO\``);
        await queryRunner.query(`DROP TABLE \`CLIENTE\``);
    }

}
