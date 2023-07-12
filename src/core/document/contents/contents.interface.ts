import { ITypeDiv } from 'type-dom.ts';
import { IWebPage } from '../../page/web-page.interface';
export interface IWebDocumentContents extends ITypeDiv {
  nodeName: 'div',
  className: 'WebDocumentContents',
  childNodes: IWebPage[],
}
