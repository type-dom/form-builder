import { WebTextNode } from '../../../web-text-node/web-text-node.class';
import { WebHtml } from '../web-html.abstract';
import { ISpan } from './span.interface';

export class Span extends WebHtml implements ISpan {
  tagName: 'span';
  className: 'Span';
  dom: HTMLSpanElement;
  childNodes: (WebTextNode | WebHtml)[];
  constructor(public parent: WebHtml) {
    super();
    this.tagName = 'span';
    this.dom = document.createElement(this.tagName);
    this.className = 'Span';
    this.childNodes = [];
  }
}
