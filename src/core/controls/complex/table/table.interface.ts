import { IWebControl } from '../../web-control.interface';
import { ITableItem } from '../../form-item/table-item/table-item.interface';

export interface ITableField {
  label: string, // 字段标签
  name: string, // 字段名称
}
export interface ITableConfig {
  name: string,
  canOperation?: boolean;
  canSelect?: boolean;
  tableHeader: ITableField[];
  tableData: Record<string, string | number | boolean>[],
  mode?: 'editable' | 'disabled',
}

export interface ITableControl extends IWebControl {
  className : 'TableControl',
  childNodes: [ITableItem],
}
