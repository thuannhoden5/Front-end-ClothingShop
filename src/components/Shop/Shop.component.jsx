import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setProducts } from '../../redux/shop/shop.actions';
import axiosInstance from '../../utils/axios';
import ProductListing from '../ProductListing/ProductListing';

const Shop = () => {
  const param = useParams();
  console.log('param here', param);
  const directory = param.directory ? param.directory : '';
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(
          `/product/findAllProductByFilter?category=${directory}`,
        );
        console.log('product here', response);
        dispatch(setProducts(response.data));
      } catch (err) {
        console.log('error here', err);
      }
    };

    fetchProduct();
  }, []);
  return (
    <div className="shop-page">
      <ProductListing></ProductListing>
      <div></div>
    </div>
  );
};

export default Shop;
