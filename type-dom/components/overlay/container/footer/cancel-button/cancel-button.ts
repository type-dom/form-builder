import { fromEvent } from 'rxjs';
import { TextNode } from '../../../../../text-node/text-node.class';
import { TypeButton } from '../../../../../type-element/type-html/button/button.abstract';
import { OverlayFooter } from '../footer';

export class CancelButton extends TypeButton {
  className: 'CancelButton';
  childNodes: [TextNode];

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
