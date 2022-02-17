import { WebElement } from '../web-element.abstract';
import { ILabel } from './label.interface';
import { WebTextNode } from '../../web-text-node/web-text-node.class';

export class Label extends WebElement implements ILabel {
  tagName: 'label';
  className: 'Label';
  dom: HTMLLabelElement;
  childNodes: WebTextNode[];
  constructor(public parent: WebElement) {
    super();
    this.tagName = 'label';
    this.dom = document.createElement(this.tagName);
    this.className = 'Label';
    this.propObj.attrObj = {
      name: 'label'
    };
    this.childNodes = [];
  }

  createInstance(labelLiteral: ILabel): void {
    this.setPropObj(labelLiteral.propObj);
    for (const idx in labelLiteral.childNodes) {
      if (this.childNodes[idx]) {
        this.childNodes[0].setText(labelLiteral.childNodes[0].text);
      } else {
        const child = new WebTextNode(this, labelLiteral.childNodes[0].text);
        this.appendChild(child);
      }
    }
  }
}
