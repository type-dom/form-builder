import { WebElement } from '../../web-element.abstract';
import { IHtmlElement } from './html-element.interface';

/**
 * HTML标签
 */
export abstract class HtmlElement extends WebElement implements IHtmlElement {
  // abstract tagName: string;
  // abstract className: string;
  abstract parent: HtmlElement;
  abstract dom: HTMLElement;
}
