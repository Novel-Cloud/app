export const xssFilter = (str: string, level = 0) => {
  switch (level) {
    case 0:
      return str.replace(/[<>"'%();&+\-\\/]/g, "");
    case 1:
      return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    default:
      return str;
  }
};
