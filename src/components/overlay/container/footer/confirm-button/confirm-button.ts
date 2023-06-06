import { fromEvent } from 'rxjs';
import { WebTextNode } from '../../../../../web-text-node/web-text-node.class';
import { ButtonComponent } from '../../../../../web-abstract/web-component/button-component/button-component.abstract';
import { OverlayFooter } from '../footer';

export class ConfirmButton extends ButtonComponent {
  className: 'ConfirmButton';
  childNodes: [WebTextNode];

  constructor(public parent: OverlayFooter) {
    super();
    this.className = 'ConfirmButton';
    this.propObj = {
      styleObj: {
        backgroundColor: '#1890ff',
        color: '#fff',
        borderColor: '#1890ff',
        margin: 'auto 10px',
      },
      attrObj: {
        name: 'confirm-button',
      }
    };

    // this.svg = new CloseSvg(this);
    this.childNodes = [this.textNode];

    this.initEvents();
  }
  initEvents(): void {
    this.events.push(
      fromEvent(this.dom, 'click').subscribe(() => {
        this.parent.parent.parent.hide();
      }),
    );
  }
}
