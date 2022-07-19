import { TABLE_TYPE } from './tableType';
import { TableColumnOptions } from "typeorm";


export const generatePrimaryColumn = () => {
  const column: TableColumnOptions = {
    name: 'id',
    type: TABLE_TYPE.VARCHAR,
    isPrimary: true,
    generationStrategy: 'uuid',
  }
  return column
}