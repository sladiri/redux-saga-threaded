import { spawn, call } from "redux-saga/effects";

export function* spawnDomain(ns, saga, ...args) {
  yield spawn(function* domain() {
    try {
      console.log(`[${ns}] spawnDomain start domain`);
      yield call(saga, ns, ...args);
    } catch (error) {
      console.error(`[${ns}] spawnDomain error`, error);
    }
  });
}
