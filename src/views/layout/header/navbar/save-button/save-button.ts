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
        this.appRoot.messageBox.show();
        this.appRoot.messageBox.setTitle('提醒');
        this.appRoot.messageBox.confirm('你确定要保存表单吗？');
        // this.appRoot.dialog.preview(this.appRoot.page);
        // console.log('this.appRoot.form json is ', toJSON(this.appRoot.page));
      })
    );
  }
}
