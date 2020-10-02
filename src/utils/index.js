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
  return (data[currencyTarget] / data[currencyBase]).toFixed(2);
};

export const getConvertedPrice = (conversionValue, price) => {
  if (!price.isSubmittable) return "-";
  return (parseInt(price.value) * conversionValue).toFixed(2);
};

export const formatMoney = (string) => {
  const text = String(string.trim()).split(".");
  console.log(text);
  let tempNumber = "";
  for (let i = text[0].length - 1; i >= 0; i++) {
    tempNumber += text[0][i];
    if (tempNumber.length === 3) tempNumber += ",";
  }
  console.log(tempNumber);
  return tempNumber.reverse() + text[1];
};
