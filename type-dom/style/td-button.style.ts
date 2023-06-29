import { IStyle } from './style.interface';
import { Cursor } from './style.enum';
import { $borderColors, $colors, $fontSizes, $textColors, $borderRadius, $borderWidth, $borderStyle } from './var';

const fontWeightPrimary = 500;
export const typeOpts: Record<string, Partial<IStyle>> = {
  default: {
    color: $textColors.regular,
    fontWeight: fontWeightPrimary,
    border: $borderWidth + ' ' + $borderStyle + ' ' + $textColors.regular,
    borderColor: $textColors.regular,
    fontSize: $fontSizes.base,
    borderRadius: $borderRadius.base,
  },
  primary: {
    color: '#fff',
    fontWeight: fontWeightPrimary,
    backgroundColor: $colors.primary.base,
    border: $borderWidth + ' ' + $borderStyle + ' ' + $borderColors[''],
    borderColor: $borderColors[''],
    fontSize: $fontSizes.base,
    borderRadius: $borderRadius.base,
  },
  success: {
    color: $colors.white,
    fontWeight: fontWeightPrimary,
    backgroundColor: $colors.success.base,
    border: $borderWidth + ' ' + $borderStyle + ' ' + $borderColors[''],
    borderColor: $borderColors[''],
    fontSize: $fontSizes.base,
    borderRadius: $borderRadius.base,
  },
  warning: {
    color: '#fff',
    fontWeight: fontWeightPrimary,
    backgroundColor: $colors.warning.base,
    border: $borderWidth + ' ' + $borderStyle + ' ' + $colors.warning.base,
    borderColor: $colors.warning.base,
    fontSize: $fontSizes.base,
    borderRadius: $borderRadius.base,
  },
  info: {
    color: '#fff',
    fontWeight: fontWeightPrimary,
    backgroundColor: $colors.info.base,
    border: $borderWidth + ' ' + $borderStyle + ' ' + $colors.info.base,
    borderColor: $colors.info.base,
    fontSize: $fontSizes.base,
    borderRadius: $borderRadius.base,
  },
  danger: {
    color: '#fff',
    fontWeight: fontWeightPrimary,
    backgroundColor: $colors.danger.base,
    border: $borderWidth + ' ' + $borderStyle + ' ' + $colors.danger.base,
    borderColor: $colors.danger.base,
    fontSize: $fontSizes.base,
    borderRadius: $borderRadius.base,
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
