import { IWebStyle } from '../../../web-style.interface';
import { Cursor } from '../../../web-style.enum';

// export const tdButtonStyle: Partial<IWebStyle> = {
//   // appearance: 'none',
//   textAlign: 'center',
//   boxSizing: 'border-box',
//   outline: 'none',
//   margin: '0',
//   height: '32px',
//   lineHeight: '1.5',
//   transition: '0.1s'
// };
const colors = {
  white: '#ffffff',
  black: '#000000',
  primary: '#409eff',
  success: '#67c23a',
  warning: '#e6a23c',
  danger: '#f56c6c',
  error: '#f56c6c',
  info: '#909399',
};
const textColors = {
  primary: '#303133',
  regular: '#606266',
  secondary: '#909399',
  placeholder: '#a8abb2',
  disabled: '#c0c4cc',
};
const borderColors = {
  '': '#dcdfe6',
  light: '#e4e7ed',
  lighter: '#ebeef5',
  extraLight: '#f2f6fc',
  dark: '#d4d7de',
  darker: '#cdd0d6',
};
const fontSizes = {
  extraLarge: '20px',
  large: '18px',
  medium: '16px',
  base: '14px',
  small: '13px',
  extraSmall: '12px',
};
const fontSizeBase = '14px';
const borderRadiusBase = '4px';
const fontWeightPrimary = 500;
export const typeOpts: Record<string, Partial<IWebStyle>> = {
  default: {
    color: textColors.regular,
    fontWeight: fontWeightPrimary,
    border: '1px solid #606266',
    borderColor: textColors.regular,
    fontSize: fontSizes.base,
    borderRadius: borderRadiusBase,
  },
  primary: {
    color: '#fff',
    fontWeight: fontWeightPrimary,
    backgroundColor: colors.primary,
    border: '1px solid #dcdfe6',
    borderColor: borderColors[''],
    fontSize: fontSizes.base,
    borderRadius: borderRadiusBase,
  },
  success: {
    color: colors.white,
    fontWeight: fontWeightPrimary,
    backgroundColor: colors.success,
    border: '1px solid #dcdfe6',
    borderColor: borderColors[''],
    fontSize: fontSizes.base,
    borderRadius: borderRadiusBase,
  },
  warning: {
    color: '#fff',
    fontWeight: fontWeightPrimary,
    backgroundColor: '#e6a23c',
    border: '1px solid #e6a23c',
    borderColor: '#e6a23c',
    fontSize: fontSizes.base,
    borderRadius: borderRadiusBase,
  },
  info: {
    color: '#fff',
    fontWeight: fontWeightPrimary,
    backgroundColor: '#909399',
    border: '1px solid #909399',
    borderColor: '#909399',
    fontSize: fontSizes.base,
    borderRadius: borderRadiusBase,
  },
  danger: {
    color: '#fff',
    fontWeight: fontWeightPrimary,
    backgroundColor: colors.danger,
    border: '1px solid #f56c6c',
    borderColor: colors.danger,
    fontSize: fontSizes.base,
    borderRadius: borderRadiusBase,
  }
};

export const sizeOpts: Record<string, Partial<IWebStyle>> = {
  mini: {},
  small: {},
  middle: {},
  large: {}
};
export const tdButtonBase: Partial<IWebStyle> = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: '1',
  height: '32px',
  whiteSpace: 'nowrap',
  cursor: Cursor.pointer,
  textAlign: 'center',
  boxSizing: 'border-box',
  outline: 'none',
  transition: '.1s',
  userSelect: 'none',
  verticalAlign: 'middle',
  // '-webkit-appearance': 'none',
  padding: '8px 15px',
};
