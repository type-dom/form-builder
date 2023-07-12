import { IInput, ITextNode, ITypeSpan } from 'type-dom.ts';
export interface ICheckboxOption extends ITypeSpan {
  className: 'CheckboxOption',
  childNodes: [IInput, ITextNode],
}
