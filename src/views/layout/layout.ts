import { fromEvent } from 'rxjs';
import { TypeDiv } from 'type-dom.ts';
import { TypeFormDesigner } from '../../type-form-designer';
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
  constructor(public parent: TypeFormDesigner) {
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
    this.initEvents();
  }
  initEvents(): void {
    this.events.push(
      // todo 右键菜单
      fromEvent(document, 'contextmenu').subscribe((e) => {
        e.preventDefault();
        return false;
      }),
      // fromEvent(this.dom, 'mouseup').subscribe(() => {
      //   // todo 监听不到？？？
      //   console.log('layout mouseup . ');
      // }),
    );
  }
}
