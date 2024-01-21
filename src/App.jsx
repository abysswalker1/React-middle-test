import React, {useEffect} from 'react'
import {Link, Route, Routes, BrowserRouter} from 'react-router-dom'
import Layout from './layout'
import productsState from './store/store'
import Catalog from './components/catalog/Catalog'
import ProductPage from './components/product/ProductPage'

export default function App() {
  useEffect(() => {
    productsState.fetchProductsFromApi();
  }, []);

  return (
    <BrowserRouter >
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Catalog />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path='catalog/:id' element={<ProductPage />} />
            <Route path="cart" element={<h1>Корзина</h1>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

