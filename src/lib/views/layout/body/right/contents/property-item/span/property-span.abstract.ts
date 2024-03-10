import { StyleDisplay, Label, Span, TextNode } from '@type-dom/framework';
import { TdButton } from '@type-dom/ui';
import { PropertyItem } from '../property-item.abstract';

export abstract class PropertySpan extends PropertyItem {
  private readonly text: TextNode;
  childNodes: [Label, Span, TdButton];
  content: Span;

  protected constructor(labelText = '控件名称') {
    super(labelText);
    this.content = new Span({ parent: this });
    this.content.propObj = {
      styleObj: {
        height: '32px',
        lineHeight: '32px',
        paddingLeft: '43px',
        paddingRight: '43px',
        textAlign: 'center',
        backgroundColor: '#FFF',
        backgroundImage: 'none',
        borderRadius: '4px',
        border: '1px solid #DCDFE6',
        // -webkit-box-sizing: border-box;
        boxSizing: 'border-box',
        color: '#606266',
        display: StyleDisplay.inlineBlock,
        outline: '0',
        padding: '0 15px',
        // -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        transition: 'border-color .2s cubic-bezier(.645,.045,.355,1)',
        width: 'calc(100% - 100px)',
      },
      attrObj: {
        name: 'property-span',
      },
    };
    this.text = new TextNode('显示');
    this.content.addChild(this.text);

    this.button.setStyleObj({
      // position: 'absolute',
      // right: '10px',
      padding: '8px 3px 4px',
      fontSize: '16px',
      display: 'none',
      border: '1px solid #DCDFE6',
      borderRadius: '0 4px 4px 0',
    });
    this.button.textNode.setText('');
    this.childNodes = [this.label, this.content, this.button];
  }

  resetText(value = ''): void {
    this.text.setText(value);
  }
}
