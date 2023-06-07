import { fromEvent } from 'rxjs';
import { WebTextNode } from '../../../../../web-text-node/web-text-node.class';
import { ButtonBase } from '../../../../../web-element/web-abstract/html-element/button/button.abstract';
import { OverlayFooter } from '../footer';

export class ConfirmButton extends ButtonBase {
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
