import {Link, Routes, Route} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { Baby } from "lucide-react";

import ProductList from "./components/ProductList";
import ProductDetail from './components/ProductDesc';
import Cart from "./components/Cart";
import CartIcon from './components/CartIcon';
import ThemeSwitcher from './components/ThemeSwitcher';
import img from './assets/shop.png';

import "./App.css";

function App() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =  useAuth0();

  return (
    <div className='min-h-screen bg-pink-50 dark:bg-gray-700 dark:text-white pb-5'>
      <header className='flex flex-row bg-pink-200 dark:bg-gray-800 dark:text-white items-center'>
      <Link to='/' className=" flex-1 text-3xl flex font-bold items-left w-fit pt-2 ">
        <img src={img}  className="h-10 w-10"/> Mini Store
      </Link>
      <Link to='/cart' className=" h-fit m-2 bg-pink-300 text-white py-2 px-4 rounded hover:bg-pink-600"> <CartIcon /></Link>
      <ThemeSwitcher />
      { !isAuthenticated ? 
        <button className="text-l border rounded p-2 m-2"
          onClick={() => loginWithRedirect()}        >
          Log In
        </button> 
        : 
        <button
          className="text-l m-2 border rounded p-2"
          onClick={() => logout({ returnTo: window.location.origin })}      >
          Log Out
        </button>
      }
      </header>
     
      <div className=''>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
      
    
    </div>
  );
}

export default App;
