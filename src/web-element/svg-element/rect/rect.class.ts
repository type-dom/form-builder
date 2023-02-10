import { SvgElement } from '../svg-element.abstract';
import { SvgSvg } from '../svg/svg.class';
import { ISvgRect, ISvgRectProperty } from './rect.interface';

export class SvgRect extends SvgElement implements ISvgRect {
  tagName: 'rect';
  className: 'SvgRect';
  dom: SVGRectElement;
  propObj: ISvgRectProperty;
  childNodes: [];
  width = 60;
  height = 60;
  constructor(public parent: SvgSvg) {
    super();
    this.tagName = 'rect';
    this.className = 'SvgRect';
    this.dom = document.createElementNS('http://www.w3.org/2000/svg', this.tagName);
    this.childNodes = [];
    this.propObj = {
      styleObj: {
        fill: 'rgb(255, 255, 255)',
        strokeWidth: 1,
        stroke: 'rgb(0, 0, 0)',
      },
      attrObj: {
        width: this.width,
        height: this.height
      }
    };
  }

  reset(width: string | number, height: string | number): void {
    this.setAttrObj({
      width,
      height
    });
  }
}
