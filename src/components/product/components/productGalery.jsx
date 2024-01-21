import classNames from 'classnames';
import React, { useEffect } from 'react';
import productSlice from '../../../store/productSlice';
import { observer } from 'mobx-react-lite';

const ProductGalery = observer(() => {
  const [image, setImage] = React.useState(0);
  const { currentColor } = productSlice; 

  return (
    <div className='product__galery'>
      <img className='product__galery-main' src={currentColor.images[image]} alt="" />
      {(currentColor.images.length)
        ? <div className="product__galery-list">
            {currentColor.images.map(
              (item, index) =>  {
                const btnClass = classNames({
                  'active': index === image
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