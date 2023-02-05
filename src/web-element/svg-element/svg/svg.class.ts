import { SvgComponent } from '../../../web-component/svg-component/svg-component.abstract';
import { WebElement } from '../../web-element.abstract';
import { ISvg } from './svg.interface';

// scalable vector graphic 可伸缩矢量图型
export class Svg extends SvgComponent implements ISvg {
  className: 'Svg';
  constructor(public parent: WebElement) {
    super();
    this.className = 'Svg';
  }
}
