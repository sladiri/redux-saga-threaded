import { ACTION_ASYNC } from "./types";

export const actionAsync = (ns, notifyPromises) => (payload, notify) => {
  const corrId = Math.random();
  if (notifyPromises instanceof Set && typeof notify === "function") {
    notify(
      new Promise((resolve, reject) => {
        notifyPromises.set(corrId, [resolve, reject]);
      }),
    );
  }
  return {
    type: ACTION_ASYNC(ns),
    payload,
    corrId,
  };
};
