import { ComplexControlWrapper } from '../../../layout/body/left/contents/control-wrapper/complex-control-wrapper/complex-control-wrapper';
import { Display } from '../../../web-element/web-style.enum';
import { DivBase } from '../../../web-element/web-abstract/html-element/div/div.abstract';
import { ControlMenu } from '../menu.abstract';
import { TableMenu } from './table/table-menu';
import { ConnectionMenu } from './connection/connection-menu';

export class ComplexMenus extends DivBase {
  className: 'ComplexControlMenus';
  childNodes: ControlMenu[];
  constructor(public parent: ComplexControlWrapper) {
    super();
    this.className = 'ComplexControlMenus';
    this.propObj = {
      styleObj: {
        display: Display.flex,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        width: '200px',
      },
      attrObj: {
        // class: 'components',
        name: 'complex-control-menus',
      }
    };
    const tableMenu = new TableMenu(this);
    const connectionMenu = new ConnectionMenu(this);
    this.childNodes = [tableMenu, connectionMenu];
  }
}
