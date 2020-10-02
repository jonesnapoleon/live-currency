import React from "react";
import "./forms.css";

export default ({ label, data, extraClassName }) => {
  return (
    <div className={`form-area ${extraClassName ?? ""} ${data.errorClassName}`}>
      <input
        id={label}
        className="form-input"
        value={data.value}
        type="number"
        onChange={data.onChange}
        placeholder={label}
        required
      />
      {/* <span className="form-label">{label}</span> */}
      <span className="form-label-info">
        <div className="form-message-wrapper">{data.message}</div>
      </span>
    </div>
  );
};
