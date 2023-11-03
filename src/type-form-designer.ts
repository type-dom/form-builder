// 顺序不能随意调换，可能会加载报错。 TypeControl todo 如何解决
import { filter, fromEvent, switchMap, of, Observable, Subscription, Subject } from 'rxjs';
import { ListItem, Span, TextNode, TypeRoot, StyleCursor, toJSON, StyleDisplay } from 'type-dom.ts';
import { Dialog, MessageBox } from 'type-dom-ui';
import { ModeStateAbstract } from './state/mode/mode-state.abstract';
import { createModeState } from './state/mode/mode-state.factory';
import { LayoutWrapper } from './views/layout/layout';
import { ControlProperty } from './views/layout/body/right/contents/control-property/control-property';
import { FormProperty } from './views/layout/body/right/contents/form-property/form-property';
import { FieldProperty } from './views/layout/body/right/contents/field-property/field-property';
// import { Test } from './views/test/test';
import { TypeMenu } from './core/menu/menu.abstract';
import { WebDocument } from './core/document/web-document.class';
import { IWebDocument } from './core/document/web-document.interface';
import { WebPage } from './core/page/web-page.class';
import { TypeControl } from './core/control/type-control.abstract';
import { IOptionConfig } from './core/control/type-control.interface';
import { AttachmentControl } from './core/control/basic/attachment/attachment.class';
import { ConnectionControl } from './core/control/complex/connection/connection.class';
import { TableControl } from './core/control/complex/table/table.class';
import { ITableField } from './core/control/complex/table/table.interface';
import { WebForm } from './components/form/form';
import { TableDataCell } from './components/form/form-item/table-item/table/data-cell/data-cell.class';
import { TableRow } from './components/form/form-item/table-item/table/row/row.class';
/**
 * 应用类，挂载全局属性和方法。
 * 根节点，继承 TypeRoot;
 * 因为属性和方法要全局调用，所以全部设置为静态 static; 包括get也设置为静态
 */
export class TypeFormDesigner extends TypeRoot {
  className: 'TypeFormDesigner';
  // 光标
  static cursor?: StyleCursor | null;
  // 选中的菜单
  static selectedMenu: TypeMenu | null;
  // 选中的控件
  static selectedControl: TypeControl | null;
  // 选中的表格单元格
  static selectedTableDataCell?: TableDataCell | null;
  static layout: LayoutWrapper;
  // 对话框 todo 这样全局只有一个对话框，需要多个怎么办？
  static dialog: Dialog;
  // 消息框
  static messageBox: MessageBox;
  // 编辑器模式，对应 设计模式， 填表模式， 只读模式
  static mode: ModeStateAbstract;
  // todo tabs操作中重置。
  // currentPage: WebPage;
  // 集中出来外部传入的函数或方法。
  static functionMap: Map<string, (...rest: any[]) => any>;
  static el: HTMLElement;
  static editorElObservable: Observable<Event>;
  static controlSubject: Subject<TypeControl | null>;
  static formSubject: Subject<TypeFormDesigner | null>;
  static fieldSubject: Subject<TableDataCell | null>;
  childNodes: [LayoutWrapper, Dialog, MessageBox];
  events: Subscription[];
  constructor(editorEl: HTMLElement, mode: 'design' | 'fill' | 'readonly' = 'design') {
    super({ el: editorEl });
    this.className = 'TypeFormDesigner';
    TypeFormDesigner.el = editorEl;
    if (!TypeFormDesigner.el.clientHeight) {
      // TypeFormDesigner.el.setAttribute('clientHeight', '500px');
      TypeFormDesigner.el.style.height = '600px'; // 默认高度600px;
    }
    // console.log('TypeFormDesigner.el.clientHeight is ', TypeFormDesigner.el.clientHeight);
    TypeFormDesigner.formSubject = new Subject<TypeFormDesigner | null>();
    TypeFormDesigner.controlSubject = new Subject<TypeControl | null>();
    TypeFormDesigner.fieldSubject = new Subject<TableDataCell | null>();
    this.events = [];
    const modeObj = TypeFormDesigner.mode = createModeState(mode);
    TypeFormDesigner.layout = modeObj.createLayout(this);
<<<<<<< HEAD
    TypeFormDesigner.dialog = new Dialog(this);
    TypeFormDesigner.messageBox = new MessageBox(this);
=======
    TypeFormDesigner.dialog = new Dialog();
    TypeFormDesigner.messageBox = new MessageBox();
>>>>>>> a58d83fd100001a51b223ef939ec59ddf3febe35
    // TypeFormDesigner.layout.childNodes.push(this.dialog, this.messageBox);
    this.childNodes = [TypeFormDesigner.layout, TypeFormDesigner.dialog, TypeFormDesigner.messageBox];
    this.render();
    // const json = this.toJSON();
    // console.log('json is ', json);
    // console.log('editorEl is ', editorEl);
    // editorEl.appendChild(TypeFormDesigner.layout.dom);
    // const test = new Test(this);
    // console.log('test is ', test);
    // test.render();
    // editorEl.appendChild(test.dom);
    // this.currentPage = this.defaultPage;
    TypeFormDesigner.selectedMenu = null;
    TypeFormDesigner.selectedControl = null;
    // this.connectionItemObservable = null;
    TypeFormDesigner.editorElObservable = fromEvent(TypeFormDesigner.el, 'click')
      .pipe(filter(() => {
        return !!TypeFormDesigner.selectedTableDataCell || !!TypeFormDesigner.selectedControl;
      }));
    TypeFormDesigner.functionMap = new Map();
    TypeFormDesigner.formProperty.reset();
  }
  /**
   * 获取设置的文档对象
   */
  static get webDocument(): WebDocument {
    return TypeFormDesigner.layout.webDocument;
  }
  /**
   * 获取右侧属性栏的字段属性tab
   */
  static get fieldTab(): ListItem {
    return TypeFormDesigner.layout.body.right.tabs.fieldTab;
  }
  /**
   * 获取右侧属性栏的控件属性的tab
   */
  static get controlTab(): ListItem {
    return TypeFormDesigner.layout.body.right.tabs.controlTab;
  }
  /**
   * 获取右侧属性栏的表单属性的tab
   */
  static get formTab(): ListItem {
    return TypeFormDesigner.layout.body.right.tabs.formTab;
  }
  /**
   * 获取控件属性栏
   */
  static get controlProperty(): ControlProperty {
    return TypeFormDesigner.layout.body.right.contents.controlProperty;
  }
  /**
   * 获取字段属性栏
   */
  static get fieldProperty(): FieldProperty {
    return TypeFormDesigner.layout.body.right.contents.fieldProperty;
  }
  /**
   * 获取表单属性栏
   */
  static get formProperty(): FormProperty {
    return TypeFormDesigner.layout.body.right.contents.formProperty;
  }
  // todo 暂时不用
  static get currentPage(): WebPage {
    return TypeFormDesigner.webDocument.contents.currentPage;
  }
  /**
   * 获取默认页
   */
  static get defaultPage(): WebPage { // defaultPage 默认首页
    // return TypeFormDesigner.webDocument.defaultPage;
    return TypeFormDesigner.webDocument.contents.defaultPage;
  }
  /**
   * 获取所有控件
   * 考虑多页面
   */
  static get allControls(): TypeControl[] {
    const controls: TypeControl[] = [];
    TypeFormDesigner.webDocument.contents.childNodes.forEach(page => {
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
  static get optionControls(): TypeControl[] {
    return TypeFormDesigner.allControls.filter(control => !!control.optionConfig);
  }
  /**
   * 默认值属性控制项的控制公式编辑器是否显示的监听
   */
  static get formulaVisibleObservable(): Observable<Event> {
    return this.editorElObservable.pipe(
      switchMap(() => {
        // console.log('this.editor.selectedControl is ', TypeFormDesigner.selectedControl);
        // if (TypeFormDesigner.selectedTableDataCell) { // 表格单元格选中的控件
        //   return TypeFormDesigner.fieldProperty.fieldDefaultValue.formulaObservable;
        // }
        return TypeFormDesigner.controlProperty.controlDefaultValue.formulaObservable;
      })
    );
  }
  /**
   * 控件属性中选项的监听
   */
  static get optionsConfigObservable(): Observable<Event> {
    return this.editorElObservable.pipe(
      switchMap(() => {
        // console.log('this.editor.selectedControl is ', TypeFormDesigner.selectedControl);
        if (TypeFormDesigner.selectedTableDataCell) { // 表格单元格选中的控件
          // console.log('TypeFormDesigner.fieldProperty.fieldOptions.optionsConfigObservable is ', TypeFormDesigner.fieldProperty.fieldOptions.optionsConfigObservable);
          return TypeFormDesigner.fieldProperty.fieldOptions.optionsConfigObservable;
        }
        // console.log('TypeFormDesigner.controlProperty.controlOptions.optionsConfigObservable is ', TypeFormDesigner.controlProperty.controlOptions.optionsConfigObservable);
        return TypeFormDesigner.controlProperty.controlOptions.optionsConfigObservable;
      })
    );
  }
  /**
   * 提交表单的监听
   */
  static get submitObservable(): Observable<Event> | undefined {
    return TypeFormDesigner.layout.form?.footer.submitBtn.submitObservable;
  }
  /**
   * 关联选项控件的关联属性的监听
   */
  static get connectionObservable(): Observable<Event> {
    return this.editorElObservable.pipe(
      switchMap(() => {
        if (TypeFormDesigner.selectedTableDataCell) { // 表格单元格选中的控件
          console.log('TypeFormDesigner.fieldProperty.fieldConnection.connectionObservable is ', TypeFormDesigner.fieldProperty.fieldConnection.connectionObservable);
          return TypeFormDesigner.fieldProperty.fieldConnection.connectionObservable;
        }
        return TypeFormDesigner.controlProperty.controlConnection.connectionObservable;
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
        if (TypeFormDesigner.selectedTableDataCell?.control instanceof ConnectionControl) {
          console.log('TypeFormDesigner.selectedTableDataCell.control.connectionItemObservable is ', TypeFormDesigner.selectedTableDataCell.control.connectionItemObservable);
          return TypeFormDesigner.selectedTableDataCell.control.connectionItemObservable;
        }
        if (TypeFormDesigner.selectedControl instanceof ConnectionControl) {
          console.log('TypeFormDesigner.selectedControl.connectionItemObservable is ', TypeFormDesigner.selectedControl.connectionItemObservable);
          return TypeFormDesigner.selectedControl.connectionItemObservable;
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
        if (TypeFormDesigner.selectedTableDataCell?.control instanceof AttachmentControl) {
          return TypeFormDesigner.selectedTableDataCell.control.attachmentObservable;
        }
        if (TypeFormDesigner.selectedControl instanceof AttachmentControl) {
          return TypeFormDesigner.selectedControl.attachmentObservable;
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
    return TypeFormDesigner.layout.form;
  }
  /**
   * 根据控件获取提交的数据
   */
  static get formData(): Record<string, string | any[]> {
    const formData: Record<string, string | any[]> = {};
    const formIds = TypeFormDesigner.webDocument.formIds;
    if (formIds) {
      const formIdJson = JSON.parse(formIds);
      for (const key in formIdJson) {
        formData[key] = formIdJson[key];
      }
    }
    const tableData: Record<string, string | number | boolean>[] = [];
    formData.table = tableData;
    TypeFormDesigner.allControls.forEach((ctrl) => {
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
                  data[tableHead[index].name] = item.value; // TypeControl.value;
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
   * 选中表格时单独处理。
   * @param menu
   */
  static setSelectedMenu(menu: TypeMenu | null): void {
    if (menu) {
      // 要先移除之前选中的菜单的选中状态
      TypeFormDesigner.selectedMenu?.setStyleObj({
        backgroundColor: '#eee',
        background: '-webkit-linear-gradient(top, #eee, #d9d9d9)',
      });
      TypeFormDesigner.selectedMenu = menu;
      menu.setStyleObj({
        backgroundColor: '#fae100',
        background: '#fae100',
      });
    } else {
      if (TypeFormDesigner.selectedMenu) {
        TypeFormDesigner.selectedMenu?.setStyleObj({
          backgroundColor: '#eee',
          background: '-webkit-linear-gradient(top, #eee, #d9d9d9)',
        });
        TypeFormDesigner.selectedMenu = null;
      }
    }
  }
  /**
   * 根据表单的字面量，实例化
   * @param docLiteral
   */
  createInstance(docLiteral: IWebDocument): void {
    TypeFormDesigner.layout.webDocument.createInstance(docLiteral);
    TypeFormDesigner.formProperty.reset();
    // TypeFormDesigner.layout.webDocument?.defaultPage.createInstance(pageLiteral);
    // console.log('TypeFormDesigner.layout.webDocument is ', TypeFormDesigner.layout.webDocument);
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
    TypeFormDesigner.mode.setSelectedControl(null); // 去除选中样式
    return toJSON(TypeFormDesigner.webDocument) as IWebDocument;
  }
  /**
   * 选中控件
   * @param control
   */
  static setSelectedControl(control: TypeControl | null): void {
    console.log('setSelectedControl . control is ', control);
    // 选中控件
    if (control) {
      // 如果重复选中一个控件，不做处理
      if (TypeFormDesigner.selectedControl === control) {
        return;
      }
      // 已经选中单元格时
      if (TypeFormDesigner.selectedTableDataCell) {
        // 如果选中的控件不是表格控件
        // todo ??? 为什么要清理 ???
        if (!(control instanceof TableControl)) {
          TypeFormDesigner.mode.setSelectedTableDataCell(null);
        }
      }

      // 如果之前有选中的控件，则重置样式。
      TypeFormDesigner.selectedControl?.formItem.setStyleObj({
        borderColor: '#e2e0e0',
      });
      TypeFormDesigner.selectedControl = control;
      control.formItem.setStyleObj({
        borderColor: '#f00',
      });

      TypeFormDesigner.controlTab.show(StyleDisplay.flex); // 控件属性栏的tab默认是隐藏的。
      // this.controlTab.dom.click();
      // console.log('clone ', control.clone());
      // this.form.appendChild(control.clone());
    } else { // 清除选中的控件
      if (TypeFormDesigner.selectedControl) {
        TypeFormDesigner.selectedControl.setStyleObj({
          border: '1px solid #e2e0e0',
        });
        TypeFormDesigner.selectedControl = null;
        // 清除选中控件时，如果有选中的单元格，也要同步清除。
        if (TypeFormDesigner.selectedTableDataCell) {
          TypeFormDesigner.mode?.setSelectedTableDataCell(null);
        }
      }
      // this.controlTab.setStyle('display', 'none');
      // this.formTab.dom.click();
    }
  }
  /**
   *  设置选中、取消选中的样式变化。与属性栏联动由子类（DesignState类）方法实现。
   * 选中单元格，则显示字段属性；否则，隐藏；
   * todo setSelectedControl setSelectedTableDataCell 联动问题
   * @param tableDataCell
   */
  static setSelectedTableDataCell(tableDataCell: TableDataCell | null): void {
    console.error('setSelectedTableDataCell . tableDataCell is ', tableDataCell);
    if (tableDataCell) {
      if (TypeFormDesigner.selectedTableDataCell === tableDataCell) { // 重复选中同一单元格
        return;
      }
      TypeFormDesigner.selectedTableDataCell?.setStyleObj({
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#DCDFE6',
      });
      TypeFormDesigner.selectedTableDataCell = tableDataCell;
      tableDataCell.setStyleObj({
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#f00',
        display: 'table-cell'
      });
      TypeFormDesigner.layout.body.right.tabs.fieldTab.setStyle('display', 'block'); // 字段的tab开始时隐藏的。
      // this.fieldTab.dom.click();
    } else {
      // 清除选中
      if (TypeFormDesigner.selectedTableDataCell) {
        TypeFormDesigner.selectedTableDataCell.setStyleObj({
          borderColor: '#DCDFE6',
        });
      }
      TypeFormDesigner.selectedTableDataCell = null;
      TypeFormDesigner.layout.body.right.tabs.fieldTab.setStyle('display', 'none');
      TypeFormDesigner.controlTab.dom.click();
    }
  }
  /**
   * 设置控件字段的配置信息
   * @param config
   */
  static setControlFieldConfig(config: IOptionConfig): void {
    TypeFormDesigner.controlProperty.controlField.resetFieldConfig(config);
  }
  /**
   * 设置控件默认值的公式
   * @param formula
   */
  static setControlDefaultValueFormula(formula: string): void {
    TypeFormDesigner.controlProperty.controlDefaultValue.formula = formula;
  }
  /**
   * 设置控件的option-config
   * @param config
   */
  static setControlOptionConfig(config: IOptionConfig): void {
    if (TypeFormDesigner.selectedTableDataCell) {
      TypeFormDesigner.fieldProperty.fieldOptions.resetConfig(config);
      TypeFormDesigner.fieldProperty.fieldOptions.resetControl();
      return;
    }
    TypeFormDesigner.controlProperty.controlOptions.resetConfig(config);
    TypeFormDesigner.controlProperty.controlOptions.resetControl();
  }
  /**
   * 设置选项控件对应的 label和value
   * todo 单元格中的处理
   * @param label
   * @param value
   */
  static setControlConnection(label: string, value: string): void {
    if (TypeFormDesigner.selectedTableDataCell) {
      TypeFormDesigner.fieldProperty.fieldConnection.reset(label, value);
      return;
    }
    TypeFormDesigner.controlProperty.controlConnection.reset(label, value);
  }
  /**
   * 设置选项控件的值
   * 当页面点击选项控件的选项按钮时，触发外部调用的页面，配置相关的数据。
   * 使用该方法，将编辑器外部设置的数据传给选项控件的选项按钮。
   * @param label
   * @param value
   */
  static setConnectionItemValue(label: string, value: string): void {
    if (TypeFormDesigner.selectedTableDataCell?.control instanceof ConnectionControl) {
      TypeFormDesigner.selectedTableDataCell.control.setAttrObj({
        value,
        label
      }); // 控件值
      // 在内容框中显示选中的值
      TypeFormDesigner.selectedTableDataCell.control.formItem.itemContent.setAttrObj({
        value: label // 显示值
      });
      return;
    }
    if (TypeFormDesigner.selectedControl instanceof ConnectionControl) {
      TypeFormDesigner.selectedControl.setAttrObj({
        value,
        label
      }); // 控件值
      // 在内容框中显示选中的值
      TypeFormDesigner.selectedControl.formItem.itemContent.setAttrObj({
        value: label // 显示值
      });
      // TypeFormDesigner.selectedControl.connectionItemLabel = label;
    } else {
      console.error('当前选中的控件不是关联选项控件');
      throw Error('当前选中的控件不是关联选项控件');
    }
  }
  // 设置附件控件的值
  static setAttachmentValue(label: string, value: string): void {
    if (TypeFormDesigner.selectedTableDataCell?.control instanceof AttachmentControl) {
      TypeFormDesigner.selectedTableDataCell.control.setAttrObj({
        value: value,
        title: value,
      }); // 控件值
      return;
    }
    if (TypeFormDesigner.selectedControl instanceof AttachmentControl) {
      TypeFormDesigner.selectedControl.setAttrObj({
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
   * 填表模式和只读模式都会用到。
   * todo 设计模式下，其实相当于设置了一个空数据。
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
    TypeFormDesigner.webDocument.setAttrObj({
      'form-ids': JSON.stringify(formIds),
    });
    const tableData = formData.table as Record<string, string>[];
    delete formData.table;
    TypeFormDesigner.allControls.forEach(control => {
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
      TypeFormDesigner.mode.setControlReadOnly(control);
    });
  }
}
