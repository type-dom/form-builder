import { ITextNode } from '../../../../text-node/text-node.interface';
import { ITypeHtml } from '../../../../type-element/type-html/type-html.interface';
export interface IWebOption extends ITypeHtml {
  nodeName: 'option',
  className: 'WebOption',
  childNodes: (ITypeHtml | ITextNode)[],
}
