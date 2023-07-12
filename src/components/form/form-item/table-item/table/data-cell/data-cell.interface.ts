import {
  ITextNode,
  ITypeTableDataCell
} from 'type-dom.ts';
import { IWebControl } from '../../../../../../core/controls/web-control.interface';
import { WebControl } from '../../../../../../core/controls/web-control.abstract';
import { TableControl } from '../../../../../../core/controls/complex/table/table.class';


export type TableDataCellChild = Exclude<WebControl, TableControl>
export interface ITableDataCell extends ITypeTableDataCell {
  className: 'TableDataCell',
  childNodes: (IWebControl | ITextNode)[],
}
