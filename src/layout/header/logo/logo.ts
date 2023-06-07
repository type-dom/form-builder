import { DivBase } from '../../../web-element/web-abstract/html-element/div/div.abstract';
import { SvgElement } from '../../../web-element/web-abstract/svg-element/svg-element.abstract';
import { LogoSvg } from '../../../components/svgs/logo/logo';
import { HeaderWrapper } from '../header';

export class Logo extends DivBase {
  className: 'Logo';
  childNodes: SvgElement[];
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
