import { IWebTextNode } from '../../../web-text-node/web-text-node.interface';
import { IWebHtml } from '../web-html.interface';

export interface ILabel extends IWebHtml {
  tagName: 'label',
  className: 'Label',
  childNodes: IWebTextNode[],
}
