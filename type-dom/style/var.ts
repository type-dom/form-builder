import {getCssVar} from "./function";

type ITypes = 'primary' | 'success' | 'warning' | 'danger' | 'error' | 'info';
const $types: ['primary', 'success', 'warning', 'danger', 'error', 'info'] =
  ['primary', 'success', 'warning', 'danger', 'error', 'info'];
export const $colors: Record<string, any> = {
  white: '#ffffff',
  black: '#000000',
  primary: { base: '#409eff' },
  success: { base: '#67c23a' },
  warning: { base: '#e6a23c' },
  danger: { base: '#f56c6c' },
  error: { base: '#f56c6c' },
  info: { base: '#909399' },
};
export const $colorWhite = $colors.white;
export const $colorBlack = $colors.black;
export const $colorPrimary = $colors.primary.base;
export const $colorSuccess = $colors.success.base;
export const $colorWarning = $colors.warning.base;
export const $colorDanger = $colors.danger.base;
export const $colorError = $colors.error.base;
export const $colorInfo = $colors.info.base;
function mix(c1: string, c2: string, ratioI: string | number = 0.5) {
  const ratio = Math.max(Math.min(Number(ratioI), 1), 0);
  let r1 = parseInt(c1.substring(1, 3), 16);
  let g1 = parseInt(c1.substring(3, 5), 16);
  let b1 = parseInt(c1.substring(5, 7), 16);
  let r2 = parseInt(c2.substring(1, 3), 16);
  let g2 = parseInt(c2.substring(3, 5), 16);
  let b2 = parseInt(c2.substring(5, 7), 16);
  let r: number | string = Math.round(r1 * (1 - ratio) + r2 * ratio);
  let g: number | string = Math.round(g1 * (1 - ratio) + g2 * ratio);
  let b: number | string = Math.round(b1 * (1 - ratio) + b2 * ratio);
  r = ('0' + (r || 0).toString(16)).slice(-2);
  g = ('0' + (g || 0).toString(16)).slice(-2);
  b = ('0' + (b || 0).toString(16)).slice(-2);
  return '#' + r + g + b;
}
// mix('#ff0000', '#3333ff', 0.5) // "#991a80"

export function setColorMixLevel(
  $type: ITypes,
  $number: number,
  $mode = 'light',
  $mixColor = $colorWhite
) {
  $colors[$type][$mode + '-' + $number] = mix($mixColor, $colors[$type].base, Math.round($number * 10) / 100);
  // $colors =  map.deepMerge(
  //     $type: (
  //       '#{$mode}-#{$number}':
  //       mix(
  //         $mixColor,
  //         $colors[$type].base,
  //         math.percentage(math.div($number, 10))
  //       ),
  //     )
  // );
  // return $colors;
}

// $colors.primary.light-i
// --el-color-primary-light-i
// 10% 53a8ff
// 20% 66b1ff
// 30% 79bbff
// 40% 8cc5ff
// 50% a0cfff
// 60% b3d8ff
// 70% c6e2ff
// 80% d9ecff
// 90% ecf5ff
for (const $type of $types) {
  for (let $i = 1; $i < 10; $i++) {
    setColorMixLevel($type, $i, 'light', $colorWhite);
  }
}
console.log('$colors is ', $colors);
export const $textColors = {
  primary: '#303133',
  regular: '#606266',
  secondary: '#909399',
  placeholder: '#a8abb2',
  disabled: '#c0c4cc',
};
export const $borderColors = {
  '': '#dcdfe6',
  light: '#e4e7ed',
  lighter: '#ebeef5',
  extraLight: '#f2f6fc',
  dark: '#d4d7de',
  darker: '#cdd0d6',
};
export const $fillColors = {
  '': '#f0f2f5',
  light: '#f5f7fa',
  lighter: '#fafafa',
  extraLight: '#fafcff',
  dark: '#ebedf0',
  darker: '#e6e8eb',
  blank: '#ffffff',
};
export const $bgColors = {
  '': '#ffffff',
  page: '#f2f3f5',
  overlay: '#ffffff',
};
// Border
export const $borderWidth = '1px';
export const $borderStyle = 'solid';
export const $borderColorHover = getCssVar('text-color', 'disabled');
export const $borderRadius = {
  base: '4px',
  small: '2px',
  round: '20px',
  circle: '100%',
};
// Box-shadow
export const $boxShadow = {
  '': `0px 12px 32px 4px rgba(0, 0, 0, 0.04), 0px 8px 20px rgba(0, 0, 0, 0.08)`,
  light: '0px 0px 12px rgba(0, 0, 0, 0.12)',
  lighter: '0px 0px 6px rgba(0, 0, 0, 0.12)',
  dark: '0px 16px 48px 16px rgba(0, 0, 0, 0.08),0px 12px 32px rgba(0, 0, 0, 0.12),0px 8px 16px -8px rgba(0, 0, 0, 0.16)',
};
export const $fontSizes = {
  extraLarge: '20px',
  large: '18px',
  medium: '16px',
  base: '14px',
  small: '13px',
  extraSmall: '12px',
};
// zIndex
export const $zIndex = {
  normal: 1,
  top: 1000,
  popper: 2000,
};

// Disable default
export const $disabled = {
  'bg-color': getCssVar('fill-color', 'light'),
  'text-color': getCssVar('text-color', 'placeholder'),
  'border-color': getCssVar('border-color', 'light'),
};

export const $commonComponentSize = {
  'large': '40px',
  'default': '32px',
  'small': '24px',
};

// overlay
const $overlayColor = {
  '': 'rgba(0, 0, 0, 0.8)',
  'light': 'rgba(0, 0, 0, 0.7)',
  'lighter': 'rgba(0, 0, 0, 0.5)',
};

// mask
const $maskColor = {
  '': 'rgba(255, 255, 255, 0.9)',
  'extra-light': 'rgba(255, 255, 255, 0.3)',
};
