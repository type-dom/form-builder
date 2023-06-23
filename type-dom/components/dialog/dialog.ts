import { AppRoot } from '../../../src/app-root';
import { Overlay } from '../overlay/overlay.abstract';
export class WebDialog extends Overlay {
  className: 'WebDialog';
  parent: WebDialog;

  constructor(public formEditor: AppRoot) {
    super();
    this.className = 'WebDialog';
    this.parent = this;
    this.addAttrObj({
      name: 'editor-dialog',
    });
  }
}
