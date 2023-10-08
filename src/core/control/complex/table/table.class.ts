import { fromEvent } from 'rxjs';
import { TypeForm } from '../../../../type-form';
import { deepClone } from '../../../../utils';
import { TableItem } from '../../../../components/form/form-item/table-item/table-item.class';
import { WebPage } from '../../../page/web-page.class';
import { ComplexControl } from '../complex.abstract';
import { tableData, tableHeader } from './table.const';
import { ITableConfig, ITableControl } from './table.interface';

export class TableControl extends ComplexControl implements ITableControl {
  className: 'TableControl';
  childNodes: [TableItem];
  formItem: TableItem;
  tableName: string;
  // tableData?: Record<string, string | number | boolean>[];
  // tableHeader?: Record<string, string>;
  // tableName?: string;

  constructor(parent: WebPage) {
    super(parent);
    // console.log('TableControl constructor .这里的tableData要改为获取的形式，config格式', this);
    this.className = 'TableControl';
    this.propObj.attrObj.name = 'table-control';
    this.tableName = '表格名称';
    this.formItem = new TableItem(this, this.tableName);
    this.childNodes = [this.formItem];
    const config: ITableConfig = {
      name: this.tableName,
      mode: 'editable',
      tableHeader: deepClone(tableHeader),
      tableData: deepClone(tableData)
    };
    this.configTable(config);
    this.initEvents();
  }

  configTable(config: ITableConfig): void {
    this.formItem.itemContent.setTable(config);
    // console.log('table control config is ', config);
    TypeForm.mode.tableControlConfigTable(this);
  }

  initEvents(): void {
    super.initEvents();
    // 点击非td处， selectedTableDataCell = null;
    // 冒泡
    this.events.push(
      fromEvent(this.label.dom, 'click').subscribe((e) => {
        // console.log('table control click . ');
        console.log('e.target is ', e.target);
        TypeForm.mode.setSelectedTableDataCell(null);
      })
    );
  }
}
