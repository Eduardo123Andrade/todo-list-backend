import { SessionTypeEnum } from './../../interface/session.interface';
import { generatePrimaryColumn } from './../utils/generatePrimaryColumn';
import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { TABLE_NAME, TABLE_TYPE } from "../utils";

export class session1658433805882 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: TABLE_NAME.SESSION,
            columns: [
                generatePrimaryColumn(),
              {
                name: "token",
                type: TABLE_TYPE.VARCHAR,
                isNullable: false,
              },
              {
                name: "type",
                type: TABLE_TYPE.ENUM,
                enum: [SessionTypeEnum.ACCESS, SessionTypeEnum.REFRESH],
                isNullable: false,
              },
              {
                name: "expires_date",
                type: TABLE_TYPE.TIMESTAMP,
                isNullable: false,
              },
              {
                name: "user_id",
                type: TABLE_TYPE.VARCHAR,
              },
            ],
            foreignKeys: [
              {
                columnNames: ["user_id"],
                referencedTableName: TABLE_NAME.USER,
                referencedColumnNames: ["id"],
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
              },
            ],
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(TABLE_NAME.SESSION);
      }
    

}
