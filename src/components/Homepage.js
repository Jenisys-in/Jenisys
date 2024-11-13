"use client";

import React, { useState, useEffect } from "react";
import "../app/global.css";
import Lottie from "lottie-react";
import animationData from "./AnimationLottie.json";

const Home = () => {

  const [formData , setFormData] = useState({
    name : "",
    email : "",
    contactNo: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);   

  };
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
    console.log(formData);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.name || !formData.email ) {
      console.log('Required fields are missing');
      return; // Prevent form submission if required fields are empty
    }
  
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Email sent successfully');
        handleShowAlert();
        setFormData({
          name : "",
          email : "",
          contactNo: "",
        });
      } else {
        console.error('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


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
    
    <div className="mt-[85px] flex-col relative overflow-x-hidden  snap-mandatory w-full ">
      <div className="section black-section">
        <div className="scroll-on-appear w-screen md:w-screen  md:px-[40px] px-[50px]  relative md:h-screen h-[500px]  bg-white snap-start  md:flex  md:px-[70px] 3xl:pt-[150px] md:pt-[45px] 3xl:gap-8 md:gap-8 3xl:px-[150px]">
          <div>
            <img
              src="../img/Jenisys Hero.png"
              className="md:w-[220px] md:h-[50px] 3xl:w-[460px] 3xl:h-[104px] w-[133px] h-[32px]"
            />
            <h1 className="font-['Montserrat'] md:text-[40px] pl-[10px] pt-[20px] md:w-auto font-semibold text-[20px]">
              Revolutionize your business with Jenisys
            </h1>
            <h1 className="font-['Montserrat'] text-[11px] md:text-[20px] md:pl-[10px] absolute md:relative md:top-0 top-[300px] pt-[10px] ">
              Jenisys: Where Innovation Begins. We craft top-tier <br></br>
              software and digital solutions, ensuring your business<br></br>{" "}
              thrives with unmatched quality and excellence. From<br></br>{" "}
              consultation to development, our expertise drives your <br></br>{" "}
              success beyond limits.{" "}
            </h1>
            <a href="/about">
              <button className="md:ml-[10px] md:mt-[30px] bg-[#361CA9] text-white w-[109px] h-[27px]  md:w-[250px] w-[109px] md:h-[67px] top-[420px] absolute  md:relative md:top-0 h-[27px] text-[12px] md:text-[24px] font-['Montserrat'] font-semibold rounded-[3px] md:rounded-[11px] -[6px_7px_4px_rgba(0,0,0,0.25)]">
                Learn More
              </button>{" "}
            </a>
          </div>
          <video
            className=" absolute md:relative md:top-4 top-[140px] md:w-[660px] 3xl:w-[850px] 3xl:pl-[40px] md:h-[480px] 3xl:mb-[200px] w-auto h-[140px]  md:mb-[80px]"
            autoPlay
            muted
            loop
            playsInline // Ensures autoplay works on mobile devices
            preload="auto" // Preloads the video to ensure it starts playing immediately
          >
            <source src="/Home Page Video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="section snap-start  white-section">
        <div className="scroll-on-appear w-screen min-h-[650px] md:h-screen bg-black max-md:pl-[20px] md:pl-[60px] px-[50px] md:px-0 md:flex flex flex-col-reverse md:flex-row  text-white">
          <div className="md:flex md:flex-row flex flex-col-reverse">
            <div className="md:flex-col md:w-1/2">
              <img
                src="../img/image 3.png"
                className="md:pt-[40px] w-full pt-[40px] md:w-auto"
              />
              <h1 className="font-['Montserrat'] font-extrabold md:text-[32px] md:pt-[30px] pt-[20px] text-[12px] ">
                Our Vision
              </h1>
              <h1 className="font-['Montserrat'] md:text-[20px] md:pt-[0px] text-[11px] 3xl:text-[25px] 3xl:mt-[20px]  ">
                Our vision is to be the leading transformative technology
                solutions provider, empowering businesses with innovative
                digital solutions and driving transformative growth.
              </h1>
              <a href="/about">
                <button className="w-[102px] h-[29px] bg-[#7526FE] font-['Montserrat'] text-[12px] font-semibold my-2  md:w-[225px] md:h-[60px] md:rounded-[10px] md:text-[24px] md:mb-[20px] md:order-none 3xl:mt-[60px] ">
                  Learn More
                </button>
              </a>
            </div>
            <div className="flex-col md:w-1/2 font-['Montserrat'] md:pt-[30px] order-first md:order-none ">
              <h1 className="md:text-[32px] font-extrabold text-[12px] mb-[10px] md:mb-0">
                Our Mission
              </h1>
              <div className="flex flex-row items-center">
                <div className="bg-[#A3A3A3] md:rounded-[11px] md:w-[89px] md:h-[89px] mb-[10px] md:mb-0 rounded-[3px] max-pm:w-[54px]  w-[53px]  h-[47px] md:mt-[30px] flex justify-center items-center">
                  <img
                    src="../img/bulb.png"
                    className="md:w-[52px] md:h-[52px] w-[30px] h-[28px] ml-[2.5px] md:ml-0"
                  />
                </div>
                <h1 className="md:text-[20px] 3xl:text-[25px] 3xl:pt-[15px] text-[11px] md:w-[524px] md:ml-4 ml-2">
                  To Empower Businesses with Uncompromised Quality and
                  Innovation.
                </h1>
              </div>
              <div className="flex flex-row items-center">
                <div className="bg-[#A3A3A3] md:rounded-[11px] md:w-[89px] md:h-[89px] rounded-[3px] mb-[10px] md:mb-0  w-[49px] h-[47px] md:mt-[30px] flex justify-center items-center">
                  <img
                    src="../img/nano.png"
                    className="md:w-[52px] md:h-[52px] w-[28px] h-[28px]"
                  />
                </div>
                <h1 className="md:text-[20px] 3xl:text-[25px] 3xl:pt-[15px] text-[11px] md:w-[524px] md:ml-4 ml-2">
                  To Revolutionize Business Growth Through Superior Technology.
                </h1>
              </div>
              <div className="flex flex-row items-center">
                <div className="bg-[#A3A3A3] md:rounded-[11px] md:w-[89px] md:h-[89px] rounded-[3px] mb-[10px] md:mb-0  w-[47px] h-[47px] md:mt-[30px] flex justify-center items-center">
                  <img
                    src="../img/arrow.png"
                    className="md:w-[52px] md:h-[52px] w-[28px] h-[28px]"
                  />
                </div>
                <h1 className="md:text-[20px] 3xl:text-[25px] 3xl:pt-[15px] text-[11px] md:w-[524px] md:ml-4 ml-2">
                  To Drive Success with Tailored, High-Quality Digital
                  Solutions.
                </h1>
              </div>
              <div className="flex flex-row items-center mb-[70px] md:mb-0">
                <div className="bg-[#A3A3A3] md:rounded-[11px] md:w-[89px] md:h-[89px] rounded-[3px]  md:mb-0  w-[47px] h-[47px] md:mt-[30px] flex justify-center items-center">
                  <img
                    src="../img/success.png"
                    className="md:w-[52px] md:h-[52px] w-[28px] h-[28px]"
                  />
                </div>
                <h1 className="md:text-[20px] 3xl:text-[25px] 3xl:pt-[15px] text-[11px] md:w-[524px] md:ml-4 ml-2">
                  To Create the Future of Business with Relentless Excellence.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section black-section">
        <div className="scroll-on-appear relative flex flex-row bg-white w-screen gap-6 px-[50px] md:px-[70px] md:mt-[80px] mb-[140px] 3xl:mx-[180px]">
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
            className="w-[330px] h-[170px]  md:h-auto md:w-auto absolute md:relative max-pm:left-[30px] pm:left-[50px] top-[30px] md:mr-[70px]"
          />
        </div>
      </div>
      <div className="scroll-on-appear section white-section">
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
          <a href="/services">
            <button className=" hidden md:block bg-[#7526FE] 3xl:left-[1320px] 3xl:bottom-[300px] text-white w-[250px] h-[67px] text-[24px] font-['Montserrat'] font-semibold rounded-[11px] absolute bottom-[250px] left-[1035px] ">
              Learn More
            </button>
          </a>
        </div>
        <div className="section white-section">
          <div className="flex-row 3xl:px-[250px] md:px-[125px] relative ">
            <div className=" left-[70px] rounded-[9px] w-[107px] h-[158px]  absolute justify-center bg-white  md:shadow-[5px_5px_15px] shadow-[3px_3px_15px_rgba(0,0,0,0.40)] md:rounded-[17px] md:-bottom-[280px] md:h-[387px] md:w-[261px] -bottom-[110px] md:left-[120px] 3xl:left-[250px]">
              <Lottie
                className="absolute  w-[100px] md:w-auto -top-[50px] md:-top-[135px] md:-left-[7px]"
                animationData={animationData}
              />

              <div className="md:left-[80px] md:-top-[50px] bg-[#8847FA] absolute md:h-[92px] h-[37px] w-[38px] md:w-[92px] rounded-full md:left-a left-[32px] -top-[18px] z-1"></div>

              <img
                src="../img/laptop.png"
                className="md:w-[52px] md:h-[52px] absolute md:left-[100px] w-[22px] h-[22px] left-[40px] -top-[12px] md:-top-[28px]"
              />
              <h1 className="pt-[25px] text-[9px] text-center font-semibold font-['Montserrat'] md:text-[20px] md:pt-[75px]">
                Custom Software Development
              </h1>
              <h1 className="text-center  font-['Montserrat'] px-[10px] md:text-[16px] md:pt-[20px] text-[8px]  md:px-[25px]">
                It involves creating software tailored to meet specific needs or
                requirements of a business or user.
              </h1>
              <a href="/services">
                <button className="rounded-[2px] w-[60px]  text-[8px] h-[20px] md:shadow-[6px_7px_4px_rgba(0,0,0,0.25)] md:mx-[53px] md:mt-[25px] mx-[20px] bg-[#7526FE] text-white md:w-[147px] md:h-[49px] md:text-[20px] font-['Montserrat'] font-semibold md:rounded-[4px] ">
                  Read More
                </button>
              </a>
            </div>
            <div className="right-[70px] rounded-[9px] w-[107px] h-[158px]  absolute justify-center bg-white  md:rounded-[17px] md:shadow-[5px_5px_15px] shadow-[3px_3px_15px_rgba(0,0,0,0.40)] md:-bottom-[280px] md:h-[387px] md:w-[261px] md:left-[410px] -bottom-[110px] 3xl:left-[600px] ">
              <Lottie
                className="absolute md:w-auto w-[100px] -top-[50px] md:-top-[135px] md:-left-[7px]"
                animationData={animationData}
              />
              <div className="md:left-[80px] md:-top-[50px] bg-[#8847FA] absolute md:h-[92px] h-[37px] w-[38px] md:w-[92px] rounded-full left-[32px] -top-[18px] z-1"></div>
              <img
                src="../img/mobile.png"
                className="md:w-[52px] md:h-[52px] absolute md:left-[100px]  w-[22px] h-[22px] left-[40px] -top-[12px] md:-top-[28px]"
              />
              <h1 className="pt-[25px] text-[9px] text-center font-semibold font-['Montserrat'] md:text-[20px] md:pt-[75px]">
                Web & Mobile App Development
              </h1>
              <h1 className="text-center  font-['Montserrat'] px-[10px] md:text-[16px] md:pt-[20px] text-[8px]  md:px-[25px]">
                It involves creating applications that can be accessed on both
                web browsers and mobile devices.
              </h1>
              <a href="/services">
                <button className="rounded-[2px] w-[60px]  text-[8px] h-[20px] md:shadow-[6px_7px_4px_rgba(0,0,0,0.25)] md:mx-[53px] md:mt-[25px] mx-[20px] bg-[#7526FE] text-white md:w-[147px] md:h-[49px] md:text-[20px] font-['Montserrat'] font-semibold md:rounded-[4px] ">
                  Read More
                </button>
              </a>
            </div>
            <div className="hidden md:block absolute justify-center bg-white md:shadow-[5px_5px_15px] shadow-[3px_3px_15px_rgba(0,0,0,0.40)] -bottom-[280px] rounded-[17px] 3xl:left-[960px] left-[695px] h-[387px] w-[261px]">
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
              <a href="/services">
                <button className=" shadow-[6px_7px_4px_rgba(0,0,0,0.25)] mx-[53px] mt-[25px] bg-[#7526FE] text-white w-[147px] h-[49px] text-[20px] font-['Montserrat'] font-semibold rounded-[4px] ">
                  Read More
                </button>
              </a>
            </div>
            <div className="hidden md:block absolute justify-center bg-white md:shadow-[5px_5px_15px] shadow-[3px_3px_15px_rgba(0,0,0,0.40)] -bottom-[280px] rounded-[17px] 3xl:left-[1315px] left-[980px] h-[387px] w-[261px]">
              <Lottie
                className="absolute -top-[135px] -left-[7px]"
                animationData={animationData}
              />
              <div className="bg-[#8847FA] absolute h-[92px] w-[92px] rounded-full left-[80px] -top-[50px] z-1"></div>
              <img
                src="../img/shield.png"
                className="w-[52px] h-[52px] absolute left-[100px] -top-[28px]"
              />
              <h1 className="text-center font-semibold font-['Montserrat'] md:text-[20px] md:pt-[75px]">
                Maintenance, Support<br></br>& Cybersecurity
              </h1>
              <h1 className="text-center  font-['Montserrat'] text-[16px] pt-[20px] px-[25px]">
                It involves updates, user assistance, & protection against cyber
                threats to maintain system integrity and user trust.
              </h1>
              <a href="/services">
                <button className=" shadow-[6px_7px_4px_rgba(0,0,0,0.25)] mx-[53px] mt-[25px] bg-[#7526FE] text-white w-[147px] h-[49px] text-[20px] font-['Montserrat'] font-semibold rounded-[4px] ">
                  Read More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-on-appear section black-section">
        <div className="bg-black w-screen h-[380px] md:h-screen text-white md:mt-[400px] mt-[150px] md:pl-[50px] px-[20px] md:px-0">
          <h1 className="text-white font-['Montserrat'] text-[12px]  md:text-[32px] font-bold md:pt-[50px] pt-[30px] 3xl:text-[48px] ">
            Testimonials
          </h1>
          <h1 className="text-white font-['Montserrat']  md:text-[40px] text-[14px] font-semibold md:pt-[10px] md:w-[1115px] 3xl:text-[50px] 3xl:w-[1500px] ">
            Our positive feedbacks from clients highlight our abilities in
            delivering outstanding results
          </h1>
          <div className="md:flex-row flex md:mt-[30px]">
            <div className="md:flex-col ">
              <h1 className="relative text-white font-['Montserrat'] text-[8px] w-[170px]  md:w-auto mt-[10px]  md:text-[15px] font-medium 3xl:text-[22px] ">
              “Working with Jenisys has been a game-changer for our tech startup.
              Their innovative approach to web development and deep understanding 
               of our needs resulted in a seamless, high-performance website that 
                has significantly boosted our client engagement."
              </h1>
              <h1 className="relative text-white font-['Montserrat'] text-[10px] md:text-[28px] font-bold md:ml-[80px] ml-[20px] 3xl:text-[32px]  ">
              Emily Carter
              </h1>
              <h1 className="relative text-white font-['Montserrat'] text-[8px] md:text-[20px] md:ml-[80px] ml-[20px] 3xl:text-[24px]">
              CEO of InnovateTech
              </h1>
              <h1 className="relative text-white font-['Montserrat'] text-[8px] w-[170px] md:w-auto mt-[10px]  md:text-[18px] font-medium md:mt-[30px] 3xl:text-[22px]">
              “Jenisys transformed our vision into reality with their exceptional
               software development skills. Their expertise in creating 
               user-friendly applications and their commitment to delivering 
               top- notch solutions made our collaboration a pleasure."
              </h1>
              <h1 className="relative text-white font-['Montserrat'] text-[10px] md:text-[28px]  font-bold md:ml-[80px]  ml-[20px] 3xl:text-[32px]">
              James Thompson
              </h1>
              <h1 className="relative text-white font-['Montserrat'] text-[8px] md:text-[20px]  md:ml-[80px]  ml-[20px] 3xl:text-[24px]">
              CTO of BrightFuture Solutions
              </h1>
            </div>
            <div className="md:flex-col md:pl-[60px] pl-[20px] 3xl:pl-[160px]">
              <h1 className="relative text-white font-['Montserrat'] text-[8px] w-[170px] md:w-auto mt-[10px] md:text-[18px] font-medium 3xl:text-[22px]">
              “The team at Jenisys went above and beyond to help us redesign
               our website. Their attention to detail, were evident throughout
                the project. Our new site not only looks fantastic but also performs 
                flawlessly,thanks to Jenisys’s outstanding work.”
              </h1>
              <h1 className="relative text-white font-['Montserrat'] text-[10px] md:text-[28px]  font-bold md:ml-[80px]  ml-[20px] 3xl:text-[32px]">
              Sophie Nguyen
              </h1>
              <h1 className="relative text-white font-['Montserrat'] text-[8px] md:text-[20px]   md:ml-[80px]  ml-[20px] 3xl:text-[24px]">
              Marketing Director at Pulse Dynamics
              </h1>
              <h1 className="relative text-white font-['Montserrat'] text-[8px] w-[170px] md:w-auto mt-[10px] md:text-[18px] font-medium md:mt-[30px] 3xl:text-[22px] ">
              “We chose Jenisys for their reputation for delivering 
              high-quality tech solutions, and they exceeded our expectations.
              Their support has been invaluable, and we highly 
              recommend their services.”
              </h1>
              <h1 className="relative text-white font-['Montserrat'] text-[10px] md:text-[28px]  font-bold md:ml-[80px]  ml-[20px] 3xl:text-[32px]">
              Michael Johnson
              </h1>
              <h1 className="relative text-white font-['Montserrat'] text-[8px] md:text-[20px] md:ml-[80px]  ml-[20px] 3xl:text-[24px]">
              Founder of Quantum Innovations
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-on-appear section white-section">
        <div className="bg-white font-['Montserrat'] justify-center items-center  mt-[30px] w-screen md:mb-[50px]">
          <h1 className="md:text-[40px] font-semibold text-center md:px-[270px] text-[14px] px-[50px]">
            Don't miss a byte! Subscribe for the latest in software and tech
          </h1>
          <div className="flex flex-row md:mt-[40px]">
            <div className="md:flex-col md:ml-[100px] md:w-1/3 hidden md:block ">
              <img
                src="../img/Jenisys Hero.png"
                className="md:w-[172px] md:h-[50px] md:mb-[20px]   "
              />
              <a
                className="text-[#361CA9] font-['Montserrat'] font-medium md:text-[18px] md:pb-[0px]"
                href="#services"
              >
                Services
              </a>{" "}
              <br></br>
              <a
                className="text-[#361CA9] font-['Montserrat'] font-medium md:text-[18px] md:mt-[5px] "
                href="#"
              >
                About Us
              </a>{" "}
              <br></br>
              <a
                className="text-[#361CA9] font-['Montserrat'] font-medium md:text-[18px] md:mb-[5px] "
                href="#"
              >
                Blogs
              </a>{" "}
              <br></br>
              <a
                className="text-[#361CA9] font-['Montserrat'] font-medium md:text-[18px] md:mb-[5px] "
                href="#"
              >
                Contact Us
              </a>{" "}
              <br></br>
              <a
                className="text-[#361CA9] font-['Montserrat'] font-medium md:text-[18px] md:mb-[5px] "
                href="#"
              >
                Careers
              </a>
            </div>
            
            <div className="md:flex-col md:w-1/3 md:pr-[0px] pl-[50px] ">
              <form onSubmit= {handleSubmit}>
              <h1 className="font-['Montserrat'] font-medium md:text-[20px] md:mb-[10px] md:w-[96px] mt-[20px] md:mt-0 ">
                Name
              </h1>
              <input
              name="name"
              type="text"
              placeholder="John Doe"
              required
              value={formData.name}
              onChange={handleChange}
              className="pl-[10px] md:w-[373px] text-[20px] md:h-[48px] w-[300px] h-[30px] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] border-[rgba(0,0,0,0.25)] border-[0.5px] mb-[20px] " />
              <h1 className="font-['Montserrat'] font-medium md:text-[20px] md:mb-[10px] md:w-[96px]  ">
                E- mail
              </h1>
              <input 
              name="email"
              type="text"
              placeholder="john.doe@gmail.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="pl-[10px] md:w-[373px] text-[20px] md:h-[48px] w-[300px] h-[30px]  shadow-[0px_0px_8px_rgba(0,0,0,0.25)] border-[rgba(0,0,0,0.25)] border-[0.5px] mb-[20px]" />
              <h1 className="font-['Montserrat'] font-medium md:text-[20px] md:mb-[10px] md:w-[266px] ">
                Contact Number
              </h1>
              <input 
              name="contactNo"
              type="text"
              placeholder="Contact No."
              value={formData.contactNo}
              onChange={handleChange}
              className="pl-[10px] md:w-[373px] text-[20px] md:h-[48px] w-[300px] h-[30px] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] border-[rgba(0,0,0,0.25)] border-[0.5px] mb-[20px]" />
              <button type="submit" className=" bg-[#361CA9] text-white w-[300px] h-[30px] md:w-[373px] md:h-[53px] md:text-[20px] font-['Montserrat'] font-semibold rounded-[5px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)]">
                Subscribe
              </button>
              <div>  
              {showAlert && (
              <div className="bg-[#b696fa] border-2 border-[#702eff] justify-center display-flex items-center text-[12px] w-[300px] h-[45px] md:w-[373px] md:h-[65px] md:text-[14px] font-['Montserrat'] text-center rounded-[5px]">
              <p>You're now subscribed to the newsletter! :D</p>
              <button onClick={handleCloseAlert}
              className="mx-[120px] md:mx-[150px] bg-[#361CA9] text-white rounded-[5px] px-[10px] md:mt-[10px]"
              >Close</button>
              </div>
              )}
              </div>
              </form>
            </div>
            <div className="hidden md:block flex-col w-1/2  px-[40px] mt-[40px] 3xl:px-[80px]">
          <h1 className="font-['Montserrat'] font-semibold text-[20px] 3xl:text-[35px] ">Advancing Excellence<br className="hidden 3xl:block"></br> Beyond Cost</h1>
        </div>
          </div>
        </div>
      </div>
      <div className="bg-white block md:hidden h-[200px] flex flex-row mt-[20px] ml-[60px]">
        <div className="flex-col  md:w-1/2 ">
          <img src="../img/Jenisys Hero.png" className="pr-[0px] w-[100px] h-[30px] " />
          <a
            className="text-[#361CA9] font-['Montserrat'] font-medium text-[7px] pl-[5px] "
            href="#services"
          >
            Services
          </a>{" "}
          <br></br>
          <a
            className="text-[#361CA9] font-['Montserrat'] font-medium text-[7px] pl-[5px]  "
            href="#"
          >
            About Us
          </a>{" "}
          <br></br>
          <a
            className="text-[#361CA9] font-['Montserrat'] font-medium text-[7px] pl-[5px] "
            href="#"
          >
            Blogs
          </a>{" "}
          <br></br>
          <a
            className="text-[#361CA9] font-['Montserrat'] font-medium text-[7px] pl-[5px]  "
            href="#"
          >
            Contact Us
          </a>{" "}
          <br></br>
          <a
            className="text-[#361CA9] font-['Montserrat'] font-medium text-[7px] pl-[5px] "
            href="#"
          >
            Careers
          </a>
        </div>
        <div className="flex-col w-1/2 pl-[40px] mt-[40px]">
          <h1 className="font-['Montserrat'] font-semibold text-[10px] ">Advancing Excellence Beyond Cost</h1>
        </div>
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
};

export default Home;
