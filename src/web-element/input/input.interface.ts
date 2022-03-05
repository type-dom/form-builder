import { IWebAttribute, IWebElement } from '../web-element.interface';
import { InputEnum } from './input.enum';

export interface IInputAttribute extends IWebAttribute {
  type: keyof typeof InputEnum,
}
export interface IInput extends IWebElement {
  tagName: 'input',
  className: 'Input',
  childNodes: [],
}
