import { ITypeHtml } from '../../type-html.interface';
import { ITypeTableHeader } from '../header/header.interface';
export interface ITypeTableHead extends ITypeHtml {
  nodeName: 'thead',
  childNodes: ITypeTableHeader[]
}
