import { ITypeSvg } from '../type-svg.interface';

export interface ISvgBase extends ITypeSvg {
  tagName: 'svg',
  childNodes: ITypeSvg[],
}
