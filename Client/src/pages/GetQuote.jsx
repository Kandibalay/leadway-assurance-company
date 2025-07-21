import React from 'react'
import Product from '../components/getQuote/Product';
import Savings from '../components/getQuote/Savings';
import Autoproduct from '../components/getQuote/AutoProduct';
import LifeProduct from '../components/getQuote/LifeProduct';
import Companies from '../components/home/Companies';
import Download from '../components/home/Download';
import Hero from '../components/getQuote/Hero';




const GetQuote = () => {
  
        
       return ( 
       
       <>

    <div >
   <Hero />
    <Product />
    <Savings />
    <Autoproduct />
    <LifeProduct />
    <div>
    <Download />
    </div>
    <div >
    <Companies />
    </div>
    
     
    </div>
    </>
  )
}


export default GetQuote