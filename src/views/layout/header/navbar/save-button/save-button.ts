import { fromEvent } from 'rxjs';
import { TypeButton } from '../../../../../../type-dom/type-element/type-html/button/button.abstract';
import { AppRoot } from '../../../../../app-root';
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
        AppRoot.messageBox.show();
        AppRoot.messageBox.setTitle('提醒');
        AppRoot.messageBox.confirm('你确定要保存表单吗？');
        // AppRoot.dialog.preview(AppRoot.page);
        // console.log('AppRoot.form json is ', toJSON(AppRoot.page));
      })
    );
  }
}
