import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";
import { proxy } from "comlink";

import { createRemoteStore } from "./remote-model/create-remote-store";
import { createRoot } from "./root/ui/view";

import { createStore, applyMiddleware } from "redux";
import { reducer } from "./root/ui/reducer";
import { createRootState } from "./root/create-root-modules";

createRemoteStore()
  .then(async (remoteSaga) => {
    const marker = Symbol();
    await remoteSaga.setCallback(
      proxy((event) => {
        event[marker] = true;
        store.dispatch(event);
      }),
    );

    const customMiddleWare = (store) => (next) => (action) => {
      next(action);
      if (!action[marker]) {
        remoteSaga.dispatch(action);
      }
    };

    const store = createStore(
      reducer(createRootState()),
      applyMiddleware(customMiddleWare),
    );

    const Root = createRoot(store);
    ReactDOM.render(<Root />, document.getElementById("app"));
  })
  .catch((error) => {
    console.error("could not connect to remote model", error);
  });
