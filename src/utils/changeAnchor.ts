export const changeAnchor = (anchor: string, classes: {}) => {
  switch (anchor) {
    case "left":
      return "left";
    case "right":
      return "right";
    default:
      return "left";
  }
};
