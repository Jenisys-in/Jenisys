import React from "react";
import "../App.css";
import "@fontsource/lexend-exa";

const Home = () => {
  return (
    <div className="mt-[35px] z-1 absolute flex flex-col items-center text-2xl w-fit max-md:max-w-full bg-[#5851AD] min-h-screen">
      <div className="flex">
        <h1 className="mt-[80px] text-6xl font-bold tracking-tighter text-white bg-clip-text leading-[76.8px] max-md:text-4xl">
          <span>This is - </span>
          <span className="text-transparent bg-gradient-to-r from-white via-[#8a72ce_51.4%] to-[#694ac0] bg-clip-text">
            Jenisys
          </span>
        </h1>
      </div>
      <div className="flex">
        <section className="self-stretch ml-[60px] mt-3 px-2 py-3 font-medium tracking-tight leading-7 text-[24px] text-center text-amber-50 max-md:max-w-full font-league-spartan">
          <p className="leading-[120%] tracking-[-2%]">
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
      <div className="flex flex-col justify-center mt-5 max-w-full text-center bg-amber-50 shadow-md leading-[133%] rounded-[30px] text-[color:var(--sds-color-text-default-default)] w-[183px] max-md:mt-10 hover:bg-[#F9A825] active:border-white duration-300 hover:[box-shadow:0_7px_8px_0_#E6BE8A_,_0_7px_50px_0_#E6BE8A]">
        <div className="flex gap-3 justify-center py-3.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9afb6dcba9f05d54e0df071a9722482e614fd8d31d6f128b5899af272ff40509?apiKey=150ca4726f0b413090f132e093d2a392&"
            className="shrink-0 my-auto w-6 aspect-square"
            alt="Icon"
          />
          <button className="active:border-white duration-300 active:text-white">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex flex-row pt-[27px]">
        <img
          loading="lazy"
          src="img/Rectangle 2.png"
          className="object-contain w-[450px] h-[350px] pt-[25px] rounded-50"
          alt="Rectangle 2"
        />
        <img
          loading="lazy"
          src="img/Rectangle 2.png"
          className="object-contain w-[500px] h-[400px] rounded-50"
          alt="Rectangle 2"
        />
        <img
          loading="lazy"
          src="img/Rectangle 2.png"
          className="object-contain w-[450px] h-[350px] pt-[25px] rounded-50"
          alt="Rectangle 2"
        />
      </div>
      <div className="pt-[10px]">
        <hr className="border-[1px] w-[1100px] border-[#FFFFFF]" />
      </div>
      <div className="flex flex-row pt-[35px]">
        <div className="place-items-start">
          <img loading="lazy" src="img/Mission.png" alt="Mission" />
          <div className="absolute top-[855px] left-[40px]">
            <h1 className="font-['Lexend_Exa'] text-5xl font-regular text-[#1C1658] opacity-50">
              Mission
            </h1>
          </div>
          <div className="absolute top-[1000px] left-[50px]">
            <h1 className="font-league-spartan">Welcome to Jenisys</h1>
          </div>
          <img
            loading="lazy"
            src="img/Line 3.png"
            className="h-[450px] ml-[20px] mt-[30px] border-1"
            alt="Line"
          />
        </div>
        <div className="items-stretch ml-[200px] relative">
          <img
            loading="lazy"
            src="img/vision.png"
            className="absolute top-[225px] w-[400px] left-[140px]"
            alt="Vision"
          />
          <div className="absolute z-auto top-[250px] left-[200px]">
            <h1 className="font-['Lexend_Exa'] text-5xl font-regular text-[#1C1658] opacity-50">
              Vision
            </h1>
          </div>
          <div className="absolute top-[385px] left-[145px]">
            <p className="font-league-spartan">Welcome to Jenisys</p>
          </div>
          <img
            loading="lazy"
            src="img/Ellipse 4.png"
            className="absolute top-[100px] w-[400px] left-[450px]"
            alt="Ellipse"
          />
          <img
            loading="lazy"
            src="img/vision bg.png"
            className="duration-300 hover:[box-shadow:0_7px_8px_0_#C0C0C0,_0_7px_50px_0_#C0C0C0] rounded-l-[25px]"
            alt="Vision Background"
          />
          <hr className="absolute left-[145px] bottom-[75px] border-[1px] w-[480px] border-[#FFFFFF]" />
        </div>
      </div>
      <div className="ml-[20px] mb- flex gap-5 justify-between w-full max-w-[1661px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col justify-center">
          <div className="shrink-0 rounded-full bg-[linear-gradient(180deg,#FFFDF6_0%,#1E12A7_100%)] h-[84px] w-[84px]" />
        </div>
        <div className="mr-[130px] pt-[60px]">
          <hr className="border-[1px] w-[1100px] border-[#FFFFFF]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
