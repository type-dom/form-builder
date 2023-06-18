import { fromEvent, Observable } from 'rxjs';
import { TypeButton } from '../../../../type-element/type-html/button/button.abstract';
import { buttonStyle } from '../../../../type-element/type-html/button/button.const';
import { WebTextNode } from '../../../../web-text-node/web-text-node.class';
import { FormFooter } from '../footer';
export class SubmitButton extends TypeButton {
  nodeName: 'button';
  className: 'SubmitButton';
  dom: HTMLButtonElement;
  childNodes: [WebTextNode];
  textNode: WebTextNode;
  submitObservable: Observable<Event>;
  constructor(public parent: FormFooter) {
    super();
    this.nodeName = 'button';
    this.dom = document.createElement(this.nodeName);

    this.className = 'SubmitButton';
    this.propObj = {
      attrObj: {
        type: 'submit'
      },
      styleObj: buttonStyle,
    };
    this.textNode = new WebTextNode(this, '提交');
    this.childNodes = [this.textNode];
    this.submitObservable = fromEvent(this.dom, 'click');
    this.initEvents();
  }
  get beforeSubmitStr(): string {
    return this.editor.webDocument.attrObj['before-submit'] as string;
  }
  get afterSubmitStr(): string {
    return this.editor.webDocument.attrObj['after-submit'] as string;
  }
  initEvents(): void {
    this.events.push(
      this.submitObservable.subscribe(() => {
        console.log('submit . ');
        console.log('this.editor.exampleData is ', this.editor.formData);
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
    console.log('this.editor.webDocument', this.editor.webDocument);
    if (this.afterSubmitStr) {
      this.createFun(this.afterSubmitStr);
    }
  }
  createFun(value: string | number | boolean): void {
    // eslint-disable-next-line no-new-func
    const fun = new Function('return ' + value);
    fun(this.editor.webDocument);
  }
}
