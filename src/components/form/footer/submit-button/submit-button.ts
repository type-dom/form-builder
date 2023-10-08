import { fromEvent, Observable } from 'rxjs';
import { TextNode, TypeButton, buttonStyle } from 'type-dom.ts';
import { TypeForm } from '../../../../type-form';
import { FormFooter } from '../footer';
export class SubmitButton extends TypeButton {
  className: 'SubmitButton';
  textNode: TextNode;
  submitObservable: Observable<Event>;
  constructor(public parent: FormFooter) {
    super();
    this.className = 'SubmitButton';
    this.propObj = {
      attrObj: {
        type: 'submit'
      },
      styleObj: buttonStyle,
    };
    this.textNode = new TextNode(this, '提交');
    this.submitObservable = fromEvent(this.dom, 'click');
    this.initEvents();
  }
  get beforeSubmitStr(): string {
    return TypeForm.webDocument.attrObj['before-submit'] as string;
  }
  get afterSubmitStr(): string {
    return TypeForm.webDocument.attrObj['after-submit'] as string;
  }
  initEvents(): void {
    this.events.push(
      this.submitObservable.subscribe(() => {
        console.log('submit . ');
        console.log('AppRoot.exampleData is ', TypeForm.formData);
        this.submit();
      })
    );
  }
  submit(): void {
    //  todo 组装需要提交的数据
    if (this.beforeSubmitStr) {
      this.createFun(this.beforeSubmitStr);
    }
    // todo submit方法 是否也要设计表单时确定 ？？？
    console.log('AppRoot.webDocument', TypeForm.webDocument);
    if (this.afterSubmitStr) {
      this.createFun(this.afterSubmitStr);
    }
  }
  createFun(value: string | number | boolean): void {
    // eslint-disable-next-line no-new-func
    const fun = new Function('return ' + value);
    fun(TypeForm.webDocument);
  }
}
