import { ITypeDiv } from '@type-dom/framework';
import { IWebPage } from '../../page/web-page.interface';

export interface IWebDocumentContents extends ITypeDiv {
  nodeName: 'div';
  className: 'WebDocumentContents';
  childNodes: IWebPage[];
}
