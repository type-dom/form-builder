import { SvgBase } from '../../../type-node/type-element/type-svg/svg/svg.abstract';
import { TypeHtml } from '../../../type-node/type-element/type-html/type-html.abstract';
import { SvgPath } from '../../../type-node/web-element/svg-element/path/path.class';

export class TriangleSvg extends SvgBase {
  className: 'TriangleSvg';
  childNodes: [SvgPath];

  constructor(public parent: TypeHtml) {
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
