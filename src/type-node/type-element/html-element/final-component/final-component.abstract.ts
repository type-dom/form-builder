import { WebTextNode } from '../../../web-text-node/web-text-node.class';
import { TypeElement } from '../../type-element.abstract';
import { IFinalComponent } from './final-component.interface';

// 最终节点的组件类,子节点只有WebTextNode或者只是空数组;
export abstract class FinalComponent extends TypeElement implements IFinalComponent {
  childNodes: WebTextNode[] | [];
  protected constructor() {
    super();
    this.childNodes = [];
  }
}
