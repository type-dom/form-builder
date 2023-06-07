import { WebTextNode } from '../../../web-text-node/web-text-node.class';
import { DivBase } from '../../../web-element/web-abstract/html-element/div/div.abstract';
import { WebForm } from '../form';

export class FormHeader extends DivBase {
  tagName: 'div';
  className: 'FormHeader';
  childNodes: [WebTextNode];
  dom: HTMLDivElement;

  constructor(public parent: WebForm) {
    super();
    this.tagName = 'div';
    this.dom = document.createElement(this.tagName);
    this.className = 'FormHeader';
    this.propObj = {
      styleObj: {
        padding: '20px',
        paddingBottom: '10px',
        boxSizing: 'border-box',
        textAlign: 'center',
        fontSize: '27px',
        fontWeight: 'bold',
      },
      attrObj: {
        name: 'form-header',
      }
    };

    const textNode = new WebTextNode(this, parent.title);
    this.childNodes = [textNode];
  }
}
