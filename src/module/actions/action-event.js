import { ACTION_EVENT, ACTION_ASYNC_EVENT } from "./types";

export const actionEvent = (ns, postfix, notifyPromises, getData, isAsync) => (
  ...args
) => {
  const [payload, cb] = getData(...args);
  const corrId = Math.random();
  if (notifyPromises instanceof Set && typeof cb === "function") {
    cb(
      new Promise((resolve, reject) => {
        notifyPromises.set(corrId, [resolve, reject]);
      }),
    );
  }
  const createType = isAsync ? ACTION_ASYNC_EVENT : ACTION_EVENT;
  return {
    type: createType(ns, postfix),
    corrId,
    payload,
  };
};
