import React from "react";

const FormSelect = ({
  label,
  data,
  optionList,
  defaultValue,
  extraClassName,
}) => {
  return (
    <div className={`form-area ${extraClassName ?? ""} ${data.errorClassName}`}>
      <select value={data.value} onChange={data.onChange}>
        <option value={defaultValue} defaultValue={defaultValue}>
          {defaultValue}
        </option>
        {optionList &&
          optionList.length > 0 &&
          optionList.sort().map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
      </select>
      <span className="form-select-label">{label}</span>
      <span className="form-label-info">
        <div className="form-message-wrapper">{data.message}</div>
      </span>
    </div>
  );
};
export default FormSelect;
