import { ILabelComponent } from './label-component.interface';
import { WebElement } from '../../web-element/web-element.abstract';

export abstract class LabelComponent extends WebElement implements ILabelComponent {
  tagName: 'label';
  dom: HTMLLabelElement;
  protected constructor() {
    super();
    this.tagName = 'label';
    this.dom = document.createElement(this.tagName);
  }
}
