import {distinctUntilChanged, Subject, Subscription} from 'rxjs';
import {TypeForm} from '../../../../../../../type-form';
import {TypeControl} from "../../../../../../../core/control/type-control.abstract";
import {TableDataCell} from "../../../../../../../components/form/form-item/table-item/table/data-cell/data-cell.class";
import {TableHead} from '../../../../../../../components/form/form-item/table-item/table/head/head.class';
import {FieldProperty} from '../../field-property/field-property';
import {PropertyInput} from '../../property-item/input/property-input.abstract';
import {ControlProperty} from '../control-property';
/**
 * 控件标题属性
 * 控件和字段会创建多次
 */
export class ControlTitleProperty extends PropertyInput {
  className: 'ControlTitleProperty';
  constructor(public parent: ControlProperty | FieldProperty) {
    super('控件标题', '请输入控件标题');
    console.log('control title property constructor . ');
    this.className = 'ControlTitleProperty';
    this.addAttrName('control-title-property');
    // console.log('this.dom is ', this.dom);
    // if (parent instanceof ControlProperty) {
    //   this.subject = FormEditor.controlSubject;
    // } else {
    //   this.subject = FormEditor.fieldSubject;
    // }
    this.initEvents();
  }
  initEvents() {
    super.initEvents();
    if (this.parent instanceof ControlProperty) {
      this.events.push(
        TypeForm.controlSubject
          .pipe(distinctUntilChanged())
          .subscribe((control) => this.listenControl(control)));
    } else {
      this.events.push(
        TypeForm.fieldSubject
          .pipe(distinctUntilChanged())
          .subscribe((cell) => this.listenCell(cell)));
    }
  }
  // parent instanceof ControlProperty
  listenControl(control: TypeControl | null) {
    if (this.styleObj.display === 'none') this.setStyle('display', 'block');
    const value = control?.formItem.labelText?.nodeValue;
    console.log('value is ', value);
    if (value !== undefined) {
      if (this.styleObj.display === 'none') this.show();
      if (control?.formItem.labelText?.nodeValue) {
        this.resetInputValue(control.formItem.labelText.nodeValue);
      } else {
        this.resetInputValue('');
      }
    } else {
    //   todo
    }
  }
  listenCell(cell: TableDataCell | null) {
    if (this.styleObj.display === 'none') this.setStyle('display', 'block');
    const tableHeader = cell?.parent.parent.config?.tableHeader;
    // console.log('tableHeader is ', tableHeader);
    const index = TypeForm.selectedTableDataCell?.index;
    // console.log('index is ', index);
    if (tableHeader && index !== undefined) {
      // console.log('tableHeader[index].label is ', tableHeader[index].label);
      this.resetInputValue(tableHeader[index].label);
    } else {
      this.resetInputValue('');
    }
  }
  reset(value?: string): void {
    console.log('value is ', value);
    if (this.parent instanceof ControlProperty) {
      this.controlPropertyReset(value);
    }
    if (this.parent instanceof FieldProperty) {
      this.fieldPropertyReset(value);
    }
  }
  // 选中控件时，重置控件属性 ---> 重置控件标题
  controlPropertyReset(value?: string): void {
    if (value !== undefined) {
      TypeForm.selectedControl?.resetLabelText(this.content.dom.value);
      return;
    }
  }
  fieldPropertyReset(value?: string): void {
    if (!TypeForm.selectedTableDataCell) {
      console.error('AppRoot.selectedTableDataCell is null .');
      return;
    }
    if (value !== undefined) {
      const table = TypeForm.selectedTableDataCell.parent.parent;
      const tableHeader = TypeForm.selectedTableDataCell.parent.parent.config?.tableHeader;
      const index = TypeForm.selectedTableDataCell.index;
      if (tableHeader && index !== undefined) {
        tableHeader[index].label = value;
        // 修改表头标签
        (table.childNodes[0] as TableHead).childNodes[index].childNodes[0].setText(value);
        (table.childNodes[0] as TableHead).childNodes[index].render();
      }
      console.log('tableHeader is ', tableHeader);
      return;
    }
  }
}
