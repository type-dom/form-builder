import { fromEvent } from 'rxjs';
import { Division, Label } from '@type-dom/framework';
import { TdButton } from '@type-dom/ui';
import { TypeControl } from '../../../../../../../../core/control/type-control.abstract';
import { TableControl } from '../../../../../../../../core/control/complex/table/table.class';
import { PropertyItem } from '../../../property-item/property-item.abstract';
import { ControlProperty } from '../../control-property';
import { FormBuilder } from '../../../../../../../../form-builder';
// tableHeader 的设置
// 表单尺寸属性
export class TableHeaderProperty extends PropertyItem {
  className: 'TableHeaderProperty';
  childNodes: [Label, Division, TdButton];
  private division: Division;

  constructor(public parent: ControlProperty) {
    super('表头字段');
    // console.log('control title property constructor . ');
    this.className = 'TableHeaderProperty';
    this.addAttrName('table-header-property');
    // console.log('this.dom is ', this.dom);
    this.division = new Division();

    this.childNodes = [this.label, this.division, this.button];
  }

  get formBuilder(): FormBuilder {
    return this.parent.formBuilder;
  }

  // todo 只修改选中的表格
  reset(value: string): void {
    if (this.formBuilder.selectedControl instanceof TableControl) {
      const webTable = this.formBuilder.selectedControl.formItem.itemContent;
      if (webTable.config?.mode) {
        webTable.config.mode = value as 'editable' | 'disabled' | undefined;
        this.formBuilder.selectedControl.formItem.addSpan.setStyle(
          'display',
          webTable.config.mode === 'editable' ? 'block' : 'none'
        );
        webTable.setTable(webTable.config);
        console.log('webTable is ', webTable);
        webTable.render();
      }
    }
  }

  // todo 只修改选中的表格
  update(control: TypeControl | null): void {
    const value = control?.configs.tableHeaderEditable;
    if (this.formBuilder.selectedControl instanceof TableControl) {
      const webTable = this.formBuilder.selectedControl.formItem.itemContent;
      if (webTable.config?.mode) {
        webTable.config.mode = value as 'editable' | 'disabled' | undefined;
        this.formBuilder.selectedControl.formItem.addSpan.setStyle(
          'display',
          webTable.config.mode === 'editable' ? 'block' : 'none'
        );
        webTable.setTable(webTable.config);
        console.log('webTable is ', webTable);
        webTable.render();
      }
    }
  }

  initEvents(): void {
    this.events.push(
      fromEvent(this.dom, 'click').subscribe(() => {
        //
      })
    );
  }
}
