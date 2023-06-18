import { ITypeSvg } from '../type-svg.interface';

export interface ITypeSvgSvg extends ITypeSvg {
  tagName: 'svg',
  childNodes: ITypeSvg[],
}
