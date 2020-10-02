import React, { createContext, useState, useCallback } from "react";
import AlertBox from "../components/Alert";

export const AlertContext = createContext(null);

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    show: false,
  });

  const removeAlert = () => setAlert({ show: false });

  const addAlert = (message, type) => {
    setAlert({ show: true, message, type });
    setTimeout(() => setAlert({ show: false }), 300000);
  };

  const alertContextValue = {
    alert,
    addAlert: useCallback((message, type) => addAlert(message, type), []),
    removeAlert: useCallback(() => removeAlert(), []),
  };

  return (
    <AlertContext.Provider value={alertContextValue}>
      {children}
      {alert.show ? <AlertBox alert={alert} removeAlert={removeAlert} /> : null}
    </AlertContext.Provider>
  );
};
