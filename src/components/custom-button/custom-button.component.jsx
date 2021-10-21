import React from "react";
import "./custom-button.styles.scss";
const CustomButton = ({ children, color, ...otherProps }) => {
  return (
    <button className={`button ${color}`} {...otherProps}>
      {children}
    </button>
  );
};
export default CustomButton;
