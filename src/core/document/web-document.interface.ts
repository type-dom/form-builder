import { IDivBase } from '../../web-element/web-abstract/html-element/div/div.interface';
import { IWebDocumentContents } from './contents/contents.interface';
import { IWebDocumentTabs } from './tabs/tabs.interface';

export interface IWebDocument extends IDivBase {
  tagName: 'div',
  className: 'WebDocument',
  childNodes: [IWebDocumentTabs, IWebDocumentContents],
}
