import { WebElement } from '../web-element.abstract';
import { IListItem } from './list-item.interface';
import { WebTextNode } from '../../web-text-node/web-text-node.class';

export class ListItem extends WebElement implements IListItem {
  tagName: 'li';
  className: 'ListItem';
  dom: HTMLLIElement;
  childNodes: (WebElement | WebTextNode)[];
  constructor(public parent: WebElement) {
    super();
    this.tagName = 'li';
    this.dom = document.createElement(this.tagName);
    this.className = 'ListItem';
    this.childNodes = [];
    this.propObj = {
      styleObj: {
        width: '100px',
        textAlign: 'center',
        padding: '6px 14px',
        borderRadius: '4px 4px 0px 0px',
        borderBottom: 'none',
        boxSizing: 'border-box'
      },
      attrObj: {
        name: 'list-item',
      },
    };
  }
}
