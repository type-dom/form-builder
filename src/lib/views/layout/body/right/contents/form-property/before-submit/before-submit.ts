import { fromEvent } from 'rxjs';
import { FormBuilder } from '../../../../../../../form-builder';
import { PropertyTextarea } from '../../property-item/textarea/property-textarea.abstract';
import { FormProperty } from '../form-property';

// form before submit
export class BeforeSubmitProperty extends PropertyTextarea {
  className: 'BeforeSubmitProperty';

  constructor(public parent: FormProperty) {
    super('beforeSubmit', '请输入监听函数');
    this.className = 'BeforeSubmitProperty';
    this.addAttrName('before-submit-property');
  }

  get formBuilder() {
    return this.parent.formBuilder;
  }

  get beforeSubmitStr(): string {
    return this.formBuilder.webDocument.propObj.attrObj[
      'before-submit'
    ] as string;
  }

  set beforeSubmitStr(value: string) {
    this.formBuilder.webDocument.setAttribute('before-submit', value);
  }

  reset(value?: string): void {
    if (value !== undefined) {
      // 输入值的操作
      return;
    }
    if (this.beforeSubmitStr) {
      this.resetInputValue(this.beforeSubmitStr);
    } else {
      this.resetInputValue('');
    }
    // }
  }

  update(context: string) {
    if (this.beforeSubmitStr) {
      this.resetInputValue(this.beforeSubmitStr);
    } else {
      this.resetInputValue('');
    }
  }

  addBeforeSubmit(value: string): void {
    this.beforeSubmitStr = value;
  }

  initEvents(): void {
    // super.initEvents();
    this.events.push(
      fromEvent(this.button.dom, 'click').subscribe(() => {
        this.addBeforeSubmit(this.content.dom.value);
      })
    );
  }
}
