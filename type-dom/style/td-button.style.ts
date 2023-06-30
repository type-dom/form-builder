import { IStyle } from './style.interface';
import { Cursor } from './style.enum';
import {
  $borderColors,
  $colors,
  $fontSizes,
  $textColors,
  $borderRadius,
  $borderWidth,
  $borderStyle,
  $colorWhite,
  $fontWeightPrimary,
  $buttonTextColor,
  $buttonBgColor,
  $buttonBorderColor,
  $button
} from './var';
export const $buttonIconSpanGap = {
  large: '8px',
  default: '6px',
  small: '4px',
};
export const typeOpts: Record<string, Partial<IStyle>> = {
  default: {
    color: $textColors.regular,
    fontWeight: $fontWeightPrimary,
    border: $borderWidth + ' ' + $borderStyle + ' ' + $textColors.regular,
    borderColor: $textColors.regular,
    fontSize: $fontSizes.base,
    borderRadius: $borderRadius.base,
  },
  primary: {
    color: $colors.white,
    fontWeight: $fontWeightPrimary,
    backgroundColor: $colors.primary.base,
    border: $borderWidth + ' ' + $borderStyle + ' ' + $borderColors[''],
    borderColor: $borderColors[''],
    fontSize: $fontSizes.base,
    borderRadius: $borderRadius.base,
  },
  success: {
    color: $colors.white,
    fontWeight: $fontWeightPrimary,
    backgroundColor: $colors.success.base,
    border: $borderWidth + ' ' + $borderStyle + ' ' + $borderColors[''],
    borderColor: $borderColors[''],
    fontSize: $fontSizes.base,
    borderRadius: $borderRadius.base,
  },
  warning: {
    color: $colors.white,
    fontWeight: $fontWeightPrimary,
    backgroundColor: $colors.warning.base,
    border: $borderWidth + ' ' + $borderStyle + ' ' + $colors.warning.base,
    borderColor: $colors.warning.base,
    fontSize: $fontSizes.base,
    borderRadius: $borderRadius.base,
  },
  info: {
    color: $colors.white,
    fontWeight: $fontWeightPrimary,
    backgroundColor: $colors.info.base,
    border: $borderWidth + ' ' + $borderStyle + ' ' + $colors.info.base,
    borderColor: $colors.info.base,
    fontSize: $fontSizes.base,
    borderRadius: $borderRadius.base,
  },
  danger: {
    color: $colors.white,
    fontWeight: $fontWeightPrimary,
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
  // min-height will expand when in flex
  height: '32px',
  whiteSpace: 'nowrap',
  cursor: Cursor.pointer,
  color: $button.textColor,
  textAlign: 'center',
  boxSizing: 'border-box',
  outline: 'none',
  transition: '.1s',
  fontWeight: $button.fontWeight, // getCssVar('button', 'font-weight');
  userSelect: 'none',
  verticalAlign: 'middle',
  appearance: 'none',
  // '-webkit-appearance': 'none',
  backgroundColor: $button.bgColor, // getCssVar('button', 'bg-color');
  // border: $border, // getCssVar('border'),
  borderColor: $button.borderColor, // getCssVar('button', 'border-color');
  padding: '8px 15px',
};


export function buttonVariant($type: string) {
  const $buttonColorTypes: Record<string, Record<string, string[]>> = {
    '': {
      textColor: $colorWhite,
      bgColor: $colors[$type].base,
      borderColor: $colors[$type].base,
      outlineColor: $colors[$type]['light-5'],
      activeColor: $colors[$type]['dark-2'],
    },
    hover: {
      textColor: $colorWhite,
      'link-text-color': ['color', $type, 'light-5'],
      bgColor: $colors[$type]['light-3'], // ['color', $type, 'light-3'],
      borderColor: $colors[$type]['light-3'], // ['color', $type, 'light-3'],
    },
    active: {
      bgColor: $colors[$type]['dark-2'], // ['color', $type, 'dark-2'],
      borderColor: $colors[$type]['dark-2'] // ['color', $type, 'dark-2'],
    },
    disabled: {
      textColor: $colorWhite,
      bgColor: $colors[$type]['light-5'], // ['color', $type, 'light-5'],
      borderColor: $colors[$type]['light-5'], // ['color', $type, 'light-5'],
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
// }
}


for (const $type of ['primary', 'success', 'warning', 'danger', 'info']) {
// @include m($type) {
//   @include button-variant($type);
//   }
  buttonVariant($type);
}
