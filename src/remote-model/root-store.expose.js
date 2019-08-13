import { expose } from "comlink";
import { standaloneSaga } from "../root/create-standalone-redux-saga";

expose(standaloneSaga);
