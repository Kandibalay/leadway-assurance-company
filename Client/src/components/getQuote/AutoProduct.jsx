import React, { useState, useEffect } from 'react';
import one from "../../assets/images/crashone.png";
import two from "../../assets/images/mantwo.png";
import three from "../../assets/images/carmancrash.png";
import four from "../../assets/images/dollar.jpg";


const cardData = [
  {
    title: "Comprehensive",
    description: "Complete protection for your vehicle — covering accidents, theft, fire, and third-party damages.",
    image: one,
  },
  {
    title: 'Third Party (Auto Base)',
    description:
      'Affordable cover that protects against damage or injury caused to others by your vehicle.',
    image: two,
  },
  {
    title: 'Third Party',
    description:
      'Essential legal cover for third-party injuries or property damage from your vehicle..',
    image:  three,
  },
  {

    title: 'protection',
    description:
      'Convenient life cover designed to support your loved ones and secure their future with ease.',
    image: four,
  }
];




const Autoproduct = () => {

const [current, setCurrent] = useState(0);
  const visibleCards = 3;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % cardData.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      visible.push(cardData[(current + i) % cardData.length]);
    }
    return visible;
  };
  
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000); // change slide every 4 seconds
    
      return () => clearInterval(interval); // cleanup on unmount
    }, []);



  return (


    <>
    
     <div className="text-black py-10 px-4 container mx-auto md:block  hidden">
        <div className='flex items-center justify-between mb-10 mr-57'>
        <h1 className='text-black font-bold text-3xl ml-57 md:text-4xl text-start mb-6'>
            Auto Products
        </h1>
        
         <button
  onClick={() => setCurrent(cardData.length - visibleCards)}
  className="text-orange-500 font-semibold px-6 py-3 rounded hover:bg-orange-500 hover:text-white transition-all"
>
  See All →
</button>
        </div>
      

        <div className="flex items-center justify-center gap-4 mb-10">
          

          <div className="flex gap-6 ">
            {getVisibleCards().map((card, index) => (
              <div key={index} className="bg-white text-black rounded-lg overflow-hidden max-w-xs shadow-lg">
                <img src={card.image} alt={card.title} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h3 className="text-orange-500 text-lg font-bold mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-700">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
         
        </div>
    
      
    </div>


    <div className="text-black py-10  container mx-auto md:hidden block">
        <div className='flex items-center mb-10'>
        <h1 className='text-black font-bold text-3xl items-center w-full ml-22 '>
            Auto Products
        </h1>
        
         
        </div>
      

        <div className="flex items-center justify-center gap-4 mb-10">
          

          <div className=" gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {getVisibleCards().map((card, index) => (
              <div key={index} className="bg-white text-black rounded-lg overflow-hidden max-w-xs shadow-lg items-center">
                
                <img src ={card.image} alt={card.title} className="w-full h-56 object-cover " />
                
                <div className="p-4">
                  <h3 className="text-orange-500 text-lg font-bold mb-2 ml-20">{card.title}</h3>
                  <p className="text-sm text-gray-700 ">{card.description}</p>
                </div>

                <button
  onClick={() => setCurrent(cardData.length - visibleCards)}
  className="text-orange-500 font-semibold px-6 py-3 border-1 rounded hover:bg-orange-500 hover:text-white transition-all ml-20"
>
  See All →
</button>
              </div>
            ))}
          </div>
         
        </div>
    
      
    </div>
    
    
    </>
  )
}

export default Autoproduct