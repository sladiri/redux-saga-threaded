import { getInPath } from "../_helper/get-in-path";
import { produceWithDeepFreeze } from "../_helper/produce-immutable-with-deepfreeze";

export const createNextState = (
  ns,
  tick,
  updateState,
  moduleState,
  message,
  context,
) => async () => {
  let changes;
  let inverseChanges;
  const nextState = await produceWithDeepFreeze(
    moduleState,
    async (draft) => {
      const { meta, data: state } = getInPath(ns, draft);
      await updateState(state, message, context);
      meta.tick = tick;
    },
    (_changes, _inverseChanges) => {
      changes = _changes;
      inverseChanges = _inverseChanges;
    },
  );
  return [changes, inverseChanges, nextState];
};
