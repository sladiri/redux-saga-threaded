import { Immer } from "immer";
import deepFreeze from "deep-freeze";
import isPlainObject from "is-plain-obj";

/**
 * freezing and Proxies are slow
 * Immer disables autofreeze automatically, but we need to disable our deep-freeze too.
 */
const isProduction = false;

/**
 * Deep freeze initial state
 * @link https://github.com/immerjs/immer/issues/260#issuecomment-443708874
 */
export const { produce: produceWithDeepFreeze } = new Immer({
  onAssign(state, prop, value) {
    if (isProduction) {
      return;
    }
    if (!isPlainObject(value) && !Array.isArray(value)) {
      return;
    }
    if (!Object.isFrozen(value)) {
      deepFreeze(value);
    }
  },
});
