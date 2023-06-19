import { ITypeElement } from '../../../../type-element/type-element.interface';
import { IWebTableRow } from '../row/row.interface';
export interface IWebTableFoot extends ITypeElement {
  nodeName: 'tfoot',
  className: 'WebTableFoot',
  childNodes: IWebTableRow[],
}
