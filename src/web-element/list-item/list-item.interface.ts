import { IWebElement } from '../web-element.interface';

export interface IListItem extends IWebElement {
  tagName: 'li',
  className: 'ListItem',
}
