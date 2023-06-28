import { IWebStyle } from '../../web-style.interface';
import { Cursor } from '../../web-style.enum';
import { $borderColors, $colors, $fontSizes, $textColors } from './var';

const borderRadiusBase = '4px';
const fontWeightPrimary = 500;
export const typeOpts: Record<string, Partial<IWebStyle>> = {
  default: {
    color: $textColors.regular,
    fontWeight: fontWeightPrimary,
    border: '1px solid #606266',
    borderColor: $textColors.regular,
    fontSize: $fontSizes.base,
    borderRadius: borderRadiusBase,
  },
  primary: {
    color: '#fff',
    fontWeight: fontWeightPrimary,
    backgroundColor: $colors.primary.base,
    border: '1px solid #dcdfe6',
    borderColor: $borderColors[''],
    fontSize: $fontSizes.base,
    borderRadius: borderRadiusBase,
  },
  success: {
    color: $colors.white,
    fontWeight: fontWeightPrimary,
    backgroundColor: $colors.success.base,
    border: '1px solid #dcdfe6',
    borderColor: $borderColors[''],
    fontSize: $fontSizes.base,
    borderRadius: borderRadiusBase,
  },
  warning: {
    color: '#fff',
    fontWeight: fontWeightPrimary,
    backgroundColor: '#e6a23c',
    border: '1px solid #e6a23c',
    borderColor: '#e6a23c',
    fontSize: $fontSizes.base,
    borderRadius: borderRadiusBase,
  },
  info: {
    color: '#fff',
    fontWeight: fontWeightPrimary,
    backgroundColor: '#909399',
    border: '1px solid #909399',
    borderColor: '#909399',
    fontSize: $fontSizes.base,
    borderRadius: borderRadiusBase,
  },
  danger: {
    color: '#fff',
    fontWeight: fontWeightPrimary,
    backgroundColor: $colors.danger.base,
    border: '1px solid #f56c6c',
    borderColor: $colors.danger.base,
    fontSize: $fontSizes.base,
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
  appearance: 'none',
  // '-webkit-appearance': 'none',
  padding: '8px 15px',
};
