import { fromEvent, Observable } from 'rxjs';
import { TextNode } from '@type-dom/framework';
import { TdThreeDotsSvg } from '@type-dom/svgs';
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

  get formBuilder() {
    return this.parent.formBuilder;
  }

  get formula(): string {
    if (this.parent instanceof ControlProperty) {
      if (!this.formBuilder.selectedControl) throw Error('没有选中的控件');
      return this.formBuilder.selectedControl?.attrObj.formula as string;
    } else {
      if (!this.formBuilder.selectedTableDataCell)
        throw Error('没有选中的单元格控件');
      return this.formBuilder.selectedTableDataCell?.attrObj.formula as string;
    }
  }

  set formula(value: string) {
    if (this.parent instanceof ControlProperty) {
      if (!this.formBuilder.selectedControl) throw Error('没有选中的控件');
      this.formBuilder.selectedControl.setAttribute('formula', value);
    } else {
      if (!this.formBuilder.selectedTableDataCell)
        throw Error('没有选中的单元格控件');
      this.formBuilder.selectedTableDataCell?.setAttribute('formula', value);
      return;
    }
  }

  // get formulaVisible(): boolean {
  //   return this.formBuilder.selectedControl?.attrObj['formula-visible'] as boolean;
  // }
  // set formulaVisible(value: boolean) {
  //   this.formBuilder.selectedControl?.setAttribute('formula-visible', value);
  // }
  // initEvents(): void {
  //   super.initEvents();
  //   // this.events.push(
  //   //   this.formulaObservable.subscribe(() => {
  //   //     console.log('this.button.dom click . ');
  //   //     // this.formulaVisible = true;
  //   //     // console.log('this.formulaVisible is ', this.formulaVisible);
  //   //     // this.formBuilder.formulaVisibleObservable = fromEvent(this.btn.dom, 'click');
  //   //     console.log('this.formBuilder.formulaVisibleObservable is ', this.formBuilder.formulaVisibleObservable);
  //   //     // this.formBuilder.dialog.setTitle('公式');
  //   //     // if (!this.textarea) {
  //   //     //   this.textarea = new Textarea(this.formBuilder.dialog.container.body);
  //   //     //   this.textarea.setStyleObj({
  //   //     //     width: '100%',
  //   //     //     minHeight: '80px',
  //   //     //   });
  //   //     // }
  //   //     // // todo 加载之前保存的公式
  //   //     // this.textarea.setValue('');
  //   //     // this.formBuilder.dialog.container.body.childNodes = [this.textarea];
  //   //     // this.formBuilder.dialog.container.body.render();
  //   //     // this.formBuilder.dialog.show();
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
    if (value !== undefined) {
      // 输入值的操作
      if (
        this.formBuilder.selectedControl instanceof SingleInputControl ||
        this.formBuilder.selectedControl instanceof MultilineInputControl
      ) {
        this.formBuilder.selectedControl?.resetDefaultValue(value);
      } else {
        console.error(
          'this.formBuilder.selectedControl is not SingleInputControl or MultilineInputControl . '
        );
      }
      return;
    }
    // 选中控件
    if (this.styleObj.display === 'none') this.setStyle('display', 'flex');
    if (
      this.formBuilder.selectedControl instanceof SingleInputControl ||
      this.formBuilder.selectedControl instanceof MultilineInputControl
    ) {
      const defaultValue = this.formBuilder.selectedControl?.defaultValue;
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
    if (!this.formBuilder.selectedTableDataCell) {
      console.error('this.formBuilder.selectedTableDataCell is null .');
      return;
    }
    if (this.formBuilder.selectedTableDataCell.control instanceof TextNode) {
      console.error(
        'this.formBuilder.selectedTableDataCell.control instanceof TextNode'
      );
      return;
    }
    if (value !== undefined) {
      // 输入值的操作
      if (
        this.formBuilder.selectedTableDataCell.control instanceof
          SingleInputControl ||
        this.formBuilder.selectedTableDataCell.control instanceof
          MultilineInputControl
      ) {
        this.formBuilder.selectedTableDataCell.control.resetDefaultValue(value);
      } else {
        console.error(
          'this.formBuilder.selectedTableDataCell.control SingleInputControl or MultilineInputControl . '
        );
      }
      return;
    }
    if (
      this.formBuilder.selectedTableDataCell.control instanceof
        SingleInputControl ||
      this.formBuilder.selectedTableDataCell.control instanceof
        MultilineInputControl
    ) {
      // 选中控件
      if (this.styleObj.display === 'none') this.setStyle('display', 'flex');
      const defaultValue =
        this.formBuilder.selectedTableDataCell.control.defaultValue;
      if (defaultValue) {
        this.resetInputValue(defaultValue);
      } else {
        this.resetInputValue('');
      }
    } else {
      console.error(
        'this.formBuilder.selectedTableDataCell.control is not SingleInputControl or MultilineInputControl . '
      );
      this.hide();
    }
  }
}
