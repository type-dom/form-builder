import { DivComponent } from '../../../web-abstract/web-component/div-component/div-component.abstract';
import { WebBody } from '../body';
import { LeftContents } from './contents/contents';

export class BodyLeft extends DivComponent {
  className: 'BodyLeft';
  childNodes: [LeftContents];
  contents: LeftContents;
  constructor(public parent: WebBody) {
    super();
    this.className = 'BodyLeft';
    this.propObj = {
      styleObj: {
        height: '100%',
        minWidth: '240px',
        width: '240px',
        backgroundColor: '#ffffff',
        boxSizing: 'border-box',
        // paddingBottom: '38px',
        // borderTop: '1px solid #ddd',
      },
      attrObj: {
        name: 'body-left'
      }
    };
    this.contents = new LeftContents(this);
    this.childNodes = [this.contents];
  }
}
