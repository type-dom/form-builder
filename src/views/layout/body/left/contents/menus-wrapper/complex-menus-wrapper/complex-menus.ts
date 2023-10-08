import { CollapsibleBoxContents } from 'type-dom-ui';
import { TypeMenu } from '../../../../../../../core/menu/menu.abstract';
import { TableMenu } from '../../../../../../../core/menu/complex-menu/table/table-menu';
import { ConnectionMenu } from '../../../../../../../core/menu/complex-menu/connection/connection-menu';
import { ComplexMenusWrapper } from './complex-menus-wrapper';
export class ComplexMenus extends CollapsibleBoxContents {
  className: 'ComplexMenus';
  childNodes: TypeMenu[];
  constructor(public parent: ComplexMenusWrapper) {
    super(parent);
    this.className = 'ComplexMenus';
    this.addAttrName('complex-control-menus')
    const tableMenu = new TableMenu(this);
    const connectionMenu = new ConnectionMenu(this);
    this.childNodes = [tableMenu, connectionMenu];
  }
}
