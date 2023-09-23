import { InputItem } from './components/form/form-item/input-item/input-item.class';
import { RadioItem } from './components/form/form-item/radio-item/radio-item.class';
import { TextareaItem } from './components/form/form-item/textarea-item/textarea-item.class';
import { SelectItem } from './components/form/form-item/select-item/select-item.class';
import { CheckboxItem } from './components/form/form-item/checkbox-item/checkbox-item.class';
import { TableItem } from './components/form/form-item/table-item/table-item.class';
// 一英寸等于25.4mm dpi (dot per inch)输出分辨率
function getDPI() {
  const arrDPI = [];
  const screen = window.screen as Record<string, any>;
  if (!screen.deviceXDPI) {
    // ie 9
    arrDPI[0] = screen.deviceXDPI;
    arrDPI[1] = screen.deviceYDPI;
  } else {
    // chrome firefox
    const tmpNode = document.createElement('div') as HTMLDivElement;
    tmpNode.style.cssText = 'width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden';
    document.body.appendChild(tmpNode);
    arrDPI[0] = tmpNode.offsetWidth;
    arrDPI[1] = tmpNode.offsetHeight;
    tmpNode.parentNode?.removeChild(tmpNode);
  }
  return arrDPI;
}

const dpi = getDPI();
// console.log('dpi is ', dpi);
// console.log('dpr is ', window.devicePixelRatio);

// 单位换算率
export const inch2twipRatio = 1440;
export const inch2cmRatio = 2.54;
export const inch2mmRatio = inch2cmRatio * 10; // 25.4
export const inch2ptRatio = 72;
export const mm2twipRatio = Math.round(inch2twipRatio / inch2mmRatio * 100) / 100; // 56.69
// console.log('mm2twipRation is ', mm2twipRatio);
export const mm2ptRatio = Math.round(inch2ptRatio / inch2mmRatio * 100) / 100; // 2.83
// console.log('mm2ptRatio is ', mm2ptRatio);
// window.devicePixelRatio dpr是设备像素比，dpi是每英寸的点数，不一样的
export const mm2pxRatio = Math.round(dpi[0] / inch2mmRatio * 100) / 100; // 3.78
// console.log('mm2pxRatio is ', mm2pxRatio);

export const pt2twipRatio = inch2twipRatio / inch2ptRatio; // 20
export const pt2pxRatio = Math.round(dpi[0] / inch2ptRatio * 10000) / 10000; // 1.3333
// console.log('pt2pxRatio is ', pt2pxRatio);
export const px2ptRatio = inch2ptRatio / dpi[0]; // 0.75
// console.log('px2ptRatio is ', px2ptRatio);

// 1 twip = 1440 tpi / 96 dpi = 15 pixels
// 默认分辨率(96dpi)下，缇/567=厘米，像素/37.795=厘米

export const EMPTY_OBJECT = Object.seal({});
export const isWindows = /win(dows|32|64)/i.test(navigator.userAgent);
export const isMac = /mac os/i.test(navigator.userAgent);
