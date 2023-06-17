import { TypeElement } from '../type-element.abstract';
import { ITypeHtml } from './type-html.interface';
/**
 * HTML标签
 */
export abstract class TypeHtml extends TypeElement implements ITypeHtml {
  // abstract tagName: string;
  // abstract className: string;
  abstract parent: TypeHtml;
  abstract dom: HTMLElement;
}
