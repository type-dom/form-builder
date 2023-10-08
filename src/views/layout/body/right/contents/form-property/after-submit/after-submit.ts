import { fromEvent } from 'rxjs';
import { TypeForm } from '../../../../../../../type-form';
import { PropertyTextarea } from '../../property-item/textarea/property-textarea.abstract';
import { FormProperty } from '../form-property';
import {TableDataCell} from "../../../../../../../components/form/form-item/table-item/table/data-cell/data-cell.class";
import {TypeControl} from "../../../../../../../core/control/type-control.abstract";

// form after submit
export class AfterSubmitProperty extends PropertyTextarea {
  className: 'AfterSubmitProperty';
  constructor(public parent: FormProperty) {
    super('afterSubmit', '请输入监听函数');
    this.className = 'AfterSubmitProperty';
    this.addAttrName('after-submit-property');
  }
  get afterSubmitStr(): string {
    return TypeForm.webDocument.propObj.attrObj['after-submit'] as string;
  }
  set afterSubmitStr(value: string) {
    TypeForm.webDocument.setAttribute('after-submit', value);
  }
  reset(value?: string): void {
    if (value !== undefined) { // 输入值的操作
      return;
    }

    if (this.afterSubmitStr) {
      this.resetInputValue(this.afterSubmitStr);
    } else {
      this.resetInputValue('');
    }
    // }
  }
  listenControl(control: TypeControl) {
    this.update();
  }
  listenCell(cell: TableDataCell) {
  }

  update() {
    if (this.afterSubmitStr) {
      this.resetInputValue(this.afterSubmitStr);
    } else {
      this.resetInputValue('');
    }
  }
  addAfterSubmit(value: string): void {
    this.afterSubmitStr = value;
  }
  initEvents(): void {
    // super.initEvents();
    this.events.push(
      fromEvent(this.button.dom, 'click').subscribe(() => {
        this.addAfterSubmit(this.content.dom.value);
      }),

    );
  }
}
