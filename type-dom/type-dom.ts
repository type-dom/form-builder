import { TextNode } from './text-node/text-node.class';
import { Division } from './element/html-element/division/division.class';
import { Heading } from './element/html-element/heading/heading.class';
import { UnorderedList } from './element/html-element/unordered-list/unordered-list.class';
import { ListItem } from './element/html-element/unordered-list/list-item/list-item.class';
import { XElement } from './x-element/x-element.class';
import { Header } from './element/html-element/header/header.class';
import { Button } from './element/html-element/button/button.class';
import { Span } from './element/html-element/span/span.class';
import { Section } from './element/html-element/section/section';
import { Table } from './element/html-element/table/table.class';
import { TableBody } from './element/html-element/table/body/body.class';
import { Select } from './element/html-element/select/select.class';
import { Label } from './element/html-element/label/label.class';
import { Input } from './element/html-element/input/input.class';
import { Textarea } from './element/html-element/textarea/textarea.class';
import { TableHeader } from './element/html-element/table/header/header.class';
import { TableRow } from './element/html-element/table/row/row.class';
import { TableHead } from './element/html-element/table/head/head.class';
import { TableDataCell } from './element/html-element/table/data-cell/data-cell.class';
import { SelectOption } from './element/html-element/select/option/option.class';
import { TableFoot } from './element/html-element/table/foot/foot.class';
// 命名空间  TypeDom
const TypeDom = {
  XElement,
  TextNode,
  Division,
  Span,
  Button,
  Header,
  Section,
  Heading,
  UnorderedList,
  ListItem,
  Select,
  SelectOption,
  Label,
  Input,
  Textarea,
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableDataCell,
  TableFoot,

};
export default TypeDom;

export type ITypeClass = typeof Button | typeof Division | typeof Heading
  | typeof Input | typeof Textarea | typeof Label| typeof Span
  | typeof Select | typeof SelectOption
  | typeof UnorderedList | typeof ListItem
  | typeof Table | typeof TableRow | typeof TableDataCell
  | typeof TableHeader
  | typeof TableHead | typeof TableBody | typeof TableFoot;
