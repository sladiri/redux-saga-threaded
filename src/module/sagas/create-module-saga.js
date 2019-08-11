import { fork } from "redux-saga/effects";
import { ACTION_EVENT, UPDATE_CONTEXT_COMMAND } from "../actions/types";
import { actionEventsQueue } from "./action-events-queue";

export const createModuleSaga = (
  childNs,
  updateState,
  saga,
  provideBackgroundTasks = true,
  provideViewNotifications = true,
) => (ns) =>
  function* moduleSaga() {
    const actionType = ACTION_EVENT(childNs);
    yield fork(
      actionEventsQueue,
      childNs,
      [
        ({ type }) => type.startsWith(actionType),
        UPDATE_CONTEXT_COMMAND(childNs),
      ],
      updateState,
    );
    if (provideViewNotifications) {
      //   yield takeEvery(NOTIFY_VIEW, sagaNotifyView);
    }
    if (provideBackgroundTasks) {
      //   yield takeLatest(ENQUEUE_BG, sagaBg);
    }
    if (saga) {
      yield fork(saga, childNs);
    }
    console.log(`[${ns}] moduleSaga started`);
  };
