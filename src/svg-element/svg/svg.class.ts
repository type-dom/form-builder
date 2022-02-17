import { WebElement } from '../../web-element/web-element.abstract';
import { SvgComponent } from '../../web-component/svg-component/svg-component.abstract';
import { IWebSvg } from './svg.interface';

// scalable vector graphic 可伸缩矢量图型
export class WebSvg extends SvgComponent implements IWebSvg {
  className: 'WebSvg';

  constructor(public parent: WebElement) {
    super();
    this.className = 'WebSvg';
  }
}
