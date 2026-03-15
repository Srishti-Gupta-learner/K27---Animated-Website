import React from "react";

const Card = (props) => {
  return (
    <div className="w-full h-[60vh] flex gap-4 mb-4">
      <div className="w-1/2 group h-full relative transition-all rounded-none hover:rounded-4xl overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={props.image1}
          alt="proj1"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 top-0 left-0 h-full w-full flex items-center justify-center  bg-black/20">
          <h2 className="text-3xl font-[font1] uppercase border-2 p-2 text-white border-white rounded-full">
            View Projects
          </h2>
        </div>
      </div>
      <div className="w-1/2 group h-full relative transition-all rounded-none hover:rounded-4xl overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={props.image2}
          alt="proj1"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 top-0 left-0 h-full w-full flex items-center justify-center  bg-black/20">
          <h2 className="text-3xl font-[font1] uppercase border-2 p-2 text-white border-white rounded-full">
            View Projects
          </h2>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
