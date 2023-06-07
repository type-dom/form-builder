import { SvgBase } from '../../web-abstract/svg-element/svg/svg.abstract';
import { HtmlElement } from '../../web-abstract/html-element/html-element.abstract';
import { ISvgSvg } from './svg.interface';

// scalable vector graphic 可伸缩矢量图型
export class SvgSvg extends SvgBase implements ISvgSvg {
  className: 'SvgSvg';
  constructor(public parent: HtmlElement) {
    super();
    this.className = 'SvgSvg';
  }
}
