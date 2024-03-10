import { StylePosition, TypeDiv } from '@type-dom/framework';
import { WebDocument } from '../../../../core/document/web-document.class';
import { BodyWrapper } from '../body';
import { FormBuilder } from '../../../../form-builder';

export class BodyMainContent extends TypeDiv {
  className: 'BodyMainContent';
  childNodes: WebDocument[];

  constructor(public parent: BodyWrapper) {
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
        name: 'main-content',
        // id: 'contentView',
        // class: 'content'
      },
    };

    // FormDesigner.curDoc = this.webDocument;
    // FormDesigner.selector = this.selector;
    // console.log('parent.parent is ', parent.parent);
    parent.parent.webDocument.setParent(this);
    this.childNodes = [parent.parent.webDocument];
  }

  get formBuilder(): FormBuilder {
    return this.parent.formBuilder;
  }
}
