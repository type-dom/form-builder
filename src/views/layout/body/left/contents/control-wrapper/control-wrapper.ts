import { TypeDiv, Display } from 'type-dom.ts';
import { LeftContents } from '../contents';
import { BasicControlWrapper } from './basic-control-wrapper/basic-control-wrapper';
import { ComplexControlWrapper } from './complex-control-wrapper/complex-control-wrapper';

export class ControlWrapper extends TypeDiv {
  className: 'ControlWrapper';
  childNodes: [BasicControlWrapper, ComplexControlWrapper];
  formControlWrapper: BasicControlWrapper;
  staticControlWrapper: ComplexControlWrapper;

  constructor(public parent: LeftContents) {
    super();
    this.className = 'ControlWrapper';
    this.addStyleObj({
      display: Display.flex,
      flexDirection: 'column',
      padding: '10px',
    });
    this.addAttrName('control-wrapper');
    this.formControlWrapper = new BasicControlWrapper(this);
    this.staticControlWrapper = new ComplexControlWrapper(this);
    this.childNodes = [this.formControlWrapper, this.staticControlWrapper];
  }
}
