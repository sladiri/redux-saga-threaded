import { appModule as createAppModule } from "../app/app-module";
import { mergeRootStates } from "./merge-root-states";

// A flat list of modules, nesting would be interesting feature

export const rootNamespace = "root";

export const rootModules = [
  createAppModule(`${rootNamespace}.app1`),
  createAppModule(`${rootNamespace}.app2`),
];

export const createRootState = () => mergeRootStates(rootModules);
