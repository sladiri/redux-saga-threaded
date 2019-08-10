import { all } from "redux-saga/effects";
import { spawnDomain } from "../../../helper/spawn-domain";

const ns = "root";

export function* rootSaga(modules) {
  try {
    const sagas = modules.filter((m) => !!m.saga).map((m) => m.saga);
    yield all(sagas.map((saga) => spawnDomain(ns, saga, ns)));
    console.log(`rootSaga spawned ${sagas.length} domains`);
  } catch (error) {
    console.error(`rootSaga error:`, error && error.message);
  }
}
