import { DivComponent } from '../../../../web-abstract/web-component/div-component/div-component.abstract';
import { OverlayContainer } from '../container';
import { CancelButton } from './cancel-button/cancel-button';
import { ConfirmButton } from './confirm-button/confirm-button';

export class OverlayFooter extends DivComponent {
  className: 'OverlayFooter';
  cancelBtn: CancelButton;
  confirmBtn: ConfirmButton;

  constructor(public parent: OverlayContainer) {
    super();
    this.className = 'OverlayFooter';
    this.propObj = {
      styleObj: {
        padding: '20px',
        paddingTop: '10px',
        textAlign: 'right',
        boxSizing: 'border-box',
      },
      attrObj: {
        name: 'overlay-foot',
      }
    };
    this.cancelBtn = new CancelButton(this);
    // cancelBtn.hide();
    this.cancelBtn.setTitle('取消');
    this.confirmBtn = new ConfirmButton(this);
    this.confirmBtn.setTitle('确定');
    this.childNodes = [this.cancelBtn, this.confirmBtn];
  }
}
