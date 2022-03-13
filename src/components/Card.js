import React, { useMemo, useContext } from "react";
import { PriceContext } from "../context/PriceContext";
import { CurrencyContext } from "../context/CurrencyContext";
import "./forms.css";
import {
  getCountry,
  getConversionValue,
  getConvertedPrice,
  formatMoney,
} from "../utils";

export default ({ currency }) => {
  const { chosenCurrency, price } = useContext(PriceContext);
  const { rates, listedCurrency, setListedCurrency } =
    useContext(CurrencyContext);
  const country = getCountry(currency);
  const conversionValue = useMemo(
    () => getConversionValue(rates, currency, chosenCurrency.value),
    [chosenCurrency, currency, rates]
  );
  const convertedPrice = useMemo(
    () => getConvertedPrice(conversionValue, price),
    [conversionValue, price]
  );

  const handleDelete = () => {
    const listNow = listedCurrency.filter((cur) => cur !== currency);
    setListedCurrency(listNow);
  };

  return (
    <div style={{ padding: "20px", paddingBottom: "10px" }} className="row">
      <section className="col-10">
        <div className="row">
          <h5 className="col-4">{currency}</h5>
          <h5 className="col-8 text-right">{formatMoney(convertedPrice)}</h5>
          <div className="col-12">{country}</div>
          <div className="col-12" style={{ color: "var(--tertiary-color)" }}>
            <em>
              1 {chosenCurrency.value} = {formatMoney(conversionValue)}{" "}
              {currency}
            </em>
          </div>
        </div>
      </section>
      <section className="col-2">
        <button
          type="button"
          className="cross-button remove"
          onClick={handleDelete}
        >
          <span className="close" style={{ color: "var(--primary-color)" }}>
            <i className="fas fa-times"></i>
          </span>
        </button>
      </section>
    </div>
  );
};
