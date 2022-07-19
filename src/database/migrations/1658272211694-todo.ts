import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { generateDateColumn, generatePrimaryColumn, TABLE_NAME, TABLE_TYPE } from "../utils";

export class todo1658272211694 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: TABLE_NAME.TO_DO,
			columns: [
				generatePrimaryColumn(),
				{
					name: 'title',
					type: TABLE_TYPE.VARCHAR,
					isNullable: false,
				},
				{
					name: 'description',
					type: TABLE_TYPE.VARCHAR,
				},
				{
					name: 'status',
					type: TABLE_TYPE.ENUM,
					enum: ["TODO", "DONE", "ABANDONED"],
					default: "'TODO'",
				},
				{
					name: 'user_id',
					type: TABLE_TYPE.VARCHAR,
					isNullable: false
				},
				generateDateColumn('create_at'),
				generateDateColumn('update_at'),
			],
			foreignKeys: [
				{
					columnNames: ['user_id'],
					referencedTableName: TABLE_NAME.USER,
					referencedColumnNames: ['id']
				},
			]
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable(TABLE_NAME.TO_DO)
	}

}
