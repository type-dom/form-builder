import { TypeHtml } from '../type-html.abstract';
import { ISpanBase } from './span.interface';

export abstract class SpanBase extends TypeHtml implements ISpanBase {
  tagName: 'span';
  dom: HTMLSpanElement;
  protected constructor() {
    super();
    this.tagName = 'span';
    this.dom = document.createElement(this.tagName);
  }
}
