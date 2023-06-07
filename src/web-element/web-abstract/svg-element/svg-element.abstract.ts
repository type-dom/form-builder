import { WebTextNode } from '../../../web-text-node/web-text-node.class';
import { WebElement } from '../../web-element.abstract';
import { ISvgElement } from './svg-element.interface';

export abstract class SvgElement extends WebElement implements ISvgElement {
  abstract tagName: string;
  abstract dom: SVGElement;
  abstract className: string;
  childNodes: (SvgElement | WebTextNode)[];
  protected constructor() {
    super();
    this.childNodes = [];
  }
}
