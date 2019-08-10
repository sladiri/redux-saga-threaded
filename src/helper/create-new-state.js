import produce from "immer";
import { getInPath } from "./get-in-path";

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
  const newState = await produce(
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
