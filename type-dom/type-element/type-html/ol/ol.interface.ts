import { ITypeHtml } from '../type-html.interface';
import { ITypeLi } from '../ul/li/li.interface';
import { ITypeUl } from '../ul/ul.interface';
import { ITypeAttribute } from '../../type-element.interface';
export interface ITypeOlAttr extends ITypeAttribute {
  type: string,
  start: string,
}
export interface ITypeOL extends ITypeHtml {
  nodeName: 'ol',
  childNodes: (ITypeUl | ITypeLi)[]
}
