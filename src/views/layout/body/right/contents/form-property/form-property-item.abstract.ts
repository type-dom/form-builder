import { Subject } from 'rxjs';
import { TypeForm } from '../../../../../../type-form';
import { PropertyItem } from '../property-item/property-item.abstract';
export abstract class FormPropertyItemAbstract extends PropertyItem {
  abstract listenForm: Subject<TypeForm>
}
