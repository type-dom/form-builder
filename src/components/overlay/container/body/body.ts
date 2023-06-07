import { DivBase } from '../../../../web-element/web-abstract/html-element/div/div.abstract';
import { OverlayContainer } from '../container';

export class OverlayBody extends DivBase {
  className: 'OverlayBody';

  constructor(public parent: OverlayContainer) {
    super();
    this.className = 'OverlayBody';
    this.propObj = {
      styleObj: {
        padding: '30px 20px',
        fontSize: '14px',
        wordBreak: 'break-all',
      },
      attrObj: {
        name: 'overlay-body',
      }
    };
  }
}
