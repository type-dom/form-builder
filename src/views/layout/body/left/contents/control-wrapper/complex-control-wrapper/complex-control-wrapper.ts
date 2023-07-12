import { TypeContainer } from 'type-dom.ts';
import { ExpandHeading } from '../../../../../../../components/form/expand-heading';
import { ComplexMenus } from '../../../../../../../core/menus/complex-menus/complex-menus';
import { ControlWrapper } from '../control-wrapper';

export class ComplexControlWrapper extends TypeContainer {
  className: 'ComplexControlWrapper';
  childNodes: [ExpandHeading, ComplexMenus];
  complexControlMenus: ComplexMenus;
  constructor(public parent: ControlWrapper) {
    super();
    this.className = 'ComplexControlWrapper';
    this.addStyleObj({
      border: '1px solid #dddddd',
      borderRadius: '4px',
      listStyle: 'none',
      // padding-left: 0;
      padding: '6px',
      marginBottom: '5px'
    });
    this.addAttrName('complex-control-wrapper');

    const h3 = new ExpandHeading(this, '高级控件');
    this.complexControlMenus = new ComplexMenus(this);
    this.childNodes = [h3, this.complexControlMenus];
  }

}
