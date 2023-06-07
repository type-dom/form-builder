import { WebComponent } from '../../../../../../web-element/web-abstract/web-component/web-component.abstract';
import { BasicMenus } from '../../../../../../core/menus/basic-menus/basic-menus';
import { ExpandHeading } from '../../../../../../components/expand-heading';
import { ControlWrapper } from '../control-wrapper';
export class BasicControlWrapper extends WebComponent {
  className: 'BasicControlWrapper';
  childNodes: [ExpandHeading, BasicMenus];
  basicControlMenus = new BasicMenus(this);

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
    this.basicControlMenus = new BasicMenus(this);
    this.childNodes = [h3, this.basicControlMenus];
  }
}
