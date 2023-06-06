import { SvgComponent } from '../../../web-abstract/web-component/svg-component/svg-component.abstract';
import { HtmlElement } from '../../html-element/html-element.abstract';
import { ISvgSvg } from './svg.interface';

// scalable vector graphic 可伸缩矢量图型
export class SvgSvg extends SvgComponent implements ISvgSvg {
  className: 'SvgSvg';
  constructor(public parent: HtmlElement) {
    super();
    this.className = 'SvgSvg';
  }
}
