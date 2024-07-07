import React from "react";
import "../App.css";
import "@fontsource/lexend-exa";

function Home() {
  return (
    <div className="mt-[35px] flex flex-col grow shrink-0 items-center text-2xl basis-0 w-fit max-md:max-w-full bg-[#5851AD] min-h-screen">
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
      <div className="flex flex-col justify-center mt-5 max-w-full tracking-normal text-center bg-amber-50 shadow-md leading-[133%] rounded-[30px] text-[color:var(--sds-color-text-default-default)] w-[183px] max-md:mt-10 hover:bg-[#F9A825] active:border-white duration-300 hover:[box-shadow:0_7px_8px_0_#E6BE8A_,_0_7px_50px_0_#E6BE8A]">
        <div className="flex gap-3 justify-center  py-3.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9afb6dcba9f05d54e0df071a9722482e614fd8d31d6f128b5899af272ff40509?apiKey=150ca4726f0b413090f132e093d2a392&"
            className="shrink-0 my-auto w-6 aspect-square"
          />
          <div >
            <button  >Learn More</button></div>
        </div>
      </div>
      <div className="flex flex-row pt-[27px]">
      <img
            loading="lazy"
            src="img/Rectangle 2.png"
            className="object-contain w-[450px] h-[350px] pt-[25px] rounded-50"
          />
          <img
            loading="lazy"
            src="img/Rectangle 2.png"
            className="object-contain w-[500px] h-[400px] rounded-50"
          />
          <img
            loading="lazy"
            src="img/Rectangle 2.png"
            className="object-contain w-[450px] h-[350px] pt-[25px] rounded-50"
          />    
      </div>
      <div className="pt-[10px]">
      <hr className=" place-content-center border-[1px] w-[1100px] h-0   border-[solid] border-[#FFFFFF]"></hr>
      </div>
      <div className="flex flex-row pt-[35px]">
        <div className="place-items-start items-start">
        <img
        loading = "lazy"
        src="img/Mission.png"
        className=""/>
        <div className="absolute top-[855px] left-[40px]">
            <h1 className="font-['Lexend_Exa'] text-5xl font-regular text-[#1C1658] opacity-50">Mission</h1>
          </div>
          <div className="absolute top-[1000px] left-[50px]">
            <h1 className="font-league-spartan">Welcome to Jenisys</h1>
          </div>
        <img
        loading = "lazy"
        src="img/Line 3.png"
        className=" h-[450px] ml-[20px] mt-[30px] border-1"/>
        </div>
      <div className="items-stretch ml-[200px] relative"> 
      <img
        loading = "lazy"
        src="img/vision.png"
        className="absolute top-[225px] w-[400px] left-[140px]"/> 
        <div className="absolute top-[250px] left-[200px]">
            <h1 className="font-['Lexend_Exa'] text-5xl font-regular text-[#1C1658] opacity-50">Vision</h1>
          </div>
        <div className="absolute top-[385px] left-[145px]">
            <p className="font-league-spartan">Welcome to Jenisys</p>
          </div>
        <img
        loading = "lazy"
        src="img/Ellipse 4.png"
        className="absolute top-[100px] w-[400px] left-[450px]"/> 
        <img
        loading = "lazy"
        src="img/vision bg.png"
        className="duration-300 hover:[box-shadow:0_7px_8px_0_#C0C0C0,_0_7px_50px_0_#C0C0C0] rounded-l-[25px]"/>
        <hr className="absolute left-[145px] bottom-[75px]  border-[1px] w-[480px] h-0   border-[solid] border-[#FFFFFF]"></hr>
      </div>

      </div>
    </div>
  );
}

export default Home;
