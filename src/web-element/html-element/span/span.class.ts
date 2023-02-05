import { WebTextNode } from '../../../web-text-node/web-text-node.class';
import { HtmlElement } from '../html-element.abstract';
import { ISpan } from './span.interface';

export class Span extends HtmlElement implements ISpan {
  tagName: 'span';
  className: 'Span';
  dom: HTMLSpanElement;
  childNodes: (WebTextNode | HtmlElement)[];
  constructor(public parent: HtmlElement) {
    super();
    this.tagName = 'span';
    this.dom = document.createElement(this.tagName);
    this.className = 'Span';
    this.childNodes = [];
  }
}
