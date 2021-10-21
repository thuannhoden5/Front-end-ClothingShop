import React, { useEffect, useState } from "react";
import { CustomButton } from '../custom-button/custom-button.component';
import FormInput from "../form-input/form-input.component";
import "./Profile.styles.scss";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { setCurrentUser } from "../../redux/user/user.actions";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import axiosInstance from "../../utils/axios";
import axios from "axios";
const Profile = (props) => {
  const { currentUser } = props;
  const [values, setValues] = useState({
    email: "",
    address: "",
    phoneNumber: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("oke");
    const a = axiosInstance.put("/user/updateProfile", values, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    console.log(a);
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
      setValues({
        ...values,
        email: currentUser.email,
        address: currentUser.address,
        phoneNumber: currentUser.phoneNumber,
      });
    }
  }, []);
  if (!currentUser) {
    return <Redirect to="/auth/signin" />;
  }
  return (
    <div className="profile">
      <div className="main-container">
        <div className="div-image">
          <div className="image-header">
            <i class="fas fa-user fa-4x"></i>
          </div>
        </div>
        <div className="div-body">
          <form onSubmit={handleSubmit}>
            <FormInput
              name="email"
              type="email"
              handleChange={handleChange}
              label="Email"
              value={values.email}
              readOnly="readOnly"
            />
            <FormInput
              name="address"
              type="address"
              handleChange={handleChange}
              label="Address"
              value={values.address}
            />
            <FormInput
              name="phoneNumber"
              type="text"
              handleChange={handleChange}
              label="Phone Number"
              value={values.phoneNumber}
            />
            <div className="footer">
              <CustomButton type="submit" color="green">
                Save Change
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
