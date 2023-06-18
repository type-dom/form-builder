import { IWebTextNode } from '../../../web-text-node/web-text-node.interface';
import { ITypeHtml } from '../../../type-element/type-html/type-html.interface';

export interface ILabel extends ITypeHtml {
  nodeName: 'label',
  className: 'Label',
  childNodes: IWebTextNode[],
}
