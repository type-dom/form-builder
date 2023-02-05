import { fromEvent } from 'rxjs';
import { WebControl } from '../../../../core/controls/web-control.abstract';
import { SingleInputControl } from '../../../../core/controls/basic/single-input/single-input.class';
import { ControlClass, IWebControl } from '../../../../core/controls/web-control.interface';
import { TableControl } from '../../../../core/controls/complex/table/table.class';
import { WebTextNode } from '../../../../web-text-node/web-text-node.class';
import { IWebTextNode } from '../../../../web-text-node/web-text-node.interface';
import { RadioGroup } from '../../../../components/radio-group/radio-group.class';
import { CheckboxGroup } from '../../../../components/checkbox-group/checkbox-group.class';
import { ControlClassMap } from '../../../../constants';
import { Input } from '../../input/input.class';
import { Select } from '../../select/select.class';
import { Textarea } from '../../textarea/textarea.class';
import { HtmlElement } from '../../html-element.abstract';
import { WebTableRow } from '../row/row.class';
import { IWebTableDataCell } from './data-cell.interface';

export class WebTableDataCell extends HtmlElement implements IWebTableDataCell {
  tagName: 'td';
  className: 'WebTableDataCell';
  dom: HTMLElement;
  childNodes: [WebControl | WebTextNode]; // 有可能是Input
  control: WebControl | WebTextNode;

  constructor(public parent: WebTableRow, value: string | number | boolean) {
    super();
    this.tagName = 'td';
    this.dom = document.createElement(this.tagName);
    this.className = 'WebTableDataCell';
    // this.propObj.attrObj.border = '1px solid black;';
    // this.childNodes = [];
    // todo 要区分是输入框，还是绑定值。
    //  如何判断是输入框还是文本。
    const mode = parent.parent.config?.mode;
    if (mode === 'editable') {
      // const textNode = new WebTextNode(this, String(td));
      // 默认生成 SingleInputControl
      this.control = new SingleInputControl(this);
      this.control.formItem.setStyleInTable(); // 在单元格中创建控件时，重置FormItem样式
      this.control.formItem.deleteSpan.hide();
      // input.propObj.styleObj = Object.assign({}, inputStyle, { width: '100%' });
      // input.setValue(value);
    } else {
      this.control = new WebTextNode(this, String(value));
    }
    this.childNodes = [this.control];
    this.initEvents();
  }

  get value(): string {
    if (this.control instanceof WebControl) {
      return (this.control.formItem.itemContent as (Input | Textarea | Select | RadioGroup | CheckboxGroup)).value as string;
    } else {
      return this.control.text;
    }
  }
  // 注意： 这里没有对单元格重新渲染
  setControl(ControlClass: Exclude<ControlClass, typeof TableControl>, ctrlLiterL?: IWebControl): void {
    this.control = new ControlClass(this);
    this.control.formItem.setStyleInTable(); // 配置单元格的控件类型时，重置FormItem样式
    if (ctrlLiterL) {
      // 单元格中控件初始化
      // todo 如果是单选框，要重置 name 才行。
      //  否则在填表时新增行后，不同行的同列的单选控件会相互干扰
      if (ctrlLiterL.className === 'RadioControl') {
        const configStr = ctrlLiterL.propObj.attrObj['option-config'];
        if (configStr) {
          const config = JSON.parse(configStr as string);
          config.name = '单选' + Math.random();
          ctrlLiterL.propObj.attrObj['option-config'] = JSON.stringify(config);
        }
      }
      this.control.createInstance(ctrlLiterL);
    }
    this.control.formItem.deleteSpan.hide();
    this.childNodes = [this.control];
    // this.render();
  }

  createInstance(tdLiteral: IWebTableDataCell): void {
    this.setPropObj(tdLiteral.propObj);
    const controlLiteral = tdLiteral.childNodes[0];
    if (controlLiteral.className === 'WebTextNode') {
      if (this.control instanceof WebTextNode) {
        this.control.setText((controlLiteral as IWebTextNode).text);
      } else {
        console.error('单元格的字面量和控件不一致');
        this.control = new WebTextNode(this, (controlLiteral as IWebTextNode).text);
        this.childNodes = [this.control];
        this.control.render();
      }
    } else {
      if (this.control instanceof WebControl) {
        const className = controlLiteral.className;
        // 默认是 SingleInputControl
        const ClassControl = ControlClassMap[className] as Exclude<ControlClass, typeof TableControl>;
        this.setControl(ClassControl, controlLiteral as IWebControl);
      }
    }
  }

  initEvents(): void {
    this.events.push(
      fromEvent(this.dom, 'mousedown').subscribe((e) => {
        console.log('table data cell mousedown ');
        // 阻止冒泡 ？？？ TODO 为什么要阻止冒泡 ----> 点击表格控件其它区域时要取消选中单元格。
        // e.stopPropagation();
        // 单元格选中状态。
        this.editor.setSelectedTableDataCell(this);
      }),
    );
  }
}
