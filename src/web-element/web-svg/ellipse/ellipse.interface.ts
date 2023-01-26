import { IWebProperty } from '../../web-element.interface';
import { IWebSvg } from '../web-svg.interface';

/**
 * cx 属性定义圆点的 x 坐标
 * cy 属性定义圆点的 y 坐标
 * rx 属性定义水平半径
 * ry 属性定义垂直半径
 */
export interface ISvgEllipseProperty extends IWebProperty {
  styleObj: {
    fill: string, // rgb(200,100,50)
    stroke?: string, // rgb(0,0,0) pink
    strokeWidth?: number,
    strokeOpacity?: number, // 0.9
    opacity?: number // 0.9
  },
  attrObj: {
    cx: number,
    cy: number,
    rx: number,
    ry: number,
  }
}
export interface ISvgEllipse extends IWebSvg {
  tagName: 'ellipse';
  className: 'SvgEllipse';
  propObj: ISvgEllipseProperty;
  childNodes: [];
}
