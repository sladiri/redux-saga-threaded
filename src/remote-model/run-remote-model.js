import { wrap } from "comlink";

export const runRemoteModel = async () => {
  console.log("starting remote model ...");
  const model = wrap(
    new Worker("../root/standalone-redux-saga.worker.js", { type: "module" }),
  );
  await model();
  console.log("remote model started");
};
