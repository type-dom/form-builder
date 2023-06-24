import { ITextNode } from '../../../../text-node/text-node.interface';
import { ITypeHtml } from '../../type-html.interface';

export interface ITypeTableHeader extends ITypeHtml {
  nodeName: 'th',
  childNodes: ITextNode[]
}
