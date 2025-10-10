import { motion, useAnimation } from "framer-motion";
import { useState, useRef } from "react";
import {Link} from 'react-router-dom';

const ProductCard = ({ prod, addCart }) => {
  const controls = useAnimation();
  const [added, setAdded] = useState(false);
  const isAnimating = useRef(false);

  const handleClick = async () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    await controls.start({
      scale: [1, 1.15, 1],
      backgroundColor: ["#fda5d5", "#e60076", "#fda5d5"],
      transition: { duration: 0.4 },
    });

    addCart(prod);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
      isAnimating.current = false;
    }, 1000);
  };

  return (
    <li
      className="
        flex flex-col sm:flex-row 
        items-center sm:items-center 
        justify-between
        gap-4 sm:gap-6 
        my-4 mx-auto 
        w-full max-w-2xl 
        border-b border-gray-200 pb-3 px-4
      "
    >
      {/* Image */}
      <Link to={`/product/${prod.id}`} className="flex-shrink-0">
      <img
        src={prod.image}
        alt={prod.title}
        className="h-24 w-24 object-contain"
      />
      </Link>
      {/* Product Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between flex-1 gap-3 sm:gap-5 text-center sm:text-left w-full mx-auto">
        <span className="flex-1 text-base sm:text-lg font-medium break-words line-clamp-2">
          {prod.title}
        </span>

        <span className="text-gray-700 dark:text-white font-semibold whitespace-nowrap">
          ${prod.price}
        </span>

        <motion.button
          animate={controls}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="
            bg-pink-500 hover:bg-pink-600 
            text-white py-2 px-4 rounded-md 
            font-medium shadow 
            sm:w-auto
            text-center 
          "
        >
          {added ? "✓ Added!" : "Add to Cart"}
        </motion.button>
      </div>
    </li>
  );
};

export default ProductCard;
