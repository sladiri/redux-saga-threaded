import { take } from "redux-saga/effects";
import { ACTION_EVENT } from "../../module/actions/types";

export function* appSaga(ns) {
  while (true) {
    const action = yield take(({ type }) => type.startsWith(ACTION_EVENT(ns)));
    console.log(`[${ns}] appSaga got action`, action);
  }
}
