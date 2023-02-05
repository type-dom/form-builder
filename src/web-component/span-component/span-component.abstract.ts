import { HtmlElement } from '../../web-element/html-element/html-element.abstract';
import { ISpanComponent } from './span-component.interface';

export abstract class SpanComponent extends HtmlElement implements ISpanComponent {
  tagName: 'span';
  dom: HTMLSpanElement;
  protected constructor() {
    super();
    this.tagName = 'span';
    this.dom = document.createElement(this.tagName);
  }
}
