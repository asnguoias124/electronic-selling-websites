import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'

export default function Routess() {
  const { path } = useLocation()

  return (
    <Routes>
      <Route path={`${path}/:id`} element={<ProductDetails />}>
      </Route>
      <Route path={path} element={<ProductList/>}>
      </Route>
    </Routes>
  )
}
