import { IWebControl } from '../../../../../src/core/controls/web-control.interface';
import { ITypeTableDataCell } from '../../../../type-element/type-html/table/data-cell/data-cell.interface';
import { ITextNode } from '../../../../text-node/text-node.interface';
import { WebControl } from '../../../../../src/core/controls/web-control.abstract';
import { TableControl } from '../../../../../src/core/controls/complex/table/table.class';

export type TableDataCellChild = Exclude<WebControl, TableControl>
export interface ITableDataCell extends ITypeTableDataCell {
  className: 'TableDataCell',
  childNodes: (IWebControl | ITextNode)[],
}
