import { ITypeDiv } from 'type-dom.ts';
import { IWebDocumentContents } from './contents/contents.interface';
import { IWebDocumentTabs } from './tabs/tabs.interface';
export interface IWebDocument extends ITypeDiv {
  nodeName: 'div',
  className: 'WebDocument',
  childNodes: [IWebDocumentTabs, IWebDocumentContents],
}
