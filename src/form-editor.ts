import { ConnectionControl } from './core/controls/complex/connection/connection.class';
import { AppRoot } from './app-root';
import { fieldsConfig, optionsConfig } from './form-data';

export class FormEditor {
  private appRoot: AppRoot;

  // private events: Subscription[];

  constructor(public el: HTMLElement) {
    this.appRoot = new AppRoot(el);
    // 测试混合表单
    // this.appRoot.createInstance(formJson);
    // this.appRoot.setFormData(exampleData);
    // 测试普通控件
    // this.appRoot.createInstance(testJson1);
    // this.appRoot.setFormData(testData1);
    // 测试表格
    // this.appRoot.createInstance(tableJson);
    // this.appRoot.setFormData(tableData);
    this.appRoot.setControlFieldConfig(fieldsConfig);
    this.appRoot.functionMap.set('add', this.add);
    this.appRoot.onReady.subscribe(() => {
      console.log('this.appRoot on ready');
    });
    // this.events = [];
    // fetch('/source').then(res => { // 可以获取 html页面
    //   console.log('res is ', res);
    //   return res.text();
    // }).then(text => {
    //   console.log('text is ', text);
    // });
    this.initEvents();
  }

  add(a: number, b: number) {
    console.log('a b is ', a, b);
    return a + b;
  }

  initEvents(): void {
    console.log('this.appRoot.editorElObservable is ', this.appRoot.editorElObservable);
    // if (optionConfigSubscription) optionConfigSubscription.unsubscribe();
    this.appRoot.optionsConfigObservable.subscribe(() => {
      console.log('this.appRoot.optionsConfigObservable . ');
      this.appRoot.setControlOptionConfig(optionsConfig);
    });

    // if (connectionSubscription) connectionSubscription.unsubscribe();
    this.appRoot.connectionObservable.subscribe(() => {
      console.log('this.appRoot.connectionObservable . ');
      this.appRoot.setControlConnection('config-label', 'config-value');
    });
    this.appRoot.connectionItemObservable.subscribe(() => {
      console.log('this.appRoot.connectionItemObservable . ');
      if (this.appRoot.selectedTableDataCell?.control instanceof ConnectionControl) {
        console.log('AppRoot.selectedControl.a is ', this.appRoot.selectedTableDataCell.control.connectionConfigLabel);
        const value = this.appRoot.selectedTableDataCell.control.connectionConfigValue;
        if (value === undefined) {
          throw Error('请先选择配置信息。 ');
        }
        // then
        this.appRoot.setConnectionItemValue('label', 'value');
        return;
      }
      if (AppRoot.selectedControl instanceof ConnectionControl) {
        console.log('AppRoot.selectedControl.a is ', AppRoot.selectedControl.connectionConfigLabel);
        const value = AppRoot.selectedControl.connectionConfigValue;
        if (value === undefined) {
          throw Error('请先选择配置信息。 ');
        }
        // then
        this.appRoot.setConnectionItemValue('label', 'value');
      } else {
        throw Error('不是ConnectionControl . ');
      }
    });
    // console.log('this.appRoot.attachmentObservable . ');
    this.appRoot.attachmentObservable.subscribe((e) => {
      console.log('e.target files is ', (e && (e.target as HTMLInputElement).files));
      this.appRoot.setAttachmentValue('附件', 'file1');
    });
    this.appRoot.formulaVisibleObservable.subscribe(() => {
      console.log('this.appRoot.formulaVisibleObservable . ');
      this.appRoot.setControlDefaultValueFormula('a+b=c');
    });
  }
}
