import { TypeHtml } from '../type-html.abstract';
import { ILabelBase } from './label.interface';
export abstract class LabelBase extends TypeHtml implements ILabelBase {
  tagName: 'label';
  dom: HTMLLabelElement;
  protected constructor() {
    super();
    this.tagName = 'label';
    this.dom = document.createElement(this.tagName);
  }
}
