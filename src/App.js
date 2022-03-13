import React, { useEffect } from "react";
import { CurrencyProvider } from "./context/CurrencyContext";
import { PriceProvider } from "./context/PriceContext";
import { AlertProvider } from "./context/AlertContext";
import Landing from "./pages/Landing";
import LargeScreen from "./pages/LargeScreen";
import { useWidth } from "./utils/hooks";
import ReactGA from "react-ga";
import "./App.css";

const App = () => {
  const { isMobile } = useWidth();
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID, {
      debug: true,
      titleCase: true,
    });
  });

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
