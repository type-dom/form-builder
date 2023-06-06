import { WebForm } from '../form';
import { DivComponent } from '../../../web-abstract/web-component/div-component/div-component.abstract';

// 表单主体部分的内容要另外添加。
export class FormBody extends DivComponent {
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
