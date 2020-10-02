import React, { useContext, useMemo } from "react";
import "./pages.css";
// import Select from "../components/Select";
import Header from "./Header";
import AllCards from "./AllCards";
import AddForm from "./AddForm";
// import { PriceContext } from "../context/PriceContext";
import { CurrencyContext } from "../context/CurrencyContext";
import { useFormInput } from "../utils/hooks";
import { getKeys } from "../utils";

const htmlText = {
  writePrice: "Enter value",
  addNewCurrency: "Add new currency",
};

export default () => {
  // const price = useContext(PriceContext);
  const { rates: currencyData } = useContext(CurrencyContext);
  const currencyKeys = useMemo(() => getKeys(currencyData?.rates), [
    currencyData,
  ]);
  const newCurrency = useFormInput("");

  return (
    <div id="full-page">
      <Header currencyKeys={currencyKeys} />
      <AllCards />
      <AddForm currencyKeys={currencyKeys} />
      {/* <div style={{ marginBottom: "2rem" }}></div> */}
      {/* <Select
        label={htmlText.addNewCurrency}
        optionList={currencyKeys}
        data={newCurrency}
      /> */}
    </div>
  );
};
