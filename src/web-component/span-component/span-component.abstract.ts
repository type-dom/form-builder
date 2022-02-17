import { WebElement } from '../../web-element/web-element.abstract';
import { ISpanComponent } from './span-component.interface';

export abstract class SpanComponent extends WebElement implements ISpanComponent {
  tagName: 'span';
  dom: HTMLSpanElement;
  protected constructor() {
    super();
    this.tagName = 'span';
    this.dom = document.createElement(this.tagName);
  }
}
