import { appSaga } from "../app/model/saga";
import { updateState } from "../app/model/update-state";
import { createModuleSaga } from "../module/sagas/create-module-saga";

export const rootNamespace = "root";

const provideBackgroundTasks = true; // TODO export from module
const provideViewNotifications = true; // TODO export from module

export const rootSagas = [
  createModuleSaga(
    `${rootNamespace}.app1`,
    updateState,
    appSaga,
    provideBackgroundTasks,
    provideViewNotifications,
  ),
  createModuleSaga(
    `${rootNamespace}.app2`,
    updateState,
    appSaga,
    provideBackgroundTasks,
    provideViewNotifications,
  ),
];
