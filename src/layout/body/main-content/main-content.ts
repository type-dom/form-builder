import { WebDocument } from '../../../core/document/web-document.class';
import { StylePosition } from '../../../web-element/web-style.enum';
import { DivComponent } from '../../../web-abstract/web-component/div-component/div-component.abstract';
import { WebBody } from '../body';

export class BodyMainContent extends DivComponent {
  className: 'BodyMainContent';
  childNodes: (WebDocument)[];

  constructor(public parent: WebBody) {
    super();
    this.className = 'BodyMainContent';
    this.propObj = {
      styleObj: {
        flex: '1',
        minWidth: '300px !important',
        backgroundColor: '#d0d0d0',
        boxSizing: 'border-box',
        // height: 'calc(100vh - 10px)',
        position: StylePosition.relative,
      },
      attrObj: {
        name: 'main-content'
        // id: 'contentView',
        // class: 'content'
      }
    };

    // FormEditor.curDoc = this.webDocument;
    // FormEditor.selector = this.selector;
    // console.log('parent.parent is ', parent.parent);
    parent.parent.webDocument.setParent(this);
    this.childNodes = [parent.parent.webDocument];
  }
}
