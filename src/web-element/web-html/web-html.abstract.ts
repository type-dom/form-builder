import { WebElement } from '../web-element.abstract';
import { IWebHtml } from './web-html.interface';

/**
 * HTML标签
 */
export abstract class WebHtml extends WebElement implements IWebHtml {
  // abstract tagName: string;
  // abstract className: string;
  abstract parent: WebHtml;
  abstract dom: HTMLElement;
}
