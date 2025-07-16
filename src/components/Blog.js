

import React from "react"; // eslint-disable-line
import "../app/global.css"; 



function Blog() {
  return (<div className="overflow-x-hidden">
    <div className="flex justify-center items-center h-screen"> 
    <div className="border-2 flex flex-col justify-center items-center p-32 rounded-[90px] hover:shadow-[#361CA9] hover:shadow-lg transition duration-300"> 
      <a href="/">
      <img 
        src="../img/Jenisys Hero.png"
        alt="logo"
        className="md:shadow-2xl hover:shadow-[#361CA9] transition duration-300 aspect-auto"

      /></a>
      <h1 className="font-['Montserrat'] md:text-[1.5rem] text-center md:mt-16">
        This page is currently under construction. Stay tuned!
      </h1>
    </div>
    
  </div>
  <div className=" w-screen bg-black md:h-[190px] h-[80px] justify-center items-center ">
  <h1 className=" font-['Montserrat'] font-semibold md:text-[26px] text-center text-white md:pt-[30px] pt-[10px] 3xl:text-[32px]">
    Follow Us On
  </h1>
  <div className="flex flex-row justify-center items-center md:gap-8 md:mt-[20px] mt-[10px] gap-4">
          <a href="https://www.instagram.com/jenisys.in/" target="_blank" rel="noopener noreferrer">
          <div className="bg-[#A3A3A3] md:h-[50px] md:w-[50px] w-[16px] h-[16px] rounded-full flex justify-center items-center">
            <img
              src="../img/mdi_instagram.png"
              className="md:h-[34px] md:w-[34px] w-[12px] h-[12px]"
            />
          </div>
          </a>
          <a href="https://www.linkedin.com/company/jenisys" target="_blank" rel="noopener noreferrer">
          <div className="bg-[#A3A3A3] md:h-[50px] md:w-[50px] w-[16px] h-[16px] rounded-full flex justify-center items-center">
            <img
              src="../img/linkedIn.png"
              className="md:h-[34px] md:w-[34px] w-[12px] h-[12px]"
            />
          </div>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <div className="bg-[#A3A3A3] md:h-[50px] md:w-[50px] w-[16px] h-[16px] rounded-full flex justify-center items-center">
            <img
              src="../img/facebook.png"
              className="md:h-[34px] md:w-[34px] w-[12px] h-[12px]"
            />
          </div>
          </a>
        </div>
</div>
</div>
  
  );
}

export default Blog;
