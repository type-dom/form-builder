import { WebComponent } from '../web-component.abstract';
import { IDivComponent } from './div-component.interface';

export abstract class DivComponent extends WebComponent implements IDivComponent {
  tagName: 'div';
  dom: HTMLDivElement;
  protected constructor() {
    super();
    this.tagName = 'div';
    this.dom = document.createElement(this.tagName);
  }
}
