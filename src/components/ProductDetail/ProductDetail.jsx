import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectedProducts } from '../../redux/shop/shop.actions';
import axiosInstance from '../../utils/axios';
import CustomButton from '../custom-button/custom-button.component';
import './ProductDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  console.log('id', id);
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.products.selectedProduct);

  console.log('productDetail', productDetail);

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
            <CustomButton color="green">+</CustomButton>
            <span> 2 </span>
            <CustomButton color="green">-</CustomButton>
          </div>
          <div className="handle-cart">
            <CustomButton color="green"> Buy Now</CustomButton>
            <CustomButton color="blue"> Add To Cart</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
