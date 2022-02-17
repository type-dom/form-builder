import { ISvgElement } from '../svg-element.interface';

export interface IWebSvg extends ISvgElement {
  tagName: 'svg',
  className: 'WebSvg',
  childNodes: ISvgElement[],
}
