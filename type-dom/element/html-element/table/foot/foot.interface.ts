import { ITypeElement } from '../../../../type-element/type-element.interface';
import { ITableRow } from '../row/row.interface';
export interface ITableFoot extends ITypeElement {
  nodeName: 'tfoot',
  className: 'TableFoot',
  childNodes: ITableRow[],
}
