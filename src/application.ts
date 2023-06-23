/**
 * Application是根节点类，是项目中虚拟DOM树的根节点。 其parent为自己
 * router也应该在这一级操作，  ----》 动态替换 childNodes 中的子元素。
 */
import { TypeElement } from '../type-dom/type-element/type-element.abstract';
import { ITypeDiv } from '../type-dom/type-element/type-html/div/div.interface';
import { TypeDiv } from '../type-dom/type-element/type-html/div/div.abstract';
import { WebDialog } from '../type-dom/components/dialog/dialog';
import { MessageBox } from '../type-dom/components/message-box/message-box';
import { LayoutWrapper } from './views/layout/layout';
import { FormEditor } from './form-editor';

export class Application extends TypeDiv implements ITypeDiv {
  className: 'Application';
  parent: TypeElement;
  layout: LayoutWrapper;
  dialog: WebDialog;
  messageBox: MessageBox;
  constructor(formEditor: FormEditor) {
    super();
    this.className = 'Application';
    this.parent = this;
    this.propObj = {
      attrObj: {},
      styleObj: {}
    };
    this.layout = new LayoutWrapper(formEditor);
    this.dialog = new WebDialog(formEditor);
    this.messageBox = new MessageBox(formEditor);
    this.layout.childNodes.push(this.dialog, this.messageBox);
    this.layout.render();
    const json = this.layout.toJSON();
    console.log('json is ', json);
    this.childNodes = [this.layout, this.dialog, this.messageBox];
  }
}
