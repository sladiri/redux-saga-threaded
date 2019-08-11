import {
  actionChannel,
  take,
  select,
  put,
  call,
  getContext,
  setContext,
} from "redux-saga/effects";
import { getInPath } from "../../_helper/get-in-path";
import { UPDATE_CONTEXT_COMMAND } from "../actions/types";
import { stateUpdatedEvent as createStateUpdatedEvent } from "../actions/state-updated-event";
import { createNextState } from "../create-next-state";

export function* actionEventsQueue(ns, actionSelector, updateState) {
  console.log(`[${ns}] actionEventsQueue start`);
  const stateUpdatedEvent = createStateUpdatedEvent(ns);
  const events = yield actionChannel(actionSelector);
  // make sure, actions are not interleaved accidentally (by circumventing the queue)
  let tick = 0;
  try {
    while (true) {
      const event = yield take(events);
      const { type, payload } = event;
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
        `[${ns}] actionEventsQueue got invalid order of state updates`,
      );
      tick += 1;
      const [changes] = yield call(
        createNextState(ns, tick, updateState, rootState, payload, context),
      );
      yield put(stateUpdatedEvent(changes));
    }
  } finally {
    events.close();
    console.log(`[${ns}] actionEventsQueue closed`);
  }
}
