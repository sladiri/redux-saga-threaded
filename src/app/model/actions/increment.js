import { action } from "../../../root/model/actions/action";

export const increment = (ns, notifyPromises) => (notify) =>
  action(ns, notifyPromises)({ increment: true }, notify);
