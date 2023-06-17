import { fromEvent } from 'rxjs';
import { WebTextNode } from '../../../../../../type-node/web-text-node/web-text-node.class';
import { toJSON } from '../../../../../../type-node/type-element/type-element.function';
import { TypeButton } from '../../../../../../type-node/type-element/type-html/button/button.abstract';
import { WebDocument } from '../../../../../core/document/web-document.class';
import { IWebDocument } from '../../../../../core/document/web-document.interface';
import { Navbar } from '../navbar';

export class PreviewButton extends TypeButton {
  className: 'PreviewButton';
  constructor(public parent: Navbar) {
    super();
    this.className = 'PreviewButton';
    this.addStyleObj({
      margin: 'auto 20px',
    });
    const text = new WebTextNode(this, '预览');
    this.childNodes = [text];
    this.initEvents();
  }
  initEvents(): void {
    this.events.push(
      fromEvent(this.dom, 'click').subscribe(() => {
        this.editor.setSelectedControl(null);
        this.editor.dialog.show();
        this.editor.dialog.setTitle('预览');
        this.preview();
        console.log('this.editor.exampleData is ', this.editor.formData);
      })
    );
  }
  preview(): void {
    console.log('preview . ');
    this.editor.dialog.container.body.clearChildDom();
    this.editor.dialog.container.body.clearChildNodes();
    const document = toJSON(this.editor.webDocument) as IWebDocument;
    console.log('document is ', document);
    const docObj = new WebDocument(this.editor.layout.body.content);
    docObj.createInstance(document);
    docObj.setParent(this.editor.dialog.container.body);
    this.editor.dialog.container.body.appendChild(docObj);
    // this.container.body.dom.appendChild(element.dom);
    // this.editor.dialog.container.body.dom.appendChild(docObj.dom);
    // this.editor.dialog.container.body.dom.childNodes.forEach(node => node.remove());
    // this.editor.dialog.container.body.dom.appendChild(this.editor.webDocument.dom.cloneNode(true));
  }
}
