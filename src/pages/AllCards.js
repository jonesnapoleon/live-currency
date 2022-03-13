import React, { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import Card from "../components/Card";
import { PriceContext } from "../context/PriceContext";

export default () => {
  const { listedCurrency } = useContext(CurrencyContext);
  const { chosenCurrency } = useContext(PriceContext);

  return (
    <>
      {listedCurrency
        .filter((currency) => currency !== chosenCurrency.value)
        .map((currency) => (
          <Card key={currency} currency={currency} />
        ))}
    </>
  );
};
