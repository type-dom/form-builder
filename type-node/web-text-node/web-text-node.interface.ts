/**
 * 文本节点字面量
 * @author xjf
 * @date 2023/6/18 18:06
  */
import { ITypeNode } from '../type-node.interface';
export interface IWebTextNode extends ITypeNode {
  className: 'WebTextNode';
  nodeValue: string;
  // text: string;
}
