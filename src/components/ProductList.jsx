import { useState, useRef } from "react";
import ReactPaginate from "react-paginate";

import useCartStore from "../store/cartStore";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

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
    <div className="m-5">
      <h2 className="text-3xl text-center mx-auto p-5">Products</h2>

      {products.map((prod) => (
        
        <ProductCard key={prod.id} prod={prod} addCart={addCart} />
      ))}

      
<Pagination
        page={page}
        totalItems={totalItems}
        limit={limit}
        onPageChange={(p) => setPage(p)}
      />

      {isFetching && (
        <p className="text-center text-gray-400 mt-2">Updating...</p>
      )}
    </div>
  );
};
export default ProductList;
