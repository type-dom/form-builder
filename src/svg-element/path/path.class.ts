import { ISvgPath, ISvgPathProperty } from './path.interface';
import { SvgElement } from '../svg-element.abstract';
import { SvgComponent } from '../../web-component/svg-component/svg-component.abstract';

export class SvgPath extends SvgElement implements ISvgPath {
  tagName: 'path';
  dom: SVGPathElement;
  className: 'SvgPath';
  propObj: ISvgPathProperty;
  childNodes: [];
  constructor(public parent: SvgComponent) {
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
