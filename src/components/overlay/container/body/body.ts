import { DivComponent } from '../../../../web-component/div-component/div-component.abstract';
import { OverlayContainer } from '../container';

export class OverlayBody extends DivComponent {
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
