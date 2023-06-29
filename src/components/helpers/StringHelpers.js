export const limitString = (string, limit) => {
  const countString = string.length;
  if (countString > limit) {
    return string.substring(0, limit) + "...";
  }
  return string;
};

export const toUpperCase = (string) => {
  const upper = string;
  const newUpperCase = upper.substring(0, 1).toUpperCase() + upper.slice(1);
  return newUpperCase;
};
