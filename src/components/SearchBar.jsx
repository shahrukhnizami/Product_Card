import { useEffect, useState } from "react";
import Cards  from "./Cards";
import Button from "./Button";



function SearchBar(){


    const [product,setProduct]=useState([])

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
              .then(res=>res.json())
              .then((data)=> setProduct(data))
             
    },[])
    console.log("All Product", product);
    console.log(Cards);
    // console.log(products);
    
    
    const [search, setSearch] = useState("");
    const filteredArr = product.filter(
        (data) => data.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );

    return(
        <div className="max-w-md mx-auto">
  <label
    htmlFor="default-search"
    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
  >
    Search
  </label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
    <input
      type="search"
      id="default-search"
      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search Mockups, Logos..."
      required=""
      onChange={(e) => setSearch(e.target.value)}
    />
    <button
      type="submit"
      className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Search
    </button>
  </div>



  <section className="text-gray-600 body-font">
            
            <div className="container px-5 py-24 mx-auto">
                
              <div  className="flex flex-wrap -m-4">
                
                {filteredArr.map((data)=>(
                  <div key={data.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
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
    </div>

    )
    

}

export default SearchBar;