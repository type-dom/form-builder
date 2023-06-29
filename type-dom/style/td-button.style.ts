import { IStyle } from './style.interface';
import { Cursor } from './style.enum';
import { $borderColors, $colors, $fontSizes, $textColors } from './var';

const borderRadiusBase = '4px';
const fontWeightPrimary = 500;
export const typeOpts: Record<string, Partial<IStyle>> = {
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

export const sizeOpts: Record<string, Partial<IStyle>> = {
  mini: {},
  small: {},
  middle: {},
  large: {}
};
export const tdButtonBase: Partial<IStyle> = {
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


export function buttonVariant($type: string) {
  const $buttonColorTypes: Record<string, Record<string, string[]>> = {
    '': {
      'text-color': ['color', 'white'],
      'bg-color': ['color', $type],
      'border-color': ['color', $type],
      'outline-color': ['color', $type, 'light-5'],
      'active-color': ['color', $type, 'dark-2'],
    },
    'hover': {
      'text-color': ['color', 'white'],
      'link-text-color': ['color', $type, 'light-5'],
      'bg-color': ['color', $type, 'light-3'],
      'border-color': ['color', $type, 'light-3'],
    },
    'active': {
      'bg-color': ['color', $type, 'dark-2'],
      'border-color': ['color', $type, 'dark-2'],
    },
    'disabled': {
      'text-color': ['color', 'white'],
      'bg-color': ['color', $type, 'light-5'],
      'border-color': ['color', $type, 'light-5'],
    },
  };
  for (const $type1 in $buttonColorTypes) {
    console.log('$type1 is ', $type1);
    const $typeMap = $buttonColorTypes[$type1];
    console.log('$typeMap is ', $typeMap);
    for (const $typeColor in $typeMap) {
      console.log('$typeColor is ', $typeColor);
      const $list = $typeMap[$typeColor];
      console.log('$list is ', $list);
      // cssVarFromGlobal(('button', $type, $typeColor), $list);
    }
  }
  // @each $type, $typeMap in $buttonColorTypes {
  //   @each $typeColor, $list in $typeMap {
  //     @include css-var-from-global(('button', $type, $typeColor), $list);
  //   }
  // }

// &.is-plain,
// &.is-text,
// &.is-link {
//   @include button-plain($type);
//   }
}


for (const $type of ['primary', 'success', 'warning', 'danger', 'info']) {
// @include m($type) {
//   @include button-variant($type);
//   }
  buttonVariant($type);
}
