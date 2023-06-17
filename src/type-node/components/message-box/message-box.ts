import { WebTextNode } from '../../web-text-node/web-text-node.class';
import { Span } from '../../web-element/html-element/span/span.class';
import { FormEditor } from '../../../form-editor';
import { Overlay } from '../overlay/overlay.abstract';

export class MessageBox extends Overlay {
  className: 'MessageBox';
  parent: MessageBox;

  constructor(public formEditor: FormEditor) {
    super();
    this.className = 'MessageBox';
    this.parent = this;
    this.addAttrObj({
      name: 'message-box',
    });
  }

  confirm(message: string): void {
    const span = new Span(this.container.body);
    const textNode = new WebTextNode(span, message);
    span.addChild(textNode);
    this.container.body.appendChild(span);
    // this.container.footer.
  }
  get editor(): FormEditor {
    return this.formEditor;
  }
}
