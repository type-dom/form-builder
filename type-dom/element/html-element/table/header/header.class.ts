import { TextNode } from '../../../../text-node/text-node.class';
import { TypeTableHeader } from '../../../../type-element/type-html/table/header/header.class';
import { TableHead } from '../head/head.class';
import { ITableHeader } from './header.interface';

// 表格表头
export class TableHeader extends TypeTableHeader implements ITableHeader {
  className: 'TableHeader';

  constructor(public parent: TableHead) {
    super();
    this.className = 'TableHeader';
  }

  createInstance(thLiteral: ITableHeader): void {
    if (thLiteral.propObj) {
      this.setPropObj(thLiteral.propObj);
    }
    thLiteral.childNodes.forEach((textNode, index) => {
      if (this.childNodes[index]) {
        this.childNodes[index].setText(textNode.nodeValue);
      } else {
        const textObj = new TextNode(this);
        textObj.setText(textNode.nodeValue);
        this.appendChild(textObj);
      }
    });
  }
}
