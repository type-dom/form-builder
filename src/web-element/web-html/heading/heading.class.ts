import { WebTextNode } from '../../../web-text-node/web-text-node.class';
import { WebHtml } from '../web-html.abstract';
import { IHeading } from './heading.interface';

// h1,h2,h3,h4,h5
export class Heading extends WebHtml implements IHeading {
  tagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  dom: HTMLHeadingElement;
  className: 'Heading';
  childNodes: WebTextNode[];
  constructor(public parent: WebHtml, tagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') {
    super();
    this.tagName = tagName;
    this.dom = document.createElement(this.tagName);
    this.className = 'Heading';
    this.childNodes = [];
  }
}
