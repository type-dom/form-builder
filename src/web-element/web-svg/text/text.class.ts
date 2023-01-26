import { WebSvg } from '../web-svg.abstract';
import { WebTextNode } from '../../../web-text-node/web-text-node.class';
import { Svg } from '../svg/svg.class';
import { ISvgText, ISvgTextProperty } from './text.interface';

export class SvgText extends WebSvg implements ISvgText {
  tagName: 'text';
  dom: SVGTextElement;
  className: 'SvgText';
  propObj: ISvgTextProperty;
  childNodes: WebTextNode[];
  constructor(public parent: Svg) {
    super();
    this.tagName = 'text';
    this.dom = document.createElementNS('http://www.w3.org/2000/svg', this.tagName);
    this.className = 'SvgText';
    this.propObj = {
      styleObj: {},
      attrObj: {
        x: 0,
        y: 0,
      }
    };
    this.childNodes = [new WebTextNode(this, '')];
  }
}
