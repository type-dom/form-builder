import { IComponent, INodeAttr, ITypeNode } from './type-node.interface';
export abstract class TypeNode implements ITypeNode {
  nodeName: string;
  nodeValue: string;
  // eslint-disable-next-line no-use-before-define
  parentNode: TypeNode | null;
  // eslint-disable-next-line no-use-before-define
  childNodes: TypeNode[];
  attributes?: INodeAttr[];
  protected constructor(nodeName: string, nodeValue: string) {
    this.nodeName = nodeName;
    this.nodeValue = nodeValue;
    this.parentNode = null;
    this.childNodes = [];
    // Object.defineProperty(this, "parentNode", { value: null, writable: true });
  }
  get firstChild(): TypeNode {
    return this.childNodes && this.childNodes[0];
  }
  get nextSibling(): TypeNode | undefined {
    const childNodes = this.parentNode?.childNodes;
    if (!childNodes) {
      return undefined;
    }
    const index = childNodes.indexOf(this);
    if (index === -1) {
      return undefined;
    }
    return childNodes[index + 1];
  }
  get textContent(): string {
    if (!this.childNodes) {
      return this.nodeValue || '';
    }
    return this.childNodes
      .map(function (child) {
        return child.textContent;
      })
      .join('');
  }
  get children(): TypeNode[] {
    return this.childNodes || [];
  }
  hasChildNodes(): boolean {
    return this.childNodes && this.childNodes.length > 0;
  }
  /**
   * Search a node in the tree with the given path
   * foo.bar[nnn], i.e. find the nnn-th node named
   * bar under a node named foo.
   *
   * @param {Array} paths - an array of objects as
   * returned by {parseXFAPath}.
   * @param {number} pos - the current position in
   * the paths array.
   * @returns {WebNode} The node corresponding
   * to the path or null if not found.
   */
  searchNode(paths: IComponent[], pos: number): TypeNode | null {
    if (pos >= paths.length) {
      return this;
    }
    const component = paths[pos];
    const stack: [TypeNode, number][] = [];
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let node: TypeNode = this;
    while (true) {
      if (component.name === node.nodeName) {
        if (component.pos === 0) {
          const res = node.searchNode(paths, pos + 1);
          if (res !== null) {
            return res;
          }
        } else if (stack.length === 0) {
          return null;
        } else {
          const [parent] = stack.pop()!;
          let siblingPos = 0;
          for (const child of parent.childNodes) {
            if (component.name === child.nodeName) {
              if (siblingPos === component.pos) {
                return child.searchNode(paths, pos + 1);
              }
              siblingPos++;
            }
          }
          // We didn't find the correct sibling
          // so just return the first found node
          return node.searchNode(paths, pos + 1);
        }
      }
      if (node.childNodes && node.childNodes.length !== 0) {
        stack.push([node, 0]);
        node = node.childNodes[0];
      } else if (stack.length === 0) {
        return null;
      } else {
        while (stack.length !== 0) {
          const [parent, currentPos] = stack.pop()!;
          const newPos = currentPos + 1;
          if (newPos < parent.childNodes.length) {
            stack.push([parent, newPos]);
            node = parent.childNodes[newPos];
            break;
          }
        }
        if (stack.length === 0) {
          return null;
        }
      }
    }
  }
  dump(buffer: string[]): string | undefined {
    if (this.nodeName === '#text') {
      buffer.push(encodeToXmlString(this.nodeValue));
      return;
    }
    buffer.push(`<${this.nodeName}`);
    if (this.attributes) {
      for (const attribute of this.attributes) {
        buffer.push(
          ` ${attribute.name}="${encodeToXmlString(attribute.value)}"`
        );
      }
    }
    if (this.hasChildNodes()) {
      buffer.push('>');
      for (const child of this.childNodes) {
        child.dump(buffer);
      }
      buffer.push(`</${this.nodeName}>`);
    } else if (this.nodeValue) {
      buffer.push(`>${encodeToXmlString(this.nodeValue)}</${this.nodeName}>`);
    } else {
      buffer.push('/>');
    }
  }
}
const XMLEntities: Record<number, string> = {
  /* < */ 0x3c: '&lt;',
  /* > */ 0x3e: '&gt;',
  /* & */ 0x26: '&amp;',
  /* " */ 0x22: '&quot;',
  /* ' */ 0x27: '&apos;',
};
function encodeToXmlString(str: string) {
  const buffer = [];
  let start = 0;
  for (let i = 0, ii = str.length; i < ii; i++) {
    const char = str.codePointAt(i)!;
    if (0x20 <= char && char <= 0x7e) {
      // ascii
      const entity = XMLEntities[char];
      if (entity) {
        if (start < i) {
          buffer.push(str.substring(start, i));
        }
        buffer.push(entity);
        start = i + 1;
      }
    } else {
      if (start < i) {
        buffer.push(str.substring(start, i));
      }
      buffer.push(`&#x${char.toString(16).toUpperCase()};`);
      if (char > 0xd7ff && (char < 0xe000 || char > 0xfffd)) {
        // char is represented by two u16
        i++;
      }
      start = i + 1;
    }
  }
  if (buffer.length === 0) {
    return str;
  }
  if (start < str.length) {
    buffer.push(str.substring(start, str.length));
  }
  return buffer.join('');
}
/**
 * AcroForm field names use an array like notation to refer to
 * repeated XFA elements e.g. foo.bar[nnn].
 * see: XFA Spec Chapter 3 - Repeated Elements
 *
 * @param {string} path - XFA path name.
 * @returns {Array} - Array of Objects with the name and pos of
 * each part of the path.
 */
function parseXFAPath(path: string) {
  const positionPattern = /(.+)\[(\d+)\]$/;
  return path.split('.').map(component => {
    const m = component.match(positionPattern);
    if (m) {
      return { name: m[1], pos: parseInt(m[2], 10) };
    }
    return { name: component, pos: 0 };
  });
}
