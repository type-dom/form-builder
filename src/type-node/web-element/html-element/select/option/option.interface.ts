import { IWebTextNode } from '../../../../web-text-node/web-text-node.interface';
import { ITypeHtml } from '../../../../type-element/type-html/type-html.interface';
export interface IWebOption extends ITypeHtml {
  tagName: 'option',
  className: 'WebOption',
  childNodes: (ITypeHtml | IWebTextNode)[],
}
