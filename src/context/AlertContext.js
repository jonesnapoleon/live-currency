import React, { createContext, useState, useCallback } from "react";
import AlertBox from "../components/Alert";

export const AlertContext = createContext(null);

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    show: false,
  });

  const removeAlert = useCallback(() => setAlert({ show: false }), []);

  const addAlert = useCallback((message, type) => {
    setAlert({ show: true, message, type });
    setTimeout(() => setAlert({ show: false }), 3000);
  }, []);

  const alertContextValue = {
    alert,
    addAlert: (message, type) => addAlert(message, type),
    removeAlert: removeAlert,
  };

  return (
    <AlertContext.Provider value={alertContextValue}>
      {children}
      {alert.show ? <AlertBox alert={alert} removeAlert={removeAlert} /> : null}
    </AlertContext.Provider>
  );
};
