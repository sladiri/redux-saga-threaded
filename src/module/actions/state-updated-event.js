import { STATE_UPDATED_EVENT } from "./types";

export const stateUpdatedEvent = (ns) => (payload) => ({
  type: STATE_UPDATED_EVENT(ns),
  payload,
});
