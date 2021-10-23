import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { addItem } from '../../redux/cart/cart.actions';
import { selectedProducts } from '../../redux/shop/shop.actions';
import axiosInstance from '../../utils/axios';
import {
  CustomButton,
  CustomSmallButton,
} from '../custom-button/custom-button.component';
import './ProductDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const productDetail = useSelector((state) => state.products.selectedProduct);
  const cartDetail = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const [err, setErr] = useState('');
  const buyNow = () => {};

  const addToCart = () => {
    if (quantity === 0) {
      setErr('Please add at least one item');
      return;
    }
    dispatch(addItem({ product: productDetail, quantity: quantity }));
    console.log('cartDetail here', cartDetail);
  };

  const handleChangeQuantity = (event) => {
    if (event.target.value === '+') {
      if (quantity === 0) {
        setErr('');
      }
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const fetchProductDetail = async (id) => {
      try {
        const response = await axiosInstance.get(`/product/findProduct/${id}`);
        console.log('product detail here', response.data);
        dispatch(selectedProducts(response.data));
      } catch (err) {
        console.log('error here', err);
      }
    };

    fetchProductDetail(id);
  }, [id]);

  return (
    <div className="product-section">
      <div className="section-right">
        <img src={productDetail.image} alt={productDetail.title} />
      </div>
      <div className="section-left">
        <div className="product-title">{productDetail.title}</div>
        <div className="product-price">{productDetail.price}.000 VND</div>
        <div className="product-cart-button">
          <div className="quantity-product">
            {quantity === 0 && (
              <CustomSmallButton value={'-'} color="grey">
                -
              </CustomSmallButton>
            )}
            {quantity !== 0 && (
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
        <div className="error">{err}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
