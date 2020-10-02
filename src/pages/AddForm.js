import React, { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import { AlertContext } from "../context/AlertContext";
import Select from "../components/Select";
import { useFormInput } from "../utils/hooks";

const htmlText = {
  addCurrency: "Add",
  currencyNotAvailable: "No currency selected",
  currencyAlreadyRetrieved: "Currency listed",
  currencyAdded: "Currency added!",
};

export default ({ currencyKeys }) => {
  const newCurrency = useFormInput("");
  const { addAlert } = useContext(AlertContext);
  const { listedCurrency, setListedCurrency } = useContext(CurrencyContext);

  const handleAddCurrency = () => {
    try {
      if (listedCurrency.includes(newCurrency.value))
        throw new Error(htmlText.currencyAlreadyRetrieved);
      if (currencyKeys.length > 0 && !currencyKeys.includes(newCurrency.value))
        throw new Error(htmlText.currencyNotAvailable);
      setListedCurrency([...listedCurrency, newCurrency.value]);
      addAlert(htmlText.currencyAdded, "success");
    } catch (e) {
      addAlert(e.message, "error");
    }
  };

    <div style={{ padding: "20px" }}>
      <div className="row space-between mt-2">
        <section style={{ flex: 1 }}>
          <Select
            data={newCurrency}
            optionList={currencyKeys}
            defaultValue={"Add more currency"}
          />
        </section>
        <section style={{ flex: 2 }} className="text-right align-right">
          <button
            className="btn btn-primary btn-lg"
            onClick={handleAddCurrency}
          >
            {htmlText.addCurrency}
          </button>
        </section>
      </div>
    </div>
  );
};
