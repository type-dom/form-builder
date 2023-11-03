import { debounce, debounceTime, switchMap, fromEvent, map, filter, Observable, Subscription, merge } from 'rxjs';
import './styles/index.scss';
// import '../type-dom/style/scss/index.scss';
import { TypeFormDesigner } from './type-form-designer';
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
import { ConnectionControl } from './core/control/complex/connection/connection.class';
import { makeLogger } from 'ts-loader/dist/logger';
// 在页面中调用时

fromEvent(document, 'DOMContentLoaded').subscribe(e => {
  // console.log('document DOMContentLoaded, e is ', e);
  const editorEl = document.querySelector('#design-mode') as HTMLElement;
  // console.log('editorEl is ', editorEl);
  if (editorEl) {
    const example = new ExampleDesignMode(editorEl);
    // designer = new TypeFormDesigner(editorEl);
    // console.log('editor is ', editor);
  }
});

// fromEvent(window, 'load').subscribe(e => {
//   console.log('window onload is ', e);
// });

class ExampleDesignMode {
  private editor: TypeFormDesigner;

  // private events: Subscription[];

  constructor(public el: HTMLElement) {
    this.editor = new TypeFormDesigner(el);
    // 测试混合表单
    // AppRoot.createInstance(formJson);
    // AppRoot.setFormData(exampleData);
    // 测试普通控件
    // AppRoot.createInstance(testJson1);
    // AppRoot.setFormData(testData1);
    // 测试表格
    // AppRoot.createInstance(tableJson);
    // AppRoot.setFormData(tableData);
    TypeFormDesigner.setControlFieldConfig(fieldsConfig);
    TypeFormDesigner.functionMap.set('add', this.add);
    // this.events = [];
    // fetch('/source').then(res => { // 可以获取 html页面
    //   console.log('res is ', res);
    //   return res.text();
    // }).then(text => {
    //   console.log('text is ', text);
    // });
  }

  add(a: number, b: number) {
    console.log('a b is ', a, b);
    return a + b;
  }

  initEvents(): void {
    console.log('AppRoot.editorElObservable is ', TypeFormDesigner.editorElObservable);
    // if (optionConfigSubscription) optionConfigSubscription.unsubscribe();
    TypeFormDesigner.optionsConfigObservable.subscribe(() => {
      console.log('AppRoot.optionsConfigObservable . ');
      TypeFormDesigner.setControlOptionConfig(optionsConfig);
    });

    // if (connectionSubscription) connectionSubscription.unsubscribe();
    TypeFormDesigner.connectionObservable.subscribe(() => {
      console.log('AppRoot.connectionObservable . ');
      TypeFormDesigner.setControlConnection('config-label', 'config-value');
    });
    TypeFormDesigner.connectionItemObservable.subscribe(() => {
      console.log('AppRoot.connectionItemObservable . ');
      if (TypeFormDesigner.selectedTableDataCell?.control instanceof ConnectionControl) {
        console.log('AppRoot.selectedControl.a is ', TypeFormDesigner.selectedTableDataCell.control.connectionConfigLabel);
        const value = TypeFormDesigner.selectedTableDataCell.control.connectionConfigValue;
        if (value === undefined) {
          // todo 弹框提示
          throw Error('请先选择配置信息。 ');
        }
        // then
        TypeFormDesigner.setConnectionItemValue('label', 'value');
        return;
      }
      if (TypeFormDesigner.selectedControl instanceof ConnectionControl) {
        console.log('AppRoot.selectedControl.a is ', TypeFormDesigner.selectedControl.connectionConfigLabel);
        const value = TypeFormDesigner.selectedControl.connectionConfigValue;
        if (value === undefined) {
          // todo 弹框提示
          throw Error('请先选择配置信息。 ');
        }
        // then
        TypeFormDesigner.setConnectionItemValue('label', 'value');
      } else {
        throw Error('不是ConnectionControl . ');
      }
    });
    // console.log('AppRoot.attachmentObservable . ');
    TypeFormDesigner.attachmentObservable.subscribe((e) => {
      console.log('e.target files is ', (e && (e.target as HTMLInputElement).files));
      TypeFormDesigner.setAttachmentValue('附件', 'file1');
    });
    TypeFormDesigner.formulaVisibleObservable.subscribe(() => {
      console.log('AppRoot.formulaVisibleObservable . ');
      TypeFormDesigner.setControlDefaultValueFormula('a+b=c');
    });

  }
}
