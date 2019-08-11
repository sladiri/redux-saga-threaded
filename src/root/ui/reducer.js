import { applyPatches } from "immer";
import { STATE_UPDATED_EVENT } from "../model/actions/types";

export const reducer = (initialState) => (state = initialState, action) => {
  const { type, payload } = action;

  if (type.endsWith(STATE_UPDATED_EVENT(""))) {
    return applyPatches(state, payload);
  }

  return state;
};
