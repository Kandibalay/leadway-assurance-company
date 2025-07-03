import React from "react";
import { Leaders } from "../../Db";

const Leadership = () => {
  return (
    <div className="text-black px-6 mx:px-10 lg:px-14 py-10 container mx-auto">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[28px] lg:text-[36px] font-bold text-center mb-4">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Leaders.map((leader) => (
            <div key={leader.id}
            className="transition-transform transform hover:scale-110">
              <img src={leader.image} alt={leader.name} />
              <h3 className="text-center font-semibold text-[18px]">{leader.name}</h3>
              <p className="text-center text-[14px]">{leader.position}</p>
              {leader.title && <p className="text-center text-[14px]">{leader.title}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
