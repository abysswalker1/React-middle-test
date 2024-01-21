import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productSlice from '../../store/productSlice';
import Product from './Product';

import './product.css'
import LoaderWrap from '../_common/loader-wrap/loaderWrap';

const ProductPage = observer(() => {
  const {id} = useParams();
  const {currentProduct, getProductFromApi} = productSlice;

  useEffect(() => {
    getProductFromApi(id);
  }, [id]);

  return (
    <LoaderWrap>
      {
       (!currentProduct) 
        ? <p>Продукт не найден</p>
        : <Product />
      }
    </LoaderWrap>
  );
});

export default ProductPage;