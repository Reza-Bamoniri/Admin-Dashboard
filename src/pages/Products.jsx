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
const [allProducts, setAllProducts] = useState([...products]);
const [paginatedProducts, setPaginatedProducts] = useState([]);
const [newProduct, setNewProduct] = useState({
  id: crypto.randomUUID(),
    title: "",
    description: "",
    img: "/images/product.jpg",
    isPublished: false,
    price: "",
    entity: "",
});
 
const toggleLayout = () => {
    
    setLayoutType(!layoutType);
  };

  
  
  const createNewProduct = () => {
    setAllProducts([...allProducts,newProduct])
    

    setNewProduct(
      {
        id: crypto.randomUUID(),
        title: "",
        description: "",
        img: "/images/product.jpg",
        isPublished: false,
        price: "",
        entity: "",
      }
    )
  }
  
  
  
  
  
  const Buttons = (
      <>
        <button
          onClick={toggleLayout}
          className="text-2xl size-10 flex-center bg-[#ECEFF3] text-[#818898] *:stroke-1 rounded-md hover:bg-[#e1e4e7] active:scale-90 active:bg-[#ECEFF3]  duration-150 transition-all primary-border-color border cursor-pointer shadow"
        >
          {layoutType === true ? <CiGrid41 /> : <CiViewTable />}
        </button>
  
        

        <Modal onSubmit={createNewProduct} title="New Product" Trigger={<button className="primary-bg px-3 py-1.5">Add Product</button>}>
           <AddProductField newProduct={newProduct} setNewProduct={setNewProduct} />
        </Modal>
      </>
    );





  return (
    <>
      <SectionTitle title="Products List" button={Buttons} />

      <section className="mt-10 w-full! min-w-full!">
        {layoutType === true ? (
          <ProductTableView products={allProducts}
                      paginatedProducts={paginatedProducts}
                      setProducts={setPaginatedProducts} />
        ) : (
          <ProductsGridView products={allProducts}
                      paginatedProducts={paginatedProducts}
                      setProducts={setPaginatedProducts} />
                      
        )}
      </section>
    </>
  )
}

export default Products