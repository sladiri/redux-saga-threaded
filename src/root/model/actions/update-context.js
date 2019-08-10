import { UPDATE_CONTEXT } from "./types";

export const updateContext = (ns) => (payload) => ({
  type: UPDATE_CONTEXT(ns),
  payload,
});
