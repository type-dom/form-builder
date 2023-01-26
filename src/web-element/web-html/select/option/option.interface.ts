import { IWebTextNode } from '../../../../web-text-node/web-text-node.interface';
import { IWebHtml } from '../../web-html.interface';

export interface IWebOption extends IWebHtml {
  tagName: 'option',
  className: 'WebOption',
  childNodes: (IWebHtml | IWebTextNode)[],
}
