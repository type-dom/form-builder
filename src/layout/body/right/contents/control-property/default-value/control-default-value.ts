import { fromEvent, Observable } from 'rxjs';
import { ThreeDotsSvg } from '../../../../../../components/svgs/three-dots/three-dots';
import { SingleInputControl } from '../../../../../../core/controls/basic/single-input/single-input.class';
import { MultilineInputControl } from '../../../../../../core/controls/basic/multiline-input/multiline-input.class';
import { WebTextNode } from '../../../../../../web-text-node/web-text-node.class';
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
    this.dotsSvg.reset(16, 16);
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
      if (!this.editor.selectedControl) throw Error('没有选中的控件');
      return this.editor.selectedControl?.attrObj.formula as string;
    } else {
      if (!this.editor.selectedTableDataCell) throw Error('没有选中的单元格控件');
      return this.editor.selectedTableDataCell?.attrObj.formula as string;
    }
  }
  set formula(value: string) {
    if (this.parent instanceof ControlProperty) {
      if (!this.editor.selectedControl) throw Error('没有选中的控件');
      this.editor.selectedControl.setAttribute('formula', value);
    } else {
      if (!this.editor.selectedTableDataCell) throw Error('没有选中的单元格控件');
      this.editor.selectedTableDataCell?.setAttribute('formula', value);
      return;
    }
  }
  // get formulaVisible(): boolean {
  //   return this.editor.selectedControl?.attrObj['formula-visible'] as boolean;
  // }
  // set formulaVisible(value: boolean) {
  //   this.editor.selectedControl?.setAttribute('formula-visible', value);
  // }
  // initEvents(): void {
  //   super.initEvents();
  //   // this.events.push(
  //   //   this.formulaObservable.subscribe(() => {
  //   //     console.log('this.button.dom click . ');
  //   //     // this.formulaVisible = true;
  //   //     // console.log('this.formulaVisible is ', this.formulaVisible);
  //   //     // this.editor.formulaVisibleObservable = fromEvent(this.btn.dom, 'click');
  //   //     console.log('this.editor.formulaVisibleObservable is ', this.editor.formulaVisibleObservable);
  //   //     // this.editor.dialog.setTitle('公式');
  //   //     // if (!this.textarea) {
  //   //     //   this.textarea = new Textarea(this.editor.dialog.container.body);
  //   //     //   this.textarea.setStyleObj({
  //   //     //     width: '100%',
  //   //     //     minHeight: '80px',
  //   //     //   });
  //   //     // }
  //   //     // // todo 加载之前保存的公式
  //   //     // this.textarea.setValue('');
  //   //     // this.editor.dialog.container.body.childNodes = [this.textarea];
  //   //     // this.editor.dialog.container.body.render();
  //   //     // this.editor.dialog.show();
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
      if (this.editor.selectedControl instanceof SingleInputControl ||
        this.editor.selectedControl instanceof MultilineInputControl) {
        this.editor.selectedControl?.resetDefaultValue(value);
      } else {
        console.error('this.editor.selectedControl is not SingleInputControl or MultilineInputControl . ');
      }
      return;
    }
    // 选中控件
    if (this.styleObj.display === 'none') this.setStyle('display', 'flex');
    if (this.editor.selectedControl instanceof SingleInputControl ||
      this.editor.selectedControl instanceof MultilineInputControl) {
      const defaultValue = this.editor.selectedControl?.defaultValue;
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
    if (!this.editor.selectedTableDataCell) {
      console.error('this.editor.selectedTableDataCell is null .');
      return;
    }
    if (this.editor.selectedTableDataCell.control instanceof WebTextNode) {
      console.error('this.editor.selectedTableDataCell.control instanceof WebTextNode');
      return;
    }
    if (value !== undefined) { // 输入值的操作
      if (this.editor.selectedTableDataCell.control instanceof SingleInputControl ||
        this.editor.selectedTableDataCell.control instanceof MultilineInputControl) {
        this.editor.selectedTableDataCell.control.resetDefaultValue(value);
      } else {
        console.error('this.editor.selectedTableDataCell.control SingleInputControl or MultilineInputControl . ');
      }
      return;
    }
    if (this.editor.selectedTableDataCell.control instanceof SingleInputControl ||
      this.editor.selectedTableDataCell.control instanceof MultilineInputControl) {
      // 选中控件
      if (this.styleObj.display === 'none') this.setStyle('display', 'flex');
      const defaultValue = this.editor.selectedTableDataCell.control.defaultValue;
      if (defaultValue) {
        this.resetInputValue(defaultValue);
      } else {
        this.resetInputValue('');
      }
    } else {
      console.error('this.editor.selectedTableDataCell.control is not SingleInputControl or MultilineInputControl . ');
      this.hide();
    }
  }
}
