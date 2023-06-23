import { fromEvent, Observable } from 'rxjs';
import { ThreeDotsSvg } from '../../../../../../../../type-dom/components/svgs/three-dots/three-dots';
import { SingleInputControl } from '../../../../../../../core/controls/basic/single-input/single-input.class';
import { MultilineInputControl } from '../../../../../../../core/controls/basic/multiline-input/multiline-input.class';
import { TextNode } from '../../../../../../../../type-dom/text-node/text-node.class';
import { FieldProperty } from '../../field-property/field-property';
import { PropertyInput } from '../../property-item/input/property-input.abstract';
import { ControlProperty } from '../control-property';

// 控件字段属性
export class ControlDefaultValueProperty extends PropertyInput {
  className: 'ControlDefaultValueProperty';
  formulaObservable: Observable<Event>;
  private readonly dotsSvg: ThreeDotsSvg;

  constructor(public parent: ControlProperty | FieldProperty) {
    super('默认值', '请输入默认值');
    this.className = 'ControlDefaultValueProperty';
    this.addAttrName('control-default-value-property');
    this.dotsSvg = new ThreeDotsSvg(this.button);
    this.dotsSvg.resetSize(16, 16);
    this.button.textNode.setText('');
    this.button.addChild(this.dotsSvg);
    this.button.setStyle('display', 'inline-block');
    this.content.setStyleObj({
      borderRadius: '4px 0 0 4px',
      borderRight: 'none',
    });
    this.formulaObservable = fromEvent(this.button.dom, 'click');
    // this.initEvents();
  }
  get formula(): string {
    if (this.parent instanceof ControlProperty) {
      if (!this.appRoot.selectedControl) throw Error('没有选中的控件');
      return this.appRoot.selectedControl?.attrObj.formula as string;
    } else {
      if (!this.appRoot.selectedTableDataCell) throw Error('没有选中的单元格控件');
      return this.appRoot.selectedTableDataCell?.attrObj.formula as string;
    }
  }
  set formula(value: string) {
    if (this.parent instanceof ControlProperty) {
      if (!this.appRoot.selectedControl) throw Error('没有选中的控件');
      this.appRoot.selectedControl.setAttribute('formula', value);
    } else {
      if (!this.appRoot.selectedTableDataCell) throw Error('没有选中的单元格控件');
      this.appRoot.selectedTableDataCell?.setAttribute('formula', value);
      return;
    }
  }
  // get formulaVisible(): boolean {
  //   return this.appRoot.selectedControl?.attrObj['formula-visible'] as boolean;
  // }
  // set formulaVisible(value: boolean) {
  //   this.appRoot.selectedControl?.setAttribute('formula-visible', value);
  // }
  // initEvents(): void {
  //   super.initEvents();
  //   // this.events.push(
  //   //   this.formulaObservable.subscribe(() => {
  //   //     console.log('this.button.dom click . ');
  //   //     // this.formulaVisible = true;
  //   //     // console.log('this.formulaVisible is ', this.formulaVisible);
  //   //     // this.appRoot.formulaVisibleObservable = fromEvent(this.btn.dom, 'click');
  //   //     console.log('this.appRoot.formulaVisibleObservable is ', this.appRoot.formulaVisibleObservable);
  //   //     // this.appRoot.dialog.setTitle('公式');
  //   //     // if (!this.textarea) {
  //   //     //   this.textarea = new Textarea(this.appRoot.dialog.container.body);
  //   //     //   this.textarea.setStyleObj({
  //   //     //     width: '100%',
  //   //     //     minHeight: '80px',
  //   //     //   });
  //   //     // }
  //   //     // // todo 加载之前保存的公式
  //   //     // this.textarea.setValue('');
  //   //     // this.appRoot.dialog.container.body.childNodes = [this.textarea];
  //   //     // this.appRoot.dialog.container.body.render();
  //   //     // this.appRoot.dialog.show();
  //   //   }),
  //   // );
  // }

  reset(value?: string): void {
    console.log('value is ', value);
    if (this.parent instanceof ControlProperty) {
      this.controlPropertyReset(value);
    }
    if (this.parent instanceof FieldProperty) {
      this.fieldPropertyReset(value);
    }
  }
  controlPropertyReset(value?: string): void {
    if (value !== undefined) { // 输入值的操作
      if (this.appRoot.selectedControl instanceof SingleInputControl ||
        this.appRoot.selectedControl instanceof MultilineInputControl) {
        this.appRoot.selectedControl?.resetDefaultValue(value);
      } else {
        console.error('this.appRoot.selectedControl is not SingleInputControl or MultilineInputControl . ');
      }
      return;
    }
    // 选中控件
    if (this.styleObj.display === 'none') this.setStyle('display', 'flex');
    if (this.appRoot.selectedControl instanceof SingleInputControl ||
      this.appRoot.selectedControl instanceof MultilineInputControl) {
      const defaultValue = this.appRoot.selectedControl?.defaultValue;
      if (defaultValue) {
        this.resetInputValue(defaultValue);
      } else {
        this.resetInputValue('');
      }
    } else {
      this.hide();
    }
  }
  fieldPropertyReset(value?: string): void {
    if (!this.appRoot.selectedTableDataCell) {
      console.error('this.appRoot.selectedTableDataCell is null .');
      return;
    }
    if (this.appRoot.selectedTableDataCell.control instanceof TextNode) {
      console.error('this.appRoot.selectedTableDataCell.control instanceof TextNode');
      return;
    }
    if (value !== undefined) { // 输入值的操作
      if (this.appRoot.selectedTableDataCell.control instanceof SingleInputControl ||
        this.appRoot.selectedTableDataCell.control instanceof MultilineInputControl) {
        this.appRoot.selectedTableDataCell.control.resetDefaultValue(value);
      } else {
        console.error('this.appRoot.selectedTableDataCell.control SingleInputControl or MultilineInputControl . ');
      }
      return;
    }
    if (this.appRoot.selectedTableDataCell.control instanceof SingleInputControl ||
      this.appRoot.selectedTableDataCell.control instanceof MultilineInputControl) {
      // 选中控件
      if (this.styleObj.display === 'none') this.setStyle('display', 'flex');
      const defaultValue = this.appRoot.selectedTableDataCell.control.defaultValue;
      if (defaultValue) {
        this.resetInputValue(defaultValue);
      } else {
        this.resetInputValue('');
      }
    } else {
      console.error('this.appRoot.selectedTableDataCell.control is not SingleInputControl or MultilineInputControl . ');
      this.hide();
    }
  }
}
