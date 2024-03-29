import React, { createContext, useContext, useEffect } from "react";
import { useLocalStorage, useFetch } from "../utils/hooks";
import { AlertContext } from "../context/AlertContext";
export const CurrencyContext = createContext({});

export const CurrencyProvider = ({ children }) => {
  const [rates, setRates] = useLocalStorage("rates", {});
  const [listedCurrency, setListedCurrency] = useLocalStorage(
    "listedCurrency",
    []
  );

  const response = useFetch();
  const alert = useContext(AlertContext);

  useEffect(() => {
    response.error && alert.addAlert(String(response.error), "error");
    if (response.data) {
      response.data.rates[response.data.base] = 1;
      setRates(response.data.rates);
    }
  }, [alert, response, setRates]);

  return (
    <CurrencyContext.Provider
      value={{ rates, listedCurrency, setListedCurrency }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
