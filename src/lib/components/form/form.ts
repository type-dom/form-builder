import { StylePosition, TypeDiv, TypeRoot } from '@type-dom/framework';
import { FormBuilder } from '../../form-builder';
import { LayoutWrapper } from '../../views/layout/layout';
import { FormHeader } from './header/header';
import { FormBody } from './body/body';
import { FormFooter } from './footer/footer';

export class WebForm extends TypeDiv {
  className: 'WebForm';
  childNodes: [FormHeader, FormBody, FormFooter];
  header: FormHeader;
  body: FormBody;
  footer: FormFooter;
  title: string;

  constructor(public parent: LayoutWrapper | FormBuilder) {
    super();
    this.className = 'WebForm';
    this.propObj = {
      styleObj: {
        position: StylePosition.relative,
        // boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
        backgroundColor: '#FFF',
        padding: '15px',
        height: '100%',
        overflowY: 'auto',
      },
      attrObj: {
        name: 'form-container',
      },
    };
    this.title = '表单名称';
    this.header = new FormHeader(this);
    this.body = new FormBody(this);
    this.footer = new FormFooter(this);
    this.formBuilder.mode.hideFormFooter(this);
    this.childNodes = [this.header, this.body, this.footer];
  }

  get formBuilder() {
    return this.parent.formBuilder;
  }

  // 设置表单标题
  setTitle(value: string): void {
    this.title = value;
    this.header.childNodes[0].setText(value);
    this.header.render();
  }
}
