import { fromEvent } from 'rxjs';
import { ButtonBase } from '../../../../web-element/web-abstract/html-element/button/button.abstract';
import { WebTextNode } from '../../../../web-text-node/web-text-node.class';
import { Navbar } from '../navbar';

export class SaveButton extends ButtonBase {
  className: 'SaveButton';
  constructor(public parent: Navbar) {
    super();
    this.className = 'SaveButton';
    this.addStyleObj({
      margin: 'auto 20px',
    });
    const text = new WebTextNode(this, '保存');
    this.childNodes = [text];
    this.initEvents();
  }
  initEvents(): void {
    this.events.push(
      fromEvent(this.dom, 'click').subscribe(() => {
        this.editor.messageBox.show();
        this.editor.messageBox.setTitle('提醒');
        this.editor.messageBox.confirm('你确定要保存表单吗？');
        // this.editor.dialog.preview(this.editor.page);
        // console.log('this.editor.form json is ', toJSON(this.editor.page));
      })
    );
  }
}
