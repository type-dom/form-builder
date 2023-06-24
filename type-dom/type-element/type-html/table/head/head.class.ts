import { TypeHtml } from '../../type-html.abstract';
import { TypeTableHeader } from '../header/header.class';
import { TypeTable } from '../table.class';
import { ITypeTableHead } from './head.interface';

// 表格页眉
export abstract class TypeTableHead extends TypeHtml implements ITypeTableHead {
  nodeName: 'thead';
  dom: HTMLTableSectionElement;
  childNodes: TypeTableHeader[];
  protected constructor() {
    super('thead');
    this.nodeName = 'thead';
    this.dom = document.createElement(this.nodeName);
    this.childNodes = [];
  }
}
