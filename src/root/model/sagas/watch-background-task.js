/** WIP */

// function* sagaEnqueueBg(action) {
//   console.log("LOGGER: start BG : action", action);
//   const { viewId, promise, corrId } = action;
//   let result;
//   try {
//     result = yield call(() => promise);
//     const newAction = { ...enqueue(result), viewId, corrId };
//     yield put(newAction);
//     const processed = yield take(PROCESS_DONE);
//     if (viewId !== processed.viewId) {
//       // should never happen but better check
//       console.error(
//         "sagaEnqueueBg got viewId mismatch, action+processed:",
//         newAction,
//         processed,
//       );
//       throw new Error("sagaEnqueueBg got viewId mismatch");
//     }
//     yield put(bgDone(corrId));
//   } catch (error) {
//     console.error("sagaEnqueueBg error:", error.message);
//     yield put(bgDone(corrId, false, true));
//   } finally {
//     if (yield cancelled()) {
//       console.log("LOGGER: cancelled BG : action", action);
//       yield put(bgDone(corrId, true));
//       yield put(notifyView(viewId, true));
//     }
//   }
// }

// function* sagaBg(action) {
//   const watcher = yield fork(sagaEnqueueBg, action);
//   yield take(CANCEL_BG);
//   yield cancel(watcher);
// }

// function sagaNotifyView(action) {
//   const { viewId, cancelled } = action;
//   if (!viewNotifyPromises.has(viewId)) {
//     return;
//   }
//   const [resolve, reject] = viewNotifyPromises.get(viewId);
//   viewNotifyPromises.delete(viewId);
//   if (cancelled) {
//     reject(new Error("Action was cancelled"));
//   }
//   if (!cancelled) {
//     resolve();
//   }
// }
