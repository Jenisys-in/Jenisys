import React, { useState } from "react";
import "../App.css";
import Lottie from "lottie-react";
import animationData from "./AnimationLottie.json";

const Home = () => {
  return (
    <div className="mt-[85px] flex-col relative  snap-mandatory ">
      <div className="section black-section">
        <div className="w-screen md:w-auto px-[10px] relative md:h-screen h-[500px]  bg-white snap-start  md:flex px-[50px] md:px-[70px] 3xl:pt-[150px] md:pt-[45px] 3xl:pt-[45px] 3xl:gap-8 md:gap-8 3xl:mx-[150px]">
          <div>
            <img
              src="../img/Jenisys Hero.png"
              className="md:w-[220px] md:h-[50px] 3xl:w-[460px] 3xl:h-[104px] w-[133px] h-[32px]"
            />
            <h1 className="font-['Montserrat'] md:text-[40px] pl-[10px] pt-[20px] w-[285px] md:w-auto font-semibold text-[20px]">
              Revolutionize your business with Jenisys
            </h1>
            <h1 className="font-['Montserrat'] text-[11px] md:text-[20px] md:pl-[10px] absolute md:relative md:top-0 top-[300px] pt-[10px] ">
              Jenisys: Where Innovation Begins. We craft top-tier <br></br>
              software and digital solutions, ensuring your business<br></br>{" "}
              thrives with unmatched quality and excellence. From<br></br>{" "}
              consultation to development, our expertise drives your <br></br>{" "}
              success beyond limits.{" "}
            </h1>
            <button className="md:ml-[10px] md:mt-[30px] bg-[#361CA9] text-white  md:w-[250px] w-[109px] md:h-[67px] top-[420px] absolute  md:relative md:top-0 h-[27px] text-[12px] md:text-[24px] font-['Montserrat'] font-semibold rounded-[3px] md:rounded-[11px] -[6px_7px_4px_rgba(0,0,0,0.25)]">
              Learn More
            </button>
          </div>
          <video
            className=" absolute md:relative md:top-4 top-[140px] md:w-[660px] 3xl:w-[850px] 3xl:pl-[40px] md:h-[480px] 3xl:mb-[200px] w-[300px] h-[140px]  md:mb-[80px]"
            autoPlay
            muted
            loop
          >
            <source src="/Home Page Video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="section snap-start  white-section">
        <div className="bg-black flex-col md:flex md:px-[60px] md:px-[70px] relative w-screen  ">
          <img
            src="../img/Group 21.png "
            className="w-full h-screen md:h-[720px] 3xl:h-screen snap-start"
          />
          {/* <h1 className="text-white absolute top-[300px] left-[250px]">Hello</h1> */}
          <div className="flex-col absolute">
            <img
              src="../img/image 3.png"
              className=" w-screen md:px-0 px-[40px] md:pr-0 pr-[60px] h-[157px] md:w-[550px] absolute md:relative md:top-0 -top-[870px] md:h-[330px] md:mt-[70px] 3xl:mt-[140px]"
            />
            <h1 className="md:text-[30px] md:relative md:left-0  px-[40px] md:w-[524px] absolute md:-top-0 -top-[375px] 3xl:text-[27px] w-[360px] text-white pt-[50px] md:px-[0px] 3xl:pt-[110px] font-extrabold font-['Montserrat'] text-[12px] md:text-[20px] ">
              Our Vision
            </h1>
            <h1 className="md:relative md:left-0 left-[40px] px-[0px] md:w-auto absolute md:-top-0 -top-[340px] 3xl:text-[27px] w-[360px] text-white md:pt-0 pt-[50px] md:px-[0px] 3xl:pt-[110px] font-['Montserrat'] text-[11px] md:text-[20px] ">
              Our vision is to be the leading transformative technology{" "}
              <br></br>
              solutions provider, empowering businesses with innovative<br></br>{" "}
              digital solutions and driving transformative growth.
            </h1>
            <button className="md:relative md:left-0 left-[40px] md:-top-0 absolute -mt-[200px] md:mt-[30px]  bg-[#7526FE] text-white md:w-[250px] w-[102px] h-[29px] md:h-[67px] text-[12px] md:text-[24px]  font-['Montserrat'] font-semibold rounded-[2px] md:rounded-[11px] shadow-[6px_7px_4px_rgba(0,0,0,0.25)]">
              Learn More
            </button>
          </div>
          <div className="flex-col absolute">
            <h1 className="md:relative md:px-0 px-[40px] w-[214px] md:w-[1000px] absolute md:-top-0 -top-[675px] md:pl-[630px] text-[12px] 3xl:pt-[120px] 3xl:text-[40px] 3xl:pl-[730px] text-white font-['Montserrat'] font-extrabold md:text-[30px] md:pt-[60px]">
              Our Mission
            </h1>
            <div className="flex flex-row">
              <img
                src="../img/bulb.png"
                className="absolute md:-top-0 -top-[625px] left-[40px] md:left-0 md:relative md:pt-[50px] 3xl:pt-[100px] md:pl-[630px] 3xl:pl-[730px] h-[28px] w-[28px] md:h-auto md:w-auto"
              />
              <h1 className="md:relative md:left-0 left-[40px] px-[40px] md:w-[524px] absolute md:-top-0 -top-[675px] 3xl:text-[27px] w-[360px] text-white pt-[50px] md:px-[20px] 3xl:pt-[110px] font-['Montserrat'] text-[11px] md:text-[20px] ">
                To Empower Businesses with Uncompromised Quality and Innovation.
              </h1>
            </div>
            <div className="flex flex-row">
              <img
                src="../img/nano.png"
                className="absolute md:-top-0 -top-[550px] left-[40px] md:left-0 md:relative md:pt-[50px] 3xl:pt-[100px] md:pl-[630px] 3xl:pl-[730px] h-[28px] w-[28px] md:h-auto md:w-auto"
              />
              <h1 className="md:relative md:left-0 left-[40px] px-[40px] md:w-[524px] absolute md:-top-0 -top-[600px] 3xl:text-[27px] w-[360px] text-white pt-[50px] md:px-[20px] 3xl:pt-[110px] font-['Montserrat'] text-[11px] md:text-[20px] ">
                To Revolutionize Business Growth Through Superior Technology.
              </h1>
            </div>
            <div className="flex flex-row">
              <img
                src="../img/arrow.png"
                className="absolute md:-top-0 -top-[475px] left-[40px] md:left-0 md:relative md:pt-[50px] 3xl:pt-[100px] md:pl-[630px] 3xl:pl-[730px] h-[28px] w-[28px] md:h-auto md:w-auto"
              />
              <h1 className="md:relative md:left-0 left-[40px] px-[40px] md:w-[524px] absolute md:-top-0 -top-[525px] 3xl:text-[27px] w-[360px] text-white pt-[50px] md:px-[20px] 3xl:pt-[110px] font-['Montserrat'] text-[11px] md:text-[20px] ">
                To Drive Success with Tailored, High-Quality Digital Solutions.
              </h1>
            </div>
            <div className="flex flex-row">
              <img
                src="../img/success.png"
                className="  md:-top-0 top-[475px] left-[40px] md:left-0 md:relative md:pt-[50px] 3xl:pt-[100px] md:pl-[630px] 3xl:pl-[730px] h-[28px] w-[28px] md:h-auto md:w-auto"
              />
              <h1 className="md:relative md:left-0 left-[40px] px-[40px] md:w-[524px] absolute md:-top-0 -top-[450px] 3xl:text-[27px] w-[360px] text-white pt-[50px] md:px-[20px] 3xl:pt-[110px] font-['Montserrat'] text-[11px] md:text-[20px] ">
                To Create the Future of Business with Relentless Excellence.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="section black-section">
        <div className="relative flex flex-row bg-white w-screen gap-6 px-[50px] md:px-[70px] md:mt-[80px] mb-[140px] 3xl:mx-[180px]">
          <div className="flex-col">
            <h1 className="absolute left-[30px] top-[210px] md:left-0 md:top-0 md:relative w-[285px] h-[42px] md:w-auto md:h-auto text-[16px] md:text-[35px] font-['Montserrat'] font-semibold ">
              Innovative tech solutions for transformative growth
            </h1>
            <h1 className="absolute left-[30px] top-[235px] md:relative md:left-0 md:top-0  w-[215px] h-[14px] text-[12px] md:w-auto md:h-auto md:text-[30px] font-['Montserrat'] pt-[20px] font-extrabold">
              Our Values
            </h1>
            <div className="flex flex-row gap-6">
              <div className="flex-col ">
                <h1 className="absolute left-[30px] md:left-0 md:top-0 top-[255px] md:relative  w-[247px] h-[16px] text-[12px] md:w-auto md:h-auto  md:text-[19px] 3xl:text-[27px] font-['Montserrat'] pt-[20px] font-semibold">
                  Unmatched Quality and Excellence
                </h1>
                <h1 className="absolute left-[30px] md:left-0 md:top-0 top-[270px] md:relative  w-[350px] h-[16px] text-[12px] md:w-auto md:h-auto md:text-[15px] 3xl:text-[18px] font-['Montserrat'] pt-[20px] ">
                  We pride ourselves on delivering top-
                  <br className="md:block hidden"></br>tier quality and
                  excellence in every<br className="md:block hidden"></br>{" "}
                  aspect of our work.
                </h1>
              </div>
              <div className="flex-col">
                <h1 className="absolute left-[30px] md:left-0 md:top-0 top-[310px] md:relative  w-[247px] h-[16px] text-[12px] md:w-auto md:h-auto  md:text-[19px] 3xl:text-[27px] font-['Montserrat'] pt-[20px] font-semibold">
                  Innovation and Creativity
                </h1>
                <h1 className="absolute left-[30px] md:left-0 md:top-0 top-[325px] md:relative  w-[350px] h-[16px] text-[12px] md:w-auto md:h-auto md:text-[15px] 3xl:text-[18px] font-['Montserrat'] pt-[20px] ">
                  We continuously push the boundaries of{" "}
                  <br className="md:block hidden"></br>innovation and creativity
                  to deliver cutting-<br className="md:block hidden"></br>edge
                  solutions for our clients.
                </h1>
              </div>
            </div>
          </div>

          <img
            src="../img/image 4.png"
            className="w-[330px] h-[170px] md:h-auto md:w-auto absolute md:relative left-[50px] top-[30px]"
          />
        </div>
      </div>
      <div className="section white-section">
        <div className=" pt-[300px] md:pt-0 relative flex-col " id="services">
          <img
            src="../img/Services.png"
            className="w-full md:h-auto h-[200px]"
          />
          <h1 className="text-white text-[12px] w-[224px] h-[15px] md:w-auto md:h-auto  font-['Montserrat'] 3xl:bottom-[455px] 3xl:text-[45px] md:text-[32px] font-extrabold absolute md:bottom-[355px] md:left-[80px] bottom-[150px] left-[30px]">
            Our Services
          </h1>
          <h1 className="text-[14px] bottom-[95px]  left-[30px] md:w-auto md:h-auto  text-white font-['Montserrat'] 3xl:bottom-[250px] 3xl:text-[50px] md:text-[44px] font-bold absolute md:bottom-[200px] md:left-[80px]">
            The future is flexible. Partner with <br></br> us to outsoure Your{" "}
            <span className="text-[#7F4BED] font-extrabold">Tech Needs</span>
          </h1>
          <button className=" hidden md:block bg-[#7526FE] 3xl:left-[1320px] 3xl:bottom-[300px] text-white w-[250px] h-[67px] text-[24px] font-['Montserrat'] font-semibold rounded-[11px] absolute bottom-[250px] left-[1035px] ">
            Learn More
          </button>
        </div>
        <div className="section white-section">
          <div className="flex-row 3xl:px-[250px] md:px-[125px] relative ">
            <div className=" rounded-[9px] w-[107px] h-[158px]  absolute justify-center bg-white border-2 border-black md:rounded-[17px] md:-bottom-[280px] md:h-[387px] md:w-[261px] -bottom-[110px] md:left-[120px]">
              <Lottie
                className="absolute  w-[100px] md:w-auto -top-[50px] md:-top-[135px] md:-left-[7px]"
                animationData={animationData}
              />

              <div className="md:left-[80px] md:-top-[50px] bg-[#8847FA] absolute md:h-[92px] h-[37px] w-[38px] md:w-[92px] rounded-full md:left-a left-[32px] -top-[18px] z-1"></div>

              <img
                src="../img/laptop.png"
                className="md:w-[52px] md:h-[52px] absolute md:left-[100px] w-[30px] h-[25px] left-[36px] -top-[12px] md:-top-[28px]"
              />
              <h1 className="pt-[25px] text-[10px] text-center font-semibold font-['Montserrat'] md:text-[20px] md:pt-[75px]">
                Custom Software Development
              </h1>
              <h1 className="text-center  font-['Montserrat'] md:text-[16px] md:pt-[20px] text-[8px]  md:px-[25px]">
                It involves creating software tailored to meet specific needs or
                requirements of a business or user.
              </h1>
              <button className="rounded-[2px] w-[60px]  text-[8px] h-[20px] md:shadow-[6px_7px_4px_rgba(0,0,0,0.25)] md:mx-[53px] md:mt-[25px] mx-[20px] bg-[#7526FE] text-white md:w-[147px] md:h-[49px] md:text-[20px] font-['Montserrat'] font-semibold md:rounded-[4px] ">
                Read More
              </button>
            </div>
            <div className=" rounded-[9px] w-[107px] h-[158px]  absolute justify-center bg-white border-2 border-black md:rounded-[17px] md:-bottom-[280px] md:h-[387px] md:w-[261px] md:left-[410px] -bottom-[110px] left-[250px]">
              <Lottie
                className="absolute md:w-auto w-[100px] -top-[50px] md:-top-[135px] md:-left-[7px]"
                animationData={animationData}
              />
              <div className="md:left-[80px] md:-top-[50px] bg-[#8847FA] absolute md:h-[92px] h-[37px] w-[38px] md:w-[92px] rounded-full left-[32px] -top-[18px] z-1"></div>
              <img
                src="../img/mobile.png"
                className="md:w-[52px] md:h-[52px] absolute md:left-[100px] w-[30px] h-[25px] left-[36px] -top-[12px] md:-top-[28px]"
              />
              <h1 className="pt-[25px] text-[10px] text-center font-semibold font-['Montserrat'] md:text-[20px] md:pt-[75px]">
                Web & Mobile App Development
              </h1>
              <h1 className="text-center  font-['Montserrat'] md:text-[16px] md:pt-[20px] text-[8px]  md:px-[25px]">
                It involves creating applications that can be accessed on both
                web browsers and mobile devices.
              </h1>
              <button className="rounded-[2px] w-[60px]  text-[8px] h-[20px] md:shadow-[6px_7px_4px_rgba(0,0,0,0.25)] md:mx-[53px] md:mt-[25px] mx-[20px] bg-[#7526FE] text-white md:w-[147px] md:h-[49px] md:text-[20px] font-['Montserrat'] font-semibold md:rounded-[4px] ">
                Read More
              </button>
            </div>
            <div className="hidden md:block absolute justify-center bg-white border-2 border-black -bottom-[280px] rounded-[17px] 3xl:left-[960px] left-[695px] h-[387px] w-[261px]">
              <Lottie
                className="absolute -top-[135px] -left-[7px]"
                animationData={animationData}
              />
              <div className="bg-[#8847FA] absolute h-[92px] w-[92px] rounded-full left-[80px] -top-[50px] z-1"></div>
              <img
                src="../img/nano1.png"
                className="w-[52px] h-[52px] absolute left-[100px] -top-[28px]"
              />
              <h1 className="text-center font-semibold font-['Montserrat'] text-[20px] pt-[75px]">
                IT Consulting & Digital Transformation
              </h1>
              <h1 className="text-center  font-['Montserrat'] text-[16px] pt-[20px] px-[25px]">
                It involves guiding businesses in using technology to improve
                operations and achieve goals.
              </h1>
              <button className=" shadow-[6px_7px_4px_rgba(0,0,0,0.25)] mx-[53px] mt-[25px] bg-[#7526FE] text-white w-[147px] h-[49px] text-[20px] font-['Montserrat'] font-semibold rounded-[4px] ">
                Read More
              </button>
            </div>
            <div className="hidden md:block absolute justify-center bg-white border-2 border-black -bottom-[280px] rounded-[17px] 3xl:left-[1315px] left-[980px] h-[387px] w-[261px]">
              <Lottie
                className="absolute -top-[135px] -left-[7px]"
                animationData={animationData}
              />
              <div className="bg-[#8847FA] absolute h-[92px] w-[92px] rounded-full left-[80px] -top-[50px] z-1"></div>
              <img
                src="../img/shield.png"
                className="w-[52px] h-[52px] absolute left-[100px] -top-[28px]"
              />
              <h1 className="text-center font-semibold font-['Montserrat'] text-[20px] pt-[75px]">
                Maintenance, Support<br></br>& Cybersecurity
              </h1>
              <h1 className="text-center  font-['Montserrat'] text-[16px] pt-[20px] px-[25px]">
                It involves updates, user assistance, & protection against cyber
                threats to maintain system integrity and user trust.
              </h1>
              <button className=" shadow-[6px_7px_4px_rgba(0,0,0,0.25)] mx-[53px] mt-[25px] bg-[#7526FE] text-white w-[147px] h-[49px] text-[20px] font-['Montserrat'] font-semibold rounded-[4px] ">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="section white-section">
        <div className="mt-[150px] md:mt-[400px] relative w-full">
          <img src="../img/Group 23.png " className="w-full h-screen " />
          <div className="flex-col absolute mt-[50px]">
            <h1 className="text-white font-['Montserrat'] 3xl:bottom-[950px] text-[32px] font-bold absolute md:bottom-[810px] md:left-[80px]">
              Testimonials
            </h1>

            <h1 className="relative text-white font-['Montserrat'] text-[40px] font-semibold 3xl:bottom-[820px] absolute md:bottom-[680px] md:left-[80px]">
              Our positive feedbacks from clients highlight our<br></br>
              abilities in delivering outstanding results
            </h1>
          </div>
          <div className="flex-row flex mt-[50px]">
            <div className="flex-col">
              <h1 className="relative text-white font-['Montserrat'] 3xl:bottom-[650px] text-[18px] font-medium absolute md:bottom-[530px] 3xl:left-[200px] left-[80px]">
                Jenisys has been an incredible partner in driving our digital
                <br></br>transformation. Their expertise in custom software
                development<br></br>and cloud computing has been invaluable in
                optimizing our<br></br>operations and driving growth.
              </h1>
              <h1 className="relative text-white font-['Montserrat'] text-[28px] font-bold absolute 3xl:bottom-[650px] md:bottom-[530px] 3xl:left-[260px] left-[140px]">
                Tuhin Das
              </h1>
              <h1 className="relative text-white font-['Montserrat'] text-[20px] 3xl:bottom-[650px] absolute md:bottom-[530px] 3xl:left-[260px] left-[140px]">
                Company Name, City
              </h1>
              <h1 className="relative text-white font-['Montserrat'] text-[18px] 3xl:bottom-[560px] font-medium absolute md:bottom-[500px] 3xl:left-[200px] left-[80px]">
                Jenisys has been an incredible partner in driving our digital
                <br></br>transformation. Their expertise in custom software
                development<br></br>and cloud computing has been invaluable in
                optimizing our<br></br>operations and driving growth.
              </h1>
              <h1 className="relative text-white font-['Montserrat'] text-[28px] 3xl:bottom-[560px] font-bold absolute md:bottom-[500px] 3xl:left-[260px]  left-[140px]">
                Tuhin Das
              </h1>
              <h1 className="relative text-white font-['Montserrat'] text-[20px] 3xl:bottom-[560px] absolute md:bottom-[500px] 3xl:left-[260px]  left-[140px]">
                Company Name, City
              </h1>
            </div>
            <div className="flex-col pl-[60px]">
              <h1 className="relative text-white font-['Montserrat'] text-[18px] 3xl:bottom-[650px] font-medium absolute md:bottom-[530px] 3xl:left-[370px] left-[80px]">
                Jenisys has been an incredible partner in driving our digital
                <br></br>transformation. Their expertise in custom software
                development<br></br>and cloud computing has been invaluable in
                optimizing our<br></br>operations and driving growth.
              </h1>
              <h1 className="relative text-white font-['Montserrat'] text-[28px] 3xl:bottom-[650px] font-bold absolute md:bottom-[530px] 3xl:left-[430px]  left-[140px]">
                Tuhin Das
              </h1>
              <h1 className="relative text-white font-['Montserrat'] text-[20px] 3xl:bottom-[650px] absolute md:bottom-[530px] 3xl:left-[430px] left-[140px]">
                Company Name, City
              </h1>
              <h1 className="relative text-white font-['Montserrat'] text-[18px] 3xl:bottom-[560px] font-medium absolute 3xl:left-[370px] md:bottom-[500px] left-[80px]">
                Jenisys has been an incredible partner in driving our digital
                <br></br>transformation. Their expertise in custom software
                development<br></br>and cloud computing has been invaluable in
                optimizing our<br></br>operations and driving growth.
              </h1>
              <h1 className="relative text-white font-['Montserrat'] text-[28px] 3xl:bottom-[560px] font-bold absolute md:bottom-[500px] 3xl:left-[430px] left-[140px]">
                Tuhin Das
              </h1>
              <h1 className="relative text-white font-['Montserrat'] text-[20px] 3xl:bottom-[560px] absolute md:bottom-[500px]  3xl:left-[430px] left-[140px]">
                Company Name, City
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="section black-section">
        <footer className="absolute -bottom-[175px] justify-center 3xl:mx-[180px]">
          <h1 className="font-['Montserrat'] font-semibold text-[40px] text-center px-[260px] mb-[30px]">
            Don't miss a byte! Subscribe for the latest in software and tech
          </h1>
          <div className="flex flex-row ">
            <div className="flex flex-col pl-[100px] pt-[10px] ">
              <img
                src="../img/Jenisys Hero.png"
                className="w-[172px] h-[50px] mb-[20px]"
              />
              <a
                className="text-[#361CA9] font-['Montserrat'] font-medium text-[18px] mb-[5px] pl-[10px]"
                href="#services"
              >
                Services
              </a>
              <br></br>
              <a
                className="text-[#361CA9] font-['Montserrat'] font-medium text-[18px] mb-[5px]  pl-[10px]"
                href="#"
              >
                About Us
              </a>
              <br></br>
              <a
                className="text-[#361CA9] font-['Montserrat'] font-medium text-[18px] mb-[5px]  pl-[10px]"
                href="#"
              >
                Blogs
              </a>
              <br></br>
              <a
                className="text-[#361CA9] font-['Montserrat'] font-medium text-[18px] mb-[5px]  pl-[10px]"
                href="contact"
              >
                Contact Us
              </a>
              <br></br>
              <a
                className="text-[#361CA9] font-['Montserrat'] font-medium text-[18px] mb-[5px]  pl-[10px]"
                href="#"
              >
                Careers
              </a>
              <br></br>
            </div>
            <div className="flex flex-col relative pl-[200px] pt-[5px]">
              <h1 className="font-['Montserrat'] font-medium text-[20px] mb-[10px]">
                Name
              </h1>
              <input className="w-[373px] h-[48px] pl-[10px] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] border-[rgba(0,0,0,0.25)] border-[0.5px] mb-[20px]" />
              <h1 className="font-['Montserrat'] font-medium text-[20px] mb-[10px]">
                E-Mail
              </h1>
              <input className="w-[373px] h-[48px] pl-[10px] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] border-[rgba(0,0,0,0.25)] border-[0.5px] mb-[20px]" />
              <h1 className="font-['Montserrat'] font-medium text-[20px] mb-[10px]">
                Contact Number
              </h1>
              <input className="w-[373px] h-[48px] pl-[10px] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] border-[rgba(0,0,0,0.25)] border-[0.5px] mb-[40px]" />
              <button className=" bg-[#361CA9] text-white w-[373px] h-[53px] text-[20px] font-['Montserrat'] font-semibold rounded-[5px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)]">
                Subscribe
              </button>
            </div>
            <div className="flex flex-col pt-[20px] pl-[200px]">
              <h1 className="font-['Montserrat'] font-semibold text-[20px] pb-[30px]">
                Operational Work Hours
              </h1>

              <h1 className="font-['Montserrat'] font-medium text-[16px] pl-[30px] pb-[10px]">
                Mon - Wed : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9AM - 4PM
              </h1>
              <hr className="pt-[20px] ml-[25px]" />
              <h1 className="font-['Montserrat'] font-medium text-[16px] pl-[30px] pb-[10px]">
                Thu - Sat :
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9AM
                - 5PM
              </h1>
              <hr className="pt-[20px] ml-[25px]" />
              <h1 className="font-['Montserrat'] font-medium text-[16px] pl-[30px] pb-[10px]">
                Weekend :
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp; Closed
              </h1>
              <hr className="pt-[20px] ml-[25px]" />
            </div>
          </div>

          <img
            src="../img/Group 23.png"
            className="w-full h-[215px] absolute top-[600px]"
          />
          <h1 className="absolute font-['Montserrat'] font-semibold text-[26px] left-[600px] -bottom-[120px] text-white">
            Follow Us On
          </h1>
          <div className="bg-[#A3A3A3] absolute h-[50px] w-[50px] rounded-full left-[595px] -bottom-[185px] z-1"></div>
          <div className="bg-[#A3A3A3] absolute h-[50px] w-[50px] rounded-full left-[675px] -bottom-[185px] z-1"></div>
          <div className="bg-[#A3A3A3] absolute h-[50px] w-[50px] rounded-full left-[753px] -bottom-[185px] z-1"></div>
          <a href="https://www.instagram.com/jenisys.in/ " target="_blank">
            <img
              src="../img/mdi_instagram.png"
              className="absolute left-[600px] -bottom-[180px] h-[40px] w-[40px]"
            />
          </a>
          <a href="#">
            <img
              src="../img/facebook.png"
              className="absolute left-[760px] -bottom-[180px] h-[40px] w-[40px]"
            />
          </a>
          <a href="https://www.linkedin.com/company/jenisys/" target="_blank">
            <img
              src="../img/LinkedIn 2.png"
              className="absolute left-[680px] -bottom-[180px] h-[40px] w-[40px]"
            />
          </a>
          <h1 className="absolute font-['Montserrat'] font-semibold text-[14px] left-[550px] -bottom-[250px] mb-[20px] text-white">
            Copyright © 2024 Jenisys. All rights reserved.
          </h1>
        </footer>
        <div className=" absolute hidden section black-section 3xl:block mt-[200px]">
          <img src="../img/Group 23.png" className="w-screen h-[250px] " />
          <h1 className="absolute z-10 font-['Montserrat'] font-semibold text-[26px] left-[770px] bottom-[165px] text-white">
            Follow Us On
          </h1>
          <div className="bg-[#A3A3A3] absolute h-[50px] w-[50px] rounded-full left-[735px] bottom-[95px] z-1"></div>
          <div className="bg-[#A3A3A3] absolute h-[50px] w-[50px] rounded-full left-[835px] bottom-[95px] z-1"></div>
          <div className="bg-[#A3A3A3] absolute h-[50px] w-[50px] rounded-full left-[933px] bottom-[95px] z-1"></div>
          <a href="https://www.instagram.com/jenisys.in/ " target="_blank">
            <img
              src="../img/mdi_instagram.png"
              className="absolute left-[740px] bottom-[100px] h-[40px] w-[40px]"
            />
          </a>
          <a href="#">
            <img
              src="../img/facebook.png"
              className="absolute left-[840px] bottom-[100px] h-[40px] w-[40px]"
            />
          </a>
          <a href="https://www.linkedin.com/company/jenisys/" target="_blank">
            <img
              src="../img/LinkedIn 2.png"
              className="absolute left-[938px] bottom-[100px] h-[40px] w-[40px]"
            />
          </a>
          <h1 className="absolute font-['Montserrat'] font-semibold text-[20px] left-[640px] bottom-[20px] mb-[20px] text-white">
            Copyright © 2024 Jenisys. All rights reserved.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
