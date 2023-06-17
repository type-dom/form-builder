import { ITypeDiv } from '../../../type-node/type-element/type-html/div/div.interface';
import { IWebDocumentContents } from './contents/contents.interface';
import { IWebDocumentTabs } from './tabs/tabs.interface';
export interface IWebDocument extends ITypeDiv {
  tagName: 'div',
  className: 'WebDocument',
  childNodes: [IWebDocumentTabs, IWebDocumentContents],
}
