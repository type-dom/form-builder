import { TypeDiv } from '../../../../../type-dom/type-element/type-html/div/div.abstract';
import { Display } from '../../../../../type-dom/web-style.enum';
import { HeaderWrapper } from '../header';
import { PreviewButton } from './preiew-button/preview-button';
// import { SaveButton } from './save-button/save-button';

export class Navbar extends TypeDiv {
  className: 'Navbar';
  private readonly previewBtn: PreviewButton;
  // private readonly saveBtn: SaveButton;

  constructor(public parent: HeaderWrapper) {
    super();
    this.className = 'Navbar';
    this.propObj = {
      styleObj: {
        display: Display.flex,
        // justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '60px',
        background: 'linear-gradient(0deg, #eee, #e9e9e9)',
      },
      attrObj: {
        name: 'navbar'
      }
    };
    this.previewBtn = this.createItem(this, {
      TypeClass: PreviewButton,
    }) as PreviewButton;
    // this.previewBtn = new PreviewButton(this);
    // this.saveBtn = new SaveButton(this);
    this.childNodes.push(this.previewBtn);
  }
}
