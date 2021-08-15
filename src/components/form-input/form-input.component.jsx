import React from "react";
import "./form-input.styles.scss";

const FormInput = ({
  name,
  label,
  handleChange,
  errMessage,
  ...otherProps
}) => {
  return (
    //   <div className="col-md-4">
    //   <label for="validationServer01" className="form-label">First name</label>
    //   <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required>
    //   <div className="valid-feedback">
    //     Looks good!
    //   </div>
    // </div>

    /* <div>
      {label ? <label>{label}</label> : null}
      <input type="text" onChange={handleChange} {...otherProps} />
    </div> */
    <div className="">
      {{ label } ? (
        <label for={name} className="form-label label">
          {label}
        </label>
      ) : null}
      <input
        type="text"
        className="form-control"
        id={name}
        onChange={handleChange}
        {...otherProps}
        name={name}
        autofocus
        id="input"
      />
    </div>
  );
};
export default FormInput;
