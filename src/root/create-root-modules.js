import { createModule } from "./create-module";
import { mergeRootStates } from "./merge-root-states";
import { createState as createAppState } from "../app/model/state";
import { createSaga as createAppSaga } from "../app/model/saga";
import { createContainer as createAppContainer } from "../app/ui/container";

// A flat list of modules, nesting would be interesting feature

export const rootNamespace = "root";

export const rootModules = [
  createModule(
    `${rootNamespace}.app1`,
    createAppState,
    createAppContainer,
    createAppSaga,
  ),
  createModule(
    `${rootNamespace}.app2`,
    createAppState,
    createAppContainer,
    createAppSaga,
  ),
];

export const createRootState = () => mergeRootStates(rootModules);
