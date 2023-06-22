import { IWebControl } from '../../../../../src/core/controls/web-control.interface';
import { ITextNode } from '../../../../text-node/text-node.interface';
import { WebControl } from '../../../../../src/core/controls/web-control.abstract';
import { TableControl } from '../../../../../src/core/controls/complex/table/table.class';
import { ITypeHtml } from '../../../../type-element/type-html/type-html.interface';

export type TableDataCellChild = Exclude<WebControl, TableControl>
export interface ITableDataCell extends ITypeHtml {
  nodeName: 'td',
  className: 'TableDataCell',
  childNodes: (IWebControl | ITextNode)[],
}
