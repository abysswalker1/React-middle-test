import classNames from 'classnames';
import React, { useEffect } from 'react';
import productSlice from '../../../store/productSlice';
import { observer } from 'mobx-react-lite';

const ProductGalery = observer(({ color }) => {
  const [currentImage, setImage] = React.useState(0);

  return (
    <div className='product__galery'>
      <img className='product__galery-main' src={color.images[currentImage]} alt="" />
      {(color.images.length)
        ? <div className="product__galery-list">
            {color.images.map(
              (item, index) =>  {
                const btnClass = classNames({
                  'active': index === currentImage
                })
                return (
                  <button 
                    className={btnClass}
                    onClick={() => setImage(index)}
                  >
                    <img src={item} alt="" />
                  </button>
                )
              }
            )}
          </div>
        : null
      }
    </div>
  );
})

export default ProductGalery;