import { IWebElement } from '../web-element.interface';

export interface ITextarea extends IWebElement {
  tagName: 'textarea',
  className: 'TextArea',
  childNodes: [],
}