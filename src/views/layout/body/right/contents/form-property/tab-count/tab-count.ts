import { TypeFormDesigner } from '../../../../../../../type-form-designer';
import { PropertyInput } from '../../property-item/input/property-input.abstract';
import { FormProperty } from '../form-property';

// 控件标题属性
export class TabCountProperty extends PropertyInput {
  className: 'TabCountProperty';

  constructor(public parent: FormProperty) {
    super('Tab数量', '请输入Tab数量');
    // console.log('control title property constructor . ');
    this.className = 'TabCountProperty';
    this.addAttrName('tab-count-property');
    this.content.addAttrObj({
      type: 'number',
      min: 1,
      max: 20,
    });
    // console.log('this.dom is ', this.dom);
    // this.initEvent();
  }

  reset(value?: string): void {
    if (value !== undefined) {
      TypeFormDesigner.webDocument.tabs.setTabs(parseInt(value, 10));
      return;
    }
    // todo 根据已有的页面数，设置 tab数量
    const count = TypeFormDesigner.webDocument.tabs.childNodes.length;
    // console.error('count is ', count);
    if (count) {
      this.resetInputValue(String(count));
    } else {
      this.resetInputValue('1');
    }
  }
  update(value?: string): void {
    if (value !== undefined) {
      TypeFormDesigner.webDocument.tabs.setTabs(parseInt(value, 10));
      return;
    }
    // todo 根据已有的页面数，设置 tab数量
    const count = TypeFormDesigner.webDocument.tabs.childNodes.length;
    // console.error('count is ', count);
    if (count) {
      this.resetInputValue(String(count));
    } else {
      this.resetInputValue('1');
    }
  }
}
