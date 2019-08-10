import produce from "immer";
import merge from "lodash.merge";

export const mergeRootStates = (modules) =>
  produce({}, (draft) =>
    modules.reduce((acc, module) => merge(acc, module.state), draft),
  );
