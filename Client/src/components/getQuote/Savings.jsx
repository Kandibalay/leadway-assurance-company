import React, { useState, useEffect,useRef} from 'react';
import one from "../../assets/images/womanone.png";
import two from "../../assets/images/wallettwo.png";
import three from "../../assets/images/womanthree.png";
import four from "../../assets/images/motherandchild.jpg";


const cardData = [
  {
    title: 'Leadway Savings Plan',
    description:
      'Secure your future with a flexible savings plan that helps you grow your wealth over time.',
    image: one,
  },
  {
    title: 'Personal Savings Plan',
    description:
      'Save at your own pace with a plan designed to help you reach personal financial goals.',
    image: two,
  },
  {
    title: 'Leadway Smart Cash Plan',
    description:
      'Enjoy regular payouts and life cover in one plan — smart savings with added protection.',
    image:  three,
  },
  {

    title: 'Education Target Plan',
    description:
      'Plan confidently for your child’s education with guaranteed payouts when school fees are due.',
    image: four,
  },
  {
    title: 'Leadway Savings Plan',
    description:
      'Secure your future with a flexible savings plan that helps you grow your wealth over time.',
    image: one,
  },
  {
    title: 'Personal Savings Plan',
    description:
      'Save at your own pace with a plan designed to help you reach personal financial goals.',
    image: two,
  },
  {
    title: 'Leadway Smart Cash Plan',
    description:
      'Enjoy regular payouts and life cover in one plan — smart savings with added protection.',
    image:  three,
  },
  {

    title: 'Education Target Plan',
    description:
      'Plan confidently for your child’s education with guaranteed payouts when school fees are due.',
    image: four,
  },
  
];

const Savings = () => {
  const [showAll, setShowAll] = useState(false);
  const carouselRef = useRef(null);

  // Optional: Auto-scroll carousel effect
  useEffect(() => {
    if (!showAll) {
      const interval = setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [showAll]);

  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="text-black py-10 px-6 md:px-10 lg:px-14 container mx-auto hidden md:block">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-black font-bold text-3xl md:text-4xl text-start">
          Savings & Investment
          </h1>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-orange-500 font-semibold px-6 py-3 rounded hover:bg-orange-500 hover:text-white transition-all"
          >
            {showAll ? "Show Less ←" : "See All →"}
          </button>
        </div>

        {showAll ? (
          <div className="grid grid-cols-4 gap-6">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col gap-2 items-center justify-center">
                  <h3 className="text-orange-500 font-bold text-md mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-center text-gray-700">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            ref={carouselRef}
            className="flex overflow-x-scroll gap-8 scroll-smooth no-scrollbar"
          >
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg overflow-hidden shadow-md flex-shrink-0 w-[calc(100%/3.5)]"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 flex flex-col gap-2 items-center justify-center">
                  <h3 className="text-orange-500 font-bold text-md mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-center text-gray-700">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MOBILE VIEW */}
      <div className="text-black py-10 container mx-auto md:hidden block">
        <div className="flex items-center justify-between mb-6 px-4">
          <h1 className="text-black font-bold text-3xl">General Products</h1>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-orange-500 font-semibold px-4 py-2 text-sm rounded hover:bg-orange-500 hover:text-white transition-all"
          >
            {showAll ? "Back" : "See All →"}
          </button>
        </div>

        {showAll ? (
          <div className="grid grid-cols-1 gap-4 px-4">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-orange-500 font-bold text-md mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-700">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-scroll no-scrollbar px-4">
            <div className="flex gap-4">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="bg-white text-black rounded-lg overflow-hidden shadow-md flex-shrink-0 w-64"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="text-orange-500 font-bold text-md mb-1">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-700">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Savings;







// const Savings = () => {
//   const [current, setCurrent] = useState(0);
//     const visibleCards = 3;
  
//     const nextSlide = () => {
//       setCurrent((prev) => (prev + 1) % cardData.length);
//     };
  
//     const prevSlide = () => {
//       setCurrent((prev) => (prev - 1 + cardData.length) % cardData.length);
//     };
  
//     const getVisibleCards = () => {
//       const visible = [];
//       for (let i = 0; i < visibleCards; i++) {
//         visible.push(cardData[(current + i) % cardData.length]);
//       }
//       return visible;
//     };
    
//     useEffect(() => {
//       const interval = setInterval(() => {
//         nextSlide();
//       }, 4000); // change slide every 4 seconds
    
//       return () => clearInterval(interval); // cleanup on unmount
//     }, []);
      




//   return (


  
//     <>
//     <div className="text-black py-10 px-4 container mx-auto md:block hidden">
//         <div className='flex items-center justify-between mb-10 mr-57'>
//         <h1 className='text-black font-bold text-3xl ml-57 md:text-4xl text-start mb-6'>
//             Savings & Investment
//         </h1>
        
//          <button
//   onClick={() => setCurrent(cardData.length - visibleCards)}
//   className="text-orange-500 font-semibold px-6 py-3 rounded hover:bg-orange-500 hover:text-white transition-all"
// >
//   See All →
// </button>
//         </div>
      

//         <div className="flex items-center justify-center gap-4 mb-10">
          

//           <div className="flex gap-6">
//             {getVisibleCards().map((card, index) => (
//               <div key={index} className="bg-white text-black rounded-lg overflow-hidden max-w-xs shadow-lg">
//                 <img src={card.image} alt={card.title} className="w-full h-56 object-cover" />
//                 <div className="p-4">
//                   <h3 className="text-orange-500 text-lg font-bold mb-2">{card.title}</h3>
//                   <p className="text-sm text-gray-700">{card.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
         
//         </div>
    
      
//     </div>

//            <div className="text-black py-10  container mx-auto md:hidden block">
//         <div className='flex items-center mb-10'>
//         <h1 className='text-black font-bold text-3xl items-center w-full ml-22 '>
//             Savings & Investment
//         </h1>
        
         
//         </div>
      

//         <div className="flex items-center justify-center gap-4 mb-10">
          

//           <div className=" gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//             {getVisibleCards().map((card, index) => (
//               <div key={index} className="bg-white text-black rounded-lg overflow-hidden max-w-xs shadow-lg items-center">
                
//                 <img src ={card.image} alt={card.title} className="w-full h-56 object-cover " />
                
//                 <div className="p-4">
//                   <h3 className="text-orange-500 text-lg font-bold mb-2 ml-20">{card.title}</h3>
//                   <p className="text-sm text-gray-700 ">{card.description}</p>
//                 </div>

//                 <button
//   onClick={() => setCurrent(cardData.length - visibleCards)}
//   className="text-orange-500 font-semibold px-6 py-3 border-1 rounded hover:bg-orange-500 hover:text-white transition-all ml-20"
// >
//   See All →
// </button>
//               </div>
//             ))}
//           </div>
         
//         </div>
    
      
//     </div>
    
    
//     </>
//   )
// }

// export default Savings