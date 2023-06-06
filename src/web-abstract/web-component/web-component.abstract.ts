import { HtmlElement } from '../../web-element/html-element/html-element.abstract';
import { WebElement } from '../../web-element/web-element.abstract';
import { IWebComponent } from './web-component.interface';

// 子节点是 WebElement 的类。排除子节点是 WebTextNode的情况
// 父节点 可以是WebComponent 也可以是 WebElement
export abstract class WebComponent extends HtmlElement implements IWebComponent {
  abstract parent: HtmlElement;
  childNodes: WebElement[];
  protected constructor() {
    super();
    this.childNodes = [];
  }
  get firstChild(): WebElement {
    return this.childNodes[0];
  }
  get lastChild(): WebElement {
    return this.childNodes[this.length - 1];
  }
  setParent(parent: WebComponent): void {
    this.parent = parent;
  }
  appendChild(newChild: HtmlElement): void {
    newChild.setParent(this);
    this.childNodes.push(newChild);
    this.renderChild(newChild);
    // this.dom.appendChild(newChild.render().dom);
    // return this;
  }
  findChildAtIndex(index: number): WebElement | null {
    return this.childNodes[index] || null;
  }
  findChildIndex(child: WebElement): number {
    return this.childNodes.findIndex(item => item === child);
  }
}
