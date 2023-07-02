// 顺序不能随意调换，可能会加载报错。 WebControl todo 如何解决
import { filter, fromEvent, switchMap, of, Observable, Subscription, Subject } from 'rxjs';
import { LayoutWrapper } from './views/layout/layout';
import { ControlProperty } from './views/layout/body/right/contents/control-property/control-property';
import { FormProperty } from './views/layout/body/right/contents/form-property/form-property';
import { FieldProperty } from './views/layout/body/right/contents/field-property/field-property';
import { Cursor } from '../type-dom/style/style.enum';
import { TypeRoot } from '../type-dom/type-root/type-root.class';
import { TableRow } from '../type-dom/element/html-element/table/row/row.class';
import { TableDataCell } from '../type-dom/element/html-element/table/data-cell/data-cell.class';
import { ListItem } from '../type-dom/element/html-element/unordered-list/list-item/list-item.class';
import { Span } from '../type-dom/element/html-element/span/span.class';
import { toJSON } from '../type-dom/type-element/type-element.function';
import { WebDialog } from '../type-dom/components/dialog/dialog';
import { MessageBox } from '../type-dom/components/message-box/message-box';
import { TextNode } from '../type-dom/text-node/text-node.class';
import { ControlMenu } from './core/menus/menu.abstract';
import { WebDocument } from './core/document/web-document.class';
import { IWebDocument } from './core/document/web-document.interface';
import { WebPage } from './core/page/web-page.class';
import { WebControl } from './core/controls/web-control.abstract';
import { IOptionConfig } from './core/controls/web-control.interface';
import { AttachmentControl } from './core/controls/basic/attachment/attachment.class';
import { ConnectionControl } from './core/controls/complex/connection/connection.class';
import { TableControl } from './core/controls/complex/table/table.class';
import { ITableField } from './core/controls/complex/table/table.interface';
import { WebForm } from './components/form/form';
import { Test } from './views/test/test';
/**
 * 应用根节点，必须存在。
 * 应用直接继承 TypeRoot ;
 */
export class AppRoot extends TypeRoot {
  className: 'AppRoot';
  // 光标
  static cursor?: Cursor | null;
  // 选中的菜单
  static selectedMenu: ControlMenu | null;
  // 选中的控件
  static selectedControl: WebControl | null;
  // 选中的表格单元格
  static selectedTableDataCell?: TableDataCell | null;
  static layout: LayoutWrapper;
  // 对话框
  static dialog: WebDialog;
  // 消息框
  static messageBox: MessageBox;
  // 编辑器模式，对应 设计模式， 填表模式， 只读模式
  static mode: 'design' | 'fill' | 'readonly';
  // todo tabs操作中重置。
  // currentPage: WebPage;
  // 集中出来外部传入的函数或方法。
  static functionMap: Map<string, (...rest: any[]) => any>;
  static el: HTMLElement;
  events: Subscription[];
  static editorElObservable: Observable<Event>;
  static onReady: Observable<void>;
  static readyEvent: Subject<void>;
  constructor(editorEl: HTMLElement, mode: 'design' | 'fill' | 'readonly' = 'design') {
    super(editorEl);
    this.className = 'AppRoot';
    AppRoot.el = editorEl;
    if (!AppRoot.el.clientHeight) {
      // AppRoot.el.setAttribute('clientHeight', '500px');
      AppRoot.el.style.height = '600px'; // 默认高度600px;
    }
    // console.log('AppRoot.el.clientHeight is ', AppRoot.el.clientHeight);
    this.events = [];
    AppRoot.mode = mode;
    AppRoot.layout = new LayoutWrapper(this);
    AppRoot.dialog = new WebDialog(this);
    AppRoot.messageBox = new MessageBox(this);
    // AppRoot.layout.childNodes.push(this.dialog, this.messageBox);
    this.childNodes = [AppRoot.layout, AppRoot.dialog, AppRoot.messageBox];
    // this.root.createItem(this.root,{
    //   TypeClass: LayoutWrapper,
    //   propObj: {
    //     styleObj: {},
    //     attrObj: {}
    //   },
    //   childNodes: [
    //     {
    //       TypeClass: WebDialog,
    //       propObj: {
    //         styleObj: {},
    //         attrObj: {},
    //       }
    //     },
    //     {
    //       TypeClass: MessageBox,
    //       propObj: {
    //         styleObj: {},
    //         attrObj: {}
    //       }
    //     }
    //   ]
    // });
    this.render();
    const json = this.toJSON();
    console.log('json is ', json);
    // console.log('editorEl is ', editorEl);
    // editorEl.appendChild(AppRoot.layout.dom);
    const test = new Test(this);
    console.log('test is ', test);
    test.render();
    editorEl.appendChild(test.dom);
    // this.currentPage = this.defaultPage;
    AppRoot.selectedMenu = null;
    AppRoot.selectedControl = null;
    // this.connectionItemObservable = null;
    AppRoot.editorElObservable = fromEvent(AppRoot.el, 'click')
      .pipe(filter(() => {
        return !!AppRoot.selectedTableDataCell || !!AppRoot.selectedControl;
      }));
    AppRoot.functionMap = new Map();
    AppRoot.formProperty.reset();
    AppRoot.readyEvent = new Subject<void>();
    AppRoot.onReady = AppRoot.readyEvent.asObservable();
  }
  /**
   * 获取设置的文档对象
   */
  static get webDocument(): WebDocument {
    return AppRoot.layout.webDocument;
  }

  /**
   * 获取右侧属性栏的字段属性tab
   */
  static get fieldTab(): ListItem {
    return AppRoot.layout.body.right.tabs.fieldTab;
  }

  /**
   * 获取右侧属性栏的控件属性的tab
   */
  static get controlTab(): ListItem {
    return AppRoot.layout.body.right.tabs.controlTab;
  }

  /**
   * 获取右侧属性栏的表单属性的tab
   */
  static get formTab(): ListItem {
    return AppRoot.layout.body.right.tabs.formTab;
  }

  /**
   * 获取控件属性栏
   */
  static get controlProperty(): ControlProperty {
    return AppRoot.layout.body.right.contents.controlProperty;
  }

  /**
   * 获取字段属性栏
   */
  static get fieldProperty(): FieldProperty {
    return AppRoot.layout.body.right.contents.fieldProperty;
  }

  /**
   * 获取表单属性栏
   */
  static get formProperty(): FormProperty {
    return AppRoot.layout.body.right.contents.formProperty;
  }

  // todo 暂时不用
  static get currentPage(): WebPage {
    return AppRoot.webDocument.contents.currentPage;
  }
  /**
   * 获取默认页
   */
  static get defaultPage(): WebPage { // defaultPage 默认首页
    // return AppRoot.webDocument.defaultPage;
    return AppRoot.webDocument.contents.defaultPage;
  }

  /**
   * 获取所有控件
   * 考虑多页面
   */
  static get allControls(): WebControl[] {
    const controls: WebControl[] = [];
    AppRoot.webDocument.contents.childNodes.forEach(page => {
      // todo
      if (page.className === 'WebPage') {
        controls.push(...page.childNodes);
      }
    });
    return controls;
  }

  /**
   * 获取所有选项控件
   */
  static get optionControls(): WebControl[] {
    return AppRoot.allControls.filter(control => !!control.optionConfig);
  }

  /**
   * 默认值属性控制项的控制公式编辑器是否显示的监听
   */
  static get formulaVisibleObservable(): Observable<Event> {
    return this.editorElObservable.pipe(
      switchMap(() => {
        // console.log('this.editor.selectedControl is ', AppRoot.selectedControl);
        // if (AppRoot.selectedTableDataCell) { // 表格单元格选中的控件
        //   return AppRoot.fieldProperty.fieldDefaultValue.formulaObservable;
        // }
        return AppRoot.controlProperty.controlDefaultValue.formulaObservable;
      })
    );
  }

  /**
   * 控件属性中选项的监听
   */
  static get optionsConfigObservable(): Observable<Event> {
    return this.editorElObservable.pipe(
      switchMap(() => {
        // console.log('this.editor.selectedControl is ', AppRoot.selectedControl);
        if (AppRoot.selectedTableDataCell) { // 表格单元格选中的控件
          // console.log('AppRoot.fieldProperty.fieldOptions.optionsConfigObservable is ', AppRoot.fieldProperty.fieldOptions.optionsConfigObservable);
          return AppRoot.fieldProperty.fieldOptions.optionsConfigObservable;
        }
        // console.log('AppRoot.controlProperty.controlOptions.optionsConfigObservable is ', AppRoot.controlProperty.controlOptions.optionsConfigObservable);
        return AppRoot.controlProperty.controlOptions.optionsConfigObservable;
      })
    );
  }

  /**
   * 提交表单的监听
   */
  static get submitObservable(): Observable<Event> | undefined {
    return AppRoot.layout.form?.footer.submitBtn.submitObservable;
  }

  /**
   * 关联选项控件的关联属性的监听
   */
  static get connectionObservable(): Observable<Event> {
    return this.editorElObservable.pipe(
      switchMap(() => {
        if (AppRoot.selectedTableDataCell) { // 表格单元格选中的控件
          console.log('AppRoot.fieldProperty.fieldConnection.connectionObservable is ', AppRoot.fieldProperty.fieldConnection.connectionObservable);
          return AppRoot.fieldProperty.fieldConnection.connectionObservable;
        }
        return AppRoot.controlProperty.controlConnection.connectionObservable;
      })
    );
  }

  /**
   * 点击关联选项时，监听其点击事件。返回当前选中的控件是关联选项控件时。
   * 要考虑表格单元格中的控件是ConnectionControl的情况
   */
  static get connectionItemObservable(): Observable<Event | null> {
    return this.editorElObservable.pipe(
      switchMap(() => {
        if (AppRoot.selectedTableDataCell?.control instanceof ConnectionControl) {
          console.log('AppRoot.selectedTableDataCell.control.connectionItemObservable is ', AppRoot.selectedTableDataCell.control.connectionItemObservable);
          return AppRoot.selectedTableDataCell.control.connectionItemObservable;
        }
        if (AppRoot.selectedControl instanceof ConnectionControl) {
          console.log('AppRoot.selectedControl.connectionItemObservable is ', AppRoot.selectedControl.connectionItemObservable);
          return AppRoot.selectedControl.connectionItemObservable;
        }
        return of(null);
      }),
      filter(ob => ob !== null)
    );
  }

  /**
   * 附件上传文件的监听
   */
  static get attachmentObservable(): Observable<Event | null> {
    return this.editorElObservable.pipe(
      switchMap(() => {
        if (AppRoot.selectedTableDataCell?.control instanceof AttachmentControl) {
          return AppRoot.selectedTableDataCell.control.attachmentObservable;
        }
        if (AppRoot.selectedControl instanceof AttachmentControl) {
          return AppRoot.selectedControl.attachmentObservable;
        }
        return of(null);
      }),
      filter(ob => ob !== null)
    );
  }
  /**
   * 获取表单
   */
  static get form(): WebForm | undefined {
    return AppRoot.layout.form;
  }

  /**
   * 根据控件获取提交的数据
   */
  static get formData(): Record<string, string | any[]> {
    const formData: Record<string, string | any[]> = {};
    const formIds = AppRoot.webDocument.formIds;
    if (formIds) {
      const formIdJson = JSON.parse(formIds);
      for (const key in formIdJson) {
        formData[key] = formIdJson[key];
      }
    }
    const tableData: Record<string, string | number | boolean>[] = [];
    formData.table = tableData;
    AppRoot.allControls.forEach((ctrl) => {
      if (ctrl instanceof TableControl) {
        // console.log('ctrl is TableControl', ctrl);
        const table = ctrl.formItem.itemContent;
        // todo ctrl.tableHeader tableData
        const tableHeader = table.childNodes[0];
        // console.log('tableHeader is ', tableHeader);
        const tableHead: ITableField[] = [];
        tableHeader.childNodes.forEach((th) => {
          tableHead.push({
            label: th.childNodes[0].nodeValue.toString(),
            name: th.attrObj.name as string,
          });
        });
        // console.log('tableHead is ', tableHead);
        table.childNodes.forEach((tr: TableRow | unknown, index: number) => {
          if (index > 0) {
            // console.log('tr is ', tr);
            if (tr instanceof TableRow) {
              let data: { [propName: string]: string | number | boolean } = {};
              const rowId = tr.rowId;
              if (rowId) {
                const rowIdJson = JSON.parse(rowId);
                for (const key in rowIdJson) {
                  data[key] = rowIdJson[key];
                }
              }
              tr.childNodes.forEach((td: TableDataCell | Span, index) => {
                // console.log('td is ', td);
                if (td instanceof Span) { // 是删除按钮
                  return;
                }
                const item = td.childNodes[0];
                if (item instanceof TextNode) {
                  data[tableHead[index].name] = item.nodeValue;
                } else {
                  data[tableHead[index].name] = item.value; // WebControl.value;
                }
              });
              tableData.push(data);
            }
          }
        });
        // console.log('tableData is ', tableData);
      } else {
        if (ctrl.fieldName) {
          formData[ctrl.fieldName] = ctrl.value || '';
        }
      }
    });
    return formData;
  }

  /**
   * 选中控件
   * @param control
   */
  static setSelectedControl(control: WebControl | null): void {
    console.log('setSelectedControl . control is ', control);
    if (control) { // 选中控件
      // 如果重复选中一个控件，不做处理
      if (AppRoot.selectedControl === control) {
        return;
      }
      // 如果选中的控件不是表格控件
      // todo ??? 为什么要清理 ???
      if (AppRoot.selectedTableDataCell && !(control instanceof TableControl)) {
        AppRoot.setSelectedTableDataCell(null);
      }

      // 如果之前有选中的控件，则重置样式。
      AppRoot.selectedControl?.setStyleObj({
        border: '1px solid #e2e0e0',
      });
      AppRoot.selectedControl = control;
      control.setStyleObj({
        border: '1px solid #f00',
      });

      AppRoot.controlTab.setStyle('display', 'block'); // 控件属性栏的tab开始时隐藏的。
      // this.controlTab.dom.click();
      // console.log('clone ', control.clone());
      // this.form.appendChild(control.clone());
    } else { // 清除选中的控件
      if (AppRoot.selectedControl) {
        AppRoot.selectedControl.setStyleObj({
          border: '1px solid #e2e0e0',
        });
        AppRoot.selectedControl = null;
        // 清除选中控件时，如果有选中的单元格，也要同步清除。
        if (AppRoot.selectedTableDataCell) {
          AppRoot.setSelectedTableDataCell(null);
        }
      }
      // this.controlTab.setStyle('display', 'none');
      // this.formTab.dom.click();
    }
    if (AppRoot.mode === 'design') {
      AppRoot.controlProperty.reset();
    }
  }

  /**
   * 选中单元格，则显示字段属性；否则，隐藏；
   * todo setSelectedControl setSelectedTableDataCell 联动问题
   * @param tableDataCell
   */
  static setSelectedTableDataCell(tableDataCell: TableDataCell | null): void {
    console.error('setSelectedTableDataCell . tableDataCell is ', tableDataCell);
    if (tableDataCell) {
      if (AppRoot.selectedTableDataCell === tableDataCell) { // 重复选中同一单元格
        return;
      }
      AppRoot.selectedTableDataCell?.setStyleObj({
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#DCDFE6',
      });
      AppRoot.selectedTableDataCell = tableDataCell;
      tableDataCell.setStyleObj({
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#f00',
        display: 'table-cell'
      });
      AppRoot.layout.body.right.tabs.fieldTab.setStyle('display', 'block'); // 字段的tab开始时隐藏的。
      // this.fieldTab.dom.click();
    } else { // 清除选中
      if (AppRoot.selectedTableDataCell) {
        AppRoot.selectedTableDataCell.setStyleObj({
          borderColor: '#DCDFE6',
        });
      }
      AppRoot.selectedTableDataCell = null;
      AppRoot.layout.body.right.tabs.fieldTab.setStyle('display', 'none');
      AppRoot.controlTab.dom.click();
    }
    if (AppRoot.mode === 'design') {
      // 重置属性栏？？？
      AppRoot.fieldProperty.reset();
    }
  }

  /**
   * 选中表格时单独处理。
   * @param menu
   */
  static setSelectedMenu(menu: ControlMenu | null): void {
    if (menu) {
      // 要先移除之前选中的菜单的选中状态
      AppRoot.selectedMenu?.setStyleObj({
        backgroundColor: '#eee',
        background: '-webkit-linear-gradient(top, #eee, #d9d9d9)',
      });
      AppRoot.selectedMenu = menu;
      menu.setStyleObj({
        backgroundColor: '#fae100',
        background: '#fae100',
      });
    } else {
      if (AppRoot.selectedMenu) {
        AppRoot.selectedMenu?.setStyleObj({
          backgroundColor: '#eee',
          background: '-webkit-linear-gradient(top, #eee, #d9d9d9)',
        });
        AppRoot.selectedMenu = null;
      }
    }
  }

  /**
   * 根据表单的字面量，实例化
   * @param docLiteral
   */
  createInstance(docLiteral: IWebDocument): void {
    AppRoot.layout.webDocument.createInstance(docLiteral);
    AppRoot.formProperty.reset();
    // AppRoot.layout.webDocument?.defaultPage.createInstance(pageLiteral);
    // console.log('AppRoot.layout.webDocument is ', AppRoot.layout.webDocument);
  }

  /**
   * 保存表单数据的回调方法
   * @param callback
   */
  static save(callback: (jsonData: IWebDocument) => void): void {
    const doc = this.getJsonObj();
    callback(doc);
  }

  /**
   * 获取文档的字面量
   */
  static getJsonObj(): IWebDocument {
    AppRoot.setSelectedControl(null); // 去除选中样式
    return toJSON(AppRoot.webDocument) as IWebDocument;
  }

  /**
   * 设置控件字段的配置信息
   * @param config
   */
  static setControlFieldConfig(config: IOptionConfig): void {
    AppRoot.controlProperty.controlField.resetFieldConfig(config);
  }

  /**
   * 设置控件默认值的公式
   * @param formula
   */
  static setControlDefaultValueFormula(formula: string): void {
    AppRoot.controlProperty.controlDefaultValue.formula = formula;
  }

  /**
   * 设置控件的option-config
   * @param config
   */
  static setControlOptionConfig(config: IOptionConfig): void {
    if (AppRoot.selectedTableDataCell) {
      AppRoot.fieldProperty.fieldOptions.resetConfig(config);
      AppRoot.fieldProperty.fieldOptions.resetControl();
      return;
    }
    AppRoot.controlProperty.controlOptions.resetConfig(config);
    AppRoot.controlProperty.controlOptions.resetControl();
  }

  /**
   * 设置选项控件对应的 label和value
   * todo 单元格中的处理
   * @param label
   * @param value
   */
  static setControlConnection(label: string, value: string): void {
    if (AppRoot.selectedTableDataCell) {
      AppRoot.fieldProperty.fieldConnection.reset(label, value);
      return;
    }
    AppRoot.controlProperty.controlConnection.reset(label, value);
  }

  /**
   * 设置选项控件的值
   * 当页面点击选项控件的选项按钮时，触发外部调用的页面，配置相关的数据。
   * 使用该方法，将编辑器外部设置的数据传给选项控件的选项按钮。
   * @param label
   * @param value
   */
  static setConnectionItemValue(label: string, value: string): void {
    if (AppRoot.selectedTableDataCell?.control instanceof ConnectionControl) {
      AppRoot.selectedTableDataCell.control.setAttrObj({
        value,
        label
      }); // 控件值
      // 在内容框中显示选中的值
      AppRoot.selectedTableDataCell.control.formItem.itemContent.setAttrObj({
        value: label // 显示值
      });
      return;
    }
    if (AppRoot.selectedControl instanceof ConnectionControl) {
      AppRoot.selectedControl.setAttrObj({
        value,
        label
      }); // 控件值
      // 在内容框中显示选中的值
      AppRoot.selectedControl.formItem.itemContent.setAttrObj({
        value: label // 显示值
      });
      // AppRoot.selectedControl.connectionItemLabel = label;
    } else {
      console.error('当前选中的控件不是关联选项控件');
      throw Error('当前选中的控件不是关联选项控件');
    }
  }
  // 设置附件控件的值
  static setAttachmentValue(label: string, value: string): void {
    if (AppRoot.selectedTableDataCell?.control instanceof AttachmentControl) {
      AppRoot.selectedTableDataCell.control.setAttrObj({
        value: value,
        title: value,
      }); // 控件值
      return;
    }
    if (AppRoot.selectedControl instanceof AttachmentControl) {
      AppRoot.selectedControl.setAttrObj({
        value: value,
        title: value,
      }); // 控件值
      // todo 改变显示的字符串
    } else {
      console.error('当前选中的控件不是附件控件');
      throw Error('当前选中的控件不是附件控件');
    }
  }
  /**
   * 根据formData,给相应的控件设置值
   * 读取表单时使用
   * @param formData
   */
  static setFormData(formData: Record<string, any>): void {
    if (!formData) {
      return;
    }  //  todo 基于formData插入数值
    let formIds: Record<string, string> = {};
    for (const key in formData) {
      if (key.endsWith('.ID')) {
        formIds[key] = formData[key];
      }
    }
    AppRoot.webDocument.setAttrObj({
      'form-ids': JSON.stringify(formIds),
    });
    const tableData = formData.table as Record<string, string>[];
    delete formData.table;
    AppRoot.allControls.forEach(control => {
      // console.log('control.fieldName is ', control.fieldName);
      // console.log('control.className is ', control.className);
      if (control instanceof TableControl) {
        //  todo 出来tableData
        // console.error('tableData is ', tableData);
        const table = control.formItem.itemContent;
        const config = table.config;
        // console.error('config is ', config);
        if (config) {
          // config.tableHeader = table.tableHeader;
          // config.tableData = tableData;
          const tableName = table.tableHeader[0].name.split('.')[0];
          // console.log('tableName is ', tableName);
          if (tableData) {
            // todo tableData过滤出这个表格控件的内容
            const data = tableData.filter((record) => {
              const tableName1 =  Object.keys(record)[0].split('.')[0];
              // console.log('tableName1 is ', tableName1);
              return tableName1 === tableName;
            });
            // console.log('data is ', data);
            table.setTableData(data);
          }
        }
      } else {
        for (let key in formData) {
          // if (key === 'table1.field5' && control.fieldName === 'table1.field5') {
          //   console.error('key is ', key, ' control.fieldName is ', control.fieldName);
          // }
          if (key === control.fieldName) {
            control.setValue(formData[key]);
          }
        }
      }
      if (AppRoot.mode === 'readonly') {
        control.setDisabled();
      }
    });
  }
}
