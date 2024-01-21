import React from 'react';
import { Link } from 'react-router-dom';

const CatalogCard = ({ product }) => {
  const {colors, id} = product
  const previewProduct = colors[0];

  return (
    <Link className='catalog__card' to={`/catalog/${id}`} >
      <div className="catalog__card-image-wrap">
        <img src={previewProduct.images[0]} />
      </div>
      <h3 className='catalog__card-name'>{product.name}</h3>
      <p className='catalog__card-price'>{previewProduct.price} р.</p>
      <div className="catalog__card-colors">
        Цвета: {colors.map(color => {
          if (color.sizes.length) {
            return <span>{color.name}, </span>
          }
        })}
      </div>
    </Link>
  );
};

export default CatalogCard;