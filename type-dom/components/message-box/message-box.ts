import { TextNode } from '../../text-node/text-node.class';
import { Span } from '../../element/html-element/span/span.class';
import { FormEditor } from '../../../src/form-editor';
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
    // this.root.app.
    const span = new Span(this.container.body);
    const textNode = new TextNode(span, message);
    span.addChild(textNode);
    this.container.body.appendChild(span);
    // this.container.footer.
  }
  get editor(): FormEditor {
    return this.formEditor;
  }
}
