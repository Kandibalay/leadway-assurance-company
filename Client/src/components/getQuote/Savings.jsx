import React, { useState, useEffect} from 'react';
import one from "../../assets/images/womanone.png";
import two from "../../assets/images/wallettwo.png";
import three from "../../assets/images/womanthree.png";
import four from "../../assets/images/motherandchild.jpg";


const cardData = [
  {
    title: 'Householder',
    description:
      'Protect your home and belongings from fire, theft, and unexpected events — for peace of mind every day.',
    image: one,
  },
  {
    title: 'Home Flexa',
    description:
      'Essential cover for your home against fire, lightning, explosions, and related risks.',
    image: two,
  },
  {
    title: 'Happy',
    description:
      'Affordable life cover designed to support your loved ones and secure their future with ease.',
    image:  three,
  },
  {

    title: 'Satisfaction',
    description:
      'Convenient life cover designed to support your loved ones and secure their future with ease.',
    image: four,
  }
];







const Savings = () => {
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
    <div className="text-black py-10 px-4">
        <div className='flex items-center justify-between mb-10 mr-57'>
        <h1 className='text-black font-bold text-3xl ml-57 md:text-4xl text-start mb-6'>
            Savings & Investment
        </h1>
        
         <button
  onClick={() => setCurrent(cardData.length - visibleCards)}
  className="text-orange-500 font-semibold px-6 py-3 rounded hover:bg-orange-500 hover:text-white transition-all"
>
  See All →
</button>
        </div>
      

        <div className="flex items-center justify-center gap-4 mb-10">
          

          <div className="flex gap-6">
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
    
    </>
  )
}

export default Savings