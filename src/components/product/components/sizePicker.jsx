import React from 'react';
import store from '../../../store/store';
import { observer } from 'mobx-react-lite';

const SizePicker = observer(({productSizes}) => {
  const { sizes }  = store;
  const filteredSizes = sizes.filter(item => {
    productSizes.includes(item.id)
  });

  return (
    <div className='size-picker'>
      {filteredSizes.map(size => {
        return <button>{size.label}</button>
      })}
    </div>
  );
})

export default SizePicker;