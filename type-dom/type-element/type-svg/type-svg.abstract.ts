import { TextNode } from '../../text-node/text-node.class';
import { TypeElement } from '../type-element.abstract';
import { ITypeSvg } from './type-svg.interface';
export abstract class TypeSvg extends TypeElement implements ITypeSvg {
  abstract nodeName: string;
  abstract dom: SVGElement;
  abstract className: string;
  childNodes: (TypeSvg | TextNode)[];
  protected constructor(nodeName: string, nodeValue?: string) {
    super(nodeName, nodeValue);
    this.childNodes = [];
  }
}