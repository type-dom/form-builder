import { WebForm } from '../form';
import { DivBase } from '../../../type-node/type-element/type-html/div/div.abstract';

// 表单主体部分的内容要另外添加。
export class FormBody extends DivBase {
  className: 'FormBody';

  constructor(public parent: WebForm) {
    super();
    this.className = 'FormBody';
    this.propObj = {
      styleObj: {
        padding: '30px 20px',
        fontSize: '14px',
        wordBreak: 'break-all',
      },
      attrObj: {
        name: 'form-body'
      }
    };
  }
}
