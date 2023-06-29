import { TypeButton } from '../../../type-element/type-html/button/button.abstract';
import { TypeHtml } from '../../../type-element/type-html/type-html.abstract';
import { Span } from '../../../element/html-element/span/span.class';
import { I } from '../../../element/html-element/i/i.class';
import { tdButtonBase, typeOpts } from '../../../style/td-button.style';
import { AddSvg } from '../../svgs/add/add';
import { ITdButton, ITdButtonConfig } from './td-button.interface';
export class TdButton extends TypeButton implements ITdButton {
  className: 'TdButton';
  span: Span;
  icon: I;
  constructor(public parent: TypeHtml, config?: Partial<ITdButtonConfig>) {
    super();
    this.className = 'TdButton';
    this.span = new Span(this);
    this.span.addStyleObj({
      display: 'inline-flex',
      alignItems: 'center',
    });
    this.icon = new I(this.span);
    const svg = new AddSvg(this.icon);
    this.icon.addChild(svg);
    this.icon.addStyleObj({
      // --color: inherit,
      height: '1em',
      width: '1em',
      lineHeight: '1em',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      fill: 'currentColor',
      // color: var(--color),
      fontSize: 'inherit',
    });
    this.textNode.setParent(this.span);
    this.span.addChild(this.textNode);
    this.span.addChild(this.icon);
    this.childNodes = [this.span];
    this.setConfig(config);
  }
  setConfig(config?: Partial<ITdButtonConfig>): void {
    this.addStyleObj(tdButtonBase);
    if (config?.title) {
      this.setTitle(config.title);
    }
    const type = config?.type ? config.type : 'default';
    if (type) {
      this.addStyleObj(typeOpts[type]);
    }
    // this.addAttrObj({
    //   type: 'primary', // success warn danger primary
    //   size: 'middle' // small middle, large
    // });
  }
}
