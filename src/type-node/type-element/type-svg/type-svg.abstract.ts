import { WebTextNode } from '../../web-text-node/web-text-node.class';
import { TypeElement } from '../type-element.abstract';
import { ITypeSvg } from './type-svg.interface';
export abstract class TypeSvg extends TypeElement implements ITypeSvg {
  abstract tagName: string;
  abstract dom: SVGElement;
  abstract className: string;
  childNodes: (TypeSvg | WebTextNode)[];
  protected constructor() {
    super();
    this.childNodes = [];
  }
}
