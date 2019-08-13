import { wrap } from "comlink";
import { remoteStoreWrapper } from "./remote-store-wrapper";

export const createRemoteStore = async () => {
  console.log("starting remote model worker ...");
  const remoteStore = await wrap(
    new Worker("./root-store.expose.js", { type: "module" }),
  );
  console.log("remote model worker started");
  const store = await remoteStoreWrapper(remoteStore);
  return store;
};
