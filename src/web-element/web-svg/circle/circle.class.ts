import { WebSvg } from '../web-svg.abstract';
import { Svg } from '../svg/svg.class';
import { ISvgCircle } from './circle.interface';

export class SvgCircle extends WebSvg implements ISvgCircle {
  tagName: 'circle';
  className: 'SvgCircle';
  dom: SVGCircleElement;
  childNodes: [];
  constructor(public parent: Svg) {
    super();
    this.tagName = 'circle';
    this.className = 'SvgCircle';
    this.dom = document.createElementNS('http://www.w3.org/2000/svg', this.tagName);
    this.childNodes = [];
  }
}
