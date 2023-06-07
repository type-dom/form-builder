import { ISvgElement } from '../../web-abstract/svg-element/svg-element.interface';

export interface ISvgSvg extends ISvgElement {
  tagName: 'svg',
  className: 'SvgSvg',
  childNodes: ISvgElement[],
}
