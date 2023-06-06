import { Display } from '../../../../../web-element/web-style.enum';
import { DivComponent } from '../../../../../web-abstract/web-component/div-component/div-component.abstract';
import { LeftContents } from '../contents';
import { BasicControlWrapper } from './basic-control-wrapper/basic-control-wrapper';
import { ComplexControlWrapper } from './complex-control-wrapper/complex-control-wrapper';

export class ControlWrapper extends DivComponent {
  className: 'ControlWrapper';
  childNodes: [BasicControlWrapper, ComplexControlWrapper];
  formControlWrapper: BasicControlWrapper;
  staticControlWrapper: ComplexControlWrapper;

  constructor(public parent: LeftContents) {
    super();
    this.className = 'ControlWrapper';
    this.propObj = {
      styleObj: {
        display: Display.flex,
        flexDirection: 'column',
        padding: '10px',
      },
      attrObj: {
        name: 'control-wrapper',
      }
    };
    this.formControlWrapper = new BasicControlWrapper(this);
    this.staticControlWrapper = new ComplexControlWrapper(this);
    this.childNodes = [this.formControlWrapper, this.staticControlWrapper];
  }
}
