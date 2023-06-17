import { Display } from '../../../../../type-node/web-style.enum';
import { DivBase } from '../../../../../type-node/type-element/html-element/div/div.abstract';
import { LeftContents } from '../contents';
import { BasicControlWrapper } from './basic-control-wrapper/basic-control-wrapper';
import { ComplexControlWrapper } from './complex-control-wrapper/complex-control-wrapper';

export class ControlWrapper extends DivBase {
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
