import { fromEvent } from 'rxjs';
import { Span, Label, StyleDisplay, toJSON } from '@type-dom/framework';
import { TdAddSvg } from '@type-dom/svgs';
import { TableControl } from '../../../../core/control/complex/table/table.class';
import { FormItem } from '../form-item.abstract';
import { ITableItem } from './table-item.interface';
import { Table } from './table/table.class';
import { TableRow } from './table/row/row.class';
import { ITableRow } from './table/row/row.interface';
import { FormBuilder } from '../../../../form-builder';

export class TableItem extends FormItem implements ITableItem {
  className: 'TableItem';
  childNodes: [Label, Table, Span];
  itemContent: Table;
  addSpan: Span;

  constructor(parent: TableControl, labelText = '表格') {
    super(parent, labelText);
    this.className = 'TableItem';
    this.label.propObj.styleObj = {
      display: 'block',
      width: '100%',
      lineHeight: '36px',
      color: '#606266',
      textAlign: 'center',
      verticalAlign: 'middle',
      fontWeight: 'bold',
      fontSize: '20px',
      padding: '10px',
    };
    this.itemContent = new Table(this);
    this.addSpan = new Span({ parent: this });
    this.addSpan.setStyleObj({
      display: StyleDisplay.block,
      textAlign: 'center',
      marginTop: '-10px',
    });
    const addSvg = new TdAddSvg();
    this.addSpan.addChild(addSvg);
    addSvg.setParent(this.addSpan);
    this.childNodes = [this.label, this.itemContent, this.deleteSpan];
  }

  get formBuilder(): FormBuilder {
    return this.parent.formBuilder;
  }

  initEvents(): void {
    this.events.push(
      fromEvent(this.addSpan.dom, 'click').subscribe(() => {
        // console.log('table item this.addSpan click ');
        const tr: Record<string, string> = {};
        if (!this.itemContent.config) {
          throw Error('没有设置表头');
        }
        for (const head of this.itemContent.config?.tableHeader) {
          tr[head.name] = ' ';
        }
        this.itemContent.config?.tableData.push(tr);
        const tableRow = new TableRow(this.itemContent, tr);
        // console.log('toJSON(this.itemContent.childNodes[1] is ', toJSON(this.itemContent.childNodes[1]));
        tableRow.createInstance(
          toJSON(this.itemContent.childNodes[1]) as ITableRow
        );
        this.itemContent.appendChild(tableRow);
      })
    );
  }

  createInstance(itemLiteral: ITableItem): void {
    super.createInstance(itemLiteral);
    // 单独对table的值进行修改
    // console.log('this.itemContent is Table ', this.itemContent);
    // console.log('itemContentLiteral', itemLiteral.childNodes[1]);
    this.itemContent.createInstance(itemLiteral.childNodes[1]);
  }
}
