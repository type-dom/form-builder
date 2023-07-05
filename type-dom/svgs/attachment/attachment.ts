import { TypeSvgSvg } from '../../type-element/type-svg/svg/svg.abstract';
import { SvgPath } from '../../element/svg-element/path/path.class';
import { TypeHtml } from '../../type-element/type-html/type-html.abstract';
export class AttachmentSvg extends TypeSvgSvg {
  className: 'AttachmentSvg';
  childNodes: [SvgPath];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'AttachmentSvg';
    const path = new SvgPath(this);
    path.setData('M314.008869 487.204571l-1.097143 1.097143-197.705143 197.997715c-24.210286 24.283429-36.498286 56.612571-36.498286 89.6 0 32.548571 12.288 64.877714 36.571429 89.161142l1.316571 1.974858c24.283429 23.113143 56.32 35.181714 88.137143 35.181714 32.402286 0 64.658286-12.580571 89.819429-37.156572l223.085714-223.670857 1.170286-0.219428 240.128-240.713143a55.588571 55.588571 0 0 0 0-78.921143 55.588571 55.588571 0 0 0-39.350858-15.506286 54.564571 54.564571 0 0 0-39.570285 15.798857l-345.234286 346.038858a40.594286 40.594286 0 0 1-55.881143 0 39.058286 39.058286 0 0 1 0-55.734858l345.6-345.819428a133.632 133.632 0 0 1 95.085714-39.350857c34.596571 0 68.681143 13.165714 94.793143 39.350857 26.258286 26.185143 39.058286 60.562286 39.058286 94.866286 0 33.938286-12.8 68.827429-39.058286 95.085714L574.031726 696.32l-0.585143 0.804571-0.585143 0.512-223.085714 222.866286a203.702857 203.702857 0 0 1-145.042286 59.684572c-51.931429 0-103.131429-19.017143-142.774857-57.417143l-2.194286-2.194286A202.605714 202.605714 0 0 1 0.079726 775.826286c0-52.443429 19.529143-105.691429 59.684571-145.334857l223.305143-223.597715 1.462857-0.658285 281.088-281.088A265.362286 265.362286 0 0 1 754.694583 46.518857c68.022857 0 136.704 26.331429 188.562286 78.701714 52.443429 51.273143 78.116571 119.954286 78.116571 188.196572 0 68.608-25.673143 136.923429-78.116571 189.147428l-387.072 387.072a38.985143 38.985143 0 0 1-55.222858 0 38.765714 38.765714 0 0 1 0-55.515428l387.072-387.072a190.171429 190.171429 0 0 0 0-266.971429 189.878857 189.878857 0 0 0-267.117714 0l-306.907428 307.2');
    this.childNodes = [path];
  }
}
