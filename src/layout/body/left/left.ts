import { DivBase } from '../../../type-node/type-element/type-html/div/div.abstract';
import { BodyWrapper } from '../body';
import { LeftContents } from './contents/contents';

export class BodyLeft extends DivBase {
  className: 'BodyLeft';
  childNodes: [LeftContents];
  contents: LeftContents;
  constructor(public parent: BodyWrapper) {
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
