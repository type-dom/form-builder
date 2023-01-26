import { IWebSvg } from '../web-svg.interface';

export interface ISvg extends IWebSvg {
  tagName: 'svg',
  className: 'Svg',
  childNodes: IWebSvg[],
}
