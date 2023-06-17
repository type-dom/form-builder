import { WebTextNode } from '../../../web-text-node/web-text-node.class';
import { TypeHtml } from '../../../type-element/type-html/type-html.abstract';
import { ISpan } from './span.interface';

export class Span extends TypeHtml implements ISpan {
  tagName: 'span';
  className: 'Span';
  dom: HTMLSpanElement;
  childNodes: (WebTextNode | TypeHtml)[];
  constructor(public parent: TypeHtml) {
    super();
    this.tagName = 'span';
    this.dom = document.createElement(this.tagName);
    this.className = 'Span';
    this.childNodes = [];
  }
}
