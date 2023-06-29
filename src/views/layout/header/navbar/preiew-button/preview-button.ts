import { fromEvent } from 'rxjs';
import { toJSON } from '../../../../../../type-dom/type-element/type-element.function';
import { TypeButton } from '../../../../../../type-dom/type-element/type-html/button/button.abstract';
import { WebDocument } from '../../../../../core/document/web-document.class';
import { IWebDocument } from '../../../../../core/document/web-document.interface';
import { tdButtonBase } from '../../../../../../type-dom/style/td-button.style';
import { Navbar } from '../navbar';

export class PreviewButton extends TypeButton {
  className: 'PreviewButton';
  constructor(public parent: Navbar) {
    super();
    this.className = 'PreviewButton';
    this.addStyleObj({
      margin: 'auto 20px',
    });
    this.addStyleObj(tdButtonBase);
    this.setTitle('预览');
    // this.childNodes = [this.textNode];
    this.initEvents();
  }
  initEvents(): void {
    this.events.push(
      fromEvent(this.dom, 'click').subscribe(() => {
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
