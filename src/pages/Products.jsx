import React, { useState } from 'react'
import SectionTitle from '../components/common/SectionTitle'
import { CiGrid41, CiViewTable } from 'react-icons/ci';
import ProductsGridView from '../components/ProductsView/ProductsGridView';
import ProductTableView from '../components/ProductsView/ProductTableView';
import { products } from '../data/products';
import Modal from '../components/common/Modal';
import AddProductField from '../components/LastProductTable/AddProductField';

const Products = () => {
const [layoutType, setLayoutType] = useState(true);
const [paginatedProducts, setPaginatedProducts] = useState([...products]);
 
const toggleLayout = () => {
    
    setLayoutType(!layoutType);
  };

  const Buttons = (
      <>
        <button
          onClick={toggleLayout}
          className="text-2xl size-10 flex-center bg-[#ECEFF3] text-[#818898] *:stroke-1 rounded-md hover:bg-[#e1e4e7] active:scale-90 active:bg-[#ECEFF3]  duration-150 transition-all primary-border-color border cursor-pointer shadow"
        >
          {layoutType === true ? <CiGrid41 /> : <CiViewTable />}
        </button>
  
        

        <Modal title="New Product" Trigger={<button className="primary-bg px-3 py-1.5">Add Product</button>}>
           <AddProductField/>
        </Modal>
      </>
    );





  return (
    <>
      <SectionTitle title="Products List" button={Buttons} />

      <section className="mt-10 w-full! min-w-full!">
        {layoutType === true ? (
          <ProductTableView  />
        ) : (
          <ProductsGridView products={products}
                      paginatedProducts={paginatedProducts}
                      setProducts={setPaginatedProducts} />
        )}
      </section>
    </>
  )
}

export default Products