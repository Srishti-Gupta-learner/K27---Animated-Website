import React from "react";
import Video from "./Video";

const HomeTop = () => {
  return (
    <div className="font-[font1]">
      <div className="text-[8vw] text-center  justify-center flex items-center uppercase leading-[8vw]">
        {" "}
        The spark for
      </div>
      <div className="text-[8vw] text-center justify-center flex items-center uppercase lg:leading-[8vw]  leading-[8vw]">
        all
        <div className="h-[7vw] w-[16vw] rounded-full mt-3 overflow-hidden ">
               <Video />
        </div>
        things
      </div>
      <div className="text-[8vw] text-center  justify-center flex items-center uppercase leading-[8vw]">
        CREATIVE
      </div>
    </div>
  );
};

export default HomeTop;
