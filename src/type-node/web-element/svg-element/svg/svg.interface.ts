import { ISvgElement } from '../../../type-element/svg-element/svg-element.interface';

export interface ISvgSvg extends ISvgElement {
  tagName: 'svg',
  className: 'SvgSvg',
  childNodes: ISvgElement[],
}
