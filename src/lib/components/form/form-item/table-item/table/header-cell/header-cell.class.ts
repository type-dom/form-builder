import { TypeTableHeaderCell, TextNode } from '@type-dom/framework';
import { TableHead } from '../head/head.class';
import { ITableHeaderCell } from './header-cell.interface';

// 表格表头
export class TableHeaderCell
  extends TypeTableHeaderCell
  implements ITableHeaderCell
{
  className: 'TableHeaderCell';

  constructor(public parent: TableHead) {
    super();
    this.className = 'TableHeaderCell';
  }

  createInstance(thLiteral: ITableHeaderCell): void {
    if (thLiteral.propObj) {
      this.resetPropObj(thLiteral.propObj);
    }
    thLiteral.childNodes.forEach((textNode, index) => {
      if (this.childNodes[index]) {
        this.childNodes[index].setText(textNode.nodeValue);
      } else {
        const textObj = new TextNode();
        textObj.setText(textNode.nodeValue);
        this.appendChild(textObj);
      }
    });
  }
}
