import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

import Cards from './components/Cards'
import Button from './components/Button'
import SearchBar from './components/SearchBar'
// import products from './constant/webData'

function App() {
//  const [color,setColor]=useState('purple')
 
  // console.log(products[0].title);
  
  

 
  

  return (
    <div>  
  <Header/>
  {/* <SearchBar/> */}
  <Cards/>
  <Footer/>
    </div>
  )
}

export default App
