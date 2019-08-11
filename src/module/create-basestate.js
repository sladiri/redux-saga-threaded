export const createBaseState = (data, meta = {}) => ({
  meta: { ...meta, updateIsPending: false },
  data,
});
