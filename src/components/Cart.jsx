import useCartStore from "../store/cartStore";
import { Trash2 } from "lucide-react";
import Checkout from "./Checkout";

const Cart = () => {
  const { cart, updateQuantity, removeCart, totalCartValue, clearCart } =
    useCartStore();

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-center py-6">
        Cart
      </h2>

      {/* Empty cart message */}
      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mb-6">
          No items are added
        </p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="
                flex flex-col sm:flex-row 
                items-center sm:items-center 
                gap-4 sm:gap-6 
                border-b border-gray-200 pb-3
              "
            >
              <p className="flex-1 text-lg sm:text-xl text-center sm:text-left">
                {item.title}
              </p>

              <div className="flex items-center gap-2 sm:gap-3">
                <p className="text-gray-700">${item.price} ×</p>

                <input
                  className="border rounded p-1 w-14 text-center"
                  type="number"
                  value={item.qty}
                  min="1"
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                />

                <button
                  onClick={() => removeCart(item.id)}
                  className="text-red-500 hover:text-red-600 p-1"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Footer: total + clear */}
      {cart.length > 0 && (
        <div
          className="
            flex flex-col sm:flex-row 
            justify-between items-center 
            gap-4 sm:gap-8 mt-8 border-t border-gray-200 pt-4
          "
        >
          <p className="text-2xl font-semibold">
            Total: ${totalCartValue().toFixed(2)}
          </p>

          <button
            className="
              text-red-600 border border-red-400 rounded px-4 py-2 
              hover:bg-red-50 transition-colors
            "
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>
        </div>
      )}

      {/* Checkout */}
      {cart.length > 0 && (
        <div className="mt-6">
          <Checkout />
        </div>
      )}
    </div>
  );
};

export default Cart;
