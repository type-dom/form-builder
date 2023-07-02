import { fromEvent } from 'rxjs';
import { toJSON } from '../../../../../../type-dom/type-element/type-element.function';
import { TypeButton } from '../../../../../../type-dom/type-element/type-html/button/button.abstract';
import { WebDocument } from '../../../../../core/document/web-document.class';
import { IWebDocument } from '../../../../../core/document/web-document.interface';
import { tdButtonBase } from '../../../../../../type-dom/style/td-button.style';
import { AppRoot } from '../../../../../app-root';
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
        AppRoot.setSelectedControl(null);
        AppRoot.dialog.show();
        AppRoot.dialog.setTitle('预览');
        this.preview();
        console.log('AppRoot.exampleData is ', AppRoot.formData);
      })
    );
  }
  preview(): void {
    console.log('preview . ');
    AppRoot.dialog.container.body.clearChildDom();
    AppRoot.dialog.container.body.clearChildNodes();
    const document = toJSON(AppRoot.webDocument) as IWebDocument;
    console.log('document is ', document);
    const docObj = new WebDocument(AppRoot.layout.body.content);
    docObj.createInstance(document);
    docObj.setParent(AppRoot.dialog.container.body);
    AppRoot.dialog.container.body.appendChild(docObj);
    // this.container.body.dom.appendChild(element.dom);
    // AppRoot.dialog.container.body.dom.appendChild(docObj.dom);
    // AppRoot.dialog.container.body.dom.childNodes.forEach(node => node.remove());
    // AppRoot.dialog.container.body.dom.appendChild(AppRoot.webDocument.dom.cloneNode(true));
  }
}
