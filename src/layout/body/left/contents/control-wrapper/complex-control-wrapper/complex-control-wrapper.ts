import { DivComponent } from '../../../../../../web-component/div-component/div-component.abstract';
import { ComplexControlMenus } from '../../../../../../core/menus/complex-control-menus/complex-control-menus';
import { ExpandHeading } from '../../../../../../components/expand-heading';
import { ControlWrapper } from '../control-wrapper';

export class ComplexControlWrapper extends DivComponent {
  className: 'ComplexControlWrapper';
  childNodes: [ExpandHeading, ComplexControlMenus];
  complexControlMenus: ComplexControlMenus;
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
    this.complexControlMenus = new ComplexControlMenus(this);
    this.childNodes = [h3, this.complexControlMenus];
  }

}
