import { useEffect } from "react";
import useCartStore from "../store/cartStore";
import useProductStore from "../store/productStore";

const ProductList = () => {
    const addCart = useCartStore((state)=> state.addCart);   
    const {products, fetchProducts, loading} = useProductStore();
    // const products =[
    //     {id: 1, name: "Stroller", price: 200},
    //     {id: 2, name: "Car Seat", price: 450},
    //     {id: 3, name: "Dresses", price: 50},
    //     {id: 4, name: "Toys", price: 40},
    //     {id: 5, name: "High Chair", price: 106},
    // ]
    useEffect(()=>{fetchProducts()},[fetchProducts])
    if(loading) return <h3> Loading Products</h3>
    return (
        <div>
            <h2 className="text-3xl text-center  mx-auto p-5 "> Products</h2>
            {products.map((prod)=>(
                <li key={prod.id} className="flex flex-row col-3 gap-5  my-2 w-200 mx-auto">
                    <span className="flex-1 text-xl">{prod.title} </span>
                    <span >${prod.price}</span>
                    <button className="felx-1 p-1 border rounded h-fit" onClick={()=>addCart(prod)}> Add to Cart</button>
                </li>
            ))}
        </div>
    )
}
export default ProductList;