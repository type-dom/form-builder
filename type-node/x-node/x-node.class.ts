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
  // parentNode: TypeElement | XNode | null;
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
// Vuejs 虚拟DOM
export class VNode {
  tag: string | void;
  // data: VNodeData | void;
  // children: Array<VNode>;
  text: string | void;
  elm: Node | void;
  ns: string | void;
  // context: Component | void; // rendered in this component's scope
  // functionalContext: Component | void; // only for functional component root nodes
  // key: string | number | void;
  // componentOptions: VNodeComponentOptions | void;
  // componentInstance: Component | void; // component instance
  parent: VNode | void; // component placeholder node
  raw: boolean; // contains raw HTML? (server only)
  isStatic: boolean; // hoisted static node
  isRootInsert: boolean; // necessary for enter transition check
  isComment: boolean; // empty comment placeholder?
  isCloned: boolean; // is a cloned node?
  isOnce: boolean; // is a v-once node?
  /* Github:https://github.com/answershuto */

  constructor(
    tag?: string,
    // data?: VNodeData,
    children?: Array<VNode>,
    text?: string,
    elm?: Node,
    // context?: Component,
    // componentOptions?: VNodeComponentOptions
  ) {
    /* 当前节点的标签名 */
    this.tag = tag;
    /* 当前节点对应的对象，包含了具体的一些数据信息，是一个VNodeData类型，可以参考VNodeData类型中的数据信息 */
    // this.data = data
    /* 当前节点的子节点，是一个数组 */
    // this.children = children;
    /* 当前节点的文本 */
    this.text = text;
    /* 当前虚拟节点对应的真实dom节点 */
    this.elm = elm;
    /* 当前节点的名字空间 */
    this.ns = undefined;
    /* 编译作用域 */
    // this.context = context
    /* 函数化组件作用域 */
    // this.functionalContext = undefined;
    /* 节点的key属性，被当作节点的标志，用以优化 */
    // this.key = data && data.key
    /* 组件的option选项 */
    // this.componentOptions = componentOptions
    /* 当前节点对应的组件的实例 */
    // this.componentInstance = undefined
    /* 当前节点的父节点 */
    this.parent = undefined;
    /* 简而言之就是是否为原生HTML或只是普通文本，innerHTML的时候为true，textContent的时候为false */
    this.raw = false;
    /* 静态节点标志 */
    this.isStatic = false;
    /* 是否作为跟节点插入 */
    this.isRootInsert = true;
    /* 是否为注释节点 */
    this.isComment = false;
    /* 是否为克隆节点 */
    this.isCloned = false;
    /* 是否有v-once指令 */
    this.isOnce = false;
  }

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  // get child (): Component | void {
  //   return this.componentInstance
  // }
}
