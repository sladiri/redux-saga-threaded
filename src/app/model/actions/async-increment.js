import { createAction } from "../../../module/create-action";
import { delayP } from "../../../_helper/delay-p";

export const asyncIncrement = createAction(
  (delay = 0, cb) => [delayP({ increment: true }, delay), cb],
  "INCREMENT_ASYNC",
);
