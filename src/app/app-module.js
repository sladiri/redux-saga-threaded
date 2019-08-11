import { createModule } from "../module/create-module";
import { createInitialState } from "./model/create-inital-state";
import { updateState } from "./model/update-state";
import { createContainer } from "./ui/create-container";
import { appSaga } from "./model/saga";

// webpack throws error if variable name is 'module'
export const appModule = createModule(
  createInitialState,
  updateState,
  createContainer,
  appSaga,
);
