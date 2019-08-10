import { fork } from "redux-saga/effects";
import { ACTION, UPDATE_CONTEXT } from "../../root/model/actions/types";
import { updateStateQueue } from "../../root/model/sagas/update-state-queue";
import { updateState } from "./update-state";

export const createSaga = (ns) =>
  function* appSaga() {
    yield fork(updateStateQueue, ns, updateState, [
      ACTION(ns),
      UPDATE_CONTEXT(ns),
    ]);
    //   yield takeLatest(ENQUEUE_BG, sagaBg);
    //   yield takeEvery(NOTIFY_VIEW, sagaNotifyView);
  };
