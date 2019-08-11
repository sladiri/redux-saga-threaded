import { createAction } from "../../../module/create-action";

export const increment = createAction(
  (cb) => [{ increment: true }, cb],
  "INCREMENT",
);
