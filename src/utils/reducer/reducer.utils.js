export const createAction = (type, payload = null) => {
  if (payload) {
    return {
      type,
      payload,
    };
  }
  return { type };
};
