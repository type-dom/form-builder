import { TypeContainer } from '../../../../../../../../type-dom/type-element/type-container/type-container.abstract';
import { BasicMenus } from '../../../../../../../core/menus/basic-menus/basic-menus';
import { ControlWrapper } from '../control-wrapper';
import { ExpandHeading } from '../../../../../../../components/form/expand-heading';
export class BasicControlWrapper extends TypeContainer {
  className: 'BasicControlWrapper';
  childNodes: [ExpandHeading, BasicMenus];
  basicControlMenus = new BasicMenus(this);
  constructor(public parent: ControlWrapper) {
    super();
    this.className = 'BasicControlWrapper';
    this.addStyleObj({
      border: '1px solid #dddddd',
      borderRadius: '4px',
      listStyle: 'none',
      // padding-left: 0,
      padding: '6px',
      marginBottom: '5px',
    });
    this.addAttrName('basic-control-wrapper');
    const h3 = new ExpandHeading(this, '基础控件');
    this.basicControlMenus = new BasicMenus(this);
    this.childNodes = [h3, this.basicControlMenus];
  }
}
