import { WebElement } from '../web-element.abstract';
import { ISpan } from './span.interface';
import { WebTextNode } from '../../web-text-node/web-text-node.class';

export class Span extends WebElement implements ISpan {
  tagName: 'span';
  className: 'Span';
  dom: HTMLSpanElement;
  childNodes: (WebTextNode | WebElement)[];
  constructor(public parent: WebElement) {
    super();
    this.tagName = 'span';
    this.dom = document.createElement(this.tagName);
    this.className = 'Span';
    this.childNodes = [];
  }
}
