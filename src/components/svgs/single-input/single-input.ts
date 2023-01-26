import { WebElement } from '../../../web-element/web-element.abstract';
import { SvgPath } from '../../../web-element/web-svg/path/path.class';
import { SvgComponent } from '../../../web-component/svg-component/svg-component.abstract';

export class SingleInputSvg extends SvgComponent {
  className: 'SingleInputSvg';
  childNodes: [SvgPath];
  constructor(public parent: WebElement) {
    super();
    this.className = 'SingleInputSvg';
    this.reset(24, 24);
    const path = new SvgPath(this);
    path.setData('M0 171.885714h1024v69.485715H0V171.885714z m0 614.4h1024v69.485715H0v-69.485715z m0 0M0 171.885714h69.485714v683.885715H0V171.885714z m135.314286 168.228572h69.485714v340.114285H135.314286V340.114286z m819.2-168.228572H1024v683.885715h-69.485714V171.885714z');
    this.childNodes = [path];
  }
}
