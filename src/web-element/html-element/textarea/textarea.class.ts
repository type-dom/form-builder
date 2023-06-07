import { HtmlElement } from '../../web-abstract/html-element/html-element.abstract';
import { ITextarea } from './textarea.interface';

export class Textarea extends HtmlElement implements ITextarea {
  tagName: 'textarea';
  className: 'TextArea';
  dom: HTMLTextAreaElement;
  childNodes: [];
  value: string | number | boolean | undefined;
  constructor(public parent: HtmlElement) {
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
