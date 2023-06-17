export interface INodeAttr {
  name: string,
  value: string | number | boolean;
}
export interface IComponent {
  name: string,
  pos: number,
}
export interface ITypeNode {
  nodeName: string;
  nodeValue?: string;
  parentNode: ITypeNode | null;
  childNodes: ITypeNode[];
  attributes?: INodeAttr[];
}
