/**
 * 虚拟dom的数据结构字面量接口。
 */
import { IWebTextNode } from '../web-text-node/web-text-node.interface';
import { Button } from './button/button.class';
import { Division } from './division/division.class';
import { Heading } from './heading/heading.class';
import { Input } from './input/input.class';
import { Label } from './label/label.class';
import { ListItem } from './unordered-list/list-item/list-item.class';
import { WebOption } from './select/option/option.class';
import { Select } from './select/select.class';
import { Span } from './span/span.class';
import { Textarea } from './textarea/textarea.class';
import { WebTable } from './table/table.class';
import { UnorderedList } from './unordered-list/unordered-list.class';
import { WebTableRow } from './table/row/row.class';
import { WebTableDataCell } from './table/data-cell/data-cell.class';
import { WebTableHead } from './table/head/head.class';
import { WebTableBody } from './table/body/body.class';
import { WebTableFoot } from './table/foot/foot.class';
import { WebTableHeader } from './table/header/header.class';
import { IWebStyle } from './web-style.interface';

export interface IWebAttribute {
  // id?: string;
  class?: string;
  [key: string]: string | number | boolean | unknown | undefined;
}

export interface IWebProperty {
  attrObj: Partial<IWebAttribute>;
  styleObj: Partial<IWebStyle>;
  classes?: string[];
}

/**
 * 虚拟 DOM 节点的 *字面量* 表示。
 */
export interface IWebElement {
  tagName: string;
  className: string; // todo enum ??
  propObj: IWebProperty;
  // childPropObj?: IWebSectionProperty;
  // items?: Array<IWebSectionItem>;
  childNodes: Array<IWebElement | IWebTextNode>;// contents
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
