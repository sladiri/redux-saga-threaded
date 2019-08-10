import { applyPatches } from "immer";
import { DATA } from "../model/actions/types";

export const reducer = (initialState) => (state = initialState, action) => {
  const { type, payload } = action;
  if (type.endsWith(DATA(""))) {
    return applyPatches(state, payload);
  }
  return state;
};
