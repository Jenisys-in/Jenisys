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
      <div className="-ml-[250px] mb-[10px] flex gap-5 justify-between w-full max-w-[1100px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col justify-center">
          <div className="shrink-0 rounded-full bg-[linear-gradient(180deg,#FFFDF6_0%,#1E12A7_100%)] h-[84px] w-[84px]" />
        </div>
        <div className="mr-[130px] ml-[110px] pt-[60px]">
          <hr className="border-[1px] w-[1100px] border-[#FFFFFF]" />
        </div>
      </div>
      <div className="relative mt-6">
        <h1 className="self-center pl-[390px] text-white font-[Italiana] text-[64px] py-[23px]">
          Client Testimonials
        </h1>
        <div className="flex justify-center gap-x-16  pt-[50px]">
          <div className="absolute shrink-0 rounded-full bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFFFF_100%)] h-[140px] w-[140px] left-[110px] mt-[20px]" />
          <div className="absolute shrink-0 rounded-full bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFFFF_100%)] h-[140px] w-[140px] left-[1010px] mt-[20px]" />
          <div className="absolute shrink-0 rounded-full bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFFFF_100%)] h-[210px] w-[210px] left-[523px] mt-[20px]" />
          <div>
            <img
              loading="lazy"
              src="img/testimonials.png"
              className="rounded-1-[25px] w-[350px] h-[440px] pt-[80px]"
            />
            <p className="absolute bottom-[140px] left-[10px] font-[League Spartan] text-[16px] text-white leading-6">
              Welcome to Stellar Innovations Inc., where <br></br>
              technology meets ingenuity. Established in <br></br>
              2010, we are a leading provider of innovative<br></br>
              solutions designed to enhance the way <br></br>
              businesses operate. Our headquarters are<br></br>
              located in Silicon Valley, the heart of <br></br>
              technological advancement, but our impact<br></br>
              reaches globally.
            </p>
          </div>
          <div>
            <img
              loading="lazy"
              src="img/testimonials.png"
              className="rounded-1-[25px] w-[425px] h-[500px]"
            />
            <p className="absolute bottom-[70px] left-[435px] font-[League Spartan] text-[20px] text-white leading-6">
              Welcome to Stellar Innovations Inc., where <br></br>
              technology meets ingenuity. Established in <br></br>
              2010, we are a leading provider of innovative<br></br>
              solutions designed to enhance the way <br></br>
              businesses operate. Our headquarters are<br></br>
              located in Silicon Valley, the heart of <br></br>
              technological advancement, but our impact<br></br>
              reaches globally.
            </p>
          </div>
          <div>
            <img
              loading="lazy"
              src="img/testimonials.png"
              className="rounded-1-[25px] w-[350px] h-[440px] pt-[80px]"
            />
            <p className="absolute bottom-[140px] left-[920px] font-[League Spartan] text-[16px] text-white leading-6">
              Welcome to Stellar Innovations Inc., where <br></br>
              technology meets ingenuity. Established in <br></br>
              2010, we are a leading provider of innovative<br></br>
              solutions designed to enhance the way <br></br>
              businesses operate. Our headquarters are<br></br>
              located in Silicon Valley, the heart of <br></br>
              technological advancement, but our impact<br></br>
              reaches globally.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className=" mt-[12px] absolute right-[25px] rounded-full bg-[linear-gradient(180deg,#FFFDF6_0%,#1E12A7_100%)] h-[84px] w-[84px]" />
      </div>
      <div className="mr-[130px] ml-[110px] pt-[60px]">
        <hr className="border-[1px] w-[1100px] border-[#FFFFFF]" />
      </div>
      <div className="relative flex mt-[50px] ">
        <div className="justify-start pr-[750px]">
          <h1 className="pt-[50px] pl-[40px] font-['Lexend_Exa'] text-white text-[80px]">
            About
          </h1>
          <div className=" mt-[5px] absolute top-[20px] ml-[350px] rounded-full bg-[linear-gradient(180deg,#FFFDF6_0%,#1E12A7_100%)] h-[84px] w-[84px]" />
          <h1 className=" pt-[60px] pl-[40px]  font-['Londrina_Shadow'] text-white text-[80px] pt-[40px]">
            Us
          </h1>
          <p className=" pt-[70px] pl-[40px]  font-[League Spartan] text-[25px] text-white pt-[40px] tracking-7">
            Welcome to Stellar Innovations Inc., where technology meets
            ingenuity. Established in 2010, we are a leading provider of
            innovative solutions designed to enhance the way businesses operate.
            Our headquarters are located in Silicon Valley, the heart of
            technological advancement, but our impact reaches globally.
          </p>
          <p className=" pt-[70px] pl-[40px]  font-[League Spartan] text-[25px] text-white pt-[40px] tracking-7 mb-[100px]">
            Note from the Owner
          </p>
          <div className="">
            <div className="">
              <img
                loading="lazy"
                src="img/about.png"
                className="  -mt-[40px] absolute top-[100px] left-[830px] w-[290px] h-[250px] rounded-l-lg "
                alt="Rectangle"
              />
            </div>
            <div>
              <img
                loading="lazy"
                src="img/about.png"
<<<<<<< HEAD
                className="  mt-[75px] absolute top-[20px] left-[820px] w-[340px] h-[295px] rounded-l-lg "
=======
                className="  mt-[181px] absolute -top-[10px] left-[805px]  w-[360px] h-[313px] rounded-l-lg "
>>>>>>> 6d3487c02dd776a1414f99b7c9a21b0c076a2908
                alt="Rectangle"
              />
            </div>
            <div>
              <img
                loading="lazy"
                src="img/about.png"
<<<<<<< HEAD
                className="  mt-[181px] absolute -top-[10px] left-[805px]  w-[360px] h-[313px] rounded-l-lg "
=======
                className=" mt-[280px] absolute top-[10px] left-[870px] w-[336px] h-[295px] rounded-l-lg "
>>>>>>> 6d3487c02dd776a1414f99b7c9a21b0c076a2908
                alt="Rectangle"
              />
            </div>
            <div>
              <img
                loading="lazy"
                src="img/about.png"
<<<<<<< HEAD
                className="mt-[180px] absolute top-[10px] left-[895px] w-[340px] h-[295px] rounded-l-lg "
=======
                className="  mt-[250px] absolute top-[20px] left-[980px] w-[330px] h-[295px] rounded-l-lg "
>>>>>>> 6d3487c02dd776a1414f99b7c9a21b0c076a2908
                alt="Rectangle"
              />
            </div>
            <div>
              <img
                loading="lazy"
                src="img/about.png"
                className=" mt-[280px] absolute top-[10px] left-[870px] w-[336px] h-[295px] rounded-l-lg "
                alt="Rectangle"
              />
            </div>
            <div>
              <img
                loading="lazy"
                src="img/about.png"
                className="  mt-[250px] absolute top-[20px] left-[980px] w-[330px] h-[295px] rounded-l-lg "
                alt="Rectangle"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mr-[130px] ml-[110px] pt-[60px]">
        <hr className="border-[1px] w-[1100px] border-[#FFFFFF]" />
      </div>
      <div className="relative flex-row  bg-[#2B2381] self-stretch ">
        <div className="mt-[150px] ml-[70px] mb-[190px] w-[700px] ">
          <a href="url">
            <img
              loading="lazy"
              src="img/X Logo.png"
              className=" top-[150px]  "
            />
          </a>
          <a href="url">
            <img
              loading="lazy"
              src="img/Logo Instagram.png"
              className="absolute top-[150px] pl-[40px]"
            />
          </a>
          <a href="url">
            <img
              loading="lazy"
              src="img/Logo Youtube.png"
              className="absolute top-[150px] pl-[80px]"
            />
          </a>
          <a href="url">
            <img
              loading="lazy"
              src="img/LinkedIn.png"
              className=" absolute top-[150px] pl-[120px]"
            />
          </a>
        </div>
        <div className="absolute top-[70px] pl-[400px] mb-[100px] text-white ">
          <h2 className="mb-[10px] font-bold">Use Cases</h2>
          <a href="url">UI Design</a>
          <br />
          <a href="url">UX Design</a>
          <br />
          <a href="url">Wireframing</a>
          <br />
          <a href="url">Diagramming</a>
          <br />
          <a href="url">Brainstorming</a>
          <br />
          <a href="url">Online whiteboard</a>
          <br />
          <a href="url">Team collaboration</a>
          <br />
        </div>
        <div className="absolute top-[70px] pl-[740px] mb-[100px] text-white ">
          <h2 className="mb-[10px] font-bold">Explore</h2>
          <a href="url">Design</a>
          <br />
          <a href="url">Prototyping</a>
          <br />
          <a href="url">Development features</a>
          <br />
          <a href="url">Design systems</a>
          <br />
          <a href="url">Collaboration features</a>
          <br />
          <a href="url">Design process</a>
          <br />
          <a href="url/">FigJam</a>
          <br />
        </div>
        <div className="absolute top-[70px] pl-[1100px] mb-[100px] text-white ">
          <h2 className="mb-[10px] font-bold">Resources</h2>
          <a href="url">Blog</a>
          <br />
          <a href="url">Best practices</a>
          <br />
          <a href="url">Colors</a>
          <br />
          <a href="url">Color wheel</a>
          <br />
          <a href="url">Support</a>
          <br />
          <a href="url">Developers</a>
          <br />
          <a href="url">Resource library</a>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Home;
