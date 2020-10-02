import { COUNTRY } from "./constant";

export const isPriceValid = (string) => {
  const text = string.trim();
  const periodCharCode = ".".charCodeAt(0);
  const range = ["0".charCodeAt(0), "9".charCodeAt(0)];
  for (let i = 0; i < text.length; i++) {
    const dec = text.charCodeAt(i);
    if (dec !== periodCharCode && (dec < range[0] || dec > range[1])) {
      return false;
    }
  }
  return true && parseInt(text) >= 0;
};

export const isMaxMillion = (string) => string.trim().length < 8;

export const getKeys = (object) => {
  return object ? Object.keys(object) : {};
};

export const getCountry = (string) =>
  string in COUNTRY ? `${string} - ${COUNTRY[string]}` : "International";
