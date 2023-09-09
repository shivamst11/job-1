export const renderIf = (condition, component) => {
  if (condition) {
    return component;
  }
  return null;
};
