import React from 'react';
import './custom-button.styles.scss';
const CustomButton = ({ children, color, ...otherProps }) => {
  return (
    <button className={`button ${color}`} {...otherProps}>
      {children}
    </button>
  );
};
const CustomSmallButton = ({ children, color, ...otherProps }) => {
  return (
    <button className={`small-button ${color}`} {...otherProps}>
      {children}
    </button>
  );
};
export { CustomSmallButton, CustomButton };
