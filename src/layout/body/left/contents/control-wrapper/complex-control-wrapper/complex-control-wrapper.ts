import { WebComponent } from '../../../../../../type-node/type-element/web-component/web-component.abstract';
import { ComplexMenus } from '../../../../../../core/menus/complex-menus/complex-menus';
import { ExpandHeading } from '../../../../../../components/expand-heading';
import { ControlWrapper } from '../control-wrapper';

export class ComplexControlWrapper extends WebComponent {
  className: 'ComplexControlWrapper';
  childNodes: [ExpandHeading, ComplexMenus];
  complexControlMenus: ComplexMenus;
  constructor(public parent: ControlWrapper) {
    super();
    this.className = 'ComplexControlWrapper';
    this.propObj = {
      styleObj: {
        border: '1px solid #dddddd',
        borderRadius: '4px',
        listStyle: 'none',
        // padding-left: 0;
        padding: '6px',
        marginBottom: '5px'
      },
      attrObj: {
        name: 'complex-control-wrapper'
      }
    };

    const h3 = new ExpandHeading(this, '高级控件');
    this.complexControlMenus = new ComplexMenus(this);
    this.childNodes = [h3, this.complexControlMenus];
  }

}
