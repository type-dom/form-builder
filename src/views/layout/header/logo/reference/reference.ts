import { TypeDiv } from '../../../../../../type-node/type-element/type-html/div/div.abstract';
import { StylePosition } from '../../../../../../type-node/web-style.enum';
import { Logo } from '../logo';

export class Reference extends TypeDiv {
  className: 'Reference';
  constructor(public parent: Logo) {
    super();
    this.className = 'Reference';
    this.propObj = {
      styleObj: {
        position: StylePosition.absolute,
        left: '-99999px',
        width: '1mm',
        height: '1mm',
      },
      attrObj: {
        id: 'reference'
      }
    };
  }
}
