import { DivComponent } from '../../../web-abstract/web-component/div-component/div-component.abstract';
import { SvgElement } from '../../../web-element/svg-element/svg-element.abstract';
import { LogoSvg } from '../../../components/svgs/logo/logo';
import { WebHeader } from '../header';

export class Logo extends DivComponent {
  className: 'Logo';
  childNodes: SvgElement[];
  constructor(public parent: WebHeader) {
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
