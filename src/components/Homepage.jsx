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
      <div className="flex flex-row bg-white gap-6 px-[70px] mt-[80px] mb-[140px]">
        <div className="flex-col">
        <h1
        className="text-[35px] font-['Montserrat'] font-semibold">Innovative tech solutions for transformative growth</h1>
        <h1
        className="text-[30px] font-['Montserrat'] pt-[20px] font-bold">Our Values</h1>
        <div className="flex flex-row gap-6">
          <div className="flex-col ">
        <h1
        className="text-[19px] font-['Montserrat'] pt-[20px] font-semibold">Unmatched Quality and Excellence</h1>
        <h1
        className="text-[15px] font-['Montserrat'] pt-[20px] ">We pride ourselves on delivering top-<br></br>tier quality and excellence in every<br></br> aspect of our work.</h1>
        </div>
        <div className="flex-col">
         <h1
        className="text-[19px] font-['Montserrat'] pt-[20px] font-semibold">Innovation and Creativity</h1>
        <h1
        className="text-[15px] font-['Montserrat'] pt-[20px] ">We continuously push the boundaries of <br></br>innovation and creativity to deliver cutting-<br></br>edge solutions for our clients.</h1>
        </div>

        </div>

        </div>

        <img 
        src="../img/image 4.png"
        />

      </div>
      <div className="relative flex-col " >
      <img
      src ="../img/Services.png"
      className="w-full"
      />
      <h1 className="text-white font-['Montserrat'] text-[32px] font-extrabold absolute bottom-[355px] left-[80px]">
        Our Services
      </h1>
      <h1 className="text-white font-['Montserrat'] text-[44px] font-bold absolute bottom-[200px] left-[80px]">
      The future is flexible. Partner with <br></br> us to outsoure Your <span className="text-[#7F4BED] font-extrabold">Tech Needs</span>
      </h1>
      <button className="  bg-[#7526FE] text-white w-[250px] h-[67px] text-[24px] font-['Montserrat'] font-semibold rounded-[11px] absolute bottom-[250px] left-[1035px] ">Learn More</button>
      <div className="flex-row  px-[125px] ">
      <div className=" absolute justify-center bg-white border-2 border-black rounded-[17px] -bottom-[280px] h-[387px] w-[261px]">
      <h1 className="text-center font-semibold font-['Montserrat'] text-[20px] pt-[75px]">Custom Software Development</h1>
      <h1 className="text-center  font-['Montserrat'] text-[16px] pt-[20px] px-[25px]">It involves creating software tailored to meet specific needs or requirements of a business or user.</h1>
      <button className=" shadow-[6px_7px_4px_rgba(0,0,0,0.25)] mx-[53px] mt-[25px] bg-[#7526FE] text-white w-[147px] h-[49px] text-[20px] font-['Montserrat'] font-semibold rounded-[4px] ">Read More</button>

      </div>
      <div className="absolute justify-center bg-white border-2 border-black -bottom-[280px] rounded-[17px] left-[410px] h-[387px] w-[261px]">
      <h1 className="text-center font-semibold font-['Montserrat'] text-[20px] pt-[75px]">Web & Mobile App Development</h1>
      <h1 className="text-center  font-['Montserrat'] text-[16px] pt-[20px] px-[25px]">It involves creating applications that can be accessed on both web browsers and mobile devices.</h1>
      <button className=" shadow-[6px_7px_4px_rgba(0,0,0,0.25)] mx-[53px] mt-[25px] bg-[#7526FE] text-white w-[147px] h-[49px] text-[20px] font-['Montserrat'] font-semibold rounded-[4px] ">Read More</button>

      </div>
      <div className="absolute justify-center bg-white border-2 border-black -bottom-[280px] rounded-[17px] left-[695px] h-[387px] w-[261px]">
      <h1 className="text-center font-semibold font-['Montserrat'] text-[20px] pt-[75px]">IT Consulting & Digital Transformation</h1>
      <h1 className="text-center  font-['Montserrat'] text-[16px] pt-[20px] px-[25px]">It involves guiding businesses in using technology to improve operations and achieve goals.</h1>
      <button className=" shadow-[6px_7px_4px_rgba(0,0,0,0.25)] mx-[53px] mt-[25px] bg-[#7526FE] text-white w-[147px] h-[49px] text-[20px] font-['Montserrat'] font-semibold rounded-[4px] ">Read More</button>

      </div>
      <div className=" absolute justify-center bg-white border-2 border-black -bottom-[280px] rounded-[17px] left-[980px] h-[387px] w-[261px]">
      <h1 className="text-center font-semibold font-['Montserrat'] text-[20px] pt-[75px]">Maintenance, Support<br></br>& Cybersecurity</h1>
      <h1 className="text-center  font-['Montserrat'] text-[16px] pt-[20px] px-[25px]">It involves updates, user assistance, & protection against cyber threats to maintain system integrity and user trust.</h1>
      <button className=" shadow-[6px_7px_4px_rgba(0,0,0,0.25)] mx-[53px] mt-[25px] bg-[#7526FE] text-white w-[147px] h-[49px] text-[20px] font-['Montserrat'] font-semibold rounded-[4px] ">Read More</button>

      </div>

      </div>
      
      </div>
      <div className="mt-[420px] relative w-full">
      <img 
        src="../img/Group 21.png "
        className="w-full h-[800px] "
        />
        <div className="flex-col absolute">
        <h1 className="text-white font-['Montserrat'] text-[32px] font-bold absolute bottom-[800px] left-[80px]">
        Testimonials
      </h1>
      
      <h1 className="relative text-white font-['Montserrat'] text-[40px] font-semibold absolute bottom-[660px] left-[80px]">
      Our positive feedbacks from clients highlight our<br></br>abilities in delivering outstanding results
      </h1>
        </div>
        <div className="flex-row flex">
        <div className="flex-col">
            <h1
            className="relative text-white font-['Montserrat'] text-[18px] font-medium absolute bottom-[510px] left-[80px]">Jenisys has been an incredible partner in driving our digital<br></br>transformation. Their expertise in custom software development<br></br>and cloud computing has been invaluable in optimizing our<br></br>operations and driving growth.</h1>
            <h1
            className="relative text-white font-['Montserrat'] text-[28px] font-bold absolute bottom-[490px] left-[140px]">Tuhin Das</h1>
            <h1
            className="relative text-white font-['Montserrat'] text-[20px]  absolute bottom-[490px] left-[140px]">Company Name, City</h1>
            <h1
            className="relative text-white font-['Montserrat'] text-[18px] font-medium absolute bottom-[450px] left-[80px]">Jenisys has been an incredible partner in driving our digital<br></br>transformation. Their expertise in custom software development<br></br>and cloud computing has been invaluable in optimizing our<br></br>operations and driving growth.</h1>
            <h1
            className="relative text-white font-['Montserrat'] text-[28px] font-bold absolute bottom-[430px] left-[140px]">Tuhin Das</h1>
            <h1
            className="relative text-white font-['Montserrat'] text-[20px]  absolute bottom-[430px] left-[140px]">Company Name, City</h1>


        </div>
        <div className="flex-col pl-[60px]">
        <h1
            className="relative text-white font-['Montserrat'] text-[18px] font-medium absolute bottom-[510px] left-[80px]">Jenisys has been an incredible partner in driving our digital<br></br>transformation. Their expertise in custom software development<br></br>and cloud computing has been invaluable in optimizing our<br></br>operations and driving growth.</h1>
            <h1
            className="relative text-white font-['Montserrat'] text-[28px] font-bold absolute bottom-[490px] left-[140px]">Tuhin Das</h1>
            <h1
            className="relative text-white font-['Montserrat'] text-[20px]  absolute bottom-[490px] left-[140px]">Company Name, City</h1>
            <h1
            className="relative text-white font-['Montserrat'] text-[18px] font-medium absolute bottom-[450px] left-[80px]">Jenisys has been an incredible partner in driving our digital<br></br>transformation. Their expertise in custom software development<br></br>and cloud computing has been invaluable in optimizing our<br></br>operations and driving growth.</h1>
            <h1
            className="relative text-white font-['Montserrat'] text-[28px] font-bold absolute bottom-[430px] left-[140px]">Tuhin Das</h1>
            <h1
            className="relative text-white font-['Montserrat'] text-[20px]  absolute bottom-[430px] left-[140px]">Company Name, City</h1>


        </div>
        </div>
      </div>
      <div className="absolute bottom-[300px]">
        <h1>Hello</h1>
      </div>
    
    </div>
  );
};

export default Home;
