import useCartStore from "../store/cartStore";
import {Trash2 } from 'lucide-react'
const Cart = () => {
    const {cart, updateQuantity,removeCart, totalCartValue, clearCart} = useCartStore();
    return (
        <div className="w-200 mx-auto">
            <h2 className="text-3xl text-center  p-5"> Cart</h2>
            {cart.length===0 ? <p className="text-center "> No items are added</p>: null}
            <ul className=" mx-auto ">
                {cart.map((item)=>(
                    <li key={item.id} className=" flex flex-row gap-5  my-2 "> 
                        <p className="flex-1 text-xl">{item.title}</p>
                        <p className=" align-center ">${item.price} x </p>
                        <input className="border h-fit rounded p-1 w-10" 
                        type="number" value={item.qty} min="1"
                        onChange={(e)=>updateQuantity(item.id,Number(e.target.value))}/>
                       <p className="align-center mt-1" onClick={()=>removeCart(item.id)}> <Trash2/></p> 
                    </li>
                ))}
            </ul>
            <div className="flex flex-row gap-8 mt-5 items-center">
            <p className="flex-1 text-2xl text-left"> Total  </p>
            <p className="text-2xl ">${totalCartValue()}</p>
            <button className="text-red-500 border rounded p-2" onClick={()=>clearCart} > Clear Cart </button>
            </div>
            
        </div>
    )
}
export default Cart;
