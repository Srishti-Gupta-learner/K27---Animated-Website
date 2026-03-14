import React from "react";
import { Link } from "react-router-dom";

const HomeBottom = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2">
      <div className="lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center px-0 pt-5  lg:px-14 border-white uppercase rounded-full">
        <Link className="text-[6vw] lg:mt-6 " to='/project'>
          Project
        </Link>
      </div>
      <div className="lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center px-0 pt-5 lg:px-14 border-white uppercase rounded-full">
        <Link className="text-[6vw] lg:mt-6 " to='/agent'>
          Agents
        </Link>
      </div>
    </div>
  );
};

export default HomeBottom;
