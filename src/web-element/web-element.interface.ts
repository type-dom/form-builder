/**
 * 虚拟dom的数据结构字面量接口。
 */
import { IWebTextNode } from '../web-text-node/web-text-node.interface';
import { Button } from './web-html/button/button.class';
import { Division } from './web-html/division/division.class';
import { Heading } from './web-html/heading/heading.class';
import { Input } from './web-html/input/input.class';
import { Label } from './web-html/label/label.class';
import { ListItem } from './web-html/unordered-list/list-item/list-item.class';
import { WebOption } from './web-html/select/option/option.class';
import { Select } from './web-html/select/select.class';
import { Span } from './web-html/span/span.class';
import { Textarea } from './web-html/textarea/textarea.class';
import { WebTable } from './web-html/table/table.class';
import { UnorderedList } from './web-html/unordered-list/unordered-list.class';
import { WebTableRow } from './web-html/table/row/row.class';
import { WebTableDataCell } from './web-html/table/data-cell/data-cell.class';
import { WebTableHead } from './web-html/table/head/head.class';
import { WebTableBody } from './web-html/table/body/body.class';
import { WebTableFoot } from './web-html/table/foot/foot.class';
import { WebTableHeader } from './web-html/table/header/header.class';
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
