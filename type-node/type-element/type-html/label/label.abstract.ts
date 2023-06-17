import { TypeHtml } from '../type-html.abstract';
import { ITypeLabel } from './label.interface';
export abstract class TypeLabel extends TypeHtml implements ITypeLabel {
  tagName: 'label';
  dom: HTMLLabelElement;
  protected constructor() {
    super();
    this.tagName = 'label';
    this.dom = document.createElement(this.tagName);
  }
}
