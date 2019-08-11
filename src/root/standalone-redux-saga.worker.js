import { expose } from "comlink";
import { standAloneReduxSaga } from "./standalone-redux-saga";

expose(standAloneReduxSaga);
