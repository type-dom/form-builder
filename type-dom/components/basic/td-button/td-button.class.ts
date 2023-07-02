import { fromEvent } from 'rxjs';
import { TextNode } from '../../../text-node/text-node.class';
import { TypeButton } from '../../../type-element/type-html/button/button.abstract';
import { TypeHtml } from '../../../type-element/type-html/type-html.abstract';
import { Span } from '../../../element/html-element/span/span.class';
import { Template } from '../../../element/html-element/template/template.class';
import { Slot } from '../../../element/html-element/slot/slot.class';
import { $buttonStateColors, sizeOpts, tdButtonBase } from '../../../style/td-button.style';
import { $iconLeft, $iconLoading, $iconRight } from '../../../style/td-icon.style';
import { $button, $colors, $textColors, IType } from '../../../style/var';
import { TdIcon } from '../td-icon/td-icon.class';
import { ITdButton, ITdButtonConfig } from './td-button.interface';
export class TdButton extends TypeButton implements ITdButton {
  className: 'TdButton';
  span: Span;
  template: Template;
  type?: IType;
  textNode: TextNode;
  childNodes: (Span | TdIcon)[];
  constructor(public parent: TypeHtml, config?: Partial<ITdButtonConfig>) {
    super();
    this.className = 'TdButton';
    this.template = new Template(this);
    this.span = new Span(this);
    this.span.addStyleObj({
      display: 'inline-flex',
      alignItems: 'center',
    });
    this.textNode = new TextNode(this.span);
    this.span.addChild(this.textNode);
    const slot = new Slot(this.span);
    this.span.addChild(slot);
    this.childNodes = [this.span];
    this.setConfig(config);
    this.initEvents();
  }
  setConfig(config?: Partial<ITdButtonConfig>): void {
    this.addStyleObj(tdButtonBase);
    if (config?.title) {
      this.textNode.setText(config.title);
    }
    if (config?.SvgClass) {
      const icon = new TdIcon(this, {
        SvgClass: config.SvgClass,
      });
      if (config.iconPosition === 'right') {
        icon.addStyleObj($iconRight);
        this.addChild(icon);
      } else {
        icon.addStyleObj($iconLeft);
        this.unshiftChild(icon);
      }
      if (config.loading) {
        icon.addStyleObj($iconLoading);
      }
    }
    // const type = config?.type ? config.type : 'default';
    // this.type = type;
    if (config?.type) {
      this.type = config.type;
      this.addStyleObj($buttonStateColors[config.type].default);
    }
    const size = config?.size ? config.size : 'middle';
    this.addStyleObj(sizeOpts[size]);
    // this.addAttrObj({
    //   type: 'primary', // success warn danger primary
    //   size: 'middle' // small middle, large
    // });
  }
  initEvents() {
    this.events.push(
      fromEvent(this.dom, 'mouseover').subscribe(() => {
        if (this.type) {
          this.setStyleObj($buttonStateColors[this.type].hover);
        } else {
          this.setStyleObj({
            color: $button.hover.textColor,
            backgroundColor: $colors['primary']['light-3'],
            borderColor: $colors['primary']['light-3'],
          });
        }
      }),
      fromEvent(this.dom, 'mouseout').subscribe(() => {
        if (this.type) {
          this.setStyleObj($buttonStateColors[this.type].default);
        } else {
          this.setStyleObj({
            color: $button.textColor,
            backgroundColor: $button.bgColor,
            borderColor: $button.borderColor,
          });
        }
      })
    );
  }
}
