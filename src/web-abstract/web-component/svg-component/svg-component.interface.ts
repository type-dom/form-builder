import { ISvgElement } from '../../../web-element/svg-element/svg-element.interface';

export interface ISvgComponent extends ISvgElement {
  tagName: 'svg',
  childNodes: ISvgElement[],
}
