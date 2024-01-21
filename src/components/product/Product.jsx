import React, { useEffect } from 'react';
import ProductGalery from './components/productGalery';
import classNames from 'classnames';
import productSlice from '../../store/productSlice';
import { observer } from 'mobx-react-lite';
import SizePicker from './components/sizePicker';

const Product = observer(() => {
  const { getColorFromApi, currentProduct, currentColor } = productSlice;

  return (
    <div className='product'>
        {currentColor ? <ProductGalery  /> : null} 

        <div className="product__info">
          <h2 className="product__name">{currentProduct.name}</h2>
          <div className="product__colors">
            {currentProduct.colors?.map((color) => { 
              const btnClass = classNames(
                'product__colors-item',
                {'active': currentColor.id === color.id}
              )
              if (color.sizes.length) {
                return (
                  <button 
                    key= {color.id}
                    className= {btnClass}
                    onClick={() => getColorFromApi(currentProduct.id, color.id)} 
                  >
                    {color.name}
                  </button>
                )
              }
            })}
          </div>
          
        </div>
    </div>
  );
});

export default Product;