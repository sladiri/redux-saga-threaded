import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { reducer } from "./root/ui/reducer";
import { startModules } from "./root/model/sagas/start-modules";
import { rootModules, createRootState } from "./root/create-root-modules";

const sagaMiddleware = createSagaMiddleware({
  context: { notifyPromises: new Map() },
});

const store = createStore(
  reducer(createRootState()),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(startModules, rootModules);

const Main = () => (
  <Provider store={store}>
    {rootModules.map((m, i) => (
      <m.Container key={i} />
    ))}
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById("app"));
