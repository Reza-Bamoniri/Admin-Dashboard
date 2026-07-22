import React from 'react'
import LastProductTable from '../LastProductTable/LastProductTable'

const ProductTableView = ({ products, paginatedProducts, setProducts }) => {
  return (
    <><LastProductTable allProducts={products} /></>
  )
}

export default ProductTableView