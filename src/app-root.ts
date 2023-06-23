import { TypeRoot } from '../type-dom/type-root/type-root.class';
import { FormEditor } from './form-editor';
export class AppRoot extends TypeRoot {
  className: 'AppRoot';
  app: FormEditor;
  constructor(el: HTMLElement, app: FormEditor) {
    super(el);
    this.app = app;
    this.className = 'AppRoot';
    this.propObj = {
      attrObj: {},
      styleObj: {}
    };
  }
  // get app(): FormEditor {
  //   return this.formEditor;
  // }
}
