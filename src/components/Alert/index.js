import React from "react";
import { errorIcon, successIcon, closeIcon } from "../../utils/icons";
import "./alert.css";

export default ({ alert, removeAlert }) => {
  const alertTheme = alert.type === "error" ? "alert-error" : "alert-success";
  const alertIcon = alert.type === "error" ? errorIcon : successIcon;
  return (
    <div className={`alert show alert-error ${alertTheme}`}>
      <div className="icon">{alertIcon}</div>
      <div className="message">{alert.message}</div>
      <button type="button" className="cross-button" onClick={removeAlert}>
        <span className="close">{closeIcon}</span>
      </button>
    </div>
  );
};
