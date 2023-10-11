import { Subject } from 'rxjs';
import { TypeFormDesigner } from '../../../../../../type-form-designer';
import { PropertyItem } from '../property-item/property-item.abstract';
export abstract class FormPropertyItemAbstract extends PropertyItem {
  abstract listenForm: Subject<TypeFormDesigner>
}
