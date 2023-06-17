import { TypeElement } from '../../../../../type-element/type-element.abstract';
import { WebTextNode } from '../../../../../web-text-node/web-text-node.class';
import { OverlayHeader } from '../header';

export class OverlayTitle extends TypeElement {
  tagName: 'span';
  className: 'OverlayTitle';
  childNodes: WebTextNode[];
  dom: HTMLSpanElement;
  text: WebTextNode;

  constructor(public parent: OverlayHeader) {
    super();
    this.tagName = 'span';
    this.dom = document.createElement(this.tagName);
    this.className = 'OverlayTitle';
    this.propObj = {
      styleObj: {
        lineHeight: '16px',
        fontSize: '16px',
        color: '#000',
      },
      attrObj: {
        name: 'overlay-title',
      }
    };
    this.text = new WebTextNode(this, '标题');
    this.childNodes = [this.text];
  }
}
