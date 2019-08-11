import {
  actionChannel,
  take,
  select,
  put,
  call,
  getContext,
  setContext,
} from "redux-saga/effects";
import { getInPath } from "../../../helper/get-in-path";
import { createNewState } from "../../../helper/create-new-state";
import { DATA, UPDATE_CONTEXT_COMMAND } from "../module/actions/types";

export function* updateStateQueue(ns, updateState, actionSelector) {
  console.log(`[${ns}] updateStateQueue start`);
  const events = yield actionChannel(actionSelector);
  // make sure, actions are not interleaved accidentally (by circumventing the queue)
  let tick = 0;
  try {
    while (true) {
      const event = yield take(events);
      const { type, payload, corrId } = event;
      if (type === UPDATE_CONTEXT_COMMAND(ns)) {
        // setContext is not shared across forked sagas, so must do it here
        yield setContext({ [ns]: payload });
        continue;
      }
      const context = yield getContext(ns);
      const rootState = yield select();
      const stateTick = getInPath(`${ns}.meta.tick`, rootState);
      console.assert(
        stateTick === undefined || stateTick === tick,
        "updateState queue got invalid order of state updates",
      );
      tick += 1;
      const [changes] = yield call(
        createNewState(ns, tick, updateState, rootState, payload, context),
      );
      yield put({ type: DATA(ns), payload: changes, corrId });
    }
  } finally {
    events.close();
  }
}
