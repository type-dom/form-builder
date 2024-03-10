import { Subject } from 'rxjs';
import { FormBuilder } from '../../../../../../form-builder';
import { PropertyItem } from '../property-item/property-item.abstract';

export abstract class FormPropertyItemAbstract extends PropertyItem {
  abstract listenForm: Subject<FormBuilder>;
}
