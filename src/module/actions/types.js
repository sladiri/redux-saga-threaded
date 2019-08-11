// events
export const ACTION_EVENT = (ns, postfix) =>
  `${ns}.ACTION_EVENT${postfix ? `_${postfix}` : ""}`;
export const ACTION_ASYNC_EVENT = (ns, postfix) =>
  `${ns}.ACTION_ASYNC_EVENT${postfix ? `_${postfix}` : ""}`; // WIP
export const STATE_UPDATED_EVENT = (ns) => `${ns}.STATE_UPDATED_EVENT`;

// commands
export const UPDATE_CONTEXT_COMMAND = (ns) => `${ns}.UPDATE_CONTEXT_COMMAND`;
