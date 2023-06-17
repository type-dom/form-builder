import { HtmlElement } from '../html-element.abstract';
import { ILabelBase } from './label.interface';
export abstract class LabelBase extends HtmlElement implements ILabelBase {
  tagName: 'label';
  dom: HTMLLabelElement;
  protected constructor() {
    super();
    this.tagName = 'label';
    this.dom = document.createElement(this.tagName);
  }
}
