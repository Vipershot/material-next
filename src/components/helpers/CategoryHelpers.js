export const colorCategory = (category) => {
  switch (category) {
    case "men's clothing":
      return "secondary";
    case "jewelery":
      return "info";
    case "electronics":
      return "primary";
    case "women's clothing":
      return "error";
    default:
      return "default";
  }
};
