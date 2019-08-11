import merge from "lodash.merge";
import { produceWithDeepFreeze } from "../_helper/produce-immutable-with-deepfreeze";

export const mergeRootStates = (modules) =>
  produceWithDeepFreeze({}, (draft) =>
    modules.reduce((acc, module) => merge(acc, module.state), draft),
  );
