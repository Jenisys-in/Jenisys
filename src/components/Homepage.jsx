import React from "react";
import "../App.css";
import "@fontsource/lexend-exa";

function Home() {
  return (
    <div className="mt-[90px] flex flex-col grow shrink-0 items-center text-2xl basis-0 w-fit max-md:max-w-full bg-[#5851AD] min-h-screen">
      <div className="flex">
        <div className="text-6xl font-bold tracking-tighter text-white bg-clip-text leading-[76.8px] max-md:max-w-full max-md:text-4xl">
          <h1 className="mt-[50px] w-[731px] text-center relative text-inherit tracking-[-0.03em] leading-[120%] font-bold font-['Lexend_Exa'] inline-block shrink-0 ">
            <span>{`This is - `}</span>
            <span className="text-transparent !bg-clip-text [background:linear-gradient(90deg,_#fff,_#8a72ce_51.4%,_#694ac0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Jenisys
            </span>
            <span className="text-transparent !bg-clip-text [background:linear-gradient(90deg,_#fff,_#382966_93.4%,_#694ac0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{` `}</span>
          </h1>
        </div>
      </div>
      <div className="flex">
        <section className="self-stretch ml-[60px] mt-3  px-2 py-3 font-medium tracking-tight leading-7 text-[24px] text-center text-amber-50 max-md:max-w-full font-league-spartan">
          <p className="line-height-[120%] letter-spacing-[-2%]">
            Welcome to Stellar Innovations Inc., where technology meets
            ingenuity. Established in 2010, we are a leading provider of
            innovative solutions designed to enhance the way businesses operate.
            Our headquarters are located in Silicon Valley, the heart of
            technological advancement, but our impact reaches globally.
          </p>
        </section>
        <img
          src="/img/ellipse.jpeg"
          alt="Logo"
          className="-mr-[40px] -mt-[40px] w-21 h-20 rounded-full"
        />
        <img
          src="/img/ellipse.jpeg"
          alt="Logo"
          className="mr-[50px] mt-[70px] w-19 h-12 rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center mt-5 max-w-full tracking-normal text-center bg-amber-50 shadow-md leading-[133%] rounded-[30px] text-[color:var(--sds-color-text-default-default)] w-[183px] max-md:mt-10">
        <div className="flex gap-3 justify-center  py-3.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9afb6dcba9f05d54e0df071a9722482e614fd8d31d6f128b5899af272ff40509?apiKey=150ca4726f0b413090f132e093d2a392&"
            className="shrink-0 my-auto w-6 aspect-square"
          />
          <div>Learn More</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
