import { DesignState } from './design-state';
import { FillState } from './fill-state';
import { ReadonlyState } from './readonly-state';
import { ModeStateAbstract } from './mode-state.abstract';
/**
 * 状态 简单工厂
 * @param mode
 */
export function createModeState(mode: 'design' | 'fill' | 'readonly'): ModeStateAbstract {
  switch (mode) {
    case 'design':
      return new DesignState();
    case 'fill':
      return new FillState();
    case 'readonly':
      return new ReadonlyState();
    default:
      throw Error('there is not this mode . ');

  }
}
