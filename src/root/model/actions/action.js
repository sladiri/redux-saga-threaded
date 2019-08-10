import { ACTION } from "./types";

export const action = (ns, notifyPromises) => (payload, notify) => {
  const corrId = Math.random();
  if (notifyPromises instanceof Set && typeof notify === "function") {
    notify(
      new Promise((resolve, reject) => {
        notifyPromises.set(corrId, [resolve, reject]);
      }),
    );
  }
  return {
    type: ACTION(ns),
    payload,
    corrId,
  };
};
