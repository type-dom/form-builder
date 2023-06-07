import { SvgBase } from '../../../web-element/web-abstract/svg-element/svg/svg.abstract';
import { HtmlElement } from '../../../web-element/web-abstract/html-element/html-element.abstract';
import { SvgPath } from '../../../web-element/svg-element/path/path.class';

export class ThreeDotsSvg extends SvgBase {
  className: 'ThreeDotsSvg';
  childNodes: [SvgPath];
  constructor(public parent: HtmlElement) {
    super();
    this.className = 'ThreeDotsSvg';
    this.resetSize(24, 24);
    const path = new SvgPath(this);
    path.setData('M0 512c0-59.733333 46.933333-106.666667 106.666667-106.666667s106.666667 46.933333 106.666666 106.666667-46.933333 106.666667-106.666666 106.666667-106.666667-46.933333-106.666667-106.666667zM810.666667 512c0-59.733333 46.933333-106.666667 106.666666-106.666667s106.666667 46.933333 106.666667 106.666667-46.933333 106.666667-106.666667 106.666667-106.666667-46.933333-106.666666-106.666667zM405.333333 512c0-59.733333 46.933333-106.666667 106.666667-106.666667s106.666667 46.933333 106.666667 106.666667-46.933333 106.666667-106.666667 106.666667-106.666667-46.933333-106.666667-106.666667z');
    this.childNodes = [path];
  }
}
