import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { addItem } from '../../redux/cart/cart.actions';
import { selectedProducts } from '../../redux/shop/shop.actions';
import axiosInstance from '../../utils/axios';
import CustomNavbar from '../Navbar/Navbar';

import {
  CustomButton,
  CustomSmallButton,
} from '../custom-button/custom-button.component';
import './ProductDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const productDetail = useSelector((state) => state.products.selectedProduct);
  const cartDetail = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  console.log(
    'here',
    cartDetail.map((cartItem) => {
      return {
        productId: cartItem.product._id,
        quantity: quantity,
      };
    }),
  );
  const buyNow = async () => {
    dispatch(addItem({ product: productDetail, quantity: quantity }));
    history.replace('/checkout');
  };

  const addToCart = () => {
    dispatch(addItem({ product: productDetail, quantity: quantity }));
    console.log('cartDetail here', cartDetail);
  };

  const handleChangeQuantity = (event) => {
    if (event.target.value === '+') {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const fetchProductDetail = async (id) => {
      try {
        const response = await axiosInstance.get(`/product/findProduct/${id}`);
        dispatch(selectedProducts(response.data));
      } catch (err) {
        console.log('error here', err);
      }
    };

    fetchProductDetail(id);
  }, [id]);

  return (
    <div className="product-section">
      <CustomNavbar />
      <div className="section-right">
        <img src={productDetail.image} alt={productDetail.title} />
      </div>
      <div className="section-left">
        <div className="product-title">{productDetail.title}</div>
        <div className="product-price">{productDetail.price}.000 VND</div>
        <div className="product-cart-button">
          <div className="quantity-product">
            {quantity === 1 && (
              <CustomSmallButton value={'-'} color="grey">
                -
              </CustomSmallButton>
            )}
            {quantity > 1 && (
              <CustomSmallButton
                value={'-'}
                onClick={handleChangeQuantity}
                color="green"
              >
                -
              </CustomSmallButton>
            )}
            <span> {quantity} </span>
            <CustomSmallButton
              value={'+'}
              onClick={handleChangeQuantity}
              color="green"
            >
              +
            </CustomSmallButton>
          </div>
          <div className="handle-cart">
            <CustomButton onClick={addToCart} color="green">
              Add To Cart
            </CustomButton>
            <CustomButton onClick={buyNow} color="blue">
              Buy Now
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
