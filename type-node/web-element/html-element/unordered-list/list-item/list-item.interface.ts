import { ITypeElement } from '../../../../type-element/type-element.interface';
// import { ITypeHtml } from '../../../../type-element/type-html/type-html.interface';
// import { IWebTextNode } from '../../../../web-text-node/web-text-node.interface';
export interface IListItem extends ITypeElement {
  nodeName: 'li',
  className: 'ListItem',
  // childNodes: (ITypeHtml | IWebTextNode)[];
}
