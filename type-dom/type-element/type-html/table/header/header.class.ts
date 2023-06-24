import { TextNode } from '../../../../text-node/text-node.class';
import { TypeHtml } from '../../type-html.abstract';
import { ITypeTableHeader } from './header.interface';

// 表格表头
export abstract class TypeTableHeader extends TypeHtml implements ITypeTableHeader {
  nodeName: 'th';
  dom: HTMLElement;
  childNodes: TextNode[];
  protected constructor() {
    super('th');
    this.nodeName = 'th';
    this.dom = document.createElement(this.nodeName);
    this.childNodes = [];
  }
}
