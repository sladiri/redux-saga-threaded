import set from "lodash.set";
import { createModuleSaga } from "./sagas/create-module-saga";

export const createModule = (
  createInitialState,
  updateState,
  createContainer,
  moduleSaga,
  provideBackgroundTasks,
  provideViewNotifications,
) => (ns) => {
  const saga = createModuleSaga(
    ns,
    updateState,
    moduleSaga,
    provideBackgroundTasks,
    provideViewNotifications,
  );
  return {
    namespace: ns,
    state: set({}, ns, createInitialState()),
    saga,
    Container: createContainer ? createContainer(ns) : null,
  };
};
