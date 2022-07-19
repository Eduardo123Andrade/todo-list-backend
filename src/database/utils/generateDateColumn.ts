import { TABLE_TYPE } from './tableType';
import { TableColumnOptions } from "typeorm";


type ColumnName = 'create_at' | 'update_at'

export const generateDateColumn = (name: ColumnName) => {
  const column: TableColumnOptions = {
    name,
    type: TABLE_TYPE.TIMESTAMP,
    default: 'now()',
  }
  return column
}