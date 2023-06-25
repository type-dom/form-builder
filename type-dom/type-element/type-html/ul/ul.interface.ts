import { ITypeHtml } from '../type-html.interface';
import { ITypeLi } from './li/li.interface';
export interface ITypeUl extends ITypeHtml {
  nodeName: 'ul',
  childNodes: ITypeLi[]
}
