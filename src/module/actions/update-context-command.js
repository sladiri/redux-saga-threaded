import { UPDATE_CONTEXT_COMMAND } from "./types";

export const updateContextCommand = (ns) => (payload) => ({
  type: UPDATE_CONTEXT_COMMAND(ns),
  payload,
});
