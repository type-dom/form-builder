import { fromEvent } from 'rxjs';
import { TypeDiv } from '@type-dom/framework';
import { FormBuilder } from '../../form-builder';
import { WebDocument } from '../../core/document/web-document.class';
import { WebForm } from '../../components/form/form';
import { HeaderWrapper } from './header/header';
import { BodyWrapper } from './body/body';

export class LayoutWrapper extends TypeDiv {
  className: 'LayoutWrapper';
  webDocument: WebDocument;
  header: HeaderWrapper;
  body: BodyWrapper;
  form?: WebForm;

  constructor(public parent: FormBuilder) {
    super();
    this.className = 'LayoutWrapper';
    this.addAttrName('layout');
    this.addStyleObj({
      height: '100%',
      // overflow: 'auto',
    });
    this.webDocument = new WebDocument(this);
    this.header = new HeaderWrapper(this);
    this.body = new BodyWrapper(this); // WebBody ---> MainContent中会调用 webDocument,所以必须先创建webDocument
  }

  get formBuilder() {
    return this.parent;
  }

  initEvents(): void {
    this.events.push(
      // todo 右键菜单
      fromEvent(document, 'contextmenu').subscribe((e) => {
        e.preventDefault();
        return false;
      })
      // fromEvent(this.dom, 'mouseup').subscribe(() => {
      //   // todo 监听不到？？？
      //   console.log('layout mouseup . ');
      // }),
    );
  }
}
