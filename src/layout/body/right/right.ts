import { DivBase } from '../../../type-node/type-element/type-html/div/div.abstract';
import { BodyWrapper } from '../body';
import { RightContents } from './contents/contents';
import { BodyRightTabs } from './tabs/tabs';

export class BodyRight extends DivBase {
  className: 'BodyRight';
  childNodes: [BodyRightTabs, RightContents];

  tabs: BodyRightTabs;
  contents: RightContents;
  constructor(public parent: BodyWrapper) {
    super();
    this.className = 'BodyRight';
    this.propObj = {
      styleObj: {
        minWidth: '350px',
        width: '350px',
        height: '100%',
        backgroundColor: '#fff',
        boxSizing: 'border-box',
        // paddingBottom: '42px',
      },
      attrObj: {
        name: 'body-right',
      }
    };
    this.tabs = new BodyRightTabs(this);
    this.contents = new RightContents(this);
    this.childNodes = [this.tabs, this.contents];
  }
}
