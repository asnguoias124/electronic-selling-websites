import React from 'react'
import { Route, Routes, redirect } from 'react-router-dom'
import ProductRoutes from '.modules/products/components/Routes'
import CartRoutes from '.modules/cart/components/Routes'

export default function Routess() {
  return (
    <Routes>
      <Route path="/products" element = {<ProductRoutes/>}>

      </Route>
      <Route path="/cart" element = {<CartRoutes/>}>
      </Route>
      <Route exact path="/">
        {redirect('/products')}
      </Route>
    
    </Routes>
  )
}
