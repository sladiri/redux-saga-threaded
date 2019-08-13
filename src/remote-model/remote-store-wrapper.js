import { proxy } from "comlink";

export const remoteStoreWrapper = async (remoteStore) => {
  const subscribers = new Set();
  let latestState = await remoteStore.getState();

  remoteStore.subscribe(
    proxy(async () => {
      latestState = await remoteStore.getState();
      subscribers.forEach((f) => f());
    }),
  );

  return {
    dispatch: (action) => {
      return remoteStore.dispatch(action);
    },
    getState: () => latestState,
    subscribe: (listener) => {
      subscribers.add(listener);
      return () => subscribers.delete(listener);
    },
  };
};
