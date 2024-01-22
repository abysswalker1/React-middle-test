import React, { useEffect } from 'react';
import ProductGalery from './components/productGalery';
import classNames from 'classnames';
import productSlice from '../../store/productSlice';
import { observer } from 'mobx-react-lite';
import SizePicker from './components/sizePicker';
import { findById } from '../../services/utils';

const Product = observer(() => {
  const { currentProduct } = productSlice;
  const [color, setColor] = React.useState(currentProduct.colors[0]);

  const chooseColorById = (id) => {
    setColor(findById(currentProduct.colors, id));
  }

  return (
    <div className='product'>
        <ProductGalery  color={color}/>  

        <div className="product__info">
          <h2 className="product__name">{currentProduct.name}</h2>
          <div className="product__colors">
            {currentProduct.colors?.map((item, index) => { 
              const btnClass = classNames(
                'product__colors-item',
                {'active': color.id === item.id}
              )
              if (item.sizes.length) {
                return (
                  <button 
                    key= {item.id}
                    className= {btnClass}
                    onClick= {() => chooseColorById(item.id)} 
                  >
                    {item.name}
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