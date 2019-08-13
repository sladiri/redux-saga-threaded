import { wrap } from "comlink";

export const createRemoteStore = async () => {
  console.log("starting remote model worker ...");
  const remoteStore = wrap(
    new Worker("./root-store.expose.js", { type: "module" }),
  );
  return remoteStore;
};
