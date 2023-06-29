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
    // this.editor.createInstance(formJson);
    // this.editor.setFormData(exampleData);
    // 测试普通控件
    // this.editor.createInstance(testJson1);
    // this.editor.setFormData(testData1);
    // 测试表格
    // this.editor.createInstance(tableJson);
    // this.editor.setFormData(tableData);
    this.editor.setControlFieldConfig(fieldsConfig);
    this.editor.functionMap.set('add', this.add);
    this.editor.onReady.subscribe(() => {
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
    console.log('this.editor.editorElObservable is ', this.editor.editorElObservable);
    // if (optionConfigSubscription) optionConfigSubscription.unsubscribe();
    this.editor.optionsConfigObservable.subscribe(() => {
      console.log('this.editor.optionsConfigObservable . ');
      this.editor.setControlOptionConfig(optionsConfig);
    });

    // if (connectionSubscription) connectionSubscription.unsubscribe();
    this.editor.connectionObservable.subscribe(() => {
      console.log('this.editor.connectionObservable . ');
      this.editor.setControlConnection('config-label', 'config-value');
    });
    this.editor.connectionItemObservable.subscribe(() => {
      console.log('this.editor.connectionItemObservable . ');
      if (this.editor.selectedTableDataCell?.control instanceof ConnectionControl) {
        console.log('this.editor.selectedControl.a is ', this.editor.selectedTableDataCell.control.connectionConfigLabel);
        const value = this.editor.selectedTableDataCell.control.connectionConfigValue;
        if (value === undefined) {
          // todo 弹框提示
          throw Error('请先选择配置信息。 ');
        }
        // then
        this.editor.setConnectionItemValue('label', 'value');
        return;
      }
      if (this.editor.selectedControl instanceof ConnectionControl) {
        console.log('this.editor.selectedControl.a is ', this.editor.selectedControl.connectionConfigLabel);
        const value = this.editor.selectedControl.connectionConfigValue;
        if (value === undefined) {
          // todo 弹框提示
          throw Error('请先选择配置信息。 ');
        }
        // then
        this.editor.setConnectionItemValue('label', 'value');
      } else {
        throw Error('不是ConnectionControl . ');
      }
    });
    // console.log('this.editor.attachmentObservable . ');
    this.editor.attachmentObservable.subscribe((e) => {
      console.log('e.target files is ', (e && (e.target as HTMLInputElement).files));
      this.editor.setAttachmentValue('附件', 'file1');
    });
    this.editor.formulaVisibleObservable.subscribe(() => {
      console.log('this.editor.formulaVisibleObservable . ');
      this.editor.setControlDefaultValueFormula('a+b=c');
    });

  }
}
