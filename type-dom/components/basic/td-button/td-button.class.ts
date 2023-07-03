import { fromEvent } from 'rxjs';
import { TextNode } from '../../../text-node/text-node.class';
import { TypeButton } from '../../../type-element/type-html/button/button.abstract';
import { TypeHtml } from '../../../type-element/type-html/type-html.abstract';
import { Span } from '../../../element/html-element/span/span.class';
import { Template } from '../../../element/html-element/template/template.class';
import { Slot } from '../../../element/html-element/slot/slot.class';
import { $buttonPlainColors, $buttonStateColors, sizeOpts, tdButtonBase } from '../../../style/td-button.style';
import { $iconLeft, $iconLoading, $iconRight } from '../../../style/td-icon.style';
import { $borderRadius, $button, $buttonPaddingVertical, $colors, $textColors, IType } from '../../../style/var';
import { TdIcon } from '../td-icon/td-icon.class';
import { IButtonType, ITdButton, ITdButtonConfig } from './td-button.interface';
export class TdButton extends TypeButton implements ITdButton {
  className: 'TdButton';
  childNodes: (Span | TdIcon)[];
  span: Span;
  textNode: TextNode;
  template: Template;
  private type?: IButtonType;
  private plain?: boolean;
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
      if (config?.plain) {
        console.log('config.plain . ');
        this.plain = config.plain;
        console.log($buttonPlainColors[config.type].default);
        this.addStyleObj($buttonPlainColors[config.type].default);
      } else {
        this.addStyleObj($buttonStateColors[config.type].default);
      }
    }
    const size = config?.size ? config.size : 'middle';
    this.addStyleObj(sizeOpts[size]);
    if (config?.round) {
      this.addStyleObj({
        borderRadius: $borderRadius.round,
      });
    } else if (config?.circle) {
      this.addStyleObj({
        borderRadius: $borderRadius.circle,
        padding: $buttonPaddingVertical.default
      });
    }
  }
  initEvents() {
    this.events.push(
      fromEvent(this.dom, 'mouseover').subscribe(() => {
        if (this.type) {
          this.setStyleObj($buttonStateColors[this.type].hover);
        } else {
          this.setStyleObj({
            color: $button.hover.textColor,
            backgroundColor: $button.hover.borderColor, // $colors['primary']['light-3'],
            borderColor: $button.hover.borderColor,
          });
        }
      }),
      fromEvent(this.dom, 'mouseout').subscribe(() => {
        if (this.type) {
          if (this.plain) {
            this.setStyleObj($buttonPlainColors[this.type].default);
          } else {
            this.setStyleObj($buttonStateColors[this.type].default);
          }
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
