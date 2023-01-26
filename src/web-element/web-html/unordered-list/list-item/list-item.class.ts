import { WebTextNode } from '../../../../web-text-node/web-text-node.class';
import { WebHtml } from '../../web-html.abstract';
import { IListItem } from './list-item.interface';

export class ListItem extends WebHtml implements IListItem {
  tagName: 'li';
  className: 'ListItem';
  dom: HTMLLIElement;
  childNodes: (WebHtml | WebTextNode)[];
  constructor(public parent: WebHtml) {
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
