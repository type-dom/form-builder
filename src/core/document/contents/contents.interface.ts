import { IDivBase } from '../../../web-element/web-abstract/html-element/div/div.interface';
import { IWebPage } from '../../page/web-page.interface';

export interface IWebDocumentContents extends IDivBase {
  tagName: 'div',
  className: 'WebDocumentContents',
  childNodes: IWebPage[],
}
