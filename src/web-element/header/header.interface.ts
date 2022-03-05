import { IWebElement } from '../web-element.interface';

export interface IHeader extends IWebElement {
  tagName: 'header',
  className: 'Header',
}
