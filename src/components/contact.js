
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
    <div className="flex overflow-hidden flex-col justify-center  bg-white max-md:px-5  mt-[85px] md:mt-0">
      <div className="text-center scroll-on-appear mt-28 font-['Montserrat']  md:text-[48px] font-bold tracking-tighter leading-tight text-black max-md:mt-10 max-md:text-4xl">
        Contact Us
      </div>
      <div className="flex md:px-[50px] md:pt-[40px]">
      <img
        src="/img/Logo.png"
        className="md:w-[80px] md:h-[75px]"
      />
      <h1 className="font-['Montserrat'] md:text-[35px] font-bold md:pt-[15px]">Request Service Assistance</h1>
      </div>
      <h1 className="font-['Montserrat'] md:text-[30px] md:pl-[50px] md:pr-[110px] md:pt-[40px] font-semibold">We’ve powered growth and impactful change across all industries, and we’re ready to turn your vision into reality. Tell us a bit about yourself, and we’ll set things in motion.</h1>
      <div className=" md:mt-[50px] bg-gradient-to-r from-[#000000] from-30% via-[#000000] from-74% via-[#1A163B]  from-74% via-[#1A163B] from-82% via-[#4A34F7] to-95% to-[#7D29FE] ">
      <div className="md:pl-[50px] w-screen grid grid-col-2 md:pt-[50px] md:gap-y-12">
        <div cla>
        <h1 className="font-['Montserrat'] md:text-[30px] font-semibold text-white">First Name*</h1>
        <input 
        className=" md:w-[460px] mt-2 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0" />
        </div>
        <div>
        <h1 className="font-['Montserrat'] md:text-[30px] font-semibold text-white">Last Name*</h1>
        <input
        className=" md:w-[460px] mt-2 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0"  />
        </div>
        <div>
        <h1 className="font-['Montserrat'] md:text-[30px] font-semibold text-white">E-Mail*</h1>
        <input 
        className=" md:w-[460px] mt-2 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0" />
        </div>
        <div>
        <h1 className="font-['Montserrat'] md:text-[30px] font-semibold text-white">Contact Number*</h1>
        <input
        className=" md:w-[460px] mt-2 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0"  />
        </div>
        <div className="col-span-2">
        <h1 className="font-['Montserrat'] md:text-[30px] font-semibold text-white">How can we help you ?</h1>
        <input
        className=" md:w-[460px] mt-2 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0"  />
        </div>
      </div>
      <div className="flex md:pl-[50px] md:mt-[50px]">
      <input type="checkbox" className="md:w-[30px] md:h-[30px] border-2 border-white " />
      <h1 className="text-white font-['Montserrat'] md:text-[24px] font-medium md:pl-[10px]">I authorize Jenisys to use my personal data to reach out to me.</h1> </div>
      <div className="flex md:pl-[50px] md:mt-[30px]">
      <input type="checkbox" className="md:w-[30px] md:h-[30px] border-2 border-white " />
      <h1 className="text-white font-['Montserrat'] md:text-[24px] font-medium md:pl-[10px]">I would like to recieve updates regarding products and services of Jenisys.</h1> </div>
      <h1 className="font-['Montserrat'] md:text-[24px] text-white md:pl-[50px] md:mt-[50px]">For more information, please refer to the <span className="font-extrabold">Privacy Policy</span> of Jenisys.</h1>
      <button className="bg-white text-black md:ml-[50px] md:mt-[50px] md:text-[36px] font-semibold w-[240px] h-[75px] rounded-[48px] mb-[90px] hover:shadow-lg hover:shadow-white">Send</button>
      </div>
      <div className=" w-screen bg-black md:h-[190px] h-[80px] justify-center items-center ">
        <h1 className=" font-['Montserrat'] font-semibold md:text-[26px] text-center text-white md:pt-[30px] pt-[10px] 3xl:text-[32px]">
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
