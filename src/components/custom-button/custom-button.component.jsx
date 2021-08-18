import React from "react";
import "./custom-button.styles.scss";
const CustomButton = ({ children, color }) => {
  return <button className={`button ${color}`}>{children}</button>;
};
export default CustomButton;
