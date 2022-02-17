import { IWebElement } from '../../web-element.interface';
import { IWebTableHeader } from '../header/header.interface';

export interface IWebTableHead extends IWebElement {
  tagName: 'thead',
  className: 'WebTableHead',
  childNodes: IWebTableHeader[]
}