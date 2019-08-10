/** WIP */

// function* sagaSwitchComponent(saga, id) {
//   let watcher = yield fork(saga);

//   const actionQueue = yield actionChannel(SWITCH);
//   try {
//     while (true) {
//       const action = yield take(actionQueue);
//       const { id: newId } = action;
//       if (newId === id) {
//         if (!watcher) {
//           yield put(data(createInitialState().data));
//           yield put(pending(false));
//           watcher = yield fork(saga);
//         }
//         continue;
//       }
//       if (newId !== id) {
//         if (watcher) {
//           yield cancel(watcher);
//           watcher = null;
//           viewNotifyPromises.clear();
//         }
//         continue;
//       }
//     }
//   } catch (error) {
//     console.error("sagaSwitchComponent error:", error && error.message);
//   } finally {
//     actionQueue.close();
//     viewNotifyPromises.clear();
//     yield cancel(watcher);
//   }
// }
