import { SvgComponent } from '../../../web-abstract/web-component/svg-component/svg-component.abstract';
import { HtmlElement } from '../../../web-element/html-element/html-element.abstract';
import { SvgPath } from '../../../web-element/svg-element/path/path.class';

export class ConnectionSvg extends SvgComponent {
  className: 'ConnectionSvg';
  childNodes: [SvgPath];
  constructor(public parent: HtmlElement) {
    super();
    this.className = 'ConnectionSvg';
    const path = new SvgPath(this);
    path.setData('M192.037 576.046h64.013v63.919H128.025V128.031l576.112-0.041v511.975H512.099v-63.919h128.025V191.784h-448.34z',
      'M768.149 383.79v64.419h64.013v383.512H384.075V448.209h128.024V383.79H320.062v511.849h576.112V383.79z');
    this.childNodes = [path];
  }
}
