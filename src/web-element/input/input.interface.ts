import { IWebElement } from '../web-element.interface';

export interface IInput extends IWebElement {
  tagName: 'input',
  className: 'Input',
  childNodes: [],
}