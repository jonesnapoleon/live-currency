import React, { useContext, useMemo } from "react";
import Header from "./Header";
import AllCards from "./AllCards";
import AddForm from "./AddForm";
import { CurrencyContext } from "../context/CurrencyContext";
import { getKeys } from "../utils";
import "./pages.css";

export default () => {
  const currencyData = useContext(CurrencyContext);
  const currencyKeys = useMemo(() => getKeys(currencyData?.rates), [
    currencyData,
  ]);

  return (
    <div id="full-page">
      <Header currencyKeys={currencyKeys} />
      <AllCards />
      <AddForm currencyKeys={currencyKeys} />
    </div>
  );
};
