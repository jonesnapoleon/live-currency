import React, { createContext, useContext, useEffect } from "react";
import { useLocalStorage, useFetch } from "../utils/hooks";
import { AlertContext } from "../context/AlertContext";
import { COUNTRY } from "../utils/constant";
export const CurrencyContext = createContext({});

export const CurrencyProvider = ({ children }) => {
  const [rates, setRates] = useLocalStorage("rates", {});
  const [listedCurrency, setListedCurrency] = useLocalStorage(
    "listedCurrency",
    Object.keys(COUNTRY)
  );

  const response = useFetch(Object.keys(rates)?.length === 0);
  const { addAlert } = useContext(AlertContext);

  useEffect(() => {
    if (response.error) addAlert(String(response?.error), "error");
    else {
      if (response.data) setRates(response?.data?.rates);
    }
  }, [addAlert, rates, response, setRates]);

  return (
    <CurrencyContext.Provider
      value={{ rates, listedCurrency, setListedCurrency }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
