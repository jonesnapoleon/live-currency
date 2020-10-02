import React, { createContext, useContext, useEffect } from "react";
import { useLocalStorage, useFetch } from "../utils/hooks";
import { AlertContext } from "../context/AlertContext";
export const CurrencyContext = createContext({});

export const CurrencyProvider = ({ children }) => {
  const [rates, setRates] = useLocalStorage("rates", {});
  const response = useFetch();
  const alert = useContext(AlertContext);

  useEffect(() => {
    console.log(response);
  }, [response]);

  response.error && alert.addAlert(String(response.error), "error");
  response.data && setRates(JSON.stringify(response.data));

  return (
    <CurrencyContext.Provider value={rates}>
      {children}
    </CurrencyContext.Provider>
  );
};
