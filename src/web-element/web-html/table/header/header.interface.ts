import { IWebTextNode } from '../../../../web-text-node/web-text-node.interface';
import { IWebHtml } from '../../web-html.interface';

export interface IWebTableHeader extends IWebHtml {
  tagName: 'th',
  className: 'WebTableHeader',
  childNodes: IWebTextNode[]
}
