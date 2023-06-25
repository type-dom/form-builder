import { TypeHtml } from '../../type-html.abstract';
import { ITypeLi } from './li.interface';
export abstract class TypeLi extends TypeHtml implements ITypeLi {
  nodeName: 'li';
  dom: HTMLLIElement;
  protected constructor() {
    super('li');
    this.nodeName = 'li';
    this.dom = document.createElement(this.nodeName);
  }
}
