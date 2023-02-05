import { WebElement } from '../../../web-element/web-element.abstract';
import { SvgPath } from '../../../web-element/svg-element/path/path.class';
import { SvgComponent } from '../../../web-component/svg-component/svg-component.abstract';

export class CloseSvg extends SvgComponent {
  className: 'CloseSvg';
  childNodes: [SvgPath];
  constructor(public parent: WebElement) {
    super();
    this.className = 'CloseSvg';
    this.addAttrObj({
      name: 'close',
    });
    this.reset(16, 16);
    const path = new SvgPath(this);
    path.setData('M282.517333 213.376l-45.354666 45.162667L489.472 512 237.162667 765.461333l45.354666 45.162667L534.613333 557.354667l252.096 253.269333 45.354667-45.162667-252.288-253.44 252.288-253.482666-45.354667-45.162667L534.613333 466.624l-252.096-253.226667z');
    this.childNodes = [path];
  }
}
