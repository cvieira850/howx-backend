import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateAddresses1652194625475 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('create extension if not exists "uuid-ossp"');
      await queryRunner.createTable(
        new Table({
          name: 'addresses',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()'
            },
            {
              name: 'cep',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'district',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'street',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'number',
              type: 'integer',
              isNullable: true
            },
            {
              name: 'complement',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'city_id',
              type: 'uuid',
              isNullable: true
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
            },
            {
              name: 'deleted_at',
              type: 'timestamp',
              isNullable: true
            }
          ]
        })
      )
      await queryRunner.createForeignKey(
        'addresses',
        new TableForeignKey({
          columnNames: ['city_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'cities',
          name: 'CityAddress',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('addresses', 'CityAddress')
      await queryRunner.dropTable('addresses')
    }

}
