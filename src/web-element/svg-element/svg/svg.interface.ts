import { ISvgElement } from '../svg-element.interface';

export interface ISvg extends ISvgElement {
  tagName: 'svg',
  className: 'Svg',
  childNodes: ISvgElement[],
}
