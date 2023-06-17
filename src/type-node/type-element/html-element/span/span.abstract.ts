import { HtmlElement } from '../html-element.abstract';
import { ISpanBase } from './span.interface';

export abstract class SpanBase extends HtmlElement implements ISpanBase {
  tagName: 'span';
  dom: HTMLSpanElement;
  protected constructor() {
    super();
    this.tagName = 'span';
    this.dom = document.createElement(this.tagName);
  }
}
