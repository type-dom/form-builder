import { TypeNode } from '../type-node.class';
import { INodeAttr } from '../type-node.interface';
import { ParserErrorCode } from './parser.const';
import { isWhitespace, isWhitespaceString } from './parser.util';
import { IContent, IInstruction, IParam } from './parser.interface';
/**
 * The code for XMLParser copied from pdf.js
 * 虚拟DOM字符串解析工具
 * DOM对象和String字符串之间的转换
 */
export class Parser {
  private _currentFragment: TypeNode[];
  private _stack: TypeNode[][];
  private _errorCode: number;
  private readonly _hasAttributes: boolean | undefined;
  private readonly _lowerCaseName: boolean | undefined;
  constructor({ hasAttributes = true, lowerCaseName = false }: IParam) {
    this._currentFragment = [];
    this._stack = [];
    this._errorCode = ParserErrorCode.NoError;
    this._hasAttributes = hasAttributes;
    this._lowerCaseName = lowerCaseName;
  }
  _resolveEntities(s: string): string {
    return s.replace(/&([^;]+);/g, (all, entity) => {
      if (entity.substring(0, 2) === '#x') {
        return String.fromCodePoint(parseInt(entity.substring(2), 16));
      } else if (entity.substring(0, 1) === '#') {
        return String.fromCodePoint(parseInt(entity.substring(1), 10));
      }
      switch (entity) {
        case 'lt':
          return '<';
        case 'gt':
          return '>';
        case 'amp':
          return '&';
        case 'quot':
          return '"';
        case 'apos':
          return "'";
      }
      return this.onResolveEntity(entity);
    });
  }
  /**
   * 解析字符串，----> TypeNode
   * @param s
   * @param start
   */
  _parseContent(s: string, start: number): IContent | null {
    const attributes: INodeAttr[] = [];
    let pos = start;

    function skipWs() {
      while (pos < s.length && isWhitespace(s, pos)) {
        ++pos;
      }
    }

    while (
      pos < s.length &&
      !isWhitespace(s, pos) &&
      s[pos] !== '>' &&
      s[pos] !== '/'
    ) {
      ++pos;
    }
    const name = s.substring(start, pos);
    skipWs();
    while (
      pos < s.length &&
      s[pos] !== '>' &&
      s[pos] !== '/' &&
      s[pos] !== '?'
    ) {
      skipWs();
      let attrName = '';
      let attrValue = '';
      while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== '=') {
        attrName += s[pos];
        ++pos;
      }
      skipWs();
      if (s[pos] !== '=') {
        return null;
      }
      ++pos;
      skipWs();
      const attrEndChar = s[pos];
      if (attrEndChar !== '"' && attrEndChar !== "'") {
        return null;
      }
      const attrEndIndex = s.indexOf(attrEndChar, ++pos);
      if (attrEndIndex < 0) {
        return null;
      }
      attrValue = s.substring(pos, attrEndIndex);
      // todo 不同值的处理
      let value = this._resolveEntities(attrValue);
      if (value === 'true' || value === 'false') {
        attributes.push({
          name: attrName,
          value: value === 'true',
        });
      } else {
        attributes.push({
          name: attrName,
          value: value,
        });
      }
      pos = attrEndIndex + 1;
      skipWs();
    }
    return {
      name,
      attributes,
      parsed: pos - start,
    };
  }
  _parseProcessingInstruction(s: string, start: number): IInstruction {
    let pos = start;
    function skipWs() {
      while (pos < s.length && isWhitespace(s, pos)) {
        ++pos;
      }
    }
    while (
      pos < s.length &&
      !isWhitespace(s, pos) &&
      s[pos] !== '>' &&
      s[pos] !== '?' &&
      s[pos] !== '/'
    ) {
      ++pos;
    }
    const name = s.substring(start, pos);
    skipWs();
    const attrStart = pos;
    while (pos < s.length && (s[pos] !== '?' || s[pos + 1] !== '>')) {
      ++pos;
    }
    const value = s.substring(attrStart, pos);
    return {
      name,
      value,
      parsed: pos - start,
    };
  }
  /**
   * 解析xml字符串
   * @param s
   */
  parseXml(s: string): void {
    // console.log('parseXml . ');
    // console.log('s is ', s);
    let i = 0;
    while (i < s.length) {
      const ch = s[i];
      let j = i;
      if (ch === '<') {
        ++j;
        const ch2 = s[j];
        let q;
        let pi;
        let content;
        let isClosed;
        switch (ch2) {
          case '/':
            ++j;
            q = s.indexOf('>', j);
            if (q < 0) {
              this.onError(ParserErrorCode.UnterminatedElement);
              return;
            }
            this.onEndElement(s.substring(j, q));
            j = q + 1;
            break;
          case '?':
            ++j;
            pi = this._parseProcessingInstruction(s, j);
            if (s.substring(j + pi.parsed, j + pi.parsed + 2) !== '?>') {
              this.onError(ParserErrorCode.UnterminatedXmlDeclaration);
              return;
            }
            this.onPi(pi.name, pi.value);
            j += pi.parsed + 2;
            break;
          case '!':
            if (s.substring(j + 1, j + 3) === '--') {
              q = s.indexOf('-->', j + 3);
              if (q < 0) {
                this.onError(ParserErrorCode.UnterminatedComment);
                return;
              }
              this.onComment(s.substring(j + 3, q));
              j = q + 3;
            } else if (s.substring(j + 1, j + 8) === '[CDATA[') {
              q = s.indexOf(']]>', j + 8);
              if (q < 0) {
                this.onError(ParserErrorCode.UnterminatedCdat);
                return;
              }
              this.onCdata(s.substring(j + 8, q));
              j = q + 3;
            } else if (s.substring(j + 1, j + 8) === 'DOCTYPE') {
              const q2 = s.indexOf('[', j + 8);
              let complexDoctype = false;
              q = s.indexOf('>', j + 8);
              if (q < 0) {
                this.onError(ParserErrorCode.UnterminatedDoctypeDeclaration);
                return;
              }
              if (q2 > 0 && q > q2) {
                q = s.indexOf(']>', j + 8);
                if (q < 0) {
                  this.onError(
                    ParserErrorCode.UnterminatedDoctypeDeclaration
                  );
                  return;
                }
                complexDoctype = true;
              }
              const doctypeContent = s.substring(
                j + 8,
                q + (complexDoctype ? 1 : 0)
              );
              this.onDoctype(doctypeContent);
              j = q + (complexDoctype ? 2 : 1);
            } else {
              this.onError(ParserErrorCode.MalformedElement);
              return;
            }
            break;
          default:
            content = this._parseContent(s, j);
            if (content === null) {
              this.onError(ParserErrorCode.MalformedElement);
              return;
            }
            isClosed = false;
            if (
              s.substring(j + content.parsed, j + content.parsed + 2) === '/>'
            ) {
              isClosed = true;
            } else if (
              s.substring(j + content.parsed, j + content.parsed + 1) !== '>'
            ) {
              this.onError(ParserErrorCode.UnterminatedElement);
              return;
            }
            this.onBeginElement(content.name, content.attributes, isClosed);
            j += content.parsed + (isClosed ? 2 : 1);
            break;
        }
      } else {
        while (j < s.length && s[j] !== '<') {
          j++;
        }
        const text = s.substring(i, j);
        this.onText(this._resolveEntities(text));
      }
      i = j;
    }
  }
  onResolveEntity(name: string): string {
    return `&${name};`;
  }
  onPi(name: string, value: string): void {
    console.log('onPi name is ' + name + ' value is ' + value);
  }
  onComment(text: string): void {
    console.log('onComment text is ', text);
  }
  onDoctype(doctypeContent: string): void {
    console.log('doctypeContent is ', doctypeContent);
  }
  parseFromString(data: string): TypeNode | undefined {
    console.log('ofd-xml-parser parseFromString . ');
    this._currentFragment = [];
    this._stack = [];
    this._errorCode = ParserErrorCode.NoError;

    this.parseXml(data.trim());

    if (this._errorCode !== ParserErrorCode.NoError) {
      return undefined; // return undefined on error
    }
    // We should only have one root.
    const [documentElement] = this._currentFragment;
    if (!documentElement) {
      return undefined; // Return undefined if no root was found.
    }
    return documentElement;
  }
  // 文本节点
  onText(text: string): void {
    if (isWhitespaceString(text)) {
      return;
    }
    const node = new TypeNode('#text', text);
    this._currentFragment.push(node);
  }
  onCdata(text: string): void {
    const node = new TypeNode('#text', text);
    this._currentFragment.push(node);
  }

  /**
   * 在开始的元素
   * @param name  tagName
   * @param attributes
   * @param isEmpty
   */
  onBeginElement(name: string, attributes: INodeAttr[], isEmpty?: boolean): void {
    if (this._lowerCaseName) {
      name = name.toLowerCase();
    }
    const node = new TypeNode(name);
    node.childNodes = [];
    if (this._hasAttributes) {
      node.attributes = attributes;
    }
    this._currentFragment.push(node);
    if (isEmpty) {
      return;
    }
    // 存入缓存
    this._stack.push(this._currentFragment);
    this._currentFragment = node.children;
  }

  /**
   * 在结束的元素
   * @param name 应该是tagName
   */
  onEndElement(name: string): TypeNode | null {
    // console.log('onEndElement . name is ', name);
    // 取回缓存的节点
    this._currentFragment = this._stack?.pop() || [];
    const lastElement = this._currentFragment?.at(-1);
    if (!lastElement) {
      return null;
    }
    // 对应的字节点
    for (const child of lastElement.children) {
      if (child.nodeName === '#text') {
        // console.log('text TypeNode . ');
        // switch (name?.trim()) {
        //   default:
        //     // console.log('child.value default is ', child.value);
        //   // result.children = [child.nodeValue]; 注：标签和文本混合时，会清除标签；
        //     // result.children.push(child.nodeValue); // todo 可能会引起其它问题；
        // }
      }
      // child.parent = lastElement;
    }
    return lastElement;
  }
  onError(code: number): void {
    this._errorCode = code;
  }
}
