import { TypeDiv } from '../../../type-node/type-element/type-html/div/div.abstract';
import { TypeSvg } from '../../../type-node/type-element/type-svg/type-svg.abstract';
import { LogoSvg } from '../../../type-node/components/svgs/logo/logo';
import { HeaderWrapper } from '../header';
export class Logo extends TypeDiv {
  className: 'Logo';
  childNodes: TypeSvg[];
  constructor(public parent: HeaderWrapper) {
    super();
    this.className = 'Logo';
    this.propObj = {
      styleObj: {
        // width: '58px',
        // height: '58px',
        // backgroundImage: 'url(' + logoImage + ')',
        // backgroundSize: 'contain',
        // backgroundRepeat: 'no-repeat',
      },
      attrObj: {
        name: 'header-logo'
      }
    };
    const logoSvg = new LogoSvg(this);
    logoSvg.resetSize(58, 58);
    this.childNodes = [logoSvg];
  }
  // render(): void {
  //   super.render();
  //   console.error('logoImage is ', logoImage);
  //   this.dom.innerHTML = logoImage;
  // }
}
