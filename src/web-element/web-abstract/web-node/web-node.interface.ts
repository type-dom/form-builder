export interface INodeAttr {
  name: string,
  value: string
}
export interface IComponent {
  name: string,
  pos: number,
}
export interface IWebNode {
  nodeName: string;
  nodeValue: string;
  parentNode: IWebNode | null;
  childNodes: IWebNode[];
  attributes?: INodeAttr[];
}
