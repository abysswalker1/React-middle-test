import React from 'react';
import store from '../../store/store';
import { observer } from 'mobx-react-lite';
import CatalogCard from './catalogCard';
import LoaderWrap from '../_common/loader-wrap/loaderWrap';

import './catalog.css'

const Catalog = observer(() => {
  const { products } = store;
  
  return (
    <div className='catalog'>
      <div className="catalog__list">
        <LoaderWrap>
          {products.map(product => (
              <CatalogCard product={product} key={product.id}/>
            ))}
        </LoaderWrap>
      </div>
    </div>
  );
});

export default Catalog;