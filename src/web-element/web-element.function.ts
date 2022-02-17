import { IWebTextNode } from '../web-text-node/web-text-node.interface';
import { IAttribute, IStyle, IWebElement } from './web-element.interface';
import { WebElement } from './web-element.abstract';

/**
 * 设置dom的style
 * @param dom
 * @param styleObj
 */
export function setStyles(dom: HTMLElement, styleObj: Partial<IStyle>): void {
  for (const key in styleObj) {
    // console.log('key is ', key);
    if (Object.hasOwnProperty.call(styleObj, key)) {
      (dom.style as any)[key] = styleObj[key as keyof IStyle];
    }
  }
}

/**
 * 设置dom属性
 * @param dom
 * @param attrObj
 */
export function setAttributes(dom: HTMLElement, attrObj: Partial<IAttribute>): void {
  for (const attr in attrObj) {
    if (Object.hasOwnProperty.call(attrObj, attr)) {
      dom.setAttribute(attr, (attrObj as any)[attr]);
    }
  }
}

export function pxToRem(str: string): string {
  // 匹配:20px或: 20px不区分大小写
  const reg = /(\:|: )+(\d)+(px)/gi;
  return str.replace(reg, function (char: string) {
    const x = char.replace(/(\:|: )/, '').replace(/px/i, '');
    return ':' + parseFloat(x) / 100 + 'rem';
  });
}

export function getScroll(area?: Element): {x: number; y:number} {
  const body = {
    top:
      document.body.scrollTop > 0
        ? document.body.scrollTop
        : document.documentElement.scrollTop,
    left:
      document.body.scrollLeft > 0
        ? document.body.scrollLeft
        : document.documentElement.scrollLeft,
  };

  return {
    y: area && area.scrollTop >= 0 ? area.scrollTop : body.top,
    x: area && area.scrollLeft >= 0 ? area.scrollLeft : body.left,
  };
}

/**
 * 保存数据时使用。
 * 把当前数据层对象转换为 JSON 字面量。
 * 但是就数据层存储而言，是不需要转化page及其子元素的。
 */
export function toJSON(element: WebElement): IWebElement {
  return {
    tagName: element.tagName,
    className: element.className,
    propObj: {
      styleObj: Object.assign({}, element.styleObj), // 两层。浅拷贝
      attrObj: Object.assign({}, element.attrObj),
    },
    // items, page ----> 不起作用
    childNodes: element.childNodes.map(child => {
      if (child instanceof WebElement) {
        return toJSON(child);
      } else {
        // if (c.textContent) {
        //   console.error('c is ', c);
        // }
        return {
          className: child.className,
          text: child.text, // textContent
        } as IWebTextNode;
      }
    })
  } as IWebElement;
}
