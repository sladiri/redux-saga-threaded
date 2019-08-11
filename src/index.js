import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { reducer } from "./root/ui/reducer";
import { rootModules, createRootState } from "./root/create-root-modules";
import { runRemoteModel } from "./remote-model/run-remote-model";

const store = createStore(reducer(createRootState()));

runRemoteModel().catch((error) => {
  console.error("remote model error", error);
});

const Main = () => (
  <Provider store={store}>
    {rootModules.map((m, i) => (
      <m.Container key={i} />
    ))}
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById("app"));
