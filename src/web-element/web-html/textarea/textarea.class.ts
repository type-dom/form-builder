import { FinalComponent } from '../../../web-component/final-component/final-component.abstract';
import { WebHtml } from '../web-html.abstract';
import { ITextarea } from './textarea.interface';

export class Textarea extends FinalComponent implements ITextarea {
  tagName: 'textarea';
  className: 'TextArea';
  dom: HTMLTextAreaElement;
  childNodes: [];
  value: string | number | boolean | undefined;
  constructor(public parent: WebHtml) {
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
