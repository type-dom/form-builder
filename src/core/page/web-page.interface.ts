import { IWebControl } from '../controls/web-control.interface';
import { IDivBase } from '../../web-element/web-abstract/html-element/div/div.interface';

export interface IWebPageBackground {
  type: number, // 背景类型，0：无背景；1：颜色背景；2：图像背景
  color: string, // 背景颜色，type为1时有效
  image: string, // 图像背景，type为2是有效
}

export interface IWebPage extends IDivBase {
  className: 'WebPage',
  childNodes: IWebControl[],
}
