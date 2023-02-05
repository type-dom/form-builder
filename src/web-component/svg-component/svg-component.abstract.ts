import { SvgElement } from '../../web-element/svg-element/svg-element.abstract';
import { ISvgComponent } from './svg-component.interface';

export abstract class SvgComponent extends SvgElement implements ISvgComponent {
  tagName: 'svg';
  className: string;
  dom: SVGSVGElement;
  childNodes: SvgElement[];
  width: string | number = '100%';
  height: string | number = '100%';
  protected constructor() {
    super();
    this.tagName = 'svg';
    this.className = 'SvgElement';
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

  reset(width: string | number, height: string | number): void {
    this.setAttrObj({
      width,
      height,
    });
  }
}
