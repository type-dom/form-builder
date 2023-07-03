import { debounce, debounceTime, switchMap, fromEvent, map, filter, Observable, Subscription, merge } from 'rxjs';
import './styles/index.scss';
// import '../type-dom/style/scss/index.scss';
import { AppRoot } from './app-root';
import {
  fieldsConfig,
  formData,
  formJson,
  optionsConfig,
  tableData,
  tableJson,
  testData1,
  testJson1
} from './form-data';
import { ConnectionControl } from './core/controls/complex/connection/connection.class';
import { makeLogger } from 'ts-loader/dist/logger';
// 在页面中调用时

fromEvent(document, 'DOMContentLoaded').subscribe(e => {
  // console.log('document DOMContentLoaded, e is ', e);
  const editorEl = document.querySelector('#design-mode') as HTMLElement;
  // console.log('editorEl is ', editorEl);
  if (editorEl) {
    const example = new ExampleDesignMode(editorEl);
    // editor = new FormEditor(editorEl);
    // console.log('editor is ', editor);
  }
});

// fromEvent(window, 'load').subscribe(e => {
//   console.log('window onload is ', e);
// });

class ExampleDesignMode {
  private editor: AppRoot;

  // private events: Subscription[];

  constructor(public el: HTMLElement) {
    this.editor = new AppRoot(el);
    // 测试混合表单
    // AppRoot.createInstance(formJson);
    // AppRoot.setFormData(exampleData);
    // 测试普通控件
    // AppRoot.createInstance(testJson1);
    // AppRoot.setFormData(testData1);
    // 测试表格
    // AppRoot.createInstance(tableJson);
    // AppRoot.setFormData(tableData);
    AppRoot.setControlFieldConfig(fieldsConfig);
    AppRoot.functionMap.set('add', this.add);
    AppRoot.onReady.subscribe(() => {
      console.log('this.editor on ready');
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
          // todo 弹框提示
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
          // todo 弹框提示
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
