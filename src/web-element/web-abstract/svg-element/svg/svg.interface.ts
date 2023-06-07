import { ISvgElement } from '../svg-element.interface';

export interface ISvgBase extends ISvgElement {
  tagName: 'svg',
  childNodes: ISvgElement[],
}
