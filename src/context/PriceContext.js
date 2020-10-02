import React, { useCallback, createContext } from "react";
import { DEFAULT_CURRENCY } from "../utils/constant";
import { useFormInput, useValidationFormInput } from "../utils/hooks";
import { isPriceValid, isMaxMillion } from "../utils/index";

export const PriceContext = createContext({});

const htmlText = {
  priceErrorMessage: "Value invalid",
  maxMillionError: "Value should not be above 10 million",
};

export const PriceProvider = ({ children }) => {
  const chosenCurrency = useFormInput(DEFAULT_CURRENCY);
  const priceValidation = [
    {
      check: useCallback(isPriceValid, []),
      message: htmlText.priceErrorMessage,
    },
    {
      check: useCallback(isMaxMillion, []),
      message: htmlText.maxMillionError,
    },
  ];
  const price = useValidationFormInput("10000", priceValidation);

  return (
    <PriceContext.Provider value={{ price, chosenCurrency }}>
      {children}
    </PriceContext.Provider>
  );
};
