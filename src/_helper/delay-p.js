export const delayP = (result, delay = 0) =>
  new Promise((resolve) => setTimeout(() => resolve(result), delay));
