export const isPriceValid = (string) => {
  const text = string.trim();
  const range = ["0".charCodeAt(0), "9".charCodeAt(0)];
  for (let i = 0; i < text.length; i++) {
    const dec = text.charCodeAt(i);
    if (dec < range[0] || dec > range[1]) {
      return false;
    }
  }
  return true && parseInt(text) >= 0;
};
