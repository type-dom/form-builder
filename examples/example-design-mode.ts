import { TypeRoot } from '@type-dom/framework';
import { FormBuilder, ConnectionControl } from '../src';
import {
  fieldsConfig,
  // formData,
  // formJson,
  optionsConfig,
  // tableData,
  // tableJson,
  // testData1,
  // testJson1
} from './form-data';

class ExampleDesignMode extends TypeRoot {
  private editor: FormBuilder;
  className: 'ExampleDesignMode';
  // private events: Subscription[];

  constructor(public el: HTMLElement) {
    super();
    this.className = 'ExampleDesignMode';
    this.editor = new FormBuilder({
      editorEl: el,
      mode: 'design',
      width: 800,
      height: 600,
    });
    this.editor.setParent(this);
    // 测试混合表单
    // AppRoot.createInstance(formJson);
    // AppRoot.setFormData(exampleData);
    // 测试普通控件
    // AppRoot.createInstance(testJson1);
    // AppRoot.setFormData(testData1);
    // 测试表格
    // AppRoot.createInstance(tableJson);
    // AppRoot.setFormData(tableData);
    this.editor.setControlFieldConfig(fieldsConfig);
    this.editor.functionMap.set('add', this.add);
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
    console.log('AppRoot.editorElObservable is ', this.editor.editorElObservable);
    // if (optionConfigSubscription) optionConfigSubscription.unsubscribe();
    this.editor.optionsConfigObservable?.subscribe(() => {
      console.log('AppRoot.optionsConfigObservable . ');
      this.editor.setControlOptionConfig(optionsConfig);
    });

    // if (connectionSubscription) connectionSubscription.unsubscribe();
    this.editor.connectionObservable?.subscribe(() => {
      console.log('AppRoot.connectionObservable . ');
      this.editor.setControlConnection('config-label', 'config-value');
    });
    this.editor.connectionItemObservable?.subscribe(() => {
      console.log('AppRoot.connectionItemObservable . ');
      if (this.editor.selectedTableDataCell?.control instanceof ConnectionControl) {
        console.log('AppRoot.selectedControl.a is ', this.editor.selectedTableDataCell.control.connectionConfigLabel);
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
        console.log('AppRoot.selectedControl.a is ', this.editor.selectedControl.connectionConfigLabel);
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
    // console.log('AppRoot.attachmentObservable . ');
    this.editor.attachmentObservable?.subscribe((e) => {
      console.log('e.target files is ', (e && (e.target as HTMLInputElement).files));
      this.editor.setAttachmentValue('附件', 'file1');
    });
    this.editor.formulaVisibleObservable?.subscribe(() => {
      console.log('AppRoot.formulaVisibleObservable . ');
      this.editor.setControlDefaultValueFormula('a+b=c');
    });

  }
}

/**
 * 这个类其实就是一个真实DOM
 */
export class FormDesignMode extends HTMLElement {
  public static observedAttributes = [];
  /**
   * connectedCallback会在 custom element 首次被插入到文档 DOM 节点上时被调用，
   * 而 attributeChangedCallback则会在 custom element 增加、删除或者修改某个属性时被调用。
   */
  connectedCallback() { // 省去了监听document加载完毕
    const title = 'type-app';
    const appRoot = new ExampleDesignMode(this);
    appRoot.setAttrName(title);
    // 使用路由
    // appRoot.useRouter();
    const shadowRoot = this.attachShadow({ mode: 'open' }); // mode "closed" | "open"
    // 挂载
    appRoot.mount(shadowRoot);
    // 渲染
    appRoot.render();
    console.log('appRoot is ', appRoot);
    const buff: string[] = [];
    appRoot.dump(buff);
    console.log('appRoot.dump() buff.join("") is ', buff.join(''));
  }
}
customElements.define('design-mode-app', FormDesignMode);
