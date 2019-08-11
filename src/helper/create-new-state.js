import { getInPath } from "./get-in-path";
import { produceWithDeepFreeze } from "./produce-immutable-with-deepfreeze";

export const createNewState = (
  ns,
  tick,
  updateState,
  rootState,
  message,
  context,
) => async () => {
  let diff;
  let inverseDiff;
  const newState = await produceWithDeepFreeze(
    rootState,
    async (draft) => {
      const { meta, data } = getInPath(ns, draft);
      meta.tick = tick;
      await updateState(data, message, context);
    },
    (changes, inverseChanges) => {
      diff = changes;
      inverseDiff = inverseChanges;
    },
  );
  return [diff, inverseDiff, newState];
};
