import { actionEvent } from "./actions/action-event";

export const createAction = (getData, postfix /* optional */) => (
  ns,
  notifyPromises,
) => actionEvent(ns, postfix, notifyPromises, getData);
