import { TypeHtml } from '../../type-html/type-html.abstract';
import { TypeSvg } from '../type-svg.abstract';
import { ISvgBase } from './svg.interface';

export abstract class SvgBase extends TypeSvg implements ISvgBase {
  abstract className: string;
  abstract parent: TypeHtml;
  tagName: 'svg';
  dom: SVGSVGElement;
  childNodes: TypeSvg[];
  width: string | number = '100%';
  height: string | number = '100%';
  protected constructor() {
    super();
    this.tagName = 'svg';
    this.dom = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.propObj.attrObj = {
      version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg',
      width: this.width,
      height: this.height,
      viewBox: '0 0 1024 1024'
    };
    this.childNodes = [];
  }

  resetSize(width: string | number, height: string | number): void {
    this.setAttrObj({
      width,
      height,
    });
  }
}
