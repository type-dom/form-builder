import { CollapsibleBoxContents } from 'type-dom-ui';
import { TypeMenu } from '../../../../../../../core/menu/menu.abstract';
import { NumericalMenu } from '../../../../../../../core/menu/basic-menu/numerical/numerical-menu';
import { SingleInputMenu } from '../../../../../../../core/menu/basic-menu/single-input/single-input-menu';
import { MultilineInputMenu } from '../../../../../../../core/menu/basic-menu/multiline-input/multiline-input-menu';
import { RadioMenu } from '../../../../../../../core/menu/basic-menu/radio/radio-menu';
import { SelectMenu } from '../../../../../../../core/menu/basic-menu/select/select-menu';
import { DateMenu } from '../../../../../../../core/menu/basic-menu/date/date-menu';
import { TimeMenu } from '../../../../../../../core/menu/basic-menu/time/time-menu';
import { AttachmentMenu } from '../../../../../../../core/menu/basic-menu/attachment/attachment-menu';
import { CheckboxMenu } from '../../../../../../../core/menu/basic-menu/checkbox/checkbox-menu';
import { BasicMenusWrapper } from './basic-menus-wrapper';
export class BasicMenus extends CollapsibleBoxContents {
  className: 'BasicMenus';
  childNodes: TypeMenu[];
  constructor(public parent: BasicMenusWrapper) {
    super(parent);
    this.className = 'BasicMenus';
    this.addAttrName('basic-menus');
    const numerical = new NumericalMenu(this);
    const singleInput = new SingleInputMenu(this);
    const multilineInput = new MultilineInputMenu(this);
    const dateMenu = new DateMenu(this);
    const timeMenu = new TimeMenu(this);
    const radioMenu = new RadioMenu(this);
    const checkboxMenu = new CheckboxMenu(this);
    const selectMenu = new SelectMenu(this);
    const attachmentMenu = new AttachmentMenu(this);
    this.childNodes = [
      singleInput,
      multilineInput,
      numerical,
      dateMenu,
      timeMenu,
      radioMenu,
      checkboxMenu,
      selectMenu,
      attachmentMenu
    ];
  }
}
