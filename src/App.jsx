import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Login from "./components/Login";
import "./App.css";
import { Baby } from "lucide-react";
import Checkout from "./components/Checkout";
function App() {
  return (
    <>
      <h1 className="text-3xl flex font-bold items-center w-fit mt-3 mx-auto">
        {" "}
        <Baby size={40} />
        Baby Store
      </h1>
      <Login />
      <ProductList />
      <Cart />
      <Checkout />
    </>
  );
}

export default App;
