import { WebSvg } from '../svg/svg.class';
import { ISvgCircle } from './circle.interface';
import { SvgElement } from '../svg-element.abstract';

export class SvgCircle extends SvgElement implements ISvgCircle {
  tagName: 'circle';
  className: 'SvgCircle';
  dom: SVGCircleElement;
  childNodes: [];
  constructor(public parent: WebSvg) {
    super();
    this.tagName = 'circle';
    this.className = 'SvgCircle';
    this.dom = document.createElementNS('http://www.w3.org/2000/svg', this.tagName);
    this.childNodes = [];
  }
}
