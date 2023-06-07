import { IWebControl } from '../../../../core/controls/web-control.interface';
import { IWebTextNode } from '../../../../web-text-node/web-text-node.interface';
import { WebControl } from '../../../../core/controls/web-control.abstract';
import { TableControl } from '../../../../core/controls/complex/table/table.class';
import { IHtmlElement } from '../../../web-abstract/html-element/html-element.interface';

export type TableDataCellChild = Exclude<WebControl, TableControl>
export interface IWebTableDataCell extends IHtmlElement {
  tagName: 'td',
  className: 'WebTableDataCell',
  childNodes: (IWebControl | IWebTextNode)[],
}
