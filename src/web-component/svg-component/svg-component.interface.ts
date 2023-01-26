import { IWebSvg } from '../../web-element/web-svg/web-svg.interface';

export interface ISvgComponent extends IWebSvg {
  tagName: 'svg',
  childNodes: IWebSvg[],
}
