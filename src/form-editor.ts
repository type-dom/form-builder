import { filter, fromEvent, switchMap, of, Observable, Subscription, map, Subject } from 'rxjs';
import { LayoutWrapper } from './views/layout/layout';
import { ControlProperty } from './views/layout/body/right/contents/control-property/control-property';
import { FormProperty } from './views/layout/body/right/contents/form-property/form-property';
import { FieldProperty } from './views/layout/body/right/contents/field-property/field-property';
import { Cursor } from '../type-node/web-style.enum';
import { WebTableDataCell } from '../type-node/web-element/html-element/table/data-cell/data-cell.class';
import { ListItem } from '../type-node/web-element/html-element/unordered-list/list-item/list-item.class';
import { WebTableRow } from '../type-node/web-element/html-element/table/row/row.class';
import { Span } from '../type-node/web-element/html-element/span/span.class';
import { toJSON } from '../type-node/type-element/type-element.function';
import { WebDialog } from '../type-node/components/dialog/dialog';
import { MessageBox } from '../type-node/components/message-box/message-box';
import { WebTextNode } from '../type-node/web-text-node/web-text-node.class';
import { WebForm } from '../type-node/components/form/form';
import { ControlMenu } from './core/menus/menu.abstract';
import { WebControl } from './core/controls/web-control.abstract';
import { WebDocument } from './core/document/web-document.class';
import { IWebDocument } from './core/document/web-document.interface';
import { WebPage } from './core/page/web-page.class';
import { IOptionConfig } from './core/controls/web-control.interface';
import { ConnectionControl } from './core/controls/complex/connection/connection.class';
import { TableControl } from './core/controls/complex/table/table.class';
import { ITableField } from './core/controls/complex/table/table.interface';
import { AttachmentControl } from './core/controls/basic/attachment/attachment.class';
import { Test } from './views/test/test';

export class FormEditor {
  // 光标
  cursor?: Cursor | null;
  // 选中的菜单
  selectedMenu: ControlMenu | null;
  // 选中的控件
  selectedControl: WebControl | null;
  // 选中的表格单元格
  selectedTableDataCell?: WebTableDataCell | null;

  layout: LayoutWrapper;
  // 对话框
  dialog: WebDialog;
  // 消息框
  messageBox: MessageBox;
  // 编辑器模式，对应 设计模式， 填表模式， 只读模式
  mode: 'design' | 'fill' | 'readonly';
  // todo tabs操作中重置。
  // currentPage: WebPage;
  // 集中出来外部传入的函数或方法。
  functionMap: Map<string, (...rest: any[]) => any>;
  el: HTMLElement;
  events: Subscription[];
  editorElObservable: Observable<Event>;
  onReady: Observable<void>;
  readyEvent: Subject<void>;
  constructor(editorEl: HTMLElement, mode: 'design' | 'fill' | 'readonly' = 'design') {
    this.el = editorEl;
    if (!this.el.clientHeight) {
      // this.el.setAttribute('clientHeight', '500px');
      this.el.style.height = '600px'; // 默认高度600px;
    }
    // console.log('this.el.clientHeight is ', this.el.clientHeight);
    this.events = [];
    this.mode = mode;
    this.layout = new LayoutWrapper(this);
    this.dialog = new WebDialog(this);
    this.messageBox = new MessageBox(this);
    const test = new Test(this);
    this.layout.childNodes.push(this.dialog, this.messageBox, test);
    this.layout.render();
    // console.log('editorEl is ', editorEl);
    editorEl.appendChild(this.layout.dom);

    // this.currentPage = this.defaultPage;
    this.selectedMenu = null;
    this.selectedControl = null;
    // this.connectionItemObservable = null;
    this.editorElObservable = fromEvent(this.el, 'click')
      .pipe(filter(() => {
        return !!this.selectedTableDataCell || !!this.selectedControl;
      }));
    this.functionMap = new Map();
    this.formProperty.reset();
    this.readyEvent = new Subject<void>();
    this.onReady = this.readyEvent.asObservable();
  }
  /**
   * 获取设置的文档对象
   */
  get webDocument(): WebDocument {
    return this.layout.webDocument;
  }

  /**
   * 获取右侧属性栏的字段属性tab
   */
  get fieldTab(): ListItem {
    return this.layout.body.right.tabs.fieldTab;
  }

  /**
   * 获取右侧属性栏的控件属性的tab
   */
  get controlTab(): ListItem {
    return this.layout.body.right.tabs.controlTab;
  }

  /**
   * 获取右侧属性栏的表单属性的tab
   */
  get formTab(): ListItem {
    return this.layout.body.right.tabs.formTab;
  }

  /**
   * 获取控件属性栏
   */
  get controlProperty(): ControlProperty {
    return this.layout.body.right.contents.controlProperty;
  }

  /**
   * 获取字段属性栏
   */
  get fieldProperty(): FieldProperty {
    return this.layout.body.right.contents.fieldProperty;
  }

  /**
   * 获取表单属性栏
   */
  get formProperty(): FormProperty {
    return this.layout.body.right.contents.formProperty;
  }

  // todo 暂时不用
  get currentPage(): WebPage {
    return this.webDocument.contents.currentPage;
  }
  /**
   * 获取默认页
   */
  get defaultPage(): WebPage { // defaultPage 默认首页
    // return this.webDocument.defaultPage;
    return this.webDocument.contents.defaultPage;
  }

  /**
   * 获取所有控件
   * 考虑多页面
   */
  get allControls(): WebControl[] {
    const controls: WebControl[] = [];
    this.webDocument.contents.childNodes.forEach(page => {
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
  get optionControls(): WebControl[] {
    return this.allControls.filter(control => !!control.optionConfig);
  }

  /**
   * 默认值属性控制项的控制公式编辑器是否显示的监听
   */
  get formulaVisibleObservable(): Observable<Event> {
    return this.editorElObservable.pipe(
      switchMap(() => {
        // console.log('this.editor.selectedControl is ', this.selectedControl);
        // if (this.selectedTableDataCell) { // 表格单元格选中的控件
        //   return this.fieldProperty.fieldDefaultValue.formulaObservable;
        // }
        return this.controlProperty.controlDefaultValue.formulaObservable;
      })
    );
  }

  /**
   * 控件属性中选项的监听
   */
  get optionsConfigObservable(): Observable<Event> {
    return this.editorElObservable.pipe(
      switchMap(() => {
        // console.log('this.editor.selectedControl is ', this.selectedControl);
        if (this.selectedTableDataCell) { // 表格单元格选中的控件
          // console.log('this.fieldProperty.fieldOptions.optionsConfigObservable is ', this.fieldProperty.fieldOptions.optionsConfigObservable);
          return this.fieldProperty.fieldOptions.optionsConfigObservable;
        }
        // console.log('this.controlProperty.controlOptions.optionsConfigObservable is ', this.controlProperty.controlOptions.optionsConfigObservable);
        return this.controlProperty.controlOptions.optionsConfigObservable;
      })
    );
  }

  /**
   * 提交表单的监听
   */
  get submitObservable(): Observable<Event> | undefined {
    return this.layout.form?.footer.submitBtn.submitObservable;
  }

  /**
   * 关联选项控件的关联属性的监听
   */
  get connectionObservable(): Observable<Event> {
    return this.editorElObservable.pipe(
      switchMap(() => {
        if (this.selectedTableDataCell) { // 表格单元格选中的控件
          console.log('this.fieldProperty.fieldConnection.connectionObservable is ', this.fieldProperty.fieldConnection.connectionObservable);
          return this.fieldProperty.fieldConnection.connectionObservable;
        }
        return this.controlProperty.controlConnection.connectionObservable;
      })
    );
  }

  /**
   * 点击关联选项时，监听其点击事件。返回当前选中的控件是关联选项控件时。
   * 要考虑表格单元格中的控件是ConnectionControl的情况
   */
  get connectionItemObservable(): Observable<Event | null> {
    return this.editorElObservable.pipe(
      switchMap(() => {
        if (this.selectedTableDataCell?.control instanceof ConnectionControl) {
          console.log('this.selectedTableDataCell.control.connectionItemObservable is ', this.selectedTableDataCell.control.connectionItemObservable);
          return this.selectedTableDataCell.control.connectionItemObservable;
        }
        if (this.selectedControl instanceof ConnectionControl) {
          console.log('this.selectedControl.connectionItemObservable is ', this.selectedControl.connectionItemObservable);
          return this.selectedControl.connectionItemObservable;
        }
        return of(null);
      }),
      filter(ob => ob !== null)
    );
  }

  /**
   * 附件上传文件的监听
   */
  get attachmentObservable(): Observable<Event | null> {
    return this.editorElObservable.pipe(
      switchMap(() => {
        if (this.selectedTableDataCell?.control instanceof AttachmentControl) {
          return this.selectedTableDataCell.control.attachmentObservable;
        }
        if (this.selectedControl instanceof AttachmentControl) {
          return this.selectedControl.attachmentObservable;
        }
        return of(null);
      }),
      filter(ob => ob !== null)
    );
  }
  /**
   * 获取表单
   */
  get form(): WebForm | undefined {
    return this.layout.form;
  }

  /**
   * 根据控件获取提交的数据
   */
  get formData(): Record<string, string | any[]> {
    const formData: Record<string, string | any[]> = {};
    const formIds = this.webDocument.formIds;
    if (formIds) {
      const formIdJson = JSON.parse(formIds);
      for (const key in formIdJson) {
        formData[key] = formIdJson[key];
      }
    }
    const tableData: Record<string, string>[] = [];
    formData.table = tableData;
    this.allControls.forEach((ctrl) => {
      if (ctrl instanceof TableControl) {
        // console.log('ctrl is TableControl', ctrl);
        const table = ctrl.formItem.itemContent;
        // todo ctrl.tableHeader tableData
        const tableHeader = table.childNodes[0];
        // console.log('tableHeader is ', tableHeader);
        const tableHead: ITableField[] = [];
        tableHeader.childNodes.forEach((th) => {
          tableHead.push({
            label: th.childNodes[0].text,
            name: th.attrObj.name as string,
          });
        });
        // console.log('tableHead is ', tableHead);
        table.childNodes.forEach((tr: WebTableRow | unknown, index: number) => {
          if (index > 0) {
            // console.log('tr is ', tr);
            if (tr instanceof WebTableRow) {
              let data: { [propName: string]: string } = {};
              const rowId = tr.rowId;
              if (rowId) {
                const rowIdJson = JSON.parse(rowId);
                for (const key in rowIdJson) {
                  data[key] = rowIdJson[key];
                }
              }
              tr.childNodes.forEach((td: WebTableDataCell | Span, index) => {
                // console.log('td is ', td);
                if (td instanceof Span) { // 是删除按钮
                  return;
                }
                const item = td.childNodes[0];
                if (item instanceof WebTextNode) {
                  data[tableHead[index].name] = item.text;
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
  setSelectedControl(control: WebControl | null): void {
    console.log('setSelectedControl . control is ', control);
    if (control) { // 选中控件
      // 如果重复选中一个控件，不做处理
      if (this.selectedControl === control) {
        return;
      }
      // 如果选中的控件不是表格控件
      // todo ??? 为什么要清理 ???
      if (this.selectedTableDataCell && !(control instanceof TableControl)) {
        this.setSelectedTableDataCell(null);
      }

      // 如果之前有选中的控件，则重置样式。
      this.selectedControl?.setStyleObj({
        border: '1px solid #e2e0e0',
      });
      this.selectedControl = control;
      control.setStyleObj({
        border: '1px solid #f00',
      });

      this.controlTab.setStyle('display', 'block'); // 控件属性栏的tab开始时隐藏的。
      // this.controlTab.dom.click();
      // console.log('clone ', control.clone());
      // this.form.appendChild(control.clone());
    } else { // 清除选中的控件
      if (this.selectedControl) {
        this.selectedControl.setStyleObj({
          border: '1px solid #e2e0e0',
        });
        this.selectedControl = null;
        // 清除选中控件时，如果有选中的单元格，也要同步清除。
        if (this.selectedTableDataCell) {
          this.setSelectedTableDataCell(null);
        }
      }
      // this.controlTab.setStyle('display', 'none');
      // this.formTab.dom.click();
    }
    if (this.mode === 'design') {
      this.controlProperty.reset();
    }
  }

  /**
   * 选中单元格，则显示字段属性；否则，隐藏；
   * todo setSelectedControl setSelectedTableDataCell 联动问题
   * @param tableDataCell
   */
  setSelectedTableDataCell(tableDataCell: WebTableDataCell | null): void {
    console.error('setSelectedTableDataCell . tableDataCell is ', tableDataCell);
    if (tableDataCell) {
      if (this.selectedTableDataCell === tableDataCell) { // 重复选中同一单元格
        return;
      }
      this.selectedTableDataCell?.setStyleObj({
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#DCDFE6',
      });
      this.selectedTableDataCell = tableDataCell;
      tableDataCell.setStyleObj({
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#f00',
        display: 'table-cell'
      });
      this.fieldTab.setStyle('display', 'block'); // 字段的tab开始时隐藏的。
      // this.fieldTab.dom.click();
    } else { // 清除选中
      if (this.selectedTableDataCell) {
        this.selectedTableDataCell.setStyleObj({
          borderColor: '#DCDFE6',
        });
      }
      this.selectedTableDataCell = null;
      this.fieldTab.setStyle('display', 'none');
      this.controlTab.dom.click();
    }
    if (this.mode === 'design') {
      // 重置属性栏？？？
      this.fieldProperty.reset();
    }
  }

  /**
   * 选中表格时单独处理。
   * @param menu
   */
  setSelectedMenu(menu: ControlMenu | null): void {
    if (menu) {
      // 要先移除之前选中的菜单的选中状态
      this.selectedMenu?.setStyleObj({
        backgroundColor: '#eee',
        background: '-webkit-linear-gradient(top, #eee, #d9d9d9)',
      });
      this.selectedMenu = menu;
      menu.setStyleObj({
        backgroundColor: '#fae100',
        background: '#fae100',
      });
    } else {
      if (this.selectedMenu) {
        this.selectedMenu?.setStyleObj({
          backgroundColor: '#eee',
          background: '-webkit-linear-gradient(top, #eee, #d9d9d9)',
        });
        this.selectedMenu = null;
      }
    }
  }

  /**
   * 根据表单的字面量，实例化
   * @param docLiteral
   */
  createInstance(docLiteral: IWebDocument): void {
    this.layout.webDocument.createInstance(docLiteral);
    this.formProperty.reset();
    // this.layout.webDocument?.defaultPage.createInstance(pageLiteral);
    // console.log('this.layout.webDocument is ', this.layout.webDocument);
  }

  /**
   * 保存表单数据的回调方法
   * @param callback
   */
  save(callback: (jsonData: IWebDocument) => void): void {
    const doc = this.getJsonObj();
    callback(doc);
  }

  /**
   * 获取文档的字面量
   */
  getJsonObj(): IWebDocument {
    this.setSelectedControl(null); // 去除选中样式
    return toJSON(this.webDocument) as IWebDocument;
  }

  /**
   * 设置控件字段的配置信息
   * @param config
   */
  setControlFieldConfig(config: IOptionConfig): void {
    this.controlProperty.controlField.resetFieldConfig(config);
  }

  /**
   * 设置控件默认值的公式
   * @param formula
   */
  setControlDefaultValueFormula(formula: string): void {
    this.controlProperty.controlDefaultValue.formula = formula;
  }

  /**
   * 设置控件的option-config
   * @param config
   */
  setControlOptionConfig(config: IOptionConfig): void {
    if (this.selectedTableDataCell) {
      this.fieldProperty.fieldOptions.resetConfig(config);
      this.fieldProperty.fieldOptions.resetControl();
      return;
    }
    this.controlProperty.controlOptions.resetConfig(config);
    this.controlProperty.controlOptions.resetControl();
  }

  /**
   * 设置选项控件对应的 label和value
   * todo 单元格中的处理
   * @param label
   * @param value
   */
  setControlConnection(label: string, value: string): void {
    if (this.selectedTableDataCell) {
      this.fieldProperty.fieldConnection.reset(label, value);
      return;
    }
    this.controlProperty.controlConnection.reset(label, value);
  }

  /**
   * 设置选项控件的值
   * 当页面点击选项控件的选项按钮时，触发外部调用的页面，配置相关的数据。
   * 使用该方法，将编辑器外部设置的数据传给选项控件的选项按钮。
   * @param label
   * @param value
   */
  setConnectionItemValue(label: string, value: string): void {
    if (this.selectedTableDataCell?.control instanceof ConnectionControl) {
      this.selectedTableDataCell.control.setAttrObj({
        value,
        label
      }); // 控件值
      // 在内容框中显示选中的值
      this.selectedTableDataCell.control.formItem.itemContent.setAttrObj({
        value: label // 显示值
      });
      return;
    }
    if (this.selectedControl instanceof ConnectionControl) {
      this.selectedControl.setAttrObj({
        value,
        label
      }); // 控件值
      // 在内容框中显示选中的值
      this.selectedControl.formItem.itemContent.setAttrObj({
        value: label // 显示值
      });
      // this.selectedControl.connectionItemLabel = label;
    } else {
      console.error('当前选中的控件不是关联选项控件');
      throw Error('当前选中的控件不是关联选项控件');
    }
  }
  // 设置附件控件的值
  setAttachmentValue(label: string, value: string): void {
    if (this.selectedTableDataCell?.control instanceof AttachmentControl) {
      this.selectedTableDataCell.control.setAttrObj({
        value: value,
        title: value,
      }); // 控件值
      return;
    }
    if (this.selectedControl instanceof AttachmentControl) {
      this.selectedControl.setAttrObj({
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
  setFormData(formData: Record<string, any>): void {
    if (!formData) {
      return;
    }  //  todo 基于formData插入数值
    let formIds: Record<string, string> = {};
    for (const key in formData) {
      if (key.endsWith('.ID')) {
        formIds[key] = formData[key];
      }
    }
    this.webDocument.setAttrObj({
      'form-ids': JSON.stringify(formIds),
    });
    const tableData = formData.table as Record<string, string>[];
    delete formData.table;
    this.allControls.forEach(control => {
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
      if (this.mode === 'readonly') {
        control.setDisabled();
      }
    });
  }
}
