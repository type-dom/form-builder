import {
  Input,
  IStyle,
  Label,
  Span,
  Textarea,
  TextNode,
  TypeDiv,
  ILabel,
} from '@type-dom/framework';
import { TdDeleteSvg } from '@type-dom/svgs';
import { TypeControl } from '../../../core/control/type-control.abstract';
import {
  formItemStyle,
  labelStyle,
} from '../../../core/control/type-control.const';
import { Select } from '../../select/select.class';
import { CheckboxGroup } from '../checkbox-group/checkbox-group.class';
import { RadioGroup } from '../radio-group/radio-group.class';
import { IFormItem, ItemContent } from './form-item.interface';
import { Table } from './table-item/table/table.class';

export abstract class FormItem extends TypeDiv implements IFormItem {
  abstract className: string;
  abstract childNodes: [Label, ItemContent, Span];
  abstract itemContent:
    | Input
    | Textarea
    | Select
    | RadioGroup
    | CheckboxGroup
    | Table;

  label: Label;
  labelText: TextNode;
  labelStyle: Partial<IStyle>;
  deleteSpan: Span;

  protected constructor(public parent: TypeControl, labelText = '控件名称') {
    super();
    // console.log('FormItem constructor . ', formItemStyle);
    this.propObj.styleObj = Object.assign({}, formItemStyle);

    this.label = new Label({ parent: this });
    this.labelStyle = Object.assign({}, labelStyle);
    this.label.propObj.styleObj = this.labelStyle;
    this.labelText = new TextNode(labelText);
    this.label.childNodes.push(this.labelText);
    this.deleteSpan = this.createItem(this, {
      TypeClass: Span,
      propObj: {
        styleObj: {
          // position: 'absolute',
          // top: '30px',
          // right: '1px',
          float: 'right',
          backgroundColor: '#fff',
        },
        attrObj: {
          name: 'delete-span',
        },
      },
      childNodes: [
        {
          TypeClass: TdDeleteSvg,
          propObj: {
            styleObj: {},
            attrObj: {
              name: 'delete-svg',
              width: 20,
              height: 20,
            },
          },
        },
      ],
    });
    this.formBuilder.mode.hideFormItemDeleteSpan(this.deleteSpan);
    //   new Span({ parent: this });
    // this.deleteSpan.setStyleObj({
    //   // position: 'absolute',
    //   // top: '30px',
    //   // right: '1px',
    //   float: 'right',
    //   backgroundColor: '#fff'
    // });
    // const svg = new DeleteSvg(this.deleteSpan);
    // svg.resetSize(20, 20);
    // this.deleteSpan.addChild(svg);
  }

  get formBuilder() {
    return this.parent.formBuilder;
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
    this.itemContent.resetPropObj(itemContentLiteral.propObj);
    // 实例化 ----> 在子类中实例化 todo 只有 TableItem中重写了 ？？？
    // this.itemContent.createInstance(itemContentLiteral);
    this.formBuilder.mode.hideFormItemDeleteSpan(this.deleteSpan);
  }

  setDisabled(): void {
    this.itemContent.setAttrObj({
      disabled: true,
    });
  }
}
