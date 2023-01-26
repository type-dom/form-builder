import { IWebControl } from '../../../../core/controls/web-control.interface';
import { IWebTextNode } from '../../../../web-text-node/web-text-node.interface';
import { WebControl } from '../../../../core/controls/web-control.abstract';
import { TableControl } from '../../../../core/controls/complex/table/table.class';
import { IWebHtml } from '../../web-html.interface';

export type TableDataCellChild = Exclude<WebControl, TableControl>
export interface IWebTableDataCell extends IWebHtml {
  tagName: 'td',
  className: 'WebTableDataCell',
  childNodes: (IWebControl | IWebTextNode)[],
}
