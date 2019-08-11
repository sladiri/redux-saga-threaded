import { spawn, call } from "redux-saga/effects";

export function* spawnErrorDomain(ns, domainSaga, ...domainArgs) {
  yield spawn(function* domain() {
    try {
      console.log(`[${ns}] spawnErrorDomain starting domain saga ...`);
      yield call(domainSaga(ns), ...domainArgs);
    } catch (error) {
      console.error(`[${ns}] spawnErrorDomain error`, error);
      // TODO: error handling strategy
    }
  });
}
