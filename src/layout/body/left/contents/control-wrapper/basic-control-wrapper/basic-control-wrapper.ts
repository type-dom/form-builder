import { DivComponent } from '../../../../../../web-component/div-component/div-component.abstract';
import { BasicControlMenus } from '../../../../../../core/menus/basic-control-menus/basic-control-menus';
import { ExpandHeading } from '../../../../../../components/expand-heading';
import { ControlWrapper } from '../control-wrapper';

export class BasicControlWrapper extends DivComponent {
  className: 'BasicControlWrapper';
  childNodes: [ExpandHeading, BasicControlMenus];
  basicControlMenus = new BasicControlMenus(this);

  constructor(public parent: ControlWrapper) {
    super();
    this.className = 'BasicControlWrapper';
    this.propObj = {
      styleObj: {
        border: '1px solid #dddddd',
        borderRadius: '4px',
        listStyle: 'none',
        // padding-left: 0,
        padding: '6px',
        marginBottom: '5px',
      },
      attrObj: {
        name: 'basic-control-wrapper'
      }
    };

    const h3 = new ExpandHeading(this, '基础控件');
    this.basicControlMenus = new BasicControlMenus(this);
    this.childNodes = [h3, this.basicControlMenus];
  }
}
