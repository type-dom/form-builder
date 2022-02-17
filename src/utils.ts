/**
 * 引用与非引用值 深拷贝方法
 * @param data
 */
export function deepClone<T>(data: T): T {
  if (typeof data !== 'object' || typeof data === 'function' || data === null) {
    return data;
  }
  let item: any;
  if (Array.isArray(data)) {
    item = [];
  }
  if (!Array.isArray(data)) {
    item = {};
  }
  for (const i in data) {
    if (Object.prototype.hasOwnProperty.call(data, i)) {
      item[i] = deepClone(data[i]);
    }
  }
  return item;
}
export function humpToMiddleLine(str: string): string {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}
