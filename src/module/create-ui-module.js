import set from "lodash.set";

export const createUiModule = (createInitialState, createContainer) => (ns) => {
  return {
    namespace: ns,
    state: set({}, ns, createInitialState()),
    Container: createContainer ? createContainer(ns) : null,
  };
};
