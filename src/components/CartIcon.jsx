import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import useCartStore  from "../store/cartStore";

export default function CartIcon() {
  
  const cart = useCartStore((state) => state.cart);

  // calculate total items
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  return (
    <div className="relative inline-block">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative"
      >
        <ShoppingCart className="h-6 w-6 text-gray-800" />
      </motion.div>

      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div
            key={totalItems}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center"
          >
            {totalItems}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
