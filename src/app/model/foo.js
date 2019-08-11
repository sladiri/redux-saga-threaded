import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware({
  context: { notifyPromises: new Map() },
});

export class Foo {
  hey() {
    console.log("hey from worker", sagaMiddleware);
  }
}
