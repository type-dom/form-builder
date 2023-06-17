import { fromEvent } from 'rxjs';
import { WebTextNode } from '../../../../../type-node/web-text-node/web-text-node.class';
import { ButtonBase } from '../../../../../type-node/type-element/type-html/button/button.abstract';
import { OverlayFooter } from '../footer';

export class CancelButton extends ButtonBase {
  className: 'CancelButton';
  childNodes: [WebTextNode];

  constructor(public parent: OverlayFooter) {
    super();
    this.className = 'CancelButton';
    this.propObj = {
      styleObj: {
        // backgroundColor: '#f00',
        // color: '#FFF',
        margin: 'auto 10px',
        // outline: 'none',
        // border: '1px solid #f00',
      },
      attrObj: {
        name: 'cancel-button',
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
