import { DivComponent } from '../../web-abstract/web-component/div-component/div-component.abstract';
import { StylePosition } from '../../web-element/web-style.enum';
import { WebLayout } from '../../layout/layout.class';
import { FormHeader } from './header/header';
import { FormBody } from './body/body';
import { FormFooter } from './footer/footer';

export class WebForm extends DivComponent {
  className: 'WebForm';
  childNodes: [FormHeader, FormBody, FormFooter];
  header: FormHeader;
  body: FormBody;
  footer: FormFooter;
  title: string;
  constructor(public parent: WebLayout) {
    super();
    this.className = 'WebForm';
    this.propObj = {
      styleObj: {
        position: StylePosition.relative,
        // boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
        backgroundColor: '#FFF',
        padding: '15px',
        height: '100%',
        overflowY: 'auto'
      },
      attrObj: {
        name: 'form-container'
      }
    };
    this.title = '表单名称';
    this.header = new FormHeader(this);
    this.body = new FormBody(this);
    this.footer = new FormFooter(this);
    if (this.editor.mode === 'readonly') {
      this.footer.hide();
    }
    this.childNodes = [this.header, this.body, this.footer];
  }

  // 设置表单标题
  setTitle(value: string): void {
    this.title = value;
    this.header.childNodes[0].setText(value);
    this.header.render();
  }
}
