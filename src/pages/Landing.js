import React, { useContext } from "react";
import "./pages.css";
import Forminput from "../components/Forminput";
import { PriceContext } from "../context/PriceContext";

const htmlText = {
  writePrice: "Enter value",
};

export default () => {
  const price = useContext(PriceContext);
  // const handleFetch = async () => {
  //   const data = await fetchUrl();
  //   console.log(data);
  // };

  return (
    <div id="full-page">
      <Forminput label={htmlText.writePrice} data={price} />
    </div>
  );
};
