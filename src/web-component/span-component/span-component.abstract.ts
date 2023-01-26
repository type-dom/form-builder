import { WebHtml } from '../../web-element/web-html/web-html.abstract';
import { ISpanComponent } from './span-component.interface';

export abstract class SpanComponent extends WebHtml implements ISpanComponent {
  tagName: 'span';
  dom: HTMLSpanElement;
  protected constructor() {
    super();
    this.tagName = 'span';
    this.dom = document.createElement(this.tagName);
  }
}
