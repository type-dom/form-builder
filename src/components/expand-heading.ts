import { fromEvent } from 'rxjs';
import { HtmlElement } from '../type-node/type-element/html-element/html-element.abstract';
import { WebComponent } from '../type-node/type-element/web-component/web-component.abstract';
import { Span } from '../type-node/web-element/html-element/span/span.class';
import { WebTextNode } from '../type-node/web-text-node/web-text-node.class';
import { TriangleSvg } from './svgs/triangle/triangle';
export class ExpandHeading extends HtmlElement {
  tagName: 'h3';
  className: 'ExpandHeading';
  dom: HTMLHeadingElement;
  childNodes: [TriangleSvg, Span];
  svg: TriangleSvg;
  title: Span;
  constructor(public parent: WebComponent, title: string) {
    super();
    this.tagName = 'h3';
    this.dom = document.createElement(this.tagName);
    this.className = 'ExpandHeading';
    this.propObj = {
      styleObj: {
        margin: '0',
        backgroundColor: '#a0a0a0',
        color: '#fff',
        textIndent: '20px',
        borderRadius: '4px',
        width: '100%',
      },
      attrObj: {
        name: 'expand-heading',
      }
    };

    this.svg = new TriangleSvg(this);

    this.title = new Span(this);
    // span.setStyle('verticalAlign', 'middle');
    this.title.childNodes = [new WebTextNode(this, title)];
    this.childNodes = [this.svg, this.title];

    this.initEvents();
  }

  initEvents(): ExpandHeading {
    this.events.push(
      fromEvent(this.svg.dom, 'click').subscribe((e: Event) => {
        e.stopPropagation();
        const style = getComputedStyle(this.svg.dom);
        console.log('style.transform is ', style.transform);
        if (this.svg.styleObj.transform === 'rotate(-90deg)') {
          this.svg.setStyleObj({
            transform: 'rotate(0deg)',
            transition: 'transform 0.3s'
          });
          console.log('style.transform is ', style.transform);
          this.parent.lastChild.setStyle('display', 'flex');
        } else {
          this.svg.setStyleObj({
            transform: 'rotate(-90deg)',
            transition: 'transform 0.3s'
          });
          this.parent.lastChild.setStyle('display', 'none');
        }
      }),
    );
    return this;
  }
}
