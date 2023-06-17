import { IDivBase } from '../../../type-node/type-element/type-html/div/div.interface';
import { IWebPage } from '../../page/web-page.interface';

export interface IWebDocumentContents extends IDivBase {
  tagName: 'div',
  className: 'WebDocumentContents',
  childNodes: IWebPage[],
}
