import { IWebStyle } from '../../../web-style.interface';
// todo 具体样式应该在自定义组件中设置，而不是在基类中设置。
export const buttonStyle: Partial<IWebStyle> = {
  // appearance: 'none',
  textAlign: 'center',
  boxSizing: 'border-box',
  outline: 'none',
  margin: '0',
  height: '32px',
  lineHeight: '1.5',
  transition: '0.1s'
};
