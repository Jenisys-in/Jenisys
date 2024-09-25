
"use client";

import React, { useEffect } from "react";
import "../app/global.css"; 

function Contact() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold to suit the effect you want
    );

    const elements = document.querySelectorAll(".scroll-on-appear");
    elements.forEach((element) => observer.observe(element));

    return () => {
      if (elements && elements.length > 0) {
        elements.forEach((element) => observer.unobserve(element));
      }
    };
  }, []);
  return (
    <div className="flex overflow-hidden flex-col justify-center  bg-white max-md:mt-[50px]   md:mt-[85px] md:mt-0">
      <div className="text-center scroll-on-appear mt-20 font-['Montserrat']  md:text-[48px] font-bold tracking-tighter leading-tight text-black max-md:mt-10 max-md:text-[21px]">
        Contact Us
      </div>
      <div className="flex md:px-[50px] md:pt-[40px] max-md:px-[10px] max-md:pt-[20px]">
      <img
        src="/img/Logo.png"
        className="w-[25px] h-[25px] md:w-[80px] md:h-[75px]"
      />
      <h1 className="font-['Montserrat'] text-[15px] md:text-[35px] font-bold max-md:pt-[2px] md:pt-[15px] ">Request Service Assistance</h1>
      </div>
      <h1 className="font-['Montserrat'] md:text-[30px] max-md:text-[12px] md:pl-[50px] md:pr-[110px] md:pt-[40px] max-md:pt-[10px] font-semibold max-md:px-[10px]">We’ve powered growth and impactful change across all industries, and we’re ready to turn your vision into reality. Tell us a bit about yourself, and we’ll set things in motion.</h1>
      <div className="max-md:mt-[20px] md:mt-[50px] bg-gradient-to-r from-[#000000] from-30% via-[#000000] from-74% via-[#1A163B]  from-74% via-[#1A163B] from-82% via-[#4A34F7] to-95% to-[#7D29FE] max-md:px-[10px]">
      <div className="md:pl-[50px] w-screen grid grid-col-2 md:pt-[50px]  max-md:pt-[30px] md:gap-y-12">
        <div >
        <h1 className="font-['Montserrat'] md:text-[30px] font-semibold text-white max-md:text-[10px]">First Name*</h1>
        <input 
        className=" max-md:w-[170px] text-[25px] md:w-[460px]  md:mt-4 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0" />
        </div>
        <div>
        <h1 className="font-['Montserrat'] md:text-[30px] font-semibold text-white max-md:text-[10px]">Last Name*</h1>
        <input
        className="max-md:w-[170px] text-[25px] md:w-[460px] md:mt-4 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0"  />
        </div>
        <div>
        <h1 className="font-['Montserrat'] md:text-[30px] font-semibold text-white max-md:text-[10px] max-md:pt-[30px]">E-Mail*</h1>
        <input 
        className="max-md:w-[170px] text-[25px] md:w-[460px] md:mt-4 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0" />
        </div>
        <div>
        <h1 className="font-['Montserrat'] md:text-[30px] font-semibold text-white max-md:text-[10px] max-md:pt-[30px]">Contact Number*</h1>
        <input
        className="max-md:w-[170px] text-[25px] md:w-[460px] md:mt-4 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0"  />
        </div>
        <div className="col-span-2">
        <h1 className="font-['Montserrat'] md:text-[30px] font-semibold text-white max-md:text-[10px] max-md:pt-[30px]">How can we help you ?</h1>
        <input
        className="max-md:w-[220px] text-[25px] md:w-[460px] md:mt-4 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0"  />
        </div>
      </div>
      <div className="flex md:pl-[50px] md:mt-[50px] max-md:mt-[20px]">
      <input type="checkbox" className="md:w-[30px] md:h-[30px] border-2 border-white max-md:mt-[30px] " />
      <h1 className="text-white font-['Montserrat'] md:text-[24px] text-[10px] font-medium pl-[10px] max-md:pt-[30px]">I authorize Jenisys to use my personal data to reach out to me.</h1> </div>
      <div className="flex md:pl-[50px] md:mt-[30px]">
      <input type="checkbox" className="md:w-[30px] md:h-[30px] border-2 border-white max-md:mt-[30px] " />
      <h1 className="text-white font-['Montserrat'] md:text-[24px] text-[10px] font-medium pl-[10px] max-md:mt-[30px]">I would like to recieve updates regarding products and services of Jenisys.</h1> </div>
      <h1 className="font-['Montserrat'] md:text-[24px] text-white text-[10px] md:pl-[50px] md:mt-[50px] max-md:mt-[30px]">For more information, please refer to the <span className="font-extrabold">Privacy Policy</span> of Jenisys.</h1>
      <button className="bg-white text-black md:ml-[50px] md:mt-[50px] max-md:mt-[30px] max-md:text-[10px] md:text-[36px] font-semibold max-md:w-[69px] max-md:h-[22px] md:w-[240px] md:h-[75px] max-md:h-[20px]  max-md:rounded-[20px]  md:rounded-[48px] max-md:mb-[20px] md:mb-[90px] hover:shadow-lg hover:shadow-white">Send</button>
      </div>
      <div className=" w-screen bg-black md:h-[190px] max-md:h-[190px] justify-center items-center ">
        <h1 className=" font-['Montserrat'] font-semibold md:text-[26px] text-center text-white md:pt-[30px] max-md:pt-[50px] 3xl:text-[32px]">
          Follow Us On
        </h1>
        <div className="flex flex-row justify-center items-center md:gap-8 md:mt-[20px] mt-[10px] gap-4">
          <div className="bg-[#A3A3A3] md:h-[50px] md:w-[50px] w-[16px] h-[16px] rounded-full flex justify-center items-center">
            <img
              src="../img/mdi_instagram.png"
              className="md:h-[34px] md:w-[34px] w-[12px] h-[12px]"
            />
          </div>
          <div className="bg-[#A3A3A3] md:h-[50px] md:w-[50px] w-[16px] h-[16px] rounded-full flex justify-center items-center">
            <img
              src="../img/linkedIn.png"
              className="md:h-[34px] md:w-[34px] w-[12px] h-[12px]"
            />
          </div>
          <div className="bg-[#A3A3A3] md:h-[50px] md:w-[50px] w-[16px] h-[16px] rounded-full flex justify-center items-center">
            <img
              src="../img/facebook.png"
              className="md:h-[34px] md:w-[34px] w-[12px] h-[12px]"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
