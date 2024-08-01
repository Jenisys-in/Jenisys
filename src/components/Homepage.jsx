import React, { useState } from "react";
import "../App.css";



const Home = () => {
  return (
    <div className="mt-[85px] flex-col relative">
      <div className="bg-white flex px-[70px] pt-[45px] gap-8">
        <div>
      <img
      src="../img/Jenisys Hero.png"
      className="w-[220px] h-[50px]"
      />
      <h1
      className="font-['Montserrat'] text-[40px] pl-[10px] pt-[20px] font-semibold">Revolutionize your business with Jenisys</h1>
      <h1
      className="font-['Montserrat'] text-[20px] pl-[10px] pt-[10px]">Jenisys: Where Innovation Begins. We craft top-tier <br></br>software and digital solutions, ensuring your business<br></br> thrives with unmatched quality and excellence. From<br></br> consultation to development, our expertise drives your <br></br> success beyond limits. </h1>
      <button className="ml-[10px] mt-[30px] bg-[#361CA9] text-white w-[250px] h-[67px] text-[24px] font-['Montserrat'] font-semibold rounded-[11px] shadow-[6px_7px_4px_rgba(0,0,0,0.25)]">Learn More</button>
      </div>
      <img
      src="../img/image 2.png"
      className=" w-[660px] h-[480px] mb-[80px]"
      />
      </div>
      <div className="bg-black flex px-[70px] relative w-full">
        <img 
        src="../img/Group 21.png "
        className="w-full h-[720px] "
        />
        {/* <h1 className="text-white absolute top-[300px] left-[250px]">Hello</h1> */}
        <div className="flex-col absolute">
        <img 
        src="../img/image 3.png"
        className="w-[550px] h-[330px] mt-[70px]"
        />
        <h1 className= "text-white font-['Montserrat'] font-extrabold text-[30px] pt-[40px] ">Our Vision</h1>
        <h1 className= "text-white font-['Montserrat']  text-[20px] pt-[20px]">Our vision is to be the leading transformative technology <br></br>solutions provider, empowering businesses with innovative<br></br> digital solutions and driving transformative growth.</h1>
        <button className=" mt-[30px]  bg-[#7526FE] text-white w-[250px] h-[67px] text-[24px] font-['Montserrat'] font-semibold rounded-[11px] shadow-[6px_7px_4px_rgba(0,0,0,0.25)]">Learn More</button>

        </div>
        <div className="absolute">
        <h1 className= "pl-[630px]   text-white font-['Montserrat'] font-extrabold text-[30px] pt-[60px]">Our Mission</h1>
        <div className="flex flex-row">
        <img 
        src="../img/bulb.png"
        className="pt-[50px] pl-[630px] "
        />
        <h1
        className="text-white pt-[50px] px-[20px] font-['Montserrat'] text-[20px] ">To Empower Businesses with Uncompromised Quality and Innovation.</h1>
        </div>
        <div className="flex flex-row">
        <img 
        src="../img/nano.png"
        className="pt-[50px] pl-[630px] "
        />
        <h1
        className="text-white pt-[50px] px-[20px] font-['Montserrat'] text-[20px] ">To Revolutionize Business Growth Through Superior Technology.</h1>
        </div>
        <div className="flex flex-row">
         <img 
        src="../img/arrow.png"
        className="pt-[50px] pl-[630px] "
        />
        <h1
        className="text-white pt-[50px] px-[20px] font-['Montserrat'] text-[20px] ">To Drive Success with Tailored, High-Quality Digital Solutions.</h1>
        </div>
        <div className="flex flex-row" >
         <img 
        src="../img/success.png"
        className="pt-[50px] pl-[630px] "
        />
        <h1
        className="text-white pt-[50px] px-[20px] font-['Montserrat'] text-[20px] ">To Create the Future of Business with Relentless Excellence.</h1>
        </div>
        
        </div>

      </div>
      <div className="flex flex-row bg-white gap-6 px-[70px] mt-[80px]">
        <div className="flex-col">
        <h1
        className="text-[35px] font-['Montserrat'] font-semibold">Innovative tech solutions for transformative growth</h1>
        <h1
        className="text-[30px] font-['Montserrat'] pt-[20px] font-bold">Our Values</h1>

        </div>

        <img 
        src="../img/image 4.png"
        />

      </div>
    
    </div>
  );
};

export default Home;
