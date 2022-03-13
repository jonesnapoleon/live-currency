import React from "react";
import { CurrencyProvider } from "./context/CurrencyContext";
import { PriceProvider } from "./context/PriceContext";
import { AlertProvider } from "./context/AlertContext";
import Landing from "./pages/Landing";
import LargeScreen from "./pages/LargeScreen";
import { useWidth } from "./utils/hooks";
import "./App.css";

const App = () => {
  const { isMobile } = useWidth();

  return (
    <AlertProvider>
      <PriceProvider>
        <CurrencyProvider>
          {isMobile ? <Landing /> : <LargeScreen />}
        </CurrencyProvider>
      </PriceProvider>
    </AlertProvider>
  );
};

export default App;
