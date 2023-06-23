import { TypeHtml } from '../../../type-element/type-html/type-html.abstract';
import { TypeElement } from '../../../type-element/type-element.abstract';
import { Display } from '../../../web-style.enum';
export class Section extends TypeHtml {
  className: 'Section';
  nodeName: 'section';
  dom: HTMLElement;
  // childNodes: TypeNode[];
  constructor(public parent: TypeElement) {
    super('section');
    this.nodeName = 'section';
    this.dom = document.createElement(this.nodeName);
    this.className = 'Section';
    this.propObj = {
      styleObj: {
        display: Display.flex,
        justifyContent: 'space-between'
      },
      attrObj: {
        name: 'section'
      }
    };
  }
}
