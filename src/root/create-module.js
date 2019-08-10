import set from "lodash.set";

export const createModule = (ns, createState, createContainer, createSaga) => ({
  namespace: ns,
  state: set({}, ns, createState()),
  Container: createContainer ? createContainer(ns) : undefined,
  saga: createSaga ? createSaga(ns) : undefined,
});
