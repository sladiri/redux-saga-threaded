import { createUiModule } from "../module/create-ui-module";
import { createInitialState } from "./model/create-inital-state";
import { createContainer } from "./ui/create-container";

// TODO: bug? webpack throws error if variable name is 'module'
export const appModule = createUiModule(createInitialState, createContainer);
