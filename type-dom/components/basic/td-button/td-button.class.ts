import { TypeButton } from '../../../type-element/type-html/button/button.abstract';
import { TypeHtml } from '../../../type-element/type-html/type-html.abstract';
import { ITdButton, ITdButtonConfig } from './td-button.interface';
import { tdButtonBase, typeOpts } from '../../styles/td-button.style';
export class TdButton extends TypeButton implements ITdButton {
  className: 'TdButton';
  constructor(public parent: TypeHtml, config?: Partial<ITdButtonConfig>) {
    super();
    this.className = 'TdButton';
    this.setConfig(config);
  }
  setConfig(config?: Partial<ITdButtonConfig>): void {
    this.addStyleObj(tdButtonBase);
    if (config?.title) {
      this.setTitle(config.title);
    }
    const type = config?.type ? config.type : 'default';
    if (type) {
      this.addStyleObj(typeOpts[type]);
    }
    // this.addAttrObj({
    //   type: 'primary', // success warn danger primary
    //   size: 'middle' // small middle, large
    // });
  }
}
