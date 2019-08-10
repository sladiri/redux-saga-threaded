// lodash.get breaks immer.js Proxy
export const getInPath = (path, object) => {
  if (object === undefined) {
    return;
  }
  if (!path) {
    return object;
  }
  const segments = path.split(".");
  if (segments.length === 0) {
    return object;
  }
  const subPath = segments.shift();
  const target = object[subPath];
  return getInPath(segments.join("."), target);
};
