/**
 * RootElement是一个根元素节点类，是其它类的父节点
 * 在开发中，作为项目根节点使用，挂载到对应的 ID 上。
 */
import { TypeDiv } from '../type-element/type-html/div/div.abstract';
import { IRootElement } from './root-element.interface';
/**
 * el 元素对象或ID；
 * parent 只有自己 this
 */
export class RootElement extends TypeDiv implements IRootElement {
  className: 'RootElement';
  parent: RootElement;
  constructor(el: HTMLElement | string) {
    super();
    this.className = 'RootElement';
    this.parent = this;
    this.propObj = {
      attrObj: {},
      styleObj: {}
    };
    if (el instanceof HTMLElement) {
      el.appendChild(this.dom);
    } else {
      const app = document.querySelector<Element>(el);
      if (app) {
        app.appendChild(this.dom);
      } else {
        throw Error('Can not find id . ');
      }
    }
  }
  get root() {
    return this;
  }
}
