/**
 * 虚拟dom的数据结构字面量接口。
 */
import { ITypeNode } from '../type-node.interface';
import { IWebStyle } from '../web-style.interface';
import { Button } from '../element/html-element/button/button.class';
import { Division } from '../element/html-element/division/division.class';
import { Heading } from '../element/html-element/heading/heading.class';
import { Input } from '../element/html-element/input/input.class';
import { Label } from '../element/html-element/label/label.class';
import { ListItem } from '../element/html-element/unordered-list/list-item/list-item.class';
import { WebOption } from '../element/html-element/select/option/option.class';
import { Select } from '../element/html-element/select/select.class';
import { Span } from '../element/html-element/span/span.class';
import { Textarea } from '../element/html-element/textarea/textarea.class';
import { WebTable } from '../element/html-element/table/table.class';
import { UnorderedList } from '../element/html-element/unordered-list/unordered-list.class';
import { WebTableRow } from '../element/html-element/table/row/row.class';
import { WebTableDataCell } from '../element/html-element/table/data-cell/data-cell.class';
import { WebTableHead } from '../element/html-element/table/head/head.class';
import { WebTableBody } from '../element/html-element/table/body/body.class';
import { WebTableFoot } from '../element/html-element/table/foot/foot.class';
import { WebTableHeader } from '../element/html-element/table/header/header.class';
export interface ITypeAttribute {
  // id?: string;
  class?: string;
  [key: string]: string | number | boolean | unknown | undefined;
}
export interface ITypeProperty {
  attrObj: Partial<ITypeAttribute>;
  styleObj: Partial<IWebStyle>;
  classes?: string[];
}
/**
 * 虚拟 DOM 节点的 *字面量* 表示。
 */
export interface ITypeElement extends ITypeNode {
  className: string; // todo enum ??
  propObj: ITypeProperty;
  // childPropObj?: IWebSectionProperty;
  // items?: Array<IWebSectionItem>;
  childNodes: Array<ITypeNode>;// contents
}
export interface IWebBoundBox {
  top: number;
  left: number;
  width: number;
  height: number;
}
export type ElementClass = typeof Button | typeof Division | typeof Heading
  | typeof Input | typeof Textarea | typeof Label| typeof Span
  | typeof Select | typeof WebOption
  | typeof UnorderedList | typeof ListItem
  | typeof WebTable | typeof WebTableRow | typeof WebTableDataCell
  | typeof WebTableHeader
  | typeof WebTableHead | typeof WebTableBody | typeof WebTableFoot;
