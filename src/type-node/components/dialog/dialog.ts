import { Overlay } from '../overlay/overlay.abstract';
import { FormEditor } from '../../../form-editor';

export class WebDialog extends Overlay {
  className: 'WebDialog';
  parent: WebDialog;

  constructor(public formEditor: FormEditor) {
    super();
    this.className = 'WebDialog';
    this.parent = this;
    this.addAttrObj({
      name: 'editor-dialog',
    });
  }
  get editor(): FormEditor {
    return this.formEditor;
  }
}
