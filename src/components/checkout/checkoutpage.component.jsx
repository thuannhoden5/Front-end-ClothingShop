import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { addItem, removeItem } from "../../redux/cart/cart.actions";
const CheckoutPage = ({ cartItems, total, addItem, removeItem }) => {
  return (
    <div className="container">
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            {/* <span className="badge bg-primary rounded-pill">3</span> */}
          </h4>
          <ul className="list-group mb-3">
            {cartItems.map((cartItem) => {
              return (
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">{cartItem.name}</h6>

                    <span className="quantity d-flex">
                      <div
                        className="arrow"
                        onClick={() => {
                          removeItem(cartItem);
                        }}
                      >
                        &#10094;
                      </div>
                      <span className="value">{cartItem.quantity}</span>
                      <div
                        className="arrow"
                        onClick={() => {
                          addItem(cartItem);
                        }}
                      >
                        &#10095;
                      </div>
                    </span>
                  </div>
                  <span className="text-muted">${cartItem.price}</span>
                </li>
              );
            })}

            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>${total}</strong>
            </li>
          </ul>

          <form className="card p-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Promo code"
              />
              <button type="submit" className="btn btn-secondary">
                Redeem
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" novalidate>
            <div className="row g-3">
              <div className="col-sm-6">
                <label for="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div className="col-sm-6">
                <label for="lastName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  value=""
                  required
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              <div className="col-12">
                <label for="username" className="form-label">
                  Username
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text">@</span>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    required
                  />
                  <div className="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>

              <div className="col-12">
                <label for="email" className="form-label">
                  Email <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="col-12">
                <label for="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="col-12">
                <label for="address2" className="form-label">
                  Address 2 <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>

              {/* <div className="col-md-5">
                <label for="country" className="form-label">
                  Country
                </label>
                <select
                  classNameName="form-select"
                  id="cityId"
                  name="customerCityId"
                >
                  <option value="">Provinces/ City</option>
                  <option value="254">Hà Nội</option>
                  <option value="255">Hồ Chí Minh</option>
                  <option value="256">An Giang</option>
                  <option value="257">Bà Rịa - Vũng Tàu</option>
                  <option value="258">Bắc Ninh</option>
                  <option value="259">Bắc Giang</option>
                  <option value="260">Bình Dương</option>
                  <option value="261">Bình Định</option>
                  <option value="262">Bình Phước</option>
                  <option value="263">Bình Thuận</option>
                  <option value="264">Bến Tre</option>
                  <option value="265">Bắc Cạn</option>
                  <option value="266">Cần Thơ</option>
                  <option value="267">Khánh Hòa</option>
                  <option value="268">Thừa Thiên Huế</option>
                  <option value="269">Lào Cai</option>
                  <option value="270">Quảng Ninh</option>
                  <option value="271">Đồng Nai</option>
                  <option value="272">Nam Định</option>
                  <option value="273">Cà Mau</option>
                  <option value="274">Cao Bằng</option>
                  <option value="275">Gia Lai</option>
                  <option value="276">Hà Giang</option>
                  <option value="277">Hà Nam</option>
                  <option value="278">Hà Tĩnh</option>
                  <option value="279">Hải Dương</option>
                  <option value="280">Hải Phòng</option>
                  <option value="281">Hòa Bình</option>
                  <option value="282">Hưng Yên</option>
                  <option value="283">Kiên Giang</option>
                  <option value="284">Kon Tum</option>
                  <option value="285">Lai Châu</option>
                  <option value="286">Lâm Đồng</option>
                  <option value="287">Lạng Sơn</option>
                  <option value="288">Long An</option>
                  <option value="289">Nghệ An</option>
                  <option value="290">Ninh Bình</option>
                  <option value="291">Ninh Thuận</option>
                  <option value="292">Phú Thọ</option>
                  <option value="293">Phú Yên</option>
                  <option value="294">Quảng Bình</option>
                  <option value="295">Quảng Nam</option>
                  <option value="296">Quảng Ngãi</option>
                  <option value="297">Quảng Trị</option>
                  <option value="298">Sóc Trăng</option>
                  <option value="299">Sơn La</option>
                  <option value="300">Tây Ninh</option>
                  <option value="301">Thái Bình</option>
                  <option value="302">Thái Nguyên</option>
                  <option value="303">Thanh Hóa</option>
                  <option value="304">Tiền Giang</option>
                  <option value="305">Trà Vinh</option>
                  <option value="306">Tuyên Quang</option>
                  <option value="307">Vĩnh Long</option>
                  <option value="308">Vĩnh Phúc</option>
                  <option value="309">Yên Bái</option>
                  <option value="310">Đắk Lắk</option>
                  <option value="311">Đồng Tháp</option>
                  <option value="312">Đà Nẵng</option>
                  <option value="313">Đắc Nông</option>
                  <option value="314">Hậu Giang</option>
                  <option value="315">Bạc Liêu</option>
                  <option value="316">Điện Biên</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div className="col-md-4">
                <label for="state" className="form-label">
                  State
                </label>
                <select
                  className="form-select"
                  id="districtId"
                  name="customerDistrictId"
                >
                  <option value="">Chọn Quận/ Huyện</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div> */}

              <div className="col-md-3">
                <label for="zip" className="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">Zip code required.</div>
              </div>
            </div>

            <hr className="my-4" />

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="same-address"
              />
              <label className="form-check-label" for="same-address">
                Shipping address is the same as my billing address
              </label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="save-info"
              />
              <label className="form-check-label" for="save-info">
                Save this information for next time
              </label>
            </div>

            <hr className="my-4" />

            <h4 className="mb-3">Payment</h4>

            <div className="my-3">
              <div className="form-check">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  checked
                  required
                />
                <label className="form-check-label" for="credit">
                  Credit card
                </label>
              </div>
            </div>

            <hr className="my-4" />

            <button className="w-100 btn btn-primary btn-lg" type="submit">
              Continue to checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
