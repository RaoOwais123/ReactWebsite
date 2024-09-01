import { useEffect, useState } from "react";
import { useParams } from "react-router";






function ProductDetails(){

    const {id, title} = useParams();
    const[product, setProduct]= useState(null);
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response)=> response.json())
        .then((response)=> setProduct(response))
    },[id]);

    return(
       
        <div className='container mx-auto p-4'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        
          {product ? (
           
              
              <div key={product.id} className="border rounded-lg shadow-lg p-4 bg-white flex flex-col">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-700 mb-2 text-sm truncate">{product.description}</p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <p className="text-xl font-bold text-green-600">${product.price}</p>
                </div>
              </div>
            
          ) : null}
        </div>
      </div>

    );
};
export default ProductDetails;