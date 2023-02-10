import { ISvgElement } from '../svg-element.interface';

export interface ISvgSvg extends ISvgElement {
  tagName: 'svg',
  className: 'SvgSvg',
  childNodes: ISvgElement[],
}
