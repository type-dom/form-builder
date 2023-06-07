import { SvgBase } from '../../../web-element/web-abstract/svg-element/svg/svg.abstract';
import { SvgPath } from '../../../web-element/svg-element/path/path.class';
import { HtmlElement } from '../../../web-element/web-abstract/html-element/html-element.abstract';

export class CheckboxSvg extends SvgBase {
  className: 'CheckboxSvg';
  childNodes: [SvgPath];
  constructor(public parent: HtmlElement) {
    super();
    this.className = 'CheckboxSvg';
    const path = new SvgPath(this);
    path.setData('M867.41 958.55H162.66c-51.41 0-93.48-42.06-93.48-93.48V160.32c0-51.41 42.06-93.48 93.48-93.48h704.75c51.41 0 93.48 42.06 93.48 93.48v704.75c0 51.42-42.06 93.48-93.48 93.48z m4.31-163.95V230.8c0-41.13-33.65-74.78-74.78-74.78h-563.8c-41.13 0-74.78 33.65-74.78 74.78v563.8c0 41.13 33.65 74.78 74.78 74.78h563.8c41.13 0 74.78-33.65 74.78-74.78z',
      'M407.17 607.28l252.21-252.21c17.41-17.41 45.64-17.41 63.05 0 17.41 17.41 17.41 45.64 0 63.05L470.22 670.33c-17.41 17.41-45.64 17.41-63.05 0-17.41-17.41-17.41-45.64 0-63.05z',
      'M402.22 670.33L283.05 551.16c-17.41-17.41-17.41-45.64 0-63.05 17.41-17.41 45.64-17.41 63.05 0l119.17 119.17c17.41 17.41 17.41 45.64 0 63.05-17.41 17.41-45.64 17.41-63.05 0z');
    this.childNodes = [path];
  }
}
