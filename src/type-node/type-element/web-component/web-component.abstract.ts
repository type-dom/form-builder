import { TypeElement } from '../type-element.abstract';
import { HtmlElement } from '../html-element/html-element.abstract';
import { DivBase } from '../html-element/div/div.abstract';
import { IWebComponent } from './web-component.interface';
/**
 * 组件基类
 * 子节点是 TypeElement, 不包括 WebTextNode
 */
export abstract class WebComponent extends DivBase implements IWebComponent {
  abstract parent: HtmlElement;
  childNodes: TypeElement[];  // 没有WebTextNode
  protected constructor() {
    super();
    this.childNodes = [];
  }

  get firstChild(): TypeElement {
    return this.childNodes[0];
  }

  get lastChild(): TypeElement {
    return this.childNodes[this.length - 1];
  }

  findChildAtIndex(index: number): TypeElement | null {
    return this.childNodes[index] || null;
  }

  findChildIndex(child: TypeElement): number {
    return this.childNodes.findIndex(item => item === child);
  }
}
