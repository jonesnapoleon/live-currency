import React, { useCallback, createContext } from "react";
import { useValidationFormInput } from "../utils/hooks";
import { isPriceValid } from "../utils/index";

export const PriceContext = createContext({});

const htmlText = {
  priceErrorMessage: "Value should be above 0",
};

export const PriceProvider = ({ children }) => {
  const priceValidation = [
    {
      check: useCallback(isPriceValid, []),
      message: htmlText.priceErrorMessage,
    },
  ];
  const price = useValidationFormInput("", priceValidation);

  return (
    <PriceContext.Provider value={price}>{children}</PriceContext.Provider>
  );
};
