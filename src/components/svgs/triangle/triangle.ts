import { SvgComponent } from '../../../web-abstract/web-component/svg-component/svg-component.abstract';
import { HtmlElement } from '../../../web-element/html-element/html-element.abstract';
import { SvgPath } from '../../../web-element/svg-element/path/path.class';

export class TriangleSvg extends SvgComponent {
  className: 'TriangleSvg';
  childNodes: [SvgPath];

  constructor(public parent: HtmlElement) {
    super();
    this.className = 'TriangleSvg';
    this.addAttrObj({
      viewBox: '0 0 1638 1024',
      width: '24',
      height: '30',
      fill: '#fff',
    });
    this.addStyleObj({
      color: '#fff',
      verticalAlign: 'middle',
      marginTop: '3px',
      marginBottom: '6px',
      marginRight: '10px',
    });
    const path = new SvgPath(this);
    path.setData('M819.2 955.6992L1547.3664 45.4656H91.136z');
    this.childNodes = [path];
  }
}
