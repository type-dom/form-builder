import { fromEvent } from 'rxjs';
import { StyleDisplay, TypeDiv, toJSON } from '@type-dom/framework';
import { TdAttachmentSvg, TdDeleteSvg } from '@type-dom/svgs';
import { TdButton } from '@type-dom/ui';
import { FormBuilder } from '../../../../form-builder';
import { IWebDocument } from '../../../../core/document/web-document.interface';
import { WebDocument } from '../../../../core/document/web-document.class';
import { HeaderWrapper } from '../header';

// import { SaveButton } from './save-button/save-button';
export class Navbar extends TypeDiv {
  className: 'Navbar';
  private readonly previewBtn: TdButton;
  private readonly saveBtn: TdButton;

  constructor(public parent: HeaderWrapper) {
    super();
    this.className = 'Navbar';
    this.addStyleObj({
      display: StyleDisplay.flex,
      // justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: '60px',
      paddingLeft: '20px',
      background: 'linear-gradient(0deg, #eee, #e9e9e9)',
    });
    this.addAttrName('navbar');
    // this.previewBtn = this.createItem(this, {
    //   TypeClass: TdButton,
    // }) as TdButton;
    this.previewBtn = new TdButton({
      svgObj: new TdAttachmentSvg(),
      loading: true,
      title: '预览',
    });
    this.saveBtn = new TdButton({
      svgObj: new TdDeleteSvg(),
      loading: true,
      title: '保存',
      type: 'primary',
    });
    // this.previewBtn = new PreviewButton(this);
    // this.saveBtn = new SaveButton(this);
    this.addChildren(this.previewBtn, this.saveBtn);
  }

  get formBuilder(): FormBuilder {
    return this.parent.formBuilder;
  }

  initEvents(): void {
    this.events.push(
      fromEvent(this.previewBtn.dom, 'click').subscribe(() => {
        this.formBuilder.mode.setSelectedControl(null);
        this.formBuilder.dialog.show();
        this.formBuilder.dialog.setTitle('预览');
        this.previewForm();
        console.log(
          'this.formBuilder.exampleData is ',
          this.formBuilder.formData
        );
      }),
      fromEvent(this.saveBtn.dom, 'click').subscribe(() => {
        // FormDesigner.messageBox.show();
        // // FormDesigner.messageBox.setTitle('提醒');
        this.formBuilder.messageBox.confirm('提醒', '你确定要保存表单吗？');
        // this.formBuilder.dialog.preview(this.formBuilder.page);
        // console.log('this.formBuilder.form json is ', toJSON(this.formBuilder.page));
      })
    );
  }

  /**
   * 预览表单
   */
  previewForm(): void {
    console.log('preview form . ');
    // this.formBuilder.dialog.container.body.clearChildrenDom();
    // this.formBuilder.dialog.container.body.clearChildNodes();
    this.formBuilder.dialog.container.body.clearChildren();
    const document = toJSON(this.formBuilder.webDocument) as IWebDocument;
    console.log('document is ', document);
    const docObj = new WebDocument(this.formBuilder.layout.body.content);
    docObj.createInstance(document);
    docObj.setParent(this.formBuilder.dialog.container.body);
    this.formBuilder.dialog.container.body.appendChild(docObj);
    // this.container.body.dom.appendChild(element.dom);
    // this.formBuilder.dialog.container.body.dom.appendChild(docObj.dom);
    // this.formBuilder.dialog.container.body.dom.childNodes.forEach(node => node.remove());
    // this.formBuilder.dialog.container.body.dom.appendChild(this.formBuilder.webDocument.dom.cloneNode(true));
  }
}
