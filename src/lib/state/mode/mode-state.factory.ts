import { DesignState } from './design-state';
import { FillState } from './fill-state';
import { ReadonlyState } from './readonly-state';
import { ModeStateAbstract } from './mode-state.abstract';
import { FormBuilder } from '../../form-builder';

/**
 * 状态 简单工厂
 * @param mode
 */
export function createModeState(
  parent: FormBuilder,
  mode: 'design' | 'fill' | 'readonly' = 'design'
): ModeStateAbstract {
  switch (mode) {
    case 'design':
      return new DesignState(parent);
    case 'fill':
      return new FillState(parent);
    case 'readonly':
      return new ReadonlyState(parent);
    default:
      throw Error('there is not this mode . ');
  }
}
