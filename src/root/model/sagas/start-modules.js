import { all } from "redux-saga/effects";
import { spawnErrorDomain } from "./spawn-error-domain";

const ns = "root";

export function* startModules(modules) {
  try {
    const sagas = modules.filter((m) => !!m.saga).map((m) => m.saga);
    yield all(sagas.map((saga) => spawnErrorDomain(ns, saga, ns)));
    console.log(`startModules spawned ${sagas.length} error domains`);
  } catch (error) {
    console.error(`startModules error:`, error && error.message);
  }
}
