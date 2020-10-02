import React, { useCallback, createContext } from "react";
import { DEFAULT_CURRENCY } from "../utils/constant";
import { useFormInput, useValidationFormInput } from "../utils/hooks";
import { isPriceValid, isMaxMillion } from "../utils/index";

export const PriceContext = createContext({});

const htmlText = {
  priceErrorMessage: "Value invalid",
  maxMillionError: "Value should be less than 7 character",
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
  const price = useValidationFormInput("10.00", priceValidation);

  return (
    <PriceContext.Provider value={{ price, chosenCurrency }}>
      {children}
    </PriceContext.Provider>
  );
};
