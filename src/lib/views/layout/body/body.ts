import { TypeSection, StyleDisplay } from '@type-dom/framework';
import { FormBuilder } from '../../../form-builder';
import { LayoutWrapper } from '../layout';
import { BodyLeft } from './left/left';
import { BodyRight } from './right/right';
import { BodyMainContent } from './main-content/main-content';

export class BodyWrapper extends TypeSection {
  className: 'BodyWrapper';
  childNodes: [BodyLeft, BodyMainContent, BodyRight];
  left: BodyLeft;
  content: BodyMainContent;
  right: BodyRight;

  constructor(public parent: LayoutWrapper) {
    super();
    this.className = 'BodyWrapper';
    console.log('this.editor.clientHeight is ', this.formBuilder.clientHeight);
    this.addStyleObj({
      display: StyleDisplay.flex,
      height: 'calc(' + this.formBuilder.clientHeight + 'px - 60px)',
      justifyContent: 'space-between',
    });
    this.addAttrName('body-wrapper');
    // 可以传参给子节点。
    this.left = new BodyLeft(this);
    this.content = new BodyMainContent(this);
    this.right = new BodyRight(this);
    this.childNodes = [this.left, this.content, this.right];
  }

  get formBuilder(): FormBuilder {
    return this.parent.formBuilder;
  }
}
