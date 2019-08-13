import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { startModules } from "./model/sagas/start-modules";
import { reducer } from "./ui/reducer";
import { createRootState } from "./create-root-modules";
import { rootSagas } from "./create-root-sagas";

const sagaMiddleware = createSagaMiddleware({
  context: { notifyPromises: new Map() },
});

export const store = createStore(
  reducer(createRootState()),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(startModules, rootSagas);
