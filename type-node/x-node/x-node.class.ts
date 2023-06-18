/**
 * XNode是一个通用Node类，可以是其它类的父节点，也可以是其它类的子节点
 * todo 还需要其它虚拟类吗？  如需要，如何适配？？
 */
import { TypeNode } from '../type-node.class';
import { IXNode } from './x-node.interface';
/**
 * 实体节点类
 */
export class XNode extends TypeNode implements IXNode {
  className: 'XNode';
  components: TypeNode[];
  slots: TypeNode[];
  dom: Text | HTMLElement | SVGElement;
  constructor(nodeName: string, nodeValue?: string) {
    super(nodeName, nodeValue);
    this.className = 'XNode';
    if (this.nodeName === '#text') {
      this.dom = document.createTextNode(this.nodeValue?.toString() || '');
    } else {
      this.dom = document.createElement(this.nodeName);
    }
    this.components = [];
    this.slots = [];
  }
}
