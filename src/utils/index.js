import { COUNTRY } from "./constant";

export const isPriceValid = (string) => {
  const text = String(string.trim());
  const periodCharCode = ".".charCodeAt(0);
  const range = ["0".charCodeAt(0), "9".charCodeAt(0)];

  if (string.includes("-")) return false;

  let count = 0;
  for (let i = 0; i < text.length; i++) {
    const dec = text.charCodeAt(i);
    if (dec === periodCharCode) count++;
    if (dec !== periodCharCode && (dec < range[0] || dec > range[1]))
      return false;
  }
  return parseInt(text) >= 0 && count <= 1;
};

export const isMaxMillion = (string) => string.trim().length < 8;

export const getKeys = (object) => {
  return object ? Object.keys(object) : {};
};

export const getCountry = (string) =>
  string in COUNTRY ? `${string} - ${COUNTRY[string]}` : "International";

export const getConversionValue = (data, currencyTarget, currencyBase) => {
  return data[currencyTarget] / data[currencyBase];
};

export const getConvertedPrice = (conversionValue, price) => {
  if (!price.isSubmittable || price.value === "") return "-";
  return parseInt(price.value) * conversionValue;
};

export const formatMoney = (string) => {
  if (String(string).includes("-")) return string;
  if (String(string) === "") return "0.00";
  const text = String(string).trim().split(".");

  let tempNumber = "";
  for (let i = text[0].length - 1; i >= 0; i--) {
    tempNumber += text[0][i];
    if ((text[0].length - i) % 3 === 0 && i !== 0) tempNumber += ",";
  }
  return (
    tempNumber.split("").reverse().join("") + "." + text[1].substring(0, 4)
  );
};
