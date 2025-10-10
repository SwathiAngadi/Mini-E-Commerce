import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useProductById } from "../hooks/useProductById"; // assumes you have this hook
import useCartStore from "../store/cartStore";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useProductById(id);
  const addCart = useCartStore((state) => state.addCart);

  if (isLoading) return <p className="text-center mt-10">Loading product...</p>;
  if (isError) return <p className="text-center mt-10 text-red-500">Failed to load product.</p>;

  if (!product)
    return <p className="text-center mt-10 text-gray-500">Product not found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-5 flex flex-col md:flex-row gap-8 mt-10">
      {/* Product Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-60 h-60 sm:w-80 sm:h-80 object-contain rounded-lg shadow-md"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-2xl sm:text-3xl font-semibold">{product.title}</h2>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
          {product.description}
        </p>

        <p className="text-xl sm:text-2xl font-bold text-pink-600">
          ${product.price}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => addCart(product)}
          className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-md shadow-md font-medium w-full sm:w-[200px]"
        >
          Add to Cart
        </motion.button>

        <Link
          to="/"
          className="text-pink-600 hover:underline mt-3 text-center sm:text-left"
        >
          ← Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
