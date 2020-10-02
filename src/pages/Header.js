import React, { useContext } from "react";
import { PriceContext } from "../context/PriceContext";
import Forminput from "../components/Forminput";
import Select from "../components/Select";
import { getCountry } from "../utils";

const htmlText = {
  writePrice: "Enter value",
};

export default ({ currencyKeys }) => {
  const { price, chosenCurrency } = useContext(PriceContext);

  return (
    <div id="header">
      <h5>{getCountry(chosenCurrency.value)}</h5>
      <div className="row space-between mt-2">
        <section style={{ flex: 1 }}>
          <Select data={chosenCurrency} optionList={currencyKeys} />
        </section>
        <section style={{ flex: 2 }}>
          <Forminput
            label={htmlText.writePrice}
            extraClassName="text-right align-right"
            data={price}
          />
        </section>
      </div>
    </div>
  );
};
