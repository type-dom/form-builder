import { fromEvent, Observable } from 'rxjs';
import { TextNode } from 'type-dom.ts';
import { TdThreeDotsSvg } from 'type-dom-svgs';
import { TypeFormDesigner } from '../../../../../../../type-form-designer';
import { SingleInputControl } from '../../../../../../../core/control/basic/single-input/single-input.class';
import { MultilineInputControl } from '../../../../../../../core/control/basic/multiline-input/multiline-input.class';
import { FieldProperty } from '../../field-property/field-property';
import { PropertyInput } from '../../property-item/input/property-input.abstract';
import { ControlProperty } from '../control-property';
import { TypeControl } from '../../../../../../../core/control/type-control.abstract';

// 控件字段属性
export class ControlDefaultValueProperty extends PropertyInput {
  className: 'ControlDefaultValueProperty';
  formulaObservable: Observable<Event>;
  private readonly dotsSvg: TdThreeDotsSvg;

  constructor(public parent: ControlProperty | FieldProperty) {
    super('默认值', '请输入默认值');
    this.className = 'ControlDefaultValueProperty';
    this.addAttrName('control-default-value-property');
    this.dotsSvg = new TdThreeDotsSvg(this.button);
    this.dotsSvg.resetSize(16, 16);
    this.button.textNode.setText('');
    this.button.addChild(this.dotsSvg);
    this.button.setStyle('display', 'inline-block');
    this.content.setStyleObj({
      borderRadius: '4px 0 0 4px',
      borderRight: 'none',
    });
    this.formulaObservable = fromEvent(this.button.dom, 'click');
  }
  get formula(): string {
    if (this.parent instanceof ControlProperty) {
      if (!TypeFormDesigner.selectedControl) throw Error('没有选中的控件');
      return TypeFormDesigner.selectedControl?.attrObj.formula as string;
    } else {
      if (!TypeFormDesigner.selectedTableDataCell) throw Error('没有选中的单元格控件');
      return TypeFormDesigner.selectedTableDataCell?.attrObj.formula as string;
    }
  }
  set formula(value: string) {
    if (this.parent instanceof ControlProperty) {
      if (!TypeFormDesigner.selectedControl) throw Error('没有选中的控件');
      TypeFormDesigner.selectedControl.setAttribute('formula', value);
    } else {
      if (!TypeFormDesigner.selectedTableDataCell) throw Error('没有选中的单元格控件');
      TypeFormDesigner.selectedTableDataCell?.setAttribute('formula', value);
      return;
    }
  }
  // get formulaVisible(): boolean {
  //   return AppRoot.selectedControl?.attrObj['formula-visible'] as boolean;
  // }
  // set formulaVisible(value: boolean) {
  //   AppRoot.selectedControl?.setAttribute('formula-visible', value);
  // }
  // initEvents(): void {
  //   super.initEvents();
  //   // this.events.push(
  //   //   this.formulaObservable.subscribe(() => {
  //   //     console.log('this.button.dom click . ');
  //   //     // this.formulaVisible = true;
  //   //     // console.log('this.formulaVisible is ', this.formulaVisible);
  //   //     // AppRoot.formulaVisibleObservable = fromEvent(this.btn.dom, 'click');
  //   //     console.log('AppRoot.formulaVisibleObservable is ', AppRoot.formulaVisibleObservable);
  //   //     // AppRoot.dialog.setTitle('公式');
  //   //     // if (!this.textarea) {
  //   //     //   this.textarea = new Textarea(AppRoot.dialog.container.body);
  //   //     //   this.textarea.setStyleObj({
  //   //     //     width: '100%',
  //   //     //     minHeight: '80px',
  //   //     //   });
  //   //     // }
  //   //     // // todo 加载之前保存的公式
  //   //     // this.textarea.setValue('');
  //   //     // AppRoot.dialog.container.body.childNodes = [this.textarea];
  //   //     // AppRoot.dialog.container.body.render();
  //   //     // AppRoot.dialog.show();
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
  update(control: TypeControl | null) {
    const value = control?.defaultValue;
    if (this.parent instanceof ControlProperty) {
      this.controlPropertyReset(value);
    }
    if (this.parent instanceof FieldProperty) {
      this.fieldPropertyReset(value);
    }
  }
  controlPropertyReset(value?: string): void {
    if (value !== undefined) { // 输入值的操作
      if (TypeFormDesigner.selectedControl instanceof SingleInputControl ||
        TypeFormDesigner.selectedControl instanceof MultilineInputControl) {
        TypeFormDesigner.selectedControl?.resetDefaultValue(value);
      } else {
        console.error('AppRoot.selectedControl is not SingleInputControl or MultilineInputControl . ');
      }
      return;
    }
    // 选中控件
    if (this.styleObj.display === 'none') this.setStyle('display', 'flex');
    if (TypeFormDesigner.selectedControl instanceof SingleInputControl ||
      TypeFormDesigner.selectedControl instanceof MultilineInputControl) {
      const defaultValue = TypeFormDesigner.selectedControl?.defaultValue;
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
    if (!TypeFormDesigner.selectedTableDataCell) {
      console.error('AppRoot.selectedTableDataCell is null .');
      return;
    }
    if (TypeFormDesigner.selectedTableDataCell.control instanceof TextNode) {
      console.error('AppRoot.selectedTableDataCell.control instanceof TextNode');
      return;
    }
    if (value !== undefined) { // 输入值的操作
      if (TypeFormDesigner.selectedTableDataCell.control instanceof SingleInputControl ||
        TypeFormDesigner.selectedTableDataCell.control instanceof MultilineInputControl) {
        TypeFormDesigner.selectedTableDataCell.control.resetDefaultValue(value);
      } else {
        console.error('AppRoot.selectedTableDataCell.control SingleInputControl or MultilineInputControl . ');
      }
      return;
    }
    if (TypeFormDesigner.selectedTableDataCell.control instanceof SingleInputControl ||
      TypeFormDesigner.selectedTableDataCell.control instanceof MultilineInputControl) {
      // 选中控件
      if (this.styleObj.display === 'none') this.setStyle('display', 'flex');
      const defaultValue = TypeFormDesigner.selectedTableDataCell.control.defaultValue;
      if (defaultValue) {
        this.resetInputValue(defaultValue);
      } else {
        this.resetInputValue('');
      }
    } else {
      console.error('AppRoot.selectedTableDataCell.control is not SingleInputControl or MultilineInputControl . ');
      this.hide();
    }
  }
}
