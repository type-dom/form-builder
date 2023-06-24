import { AppRoot } from '../../../src/app-root';
import { Overlay } from '../overlay/overlay.abstract';
export class WebDialog extends Overlay {
  className: 'WebDialog';
  constructor(public parent: AppRoot) {
    super();
    this.className = 'WebDialog';
    this.addAttrObj({
      name: 'editor-dialog',
    });
  }
}
