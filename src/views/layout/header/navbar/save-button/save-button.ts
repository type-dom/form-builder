import { fromEvent } from 'rxjs';
import { TypeButton } from '../../../../../../type-dom/type-element/type-html/button/button.abstract';
import { Navbar } from '../navbar';

export class SaveButton extends TypeButton {
  className: 'SaveButton';
  constructor(public parent: Navbar) {
    super();
    this.className = 'SaveButton';
    this.addStyleObj({
      margin: 'auto 20px',
    });
    this.setTitle('保存');
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
