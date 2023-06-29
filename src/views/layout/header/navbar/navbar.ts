import { fromEvent } from 'rxjs';
import { TypeDiv } from '../../../../../type-dom/type-element/type-html/div/div.abstract';
import { Display } from '../../../../../type-dom/style/style.enum';
import { TdButton } from '../../../../../type-dom/components/basic/td-button/td-button.class';
import { HeaderWrapper } from '../header';
import { PreviewButton } from './preiew-button/preview-button';
import { toJSON } from '../../../../../type-dom/type-element/type-element.function';
import { IWebDocument } from '../../../../core/document/web-document.interface';
import { WebDocument } from '../../../../core/document/web-document.class';
// import { SaveButton } from './save-button/save-button';

export class Navbar extends TypeDiv {
  className: 'Navbar';
  private readonly previewBtn: TdButton;
  private readonly saveBtn: TdButton;

  constructor(public parent: HeaderWrapper) {
    super();
    this.className = 'Navbar';
    this.propObj = {
      styleObj: {
        display: Display.flex,
        // justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '60px',
        background: 'linear-gradient(0deg, #eee, #e9e9e9)',
      },
      attrObj: {
        name: 'navbar'
      }
    };
    // this.previewBtn = this.createItem(this, {
    //   TypeClass: TdButton,
    // }) as TdButton;
    this.previewBtn = new TdButton(this, {
      title: '预览',
    });
    this.saveBtn = new TdButton(this, {
      title: '保存',
      type: 'primary',
    });
    // this.previewBtn = new PreviewButton(this);
    // this.saveBtn = new SaveButton(this);
    const successBtn = new TdButton(this, {
      title: 'success',
      type: 'success',
    });
    const warningBtn = new TdButton(this, {
      title: 'warning',
      type: 'warning',
    });
    const infoBtn = new TdButton(this, {
      title: 'info',
      type: 'info',
    });
    const dangerBtn = new TdButton(this, {
      title: 'danger',
      type: 'danger',
    });
    this.childNodes.push(this.previewBtn, this.saveBtn, successBtn, warningBtn, infoBtn, dangerBtn);
    this.initEvents();
  }
  initEvents(): void {
    this.events.push(
      fromEvent(this.previewBtn.dom, 'click').subscribe(() => {
        this.appRoot.setSelectedControl(null);
        this.appRoot.dialog.show();
        this.appRoot.dialog.setTitle('预览');
        this.preview();
        console.log('this.appRoot.exampleData is ', this.appRoot.formData);
      })
    );
  }
  preview(): void {
    console.log('preview . ');
    this.appRoot.dialog.container.body.clearChildDom();
    this.appRoot.dialog.container.body.clearChildNodes();
    const document = toJSON(this.appRoot.webDocument) as IWebDocument;
    console.log('document is ', document);
    const docObj = new WebDocument(this.appRoot.layout.body.content);
    docObj.createInstance(document);
    docObj.setParent(this.appRoot.dialog.container.body);
    this.appRoot.dialog.container.body.appendChild(docObj);
    // this.container.body.dom.appendChild(element.dom);
    // this.appRoot.dialog.container.body.dom.appendChild(docObj.dom);
    // this.appRoot.dialog.container.body.dom.childNodes.forEach(node => node.remove());
    // this.appRoot.dialog.container.body.dom.appendChild(this.appRoot.webDocument.dom.cloneNode(true));
  }
}
