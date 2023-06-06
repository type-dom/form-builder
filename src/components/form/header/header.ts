import { WebTextNode } from '../../../web-text-node/web-text-node.class';
import { FinalComponent } from '../../../web-abstract/web-component/final-component/final-component.abstract';
import { WebForm } from '../form';

export class FormHeader extends FinalComponent {
  tagName: 'div';
  className: 'FormHeader';
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
