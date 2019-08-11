import createSagaMiddleware from "redux-saga";
import { appSaga } from "../app/model/saga";
import { updateState } from "../app/model/update-state";
import { createModuleSaga } from "../module/sagas/create-module-saga";
import { startModules } from "./model/sagas/start-modules";

// TODO connect

export const rootNamespace = "root";

const provideBackgroundTasks = true; // TODO export from module
const provideViewNotifications = true; // TODO export from module

const rootSagas = [
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

const sagaMiddleware = createSagaMiddleware({
  context: { notifyPromises: new Map() },
});

// sagaMiddleware.run(startModules, rootSagas);

export const standAloneReduxSaga = () => {
  console.log("standAloneReduxSaga");
};
