import { TypeHtml } from '../../../type-element/type-html/type-html.abstract';
import { ITextarea } from './textarea.interface';

export class Textarea extends TypeHtml implements ITextarea {
  tagName: 'textarea';
  className: 'TextArea';
  dom: HTMLTextAreaElement;
  childNodes: [];
  value: string | number | boolean | undefined;
  constructor(public parent: TypeHtml) {
    super();
    this.tagName = 'textarea';
    this.className = 'TextArea';
    this.dom = document.createElement(this.tagName);
    this.propObj.styleObj = {
      outline: 'none',
    };
    this.childNodes = [];
  }
  getValue(): string {
    return this.dom.value; // this.value
  }
  setValue(value: string | number | boolean): void {
    this.value = value;
    this.dom.value = String(value);
  }
}
