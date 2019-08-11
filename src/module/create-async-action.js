import { action } from "./actions/action-event";

export const createAction = (getData, postfix) => (ns, notifyPromises) =>
  action(ns, postfix, notifyPromises, getData, true);
