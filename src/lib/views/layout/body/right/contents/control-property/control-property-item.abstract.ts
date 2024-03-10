import { Subject } from 'rxjs';
import { TypeControl } from '../../../../../../core/control/type-control.abstract';
import { TableDataCell } from '../../../../../../components/form/form-item/table-item/table/data-cell/data-cell.class';
import { PropertyItem } from '../property-item/property-item.abstract';

export abstract class ControlPropertyItemAbstract extends PropertyItem {
  abstract listenControl: Subject<TypeControl>;
  abstract listenCell: Subject<TableDataCell>;
}
