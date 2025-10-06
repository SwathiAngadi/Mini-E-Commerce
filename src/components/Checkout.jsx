import useUserStore from "../store/userStore";
import useCartStore from "../store/cartStore";
const Checkout = () => {
  const user = useUserStore((state) => state.user);
  const cart = useCartStore((state) => state.cart);
  const total = useCartStore((state) => state.totalCartValue);
  const clearCart = useCartStore((state) => state.clearCart);

  function handleCheckout() {
    if (!user) {
      alert("Please login to proceed further");
    } else {
      alert(
        `Order placed for ${cart.length} items. Total $${total().toFixed()} !!!`,
      );
      clearCart();
    }
  }
  return (
    <div className="text-center">
      <button
        className="p-2 text-xl border rounded text-blue-500 font-bold"
        onClick={handleCheckout}
      >
        CheckOut
      </button>
    </div>
  );
};
export default Checkout;
