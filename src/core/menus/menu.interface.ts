import { ControlClass } from '../controls/web-control.interface';
import { IDivComponent } from '../../web-abstract/web-component/div-component/div-component.interface';

export interface IControlMenu extends IDivComponent {
  ControlClass: ControlClass;
}
