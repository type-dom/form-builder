import { SvgBase } from '../../../web-element/web-abstract/svg-element/svg/svg.abstract';
import { HtmlElement } from '../../../web-element/web-abstract/html-element/html-element.abstract';
import { SvgPath } from '../../../web-element/svg-element/path/path.class';

export class RadioSvg extends SvgBase {
  className: 'RadioSvg';
  childNodes: [SvgPath];
  constructor(public parent: HtmlElement) {
    super();
    this.className = 'RadioSvg';
    const path = new SvgPath(this);
    path.setData('M497.344 997.312c-265.344 0-481.344-215.936-481.344-481.344s215.936-481.344 481.344-481.344 481.344 215.936 481.344 481.344S762.752 997.312 497.344 997.312zM497.344 66.624C249.6 66.624 48 268.16 48 515.968c0 247.808 201.536 449.344 449.344 449.344 247.808 0 449.344-201.536 449.344-449.344C946.688 268.16 745.152 66.624 497.344 66.624zM512 512m-196.672 0a3.073 3.073 0 1 0 393.344 0 3.073 3.073 0 1 0-393.344 0Z');
    this.childNodes = [path];
  }
}
