import { ITextNode } from '../../../../text-node/text-node.interface';
import { ITypeHtml } from '../../../../type-element/type-html/type-html.interface';

export interface IWebTableHeader extends ITypeHtml {
  nodeName: 'th',
  className: 'WebTableHeader',
  childNodes: ITextNode[]
}
