import { IWebStyle } from '../../../web-element/web-style.interface';
import { WebTable } from '../../../web-element/html-element/table/table.class';
import { Input } from '../../../web-element/html-element/input/input.class';
import { Label } from '../../../web-element/html-element/label/label.class';
import { Textarea } from '../../../web-element/html-element/textarea/textarea.class';
import { ILabel } from '../../../web-element/html-element/label/label.interface';
import { Span } from '../../../web-element/html-element/span/span.class';
import { Select } from '../../../web-element/html-element/select/select.class';
import { RadioGroup } from '../../../components/radio-group/radio-group.class';
import { CheckboxGroup } from '../../../components/checkbox-group/checkbox-group.class';
import { DeleteSvg } from '../../../components/svgs/delete/delete';
import { WebTextNode } from '../../../web-text-node/web-text-node.class';
import { DivComponent } from '../../../web-component/div-component/div-component.abstract';
import { formItemStyle, labelStyle } from '../web-control.const';
import { IFormItem, ItemContent } from './form-item.interface';

export abstract class FormItem extends DivComponent implements IFormItem {
  abstract className: string;
  // abstract parent: WebControl;
  abstract childNodes: [Label, ItemContent, Span];
  abstract itemContent: Input | Textarea | Select | RadioGroup | CheckboxGroup | WebTable;

  label: Label;
  labelText: WebTextNode;
  labelStyle: Partial<IWebStyle>;
  deleteSpan: Span;

  protected constructor(labelText = '控件名称') {
    super();
    // console.log('FormItem constructor . ', formItemStyle);
    this.propObj.styleObj = Object.assign({}, formItemStyle);

    this.label = new Label(this);
    this.labelStyle = Object.assign({}, labelStyle);
    this.label.propObj.styleObj = this.labelStyle;
    this.labelText = new WebTextNode(this.label, labelText);
    this.label.childNodes.push(this.labelText);
    this.deleteSpan = new Span(this);
    this.deleteSpan.setStyleObj({
      // position: 'absolute',
      // top: '30px',
      // right: '1px',
      float: 'right',
      backgroundColor: '#fff'
    });
    const svg = new DeleteSvg(this.deleteSpan);
    svg.resetSize(20, 20);
    this.deleteSpan.addChild(svg);
  }

  // 控件在表格中的控件样式
  setStyleInTable(): void {
    this.propObj.styleObj = {};
    this.label.hide();
    this.itemContent.propObj.styleObj.width = '100%';
  }
  //  form-item 实例化的公共部分。
  createInstance(itemLiteral: IFormItem): void {
    // console.log('form item createInstance . ');
    // console.log('itemLiteral is ', itemLiteral);
    // console.log('this.className is 组件', this.className);
    const labelLiteral = itemLiteral.childNodes[0] as ILabel;
    this.label.createInstance(labelLiteral);
    const itemContentLiteral = itemLiteral.childNodes[1];
    this.itemContent.setPropObj(itemContentLiteral.propObj);
    // 实例化 ----> 在子类中实例化 todo 只有 TableItem中重写了 ？？？
    // this.itemContent.createInstance(itemContentLiteral);
    if (this.editor.mode !== 'design') {
      this.deleteSpan.hide();
    }
  }
  setDisabled(): void {
    this.itemContent.setAttrObj({
      disabled: true,
    });
  }
}
