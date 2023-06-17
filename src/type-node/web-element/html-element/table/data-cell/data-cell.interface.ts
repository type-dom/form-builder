import { IWebControl } from '../../../../../core/controls/web-control.interface';
import { IWebTextNode } from '../../../../web-text-node/web-text-node.interface';
import { WebControl } from '../../../../../core/controls/web-control.abstract';
import { TableControl } from '../../../../../core/controls/complex/table/table.class';
import { ITypeHtml } from '../../../../type-element/type-html/type-html.interface';

export type TableDataCellChild = Exclude<WebControl, TableControl>
export interface IWebTableDataCell extends ITypeHtml {
  tagName: 'td',
  className: 'WebTableDataCell',
  childNodes: (IWebControl | IWebTextNode)[],
}
