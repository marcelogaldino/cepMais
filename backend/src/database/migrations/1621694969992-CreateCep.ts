import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCep1621694969992 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "cn_cep",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "cep",
            type: "varchar",
          },
          {
            name: "logradouro",
            type: "varchar",
          },
          {
            name: "complemento",
            type: "varchar",
          },
          {
            name: "bairro",
            type: "varchar",
          },
          {
            name: "localidade",
            type: "varchar",
          },
          {
            name: "uf",
            type: "varchar",
          },
          {
            name: "ibge",
            type: "varchar",
          },
          {
            name: "gia",
            type: "varchar",
          },
          {
            name: "ddd",
            type: "varchar",
          },
          {
            name: "siafi",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("cn_cep");
  }
}
