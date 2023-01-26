import { WebTextNode } from '../../web-text-node/web-text-node.class';
import { WebElement } from '../web-element.abstract';
import { IWebSvg } from './web-svg.interface';

export abstract class WebSvg extends WebElement implements IWebSvg {
  abstract tagName: string;
  abstract dom: SVGElement;
  abstract className: string;
  childNodes: (WebSvg | WebTextNode)[];
  protected constructor() {
    super();
    this.childNodes = [];
  }
}
