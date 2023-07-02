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
    AppRoot.setControlFieldConfig(fieldsConfig);
    AppRoot.functionMap.set('add', this.add);
    AppRoot.onReady.subscribe(() => {
      console.log('AppRoot on ready');
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
    console.log('AppRoot.editorElObservable is ', AppRoot.editorElObservable);
    // if (optionConfigSubscription) optionConfigSubscription.unsubscribe();
    AppRoot.optionsConfigObservable.subscribe(() => {
      console.log('AppRoot.optionsConfigObservable . ');
      AppRoot.setControlOptionConfig(optionsConfig);
    });

    // if (connectionSubscription) connectionSubscription.unsubscribe();
    AppRoot.connectionObservable.subscribe(() => {
      console.log('AppRoot.connectionObservable . ');
      AppRoot.setControlConnection('config-label', 'config-value');
    });
    AppRoot.connectionItemObservable.subscribe(() => {
      console.log('AppRoot.connectionItemObservable . ');
      if (AppRoot.selectedTableDataCell?.control instanceof ConnectionControl) {
        console.log('AppRoot.selectedControl.a is ', AppRoot.selectedTableDataCell.control.connectionConfigLabel);
        const value = AppRoot.selectedTableDataCell.control.connectionConfigValue;
        if (value === undefined) {
          throw Error('请先选择配置信息。 ');
        }
        // then
        AppRoot.setConnectionItemValue('label', 'value');
        return;
      }
      if (AppRoot.selectedControl instanceof ConnectionControl) {
        console.log('AppRoot.selectedControl.a is ', AppRoot.selectedControl.connectionConfigLabel);
        const value = AppRoot.selectedControl.connectionConfigValue;
        if (value === undefined) {
          throw Error('请先选择配置信息。 ');
        }
        // then
        AppRoot.setConnectionItemValue('label', 'value');
      } else {
        throw Error('不是ConnectionControl . ');
      }
    });
    // console.log('AppRoot.attachmentObservable . ');
    AppRoot.attachmentObservable.subscribe((e) => {
      console.log('e.target files is ', (e && (e.target as HTMLInputElement).files));
      AppRoot.setAttachmentValue('附件', 'file1');
    });
    AppRoot.formulaVisibleObservable.subscribe(() => {
      console.log('AppRoot.formulaVisibleObservable . ');
      AppRoot.setControlDefaultValueFormula('a+b=c');
    });
  }
}
