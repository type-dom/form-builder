/**
 * 虚拟文本节点。
 * ----> 本身不会渲染成标签。没有对应的HTML标签。
 *
 * -----> ? 选中状态
 * 有什么用处？？？？
 * text-run下，在选中时，生成新的text节点。 但背景颜色怎么设置？ 自带的选中？
 *
 */
import { WebElement } from '../web-element/web-element.abstract';
import { IWebTextNode } from './web-text-node.interface';

export class WebTextNode implements IWebTextNode {
  className: 'WebTextNode';
  // childNodes: [string];
  text: string
  dom: Text;

  /**
   * @param parent
   * @param text
   */
  constructor(public parent: WebElement, text = '') { // \u200c
    this.className = 'WebTextNode';
    // this.childNodes = [text];
    this.text = text;
    this.dom = document.createTextNode(text);
  }

  // get textContentLength(): number {
  //   return this.textContent.length;
  // }

  // run中可能会有多个WebTextNode 了。
  get index(): number {
    return this.parent ? this.parent.findChildIndex(this) : -1;
  }

  // todo delete
  // get textContent(): string {
  //   return this.text;
  // }

  get length(): number {
    return this.text.length;
  }

  setParent(parent: WebElement): void {
    this.parent = parent;
  }

  setText(text: string): void {
    this.text = text;
    this.render();
  }

  /**
   * 把新内容添加到 this.textContent 末尾。
   * 注： this.render()有问题
   * 同时父级对象重新渲染。
   * @param content 新内容
   */
  appendText(content: string): void {
    if (content === '') {
      return;
    }
    this.text = this.text.concat(content);
    // this.render();
    this.parent.render();
  }

  /**
   * 调用 String自带slice方法
   * 根据指定位置，切分出内容中的一部分。
   * @param startOffset
   * @param endOffset
   */
  sliceText(startOffset: number, endOffset = this.length): string {
    if (startOffset >= endOffset) {
      return '';
    }
    return this.text.slice(startOffset, endOffset);
    // return this.textContent.substring(startIndex, endIndex);
  }

  /**
   * 光标状态或选择状态下的插入。
   * 在指定下标插入新的文本或节点。
   * @param text 要插入的文本
   * @param startOffset 起始位置
   * @param endOffset 结束位置
   */
  insertText(text: string, startOffset: number, endOffset = startOffset): void {
    const content = this.text;
    const preContent = content.substring(0, startOffset);
    const endContent = content.substring(endOffset);
    const newContent = preContent.concat(text, endContent);
    // this.childNodes = [newContent];
    this.setText(newContent);
    // todo error 光标移到头部。 ??触发selectionchange??
    // this.render(); //
    this.parent.render();
  }

  /**
   * 光标状态和选中状态的不同处理
   * @param startOffset ---> 与editor.startOffset的关系
   * @param endOffset
   */
  deleteText(startOffset: number, endOffset = startOffset): void {
    // todo startOffset === 0时。
    //  delete事件中处理。删除该文本节点，或与之前的文本节点合并，或合并段落，或没有操作等等
    if (startOffset === 0) { // 光标在头部
      return;
    }
    let preContent;
    let endContent;
    // 光标状态 删除光标前一个字符
    if (startOffset === endOffset) {
      // todo slice substring
      preContent = this.text.slice(0, startOffset - 1);
      endContent = this.text.slice(endOffset);
      //  todo 直接设置editor.startOffset
      // startOffset -= 1;
      // endOffset -= 1;
    } else { // 选择状态 删除选中的文字
      preContent = this.text.slice(0, startOffset);
      // console.log('preContent is ', preContent);
      // console.log('endOffset is ', endOffset);
      endContent = this.text.slice(endOffset);
      // console.log('endContent is ', endContent);
      // endOffset = startOffset;
    }

    const newContent = preContent.concat(endContent);
    // console.log('newContent is ', newContent);
    this.setText(newContent);
    // TODO 不能直接用 this.render(); 光标调到行程头部。
    // this.render();
    this.parent.render();
  }

  render(): void {
    this.dom.textContent = this.text || '';  // '\u200b'; // &zwnj; \u200c &zwsp;
  }
}

