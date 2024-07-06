import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import "../App.css";

const StyledText = styled.h1`
    font-family: "League Spartan";
    color: #FFFBEB
    font-size: auto;
`;

function Home() {
    return(
        
        <div>
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 bg-[#0c0741]">
          <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full border-[#0c0741]">
            <img
              loading="lazy"
              src="/img/Rectangle 2.png"
              className=" w-[888px] h-[777px] px-[37px] py-[114px] border border-solid shadow-sm aspect-[1.14] border-slate-900 max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
              <div className="text-6xl font-bold tracking-tighter text-white bg-clip-text leading-[76.8px] max-md:max-w-full max-md:text-4xl">
                
                <span className="">This is - </span>
                <span className="">Jenisys </span>
                
              </div>
              <StyledText>
              <div className="mt-20 text-2xl font-medium tracking-tight leading-7 text-amber-50 w-[461px] max-md:mt-10 max-md:max-w-full">
                Welcome to Stellar Innovations Inc., where technology meets
                ingenuity. Established in 2010, we are a leading provider of
                innovative solutions designed to enhance the way businesses
                operate. Our headquarters are located in Silicon Valley, the heart
                of technological advancement, but our impact reaches globally.
              </div>
              </StyledText>
              <div className="flex  tp-[30px] py-10">
              
              <button className="lex items-center justify-center text-[#1E1E1E] rounded-full bg-[#FFFBEB] w-[183px] h-[57px]">
               <MdModeEdit  className=" pl-[10px]  w-[24px] h-[24px]" />
              Learn More
            </button>
            </div>
            </div>
           
          </div>
        </div>
      </div>

    );



}
export default Home; 