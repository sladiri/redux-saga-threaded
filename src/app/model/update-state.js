export const updateState = async (state, message, context) => {
  if (message.increment) {
    state.count += 1;
  }
};
