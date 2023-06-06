import { IWebComponent } from '../../../web-abstract/web-component/web-component.interface';
import { IWebPage } from '../../page/web-page.interface';

export interface IWebDocumentContents extends IWebComponent {
  tagName: 'div',
  className: 'WebDocumentContents',
  childNodes: IWebPage[],
}
