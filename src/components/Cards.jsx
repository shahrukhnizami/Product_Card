

import { data } from "autoprefixer";
import products from "../constant.ts/webData";
import Button from "./Button";

function Cards(){
    
    

     return(

      
        
        
        
   
        <section className="text-gray-600 body-font">
            
        <div className="container px-5 py-24 mx-auto">
            
          <div  className="flex flex-wrap -m-4">
            
            {products.map((data,index)=>(<div key={data.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={data.image}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">

          {data.category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {data.title}
          </h2>
          <p className="mt-1">{data.price}</p>
          
        </div>
        <Button text={"Buy Now"}/>
      </div> ))}
                



           
      


      </div>
      
  </div>
</section>


      
  

    )
}


export default Cards;