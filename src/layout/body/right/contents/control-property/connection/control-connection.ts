import { fromEvent, Observable } from 'rxjs';
import { ThreeDotsSvg } from '../../../../../../type-node/components/svgs/three-dots/three-dots';
import { ConnectionControl } from '../../../../../../core/controls/complex/connection/connection.class';
import { PropertySpan } from '../../property-item/span/property-span.abstract';
import { ControlProperty } from '../control-property';
import { FieldProperty } from '../../field-property/field-property';

// 控件字段属性
export class ControlConnectionProperty extends PropertySpan {
  className: 'ControlConnectionProperty';
  private readonly dotsSvg: ThreeDotsSvg;
  connectionObservable: Observable<Event>;

  constructor(public parent: ControlProperty | FieldProperty) {
    super('关联选项');
    this.resetText('显示关联值');
    this.className = 'ControlConnectionProperty';
    this.setAttrName('control-connection-property');
    this.dotsSvg = new ThreeDotsSvg(this.button);
    this.dotsSvg.resetSize(16, 16);
    this.button.textNode.setText('');
    this.button.addChild(this.dotsSvg);
    this.button.setStyle('display', 'inline-block'); // 默认是隐藏的
    this.connectionObservable = fromEvent(this.button.dom, 'click');
    // this.initEvents();
  }
  // initEvents(): void {
  //   this.events.push(
  //     fromEvent(this.button.dom, 'click').subscribe(() => {
  //       console.log('this.btn.dom click . ');
  //       // this.editor.formulaVisibleObservable = fromEvent(this.btn.dom, 'click');
  //       console.log('this.editor.connectionObservable is ', this.editor.connectionObservable);
  //       // this.editor.selectedControl?.resetConnectionItem('ddd');
  //       // console.log('this.selectionControl.connectionItem is ', this.editor.selectedControl?.connectionItem);
  //     }),
  //   );
  // }

  reset(label?:string, value?: string): void {
    console.log('value is ', value);
    if (this.parent instanceof ControlProperty) {
      this.controlPropertyReset(label, value);
    }
    if (this.parent instanceof FieldProperty) {
      this.fieldPropertyReset(label, value);
    }
  }
  controlPropertyReset(label?:string, value?: string): void {
    if (value !== undefined && label !== undefined) { // 输入值的操作
      if (this.editor.selectedControl instanceof ConnectionControl) {
        this.editor.selectedControl.resetConnectionConfig(label, value);
        this.resetText(label);
      } else {
        console.error('当前控件不是关联选项控件.');
      }
      return;
    }
    if (this.editor.selectedControl instanceof ConnectionControl) {
      // 选中控件
      if (this.styleObj.display === 'none') this.setStyle('display', 'flex');
      const label = this.editor.selectedControl?.connectionConfigLabel;
      if (label) {
        this.resetText(label);
      } else {
        this.resetText('显示关联值');
      }
    } else {
      this.hide();
    }
  }
  fieldPropertyReset(label?:string, value?: string): void {
    if (value !== undefined && label !== undefined) { // 输入值的操作
      if (this.editor.selectedTableDataCell?.control instanceof ConnectionControl) {
        this.editor.selectedTableDataCell.control.resetConnectionConfig(label, value);
        this.resetText(label);
      } else {
        console.error('当前控件不是关联选项控件');
      }
      return;
    }
    if (this.editor.selectedTableDataCell?.control instanceof ConnectionControl) {
      if (this.styleObj.display === 'none') this.setStyle('display', 'flex');
      const label = this.editor.selectedTableDataCell.control?.connectionConfigLabel;
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
