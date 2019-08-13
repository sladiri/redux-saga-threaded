import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";

import { createRemoteStore } from "./remote-model/create-remote-store";
import { createRoot } from "./root/ui/view";

createRemoteStore()
  .then((store) => {
    const Root = createRoot(store);
    ReactDOM.render(<Root />, document.getElementById("app"));
  })
  .catch((error) => {
    console.error("could not connect to remote model", error);
  });
