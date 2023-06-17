import { TypeElement } from '../type-element.abstract';
import { IHtmlElement } from './html-element.interface';
/**
 * HTML标签
 */
export abstract class HtmlElement extends TypeElement implements IHtmlElement {
  // abstract tagName: string;
  // abstract className: string;
  abstract parent: HtmlElement;
  abstract dom: HTMLElement;
}
