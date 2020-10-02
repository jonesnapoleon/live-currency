import React, { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import Card from "../components/Card";

export default () => {
  const { listedCurrency } = useContext(CurrencyContext);

  return (
    <>
      {listedCurrency.map((currency) => (
        <Card key={currency} currency={currency} />
      ))}
    </>
  );
};
