import { FaExclamation, FaExclamationTriangle } from "react-icons/fa";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/reducers/actions";

const Products = () => {
     const { isLoading, errorMessage } = useSelector(
        (state) => state.errors
    );

    const { products } = useSelector((state) => state.products);

    const dispatch= useDispatch();

    useEffect(()=>{dispatch(fetchProducts());},[dispatch])

    return(
        <div className="lg:px-14 sm:px-4 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
          {
            isLoading ? (
                <p>Loading...</p>
            ) : errorMessage ? (
                <div className="flex justify-center items-center h-[200px]">
                    <FaExclamationTriangle className="text-slate-800 text-3xl mr-2"/>
                    <span className="text-slate-800 text-lg font-medium">
                        {errorMessage}
                    </span>
                </div>
            ) : (
                <div className="min-h-[700px]">
                    <div className="pb-6 pt-14 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6">
                        {
                        products && products.map((item,i) => <ProductCard key={i} {...item}/>)    
                        }
                    </div>
                </div>
            )
          }  
        </div>
    )
}

export default Products;