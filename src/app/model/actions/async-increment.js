import { actionAsync } from "../../../root/model/actions/action-async";
import { delayP } from "../../../helper/delay-p";

export const asyncIncrement = (ns, notifyPromises) => (delay = 0, notify) =>
  actionAsync(ns, notifyPromises)(delayP({ increment: true }, delay), notify);
