import { all } from "redux-saga/effects";
import { spawnErrorDomain } from "./spawn-error-domain";

const ns = "root";

export function* startModules(moduleSagas) {
  try {
    yield all(moduleSagas.map((saga) => spawnErrorDomain(ns, saga, ns)));
    console.log(`startModules spawned ${moduleSagas.length} error domains`);
  } catch (error) {
    console.error(`startModules error:`, error && error.message);
  }
}
