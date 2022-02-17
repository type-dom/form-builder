import { IWebComponent } from '../../web-component/web-component.interface';
import { IWebDocumentContents } from './contents/contents.interface';
import { IWebDocumentTabs } from './tabs/tabs.interface';

export interface IWebDocument extends IWebComponent {
  tagName: 'div',
  className: 'WebDocument',
  childNodes: [IWebDocumentTabs, IWebDocumentContents],
}
