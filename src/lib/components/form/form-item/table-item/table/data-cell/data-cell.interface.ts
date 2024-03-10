import { ITextNode, ITypeTableDataCell } from '@type-dom/framework';
import { ITypeControl } from '../../../../../../core/control/type-control.interface';
import { TypeControl } from '../../../../../../core/control/type-control.abstract';
import { TableControl } from '../../../../../../core/control/complex/table/table.class';

export type TableDataCellChild = Exclude<TypeControl, TableControl>;

export interface ITableDataCell extends ITypeTableDataCell {
  className: 'TableDataCell';
  childNodes: (ITypeControl | ITextNode)[];
}
