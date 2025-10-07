import { useState, useRef } from "react";
import ReactPaginate from "react-paginate";

import useCartStore from "../store/cartStore";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const addCart = useCartStore((state) => state.addCart);
  const [page, setPage] = useState(1); 
  const limit = 4;
  const { data: products, isLoading, isError, isFetching } = useProducts(page, limit);
  const totalItems = 20; 
  const pageCount = Math.ceil(totalItems / limit);

  const handlePageClick = (event) => {
    setPage(event.selected);
  };


  if (isLoading) return <h3>Loading Products...</h3>;
  if (isError) return <h3>Failed to load products.</h3>;

  return (
    <div>
      <h2 className="text-3xl text-center mx-auto p-5">Products</h2>

      {products.map((prod) => (
        <ProductCard key={prod.id} prod={prod} addCart={addCart} />
      ))}

      {/* Pagination Controls */}
      {!isLoading && products.length > 0 && (
      <div className="flex justify-center mt-8">
         <ReactPaginate
          breakLabel="..."
          nextLabel="Next ›"
          previousLabel="‹ Prev"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          forcePage={page}
          containerClassName="flex items-center space-x-2"
          pageClassName="px-3 py-1 border rounded"
          activeClassName="bg-pink-300 text-white border-pink-300"
          previousClassName="px-3 py-1 border rounded"
          nextClassName="px-3 py-1 border rounded"
          disabledClassName="opacity-50 cursor-not-allowed"
        /> 
    
    </div>
      )}

      {isFetching && (
        <p className="text-center text-gray-400 mt-2">Updating...</p>
      )}
    </div>
  );
};
export default ProductList;
