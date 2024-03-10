import { TypeDiv, TypeSvg } from '@type-dom/framework';
import { LogoSvg } from '@type-dom/svgs';
import { HeaderWrapper } from '../header';

export class Logo extends TypeDiv {
  className: 'Logo';
  childNodes: TypeSvg[];

  constructor(public parent: HeaderWrapper) {
    super();
    this.className = 'Logo';
    this.addAttrName('header-logo');
    const logoSvg = new LogoSvg(this);
    logoSvg.resetSize(58, 58);
    this.childNodes = [logoSvg];
  }
}
