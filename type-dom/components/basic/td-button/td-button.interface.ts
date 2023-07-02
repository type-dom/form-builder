import { IType } from '../../../style/var';
import { ISpan } from '../../../element/html-element/span/span.interface';
import { ITdIcon } from '../td-icon/td-icon.interface';
import { ITypeButton } from '../../../type-element/type-html/button/button.interface';
export interface ITdButton extends ITypeButton {
  // nodeName: 'button',
  className: 'TdButton',
  childNodes: (ISpan | ITdIcon)[],
}

/**
 *     type、plain、round 和 circle 来定义按钮的样式。
 *         type: primary/success/warning/danger/info
 *         size: mini/small/middle/large
 *         round,
 *         circle: boolean
 *     使用 icon 属性来为按钮添加图标。
 *         icon: 'Search'
 *     通过设置 loading 属性为 true 来显示加载中状态。
 *     loading-icon  自定义加载中状态图标组件
 *     color 自定义按钮的颜色。
 *     disabled  按钮是否为禁用状态
 */
export interface ITdButtonConfig {
  SvgClass: any,
  iconPosition: 'left' | 'right',
  title: string,
  type: IType,
  size: 'mini' | 'small' | 'middle' | 'large',
  plain: boolean,
  icon: string,
  loading: boolean,
  loadingIcon: string,
  round: boolean,
  circle: boolean,
  color: string,
  disabled: boolean,
}
