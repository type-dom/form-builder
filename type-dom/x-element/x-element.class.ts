/**
 * XElement是一个通用元素节点类，可以是其它类的父节点，也可以是其它类的子节点
 * 不包括 文本节点类
 */
import { TypeElement } from '../type-element/type-element.abstract';
import { IXElement } from './x-element.interface';
/**
 * 通用元素节点类；
 * 主要是有模板页面时用到，解析文本DOM。
 * 也要能生成 json 格式字符串。
 */
export class XElement extends TypeElement implements IXElement {
  className: 'XElement';
  parent: TypeElement;
  dom: HTMLElement | SVGElement;
  constructor(nodeName: string) {
    super(nodeName);
    this.className = 'XElement';
    this.dom = document.createElement(this.nodeName);
    this.parent = this;
  }
}
