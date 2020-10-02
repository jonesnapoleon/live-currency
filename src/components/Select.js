import React from "react";

const FormSelect = ({
  label,
  data,
  optionList,
  defaultValue,
  extraClassName,
}) => {
  // React.useEffect(() => {
  //   console.log(data);
  // }, [data]);
  return (
    <div className={`form-area ${extraClassName ?? ""} ${data.errorClassName}`}>
      <select value={data.value} onChange={data.onChange}>
        {[defaultValue, ...optionList].map((item, idx) => (
          <option key={idx} value={item} defaultValue={defaultValue}>
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
