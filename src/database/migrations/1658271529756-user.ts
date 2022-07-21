import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { generateDateColumn, generatePrimaryColumn, TABLE_NAME, TABLE_TYPE } from '../utils';

export class user1658271529756 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: TABLE_NAME.USER,
            columns: [
                { ...generatePrimaryColumn() },
                {
                    name: 'name',
                    type: TABLE_TYPE.VARCHAR,
                    isNullable: false,
                },
                {
                    name: 'email',
                    type: TABLE_TYPE.VARCHAR,
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: 'password',
                    type: TABLE_TYPE.VARCHAR,
                    isNullable: false,
                },
                {
                    ...generateDateColumn('create_at')
                },
                {
                    ...generateDateColumn('update_at')
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(TABLE_NAME.USER)
    }

}
