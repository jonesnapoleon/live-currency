import React from "react";
import "./forms.css";
import { MAX_DIGIT_VALUE } from "../utils/constant";

export default ({ label, data, type, extraClassName }) => {
  const handleMaxLength = (e) => {
    if (e.target.value.length > MAX_DIGIT_VALUE) return;
    data.setValue(e.target.value);
  };

  return (
    <span
      className={`form-area ${extraClassName ?? ""} ${data.errorClassName}`}
    >
      <input
        id={label}
        required
        style={{
          textAlign: "right",
          width: `${String(data.value).length}rem`,
        }}
        className="form-input"
        value={data.value}
        type={type}
        inputMode={type === "number" ? "numeric" : "text"}
        onChange={handleMaxLength}
        placeholder={label}
      />
      <span className="form-label-info">
        <div className="form-message-wrapper">{data.message}</div>
      </span>
    </span>
  );
};
