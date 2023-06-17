import { TypeHtml } from '../type-html.abstract';
import { ITypeDiv } from './div.interface';
export abstract class TypeDiv extends TypeHtml implements ITypeDiv {
  tagName: 'div';
  dom: HTMLDivElement;
  protected constructor() {
    super();
    this.tagName = 'div';
    this.dom = document.createElement(this.tagName);
  }
}
