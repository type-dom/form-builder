import { fromEvent, Observable } from 'rxjs';
import { TdThreeDotsSvg } from '@type-dom/svgs';
import { FormBuilder } from '../../../../../../../form-builder';
import { TypeControl } from '../../../../../../../core/control/type-control.abstract';
import { ConnectionControl } from '../../../../../../../core/control/complex/connection/connection.class';
import { PropertySpan } from '../../property-item/span/property-span.abstract';
import { ControlProperty } from '../control-property';
import { FieldProperty } from '../../field-property/field-property';

// 控件关联属性
export class ControlConnectionProperty extends PropertySpan {
  className: 'ControlConnectionProperty';
  private readonly dotsSvg: TdThreeDotsSvg;
  connectionObservable: Observable<Event>;

  constructor(public parent: ControlProperty | FieldProperty) {
    super('关联选项');
    this.resetText('显示关联值');
    this.className = 'ControlConnectionProperty';
    this.setAttrName('control-connection-property');
    this.dotsSvg = new TdThreeDotsSvg(this.button);
    this.dotsSvg.resetSize(16, 16);
    this.button.textNode.setText('');
    this.button.addChild(this.dotsSvg);
    this.button.setStyle('display', 'inline-block'); // 默认是隐藏的
    this.connectionObservable = fromEvent(this.button.dom, 'click');
  }

  get formBuilder() {
    return this.parent.formBuilder;
  }

  // initEvents(): void {
  //   this.events.push(
  //     fromEvent(this.button.dom, 'click').subscribe(() => {
  //       console.log('this.btn.dom click . ');
  //       // this.formBuilder.formulaVisibleObservable = fromEvent(this.btn.dom, 'click');
  //       console.log('this.formBuilder.connectionObservable is ', this.formBuilder.connectionObservable);
  //       // this.formBuilder.selectedControl?.resetConnectionItem('ddd');
  //       // console.log('this.formBuilder.selectionControl.connectionItem is ', this.formBuilder.selectedControl?.connectionItem);
  //     }),
  //   );
  // }

  reset(label?: string, value?: string): void {
    console.log('value is ', value);
    if (this.parent instanceof ControlProperty) {
      this.controlPropertyReset(label, value);
    }
    if (this.parent instanceof FieldProperty) {
      this.fieldPropertyReset(label, value);
    }
  }

  update(control: TypeControl | null) {
    if (control instanceof ConnectionControl) {
      if (this.styleObj.display === 'none') this.setStyle('display', 'flex');
      const label = control?.connectionConfigLabel;
      if (label) {
        this.resetText(label);
      } else {
        this.resetText('显示关联值');
      }
      return;
    } else {
      this.hide();
    }
  }

  controlPropertyReset(label?: string, value?: string): void {
    if (value !== undefined && label !== undefined) {
      // 输入值的操作
      if (this.formBuilder.selectedControl instanceof ConnectionControl) {
        this.formBuilder.selectedControl.resetConnectionConfig(label, value);
        this.resetText(label);
      } else {
        console.error('当前控件不是关联选项控件.');
      }
      return;
    }
    if (this.formBuilder.selectedControl instanceof ConnectionControl) {
      // 选中控件
      if (this.styleObj.display === 'none') this.setStyle('display', 'flex');
      const label = this.formBuilder.selectedControl?.connectionConfigLabel;
      if (label) {
        this.resetText(label);
      } else {
        this.resetText('显示关联值');
      }
    } else {
      this.hide();
    }
  }

  fieldPropertyReset(label?: string, value?: string): void {
    if (value !== undefined && label !== undefined) {
      // 输入值的操作
      if (
        this.formBuilder.selectedTableDataCell?.control instanceof
        ConnectionControl
      ) {
        this.formBuilder.selectedTableDataCell.control.resetConnectionConfig(
          label,
          value
        );
        this.resetText(label);
      } else {
        console.error('当前控件不是关联选项控件');
      }
      return;
    }
    if (
      this.formBuilder.selectedTableDataCell?.control instanceof
      ConnectionControl
    ) {
      if (this.styleObj.display === 'none') this.setStyle('display', 'flex');
      const label =
        this.formBuilder.selectedTableDataCell.control?.connectionConfigLabel;
      if (label) {
        this.resetText(label);
      } else {
        this.resetText('显示关联值');
      }
      return;
    } else {
      this.hide();
    }
  }
}
