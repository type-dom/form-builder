import { TypeHtml } from '../type-html.abstract';
import { ITypeSpan } from './span.interface';
export abstract class TypeSpan extends TypeHtml implements ITypeSpan {
  tagName: 'span';
  dom: HTMLSpanElement;
  protected constructor() {
    super();
    this.tagName = 'span';
    this.dom = document.createElement(this.tagName);
  }
}
