import Pagination from "../common/Table/Pagination";
import TotalCardProduct from "./TotalCardProduct";

const ProductsGridView = ({ products, paginatedProducts, setProducts }) => {
  return (
    <>
      <div className="grid md:grid-cols-3 mb-20 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:grid-cols-5 gap-2">
        {paginatedProducts.map((product) => (
          <TotalCardProduct key={product.id} product={product} />
        ))}
      </div>

      <Pagination products={products} setProducts={setProducts} iPP={5} />
    </>
  );
};

export default ProductsGridView;
