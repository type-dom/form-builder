import { SvgComponent } from '../../../web-component/svg-component/svg-component.abstract';
import { WebElement } from '../../web-element.abstract';
import { ISvgSvg } from './svg.interface';

// scalable vector graphic 可伸缩矢量图型
export class SvgSvg extends SvgComponent implements ISvgSvg {
  className: 'SvgSvg';
  constructor(public parent: WebElement) {
    super();
    this.className = 'SvgSvg';
  }
}
