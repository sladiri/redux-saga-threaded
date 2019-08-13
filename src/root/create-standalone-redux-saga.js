import { runSaga, stdChannel } from "redux-saga";
import { call } from "redux-saga/effects";

import { createRootState } from "./create-root-modules";
import { rootSagas } from "./create-root-sagas";
import { startModules } from "../root/model/sagas/start-modules";
import { reducer as createReducer } from "../root/ui/reducer";

let state = createRootState();
const reducer = createReducer(state);

const channel = stdChannel();

let callback;
export const standaloneSaga = {
  channel,
  dispatch(output) {
    channel.put(output);
    if (callback && output.type.endsWith("STATE_UPDATED_EVENT")) {
      callback(output);
      state = reducer(state, output);
    }
  },
  getState: () => state,
  setCallback: (fn) => {
    callback = fn;
  },
};

// const sagaMiddleware = createSagaMiddleware({
//   context: { notifyPromises: new Map() },
// });

runSaga(standaloneSaga, function*() {
  yield call(startModules, rootSagas);
});
