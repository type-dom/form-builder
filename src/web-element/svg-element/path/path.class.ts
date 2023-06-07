import { SvgElement } from '../../web-abstract/svg-element/svg-element.abstract';
import { SvgBase } from '../../web-abstract/svg-element/svg/svg.abstract';
import { ISvgPath, ISvgPathProperty } from './path.interface';

export class SvgPath extends SvgElement implements ISvgPath {
  tagName: 'path';
  dom: SVGPathElement;
  className: 'SvgPath';
  propObj: ISvgPathProperty;
  childNodes: [];
  constructor(public parent: SvgBase) {
    super();
    this.tagName = 'path';
    this.dom = document.createElementNS('http://www.w3.org/2000/svg', this.tagName);
    this.className = 'SvgPath';
    this.propObj = {
      styleObj: {},
      attrObj: {
        d: ''
      }
    };
    this.childNodes = [];
  }
  setData(...rest: string[]): void {
    this.propObj.attrObj.d = rest.join(' ');
  }
}
