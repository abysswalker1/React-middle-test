import React from 'react';
import { observer } from 'mobx-react-lite';
import store from '../../../store/store';

import './loader.css'

const Loader = () => {
  return (
    <div className='loader'>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

const LoaderWrap = observer(({children}) => {
  const isFetching = false;

  if (isFetching) return <Loader />

  return (
    <>
      {children}
    </>
  )
})

export default LoaderWrap;