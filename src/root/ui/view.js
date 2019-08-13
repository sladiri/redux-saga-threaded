import React from "react";
import { Provider } from "react-redux";
import { rootModules } from "../create-root-modules";

export const createRoot = (store) => () => (
  <Provider store={store}>
    {rootModules.map((m, i) => (
      <m.Container key={i} />
    ))}
  </Provider>
);
