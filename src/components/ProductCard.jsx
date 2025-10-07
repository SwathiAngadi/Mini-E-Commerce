import { motion, useAnimation } from "framer-motion";
import { useState, useRef } from "react";
// ✅ Each Product has its own animation controller
const ProductCard = ({ prod, addCart }) => {
    const controls = useAnimation();
    const [added, setAdded] = useState(false);
    const isAnimating = useRef(false);
  
    const handleClick = async () => {
      if (isAnimating.current) return;
      isAnimating.current = true;
  
      // Animate only this button
      await controls.start({
        scale: [1, 1.2, 1],
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
      <li className="flex flex-row gap-5 my-2 w-200 mx-auto">
        <img
          src={prod.image}
          alt={prod.title}
          className="h-25 w-25 object-contain mx-auto"
        />
        <span className="flex-1 text-xl">{prod.title}</span>
        <span>${prod.price}</span>
  
        <motion.button
          animate={controls}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="h-fit bg-pink-300 text-white p-2 rounded font-medium shadow hover:bg-pink-400 focus:outline-none"
        >
          {added ? "✓ Added!" : "Add to Cart"}
        </motion.button>
      </li>
    );
  }
  export default ProductCard;