
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
    <div className="flex overflow-hidden flex-col items-center px-20  bg-white max-md:px-5  mt-[85px] md:mt-0">
      <div className="scroll-on-appear mt-28 font-['Montserrat']  text-5xl font-bold tracking-tighter leading-tight text-black max-md:mt-10 max-md:text-4xl">
        Contact Us
      </div>
      <div className="scroll-on-appear mt-11 font-['Montserrat']  text-lg font-semibold tracking-tight leading-8 text-center text-black w-[915px] max-md:mt-10 max-md:max-w-full ">
        If you have any questions about our services, want to discuss a
        potential collaboration, or just need advice on your tech strategy, our
        team is here to help. Get in touch with us today.
      </div>
      <div className="scroll-on-appear font-['Montserrat']  mt-20 max-pm:text-3xl  text-4xl font-bold tracking-tighter leading-tight text-black max-md:mt-10 max-md:max-w-full px-[40px] md:px-0">
        Contact our team for a consultation
      </div>
      <div className="scroll-on-appear max-pm:mt-[10px] mt-20 w-full max-w-[1147px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center leading-tight text-black max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c259cefb2f8833ec7b6a447f60406cf5d2903ef4a0874fdc696704a888fb5287?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c259cefb2f8833ec7b6a447f60406cf5d2903ef4a0874fdc696704a888fb5287?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c259cefb2f8833ec7b6a447f60406cf5d2903ef4a0874fdc696704a888fb5287?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c259cefb2f8833ec7b6a447f60406cf5d2903ef4a0874fdc696704a888fb5287?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c259cefb2f8833ec7b6a447f60406cf5d2903ef4a0874fdc696704a888fb5287?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c259cefb2f8833ec7b6a447f60406cf5d2903ef4a0874fdc696704a888fb5287?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c259cefb2f8833ec7b6a447f60406cf5d2903ef4a0874fdc696704a888fb5287?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c259cefb2f8833ec7b6a447f60406cf5d2903ef4a0874fdc696704a888fb5287?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392"
                className="object-contain max-w-full rounded-lg aspect-square w-[105px]"
              />
              <div className="font-['Montserrat']  mt-7 text-3xl font-semibold tracking-tight">
                Talk to our Team
              </div>
              <div className="font-['Montserrat'] text-center self-stretch mt-6  text-xl tracking-tight">
                +14047365291, +918240384648
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center leading-tight text-black max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b9e360ac99f97e7e9c7fbc97a2002af4ee2f1252bd083a868dc859b84d53d3a3?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9e360ac99f97e7e9c7fbc97a2002af4ee2f1252bd083a868dc859b84d53d3a3?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9e360ac99f97e7e9c7fbc97a2002af4ee2f1252bd083a868dc859b84d53d3a3?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9e360ac99f97e7e9c7fbc97a2002af4ee2f1252bd083a868dc859b84d53d3a3?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9e360ac99f97e7e9c7fbc97a2002af4ee2f1252bd083a868dc859b84d53d3a3?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9e360ac99f97e7e9c7fbc97a2002af4ee2f1252bd083a868dc859b84d53d3a3?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9e360ac99f97e7e9c7fbc97a2002af4ee2f1252bd083a868dc859b84d53d3a3?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9e360ac99f97e7e9c7fbc97a2002af4ee2f1252bd083a868dc859b84d53d3a3?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392"
                className="object-contain max-w-full rounded-lg aspect-square w-[105px]"
              />
              <div className="font-['Montserrat']   mt-7 text-3xl font-semibold tracking-tight">
                Email Us
              </div>
              <div className="font-['Montserrat']  self-stretch mt-5  text-xl tracking-tight text-center">
                tuhin.das@jenisys.in
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center leading-tight text-black max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/953cbefbd3c0e319848d7047fb41a447c592c28c3c451256fe18472cb73f56d1?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/953cbefbd3c0e319848d7047fb41a447c592c28c3c451256fe18472cb73f56d1?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/953cbefbd3c0e319848d7047fb41a447c592c28c3c451256fe18472cb73f56d1?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/953cbefbd3c0e319848d7047fb41a447c592c28c3c451256fe18472cb73f56d1?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/953cbefbd3c0e319848d7047fb41a447c592c28c3c451256fe18472cb73f56d1?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/953cbefbd3c0e319848d7047fb41a447c592c28c3c451256fe18472cb73f56d1?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/953cbefbd3c0e319848d7047fb41a447c592c28c3c451256fe18472cb73f56d1?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/953cbefbd3c0e319848d7047fb41a447c592c28c3c451256fe18472cb73f56d1?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392"
                className="object-contain max-w-full rounded-lg aspect-square w-[105px]"
              />
              <div className="font-['Montserrat']  self-stretch mt-7  text-3xl font-semibold tracking-tight text-center">
                Operating Hours
              </div>
              <div className="mt-4 text-xl tracking-tight font-['Montserrat'] ">Call us anytime you want ;)</div>
            </div>
          </div>
        </div>
      </div>
      <img
       loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392"
      className="md:hidden block object-contain grow w-full h-[300px] rounded-md aspect-[1.03] max-md:mt-5  max-md:max-w-full"
      />
      <div className="scroll-on-appear mt-32 w-full max-w-[1325px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-28 w-full leading-tight text-black max-md:mt-10 max-md:max-w-full">
              <div className="font-['Montserrat']  self-start text-5xl font-bold tracking-tighter max-md:text-4xl">
                Let’s Talk Tech
              </div>
              <div className="md:flex md:flex-row flex-col gap-5 items-start md:mt-20 max-md:mt-3 max-md:mr-0.5 max-md:max-w-full">
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
                  <div className="self-start text-2xl font-semibold tracking-tight font-['Montserrat']  md:mt-0 mt-[20px]">
                    Name
                  </div>
                  <input
                    className="md:w-[267px] md:mt-[10px]  md:h-[48px] w-[376px] h-[40px] max-pm:w-[352px] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] border-[rgba(0,0,0,0.25)] border-[0.5px] font-light font-['Montserrat']  top-[14px] left-[13px] tracking-[-0.02em] leading-[120%] text-black text-left inline-block h-5 p-0 z-[1]"
                    placeholder="Ex. Parker"
                    type="text"
                  />
                </div>
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
                  <div className="self-start font-['Montserrat']  text-2xl font-semibold tracking-tight md:mt-0 mt-[20px]">
                    Email
                  </div>
                  <input
                    className="md:w-[267px] font-['Montserrat']  md:mt-[10px] md:h-[48px] max-pm:w-[352px] w-[376px] h-[40px] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] border-[rgba(0,0,0,0.25)] border-[0.5px] font-light   top-[14px] left-[13px] tracking-[-0.02em] leading-[120%] text-black text-left inline-block h-5 p-0 z-[2]"
                    placeholder="Ex. yourmail@gmail.com"
                    type="text"
                  />
                </div>
              </div>
              <div className="self-start  md:mt-12 font-['Montserrat']  text-2xl font-semibold tracking-tight mt-[20px]">
                Message
              </div>
              <input
                className="md:w-[576px] md:mt-[10px] md:h-[48px] w-[376px] h-[40px] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] border-[rgba(0,0,0,0.25)] border-[0.5px] font-light font-['Montserrat']  text-mini bg-[transparent] h-5 relative tracking-[-0.02em] leading-[120%] text-black text-left inline-block max-w-full p-0 z-[1]"
                placeholder="Type Your Message Here"
                type="text"
              />
              <button className="font-['Montserrat'] max-pm:py-6  px-16 py-8 mt-14 text-2xl font-semibold tracking-tight text-white bg-indigo-800 rounded-md max-md:px-5 max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392"
              className="hidden md:block object-contain grow w-full rounded-md aspect-[1.03] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className=" w-screen bg-black md:h-[170px] h-[80px] md:mt-[100px] justify-center items-center  ">
        <h1 className=" font-['Montserrat'] font-semibold md:text-[26px] text-center text-white md:pt-[30px] pt-[10px]">
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
