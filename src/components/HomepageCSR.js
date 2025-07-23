"use client";

import React, { useState, useEffect } from "react";
import "../app/global.css";
import Lottie from "lottie-react";
import animationData from "./AnimationLottie.json";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from 'lucide-react';

const HomepageCSR = () => {

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
            <Image
              src="/img/Jenisys Hero.png"
              width={460}
              height={104}
              alt="Jenisys Hero Logo"
              className="md:w-[220px] md:h-[50px] 3xl:w-[460px] 3xl:h-[104px] w-[133px] h-[32px]"
            />
            <h1 className="font-['Montserrat'] md:text-[40px] pl-[10px] pt-[20px] md:w-auto font-semibold text-[20px]">
  Revolutionize your business with Jenisys
</h1>

<p className="font-['Montserrat'] text-[11px] md:text-[20px] md:pl-[10px] relative pt-[10px] mt-4">
  Jenisys: Where Innovation Begins. We craft top-tier <br />
  software and digital solutions, ensuring your business<br />
  thrives with unmatched quality and excellence. From<br />
  consultation to development, our expertise drives your <br />
  success beyond limits.
</p>

<div className="mt-4 md:mt-[30px] md:ml-[10px]">
  <Link href="/about" className="inline-block">
    <button className="
      
      bg-[#361CA9] text-white 
      w-[109px] h-[27px] md:w-[250px] md:h-[67px]
      text-[12px] md:text-[24px]
      font-['Montserrat'] font-semibold 
      rounded-[3px] md:rounded-[11px]
      shadow-[6px_7px_4px_rgba(0,0,0,0.25)] 
      holographic-button
    ">
      <span className="relative z-10">Learn More</span>
    </button>
  </Link>
</div>

          </div>
          <video
  className="
    relative 
    w-full md:w-[660px] 3xl:w-[850px] 
    h-[140px] md:h-[480px] 
    mt-6 md:mt-4 
    md:mb-[80px] 3xl:mb-[200px]
  "
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
>
  <source src="/Home Page Video.mp4" type="video/mp4" />
</video>

        </div>
      </div>
      <div className="section snap-start  white-section">
        <div className="scroll-on-appear w-screen min-h-[650px] md:h-screen bg-black max-md:pl-[20px] md:pl-[60px] px-[50px] md:px-0 md:flex flex flex-col-reverse md:flex-row  text-white">
          <div className="md:flex md:flex-row flex flex-col-reverse">
            <div className="md:flex-col md:w-1/2">
              <Image
                src="/img/image 3.png"
                width={500}
                height={500}
                alt="Our Vision"
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
              <Link href="/about">
                <button className="w-[102px] h-[29px] bg-[#7526FE] font-['Montserrat'] text-[12px] font-semibold my-2  md:w-[225px] md:h-[60px] md:rounded-[10px] md:text-[24px] md:mb-[20px] md:order-none 3xl:mt-[60px] holographic-button">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="flex-col md:w-1/2 font-['Montserrat'] md:pt-[30px] order-first md:order-none ">
              <h1 className="md:text-[32px] font-extrabold text-[12px] mb-[10px] md:mb-0">
                Our Mission
              </h1>
              <div className="flex flex-row items-center">
                <div className="bg-[#A3A3A3] md:rounded-[11px] md:w-[89px] md:h-[89px] mb-[10px] md:mb-0 rounded-[3px] max-pm:w-[54px]  w-[53px]  h-[47px] md:mt-[30px] flex justify-center items-center">
                  <Image
                    src="/img/bulb.png"
                    width={52}
                    height={52}
                    alt="bulb"
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
                  <Image
                    src="/img/nano.png"
                    width={52}
                    height={52}
                    alt="nano"
                    className="md:w-[52px] md:h-[52px] w-[28px] h-[28px]"
                  />
                </div>
                <h1 className="md:text-[20px] 3xl:text-[25px] 3xl:pt-[15px] text-[11px] md:w-[524px] md:ml-4 ml-2">
                  To Revolutionize Business Growth Through Superior Technology.
                </h1>
              </div>
              <div className="flex flex-row items-center">
                <div className="bg-[#A3A3A3] md:rounded-[11px] md:w-[89px] md:h-[89px] rounded-[3px] mb-[10px] md:mb-0  w-[47px] h-[47px] md:mt-[30px] flex justify-center items-center">
                  <Image
                    src="/img/arrow.png"
                    width={52}
                    height={52}
                    alt="arrow"
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
                  <Image
                    src="/img/success.png"
                    width={52}
                    height={52}
                    alt="success"
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

          <Image
            src="/img/image 4.png"
            width={330}
            height={170}
            alt="Our Values Image"
            className="w-[330px] h-[170px]  md:h-auto md:w-auto absolute md:relative max-pm:left-[30px] pm:left-[50px] top-[30px] md:mr-[70px]"
          />
        </div>
      </div>
      <div className="scroll-on-appear section white-section">
       <div className="pt-[300px] lg:pt-0 relative flex-col" id="services">
  <Image
    src="/img/Services.png"
    width={1920}
    height={1080}
    alt="Services"
    className="w-full lg:h-auto h-[200px]"
  />
  
  {/* "Our Services" heading */}
  <h1 className="text-white text-[12px] w-[224px] h-[15px] lg:w-auto lg:h-auto  
                 font-['Montserrat'] font-extrabold absolute 
                 bottom-[150px] left-[30px]
                 lg:bottom-[355px] lg:left-[80px] 
                 lg:text-[32px]
                 3xl:bottom-[455px] 3xl:text-[45px]">
    Our Services
  </h1>
  
  {/* Main heading */}
  <h1 className="text-[14px] bottom-[95px] left-[30px] lg:w-auto lg:h-auto text-white 
                 font-['Montserrat'] font-bold absolute 
                 lg:bottom-[200px] lg:left-[80px] lg:text-[44px]
                 3xl:bottom-[250px] 3xl:text-[50px]">
    The future is flexible. Partner with <br></br> us to outsource Your{" "}
    <span className="text-[#7F4BED] font-extrabold">Tech Needs</span>
  </h1>
  
  {/* Learn More button */}
  <Link href="/services">
    <button className="hidden lg:block bg-[#7526FE] text-white w-[250px] h-[67px] text-[24px] 
                       font-['Montserrat'] font-semibold rounded-[11px] absolute 
                       bottom-[250px] left-[1035px] 
                       3xl:left-[1320px] 3xl:bottom-[300px] 
                       holographic-button">
      Learn More
    </button>
  </Link>
</div>
        <div className="section white-section">
  <div className="flex-row 3xl:px-[250px] lg:px-[125px] relative">
    {/* First Service Card */}
    <div className="left-[50px] rounded-[9px] w-[107px] h-[158px] absolute justify-center bg-white shadow-[3px_3px_15px_rgba(0,0,0,0.40)] -bottom-[110px] 
                    md:left-[100px]
                    lg:shadow-[5px_5px_15px] lg:rounded-[17px] lg:-bottom-[280px] lg:h-[387px] lg:w-[261px] lg:left-[120px] 
                    3xl:left-[250px]">
      <Lottie
        className="absolute w-[100px] -top-[50px] lg:w-auto lg:-top-[135px] lg:-left-[7px]"
        animationData={animationData}
      />

      <div className="bg-[#8847FA] absolute h-[37px] w-[38px] rounded-full left-[32px] -top-[18px] z-1
                      lg:left-[80px] lg:-top-[50px] lg:h-[92px] lg:w-[92px]"></div>

      <Image
        src="/img/laptop.png"
        width={52}
        height={52}
        alt="laptop"
        className="absolute w-[22px] h-[22px] left-[40px] -top-[12px]
                   lg:w-[52px] lg:h-[52px] lg:left-[100px] lg:-top-[28px]"
      />
      <h1 className="pt-[25px] text-[9px] text-center font-semibold font-['Montserrat'] 
                     lg:text-[20px] lg:pt-[75px]">
        Custom Software Development
      </h1>
      <h1 className="text-center font-['Montserrat'] px-[10px] text-[8px]
                     lg:text-[16px] lg:pt-[20px] lg:px-[25px]">
        It involves creating software tailored to meet specific needs or
        requirements of a business or user.
      </h1>
      <Link href="/services">
        <button className="rounded-[2px] w-[60px] text-[8px] h-[20px] mx-[20px] bg-[#7526FE] text-white font-['Montserrat'] font-semibold smooth-hover
                           lg:shadow-[6px_7px_4px_rgba(0,0,0,0.25)] lg:mx-[53px] lg:mt-[25px] lg:w-[147px] lg:h-[49px] lg:text-[20px] lg:rounded-[4px]">
          Read More
        </button>
      </Link>
    </div>
    
    {/* Second Service Card */}
    <div className="right-[50px] rounded-[9px] w-[107px] h-[158px] absolute justify-center bg-white shadow-[3px_3px_15px_rgba(0,0,0,0.40)] -bottom-[110px]
                    md:right-[100px]
                    lg:rounded-[17px] lg:shadow-[5px_5px_15px] lg:-bottom-[280px] lg:h-[387px] lg:w-[261px] lg:left-[410px] 
                    3xl:left-[600px]">
      <Lottie
        className="absolute w-[100px] -top-[50px] lg:w-auto lg:-top-[135px] lg:-left-[7px]"
        animationData={animationData}
      />
      <div className="bg-[#8847FA] absolute h-[37px] w-[38px] rounded-full left-[32px] -top-[18px] z-1
                      lg:left-[80px] lg:-top-[50px] lg:h-[92px] lg:w-[92px]"></div>
      <Image
        src="/img/mobile.png"
        width={52}
        height={52}
        alt="mobile"
        className="absolute w-[22px] h-[22px] left-[40px] -top-[12px]
                   lg:w-[52px] lg:h-[52px] lg:left-[100px] lg:-top-[28px]"
      />
      <h1 className="pt-[25px] text-[9px] text-center font-semibold font-['Montserrat'] 
                     lg:text-[20px] lg:pt-[75px]">
        Web & Mobile App Development
      </h1>
      <h1 className="text-center font-['Montserrat'] px-[10px] text-[8px]
                     lg:text-[16px] lg:pt-[20px] lg:px-[25px]">
        It involves creating applications that can be accessed on both
        web browsers and mobile devices.
      </h1>
      <Link href="/services">
        <button className="rounded-[2px] w-[60px] text-[8px] h-[20px] mx-[20px] bg-[#7526FE] text-white font-['Montserrat'] font-semibold smooth-hover
                           lg:shadow-[6px_7px_4px_rgba(0,0,0,0.25)] lg:mx-[53px] lg:mt-[25px] lg:w-[147px] lg:h-[49px] lg:text-[20px] lg:rounded-[4px]">
          Read More
        </button>
      </Link>
    </div>
    
    {/* Third Service Card - Only shows on larger screens (lg and above) */}
    <div className="hidden lg:block absolute justify-center bg-white lg:shadow-[5px_5px_15px] shadow-[3px_3px_15px_rgba(0,0,0,0.40)] -bottom-[280px] rounded-[17px] 3xl:left-[960px] left-[695px] h-[387px] w-[261px]">
      <Lottie
        className="absolute -top-[135px] -left-[7px]"
        animationData={animationData}
      />
      <div className="bg-[#8847FA] absolute h-[92px] w-[92px] rounded-full left-[80px] -top-[50px] z-1"></div>
      <Image
        src="/img/nano1.png"
        width={52}
        height={52}
        alt="nano"
        className="w-[52px] h-[52px] absolute left-[100px] -top-[28px]"
      />
      <h1 className="text-center font-semibold font-['Montserrat'] text-[20px] pt-[75px]">
        IT Consulting & Digital Transformation
      </h1>
      <h1 className="text-center font-['Montserrat'] text-[16px] pt-[20px] px-[25px]">
        It involves guiding businesses in using technology to improve
        operations and achieve goals.
      </h1>
      <Link href="/services">
        <button className="shadow-[6px_7px_4px_rgba(0,0,0,0.25)] mx-[53px] mt-[25px] bg-[#7526FE] text-white w-[147px] h-[49px] text-[20px] font-['Montserrat'] font-semibold rounded-[4px] smooth-hover">
          Read More
        </button>
      </Link>
    </div>
    
    {/* Fourth Service Card - Only shows on extra large screens */}
    <div className="hidden xl:block absolute justify-center bg-white lg:shadow-[5px_5px_15px] shadow-[3px_3px_15px_rgba(0,0,0,0.40)] -bottom-[280px] rounded-[17px] 3xl:left-[1315px] left-[980px] h-[387px] w-[261px]">
      <Lottie
        className="absolute -top-[135px] -left-[7px]"
        animationData={animationData}
      />
      <div className="bg-[#8847FA] absolute h-[92px] w-[92px] rounded-full left-[80px] -top-[50px] z-1"></div>
      <Image
        src="/img/shield.png"
        width={52}
        height={52}
        alt="shield"
        className="w-[52px] h-[52px] absolute left-[100px] -top-[28px]"
      />
      <h1 className="text-center font-semibold font-['Montserrat'] lg:text-[20px] lg:pt-[75px]">
        Maintenance, Support<br></br>& Cybersecurity
      </h1>
      <h1 className="text-center font-['Montserrat'] text-[16px] pt-[20px] px-[25px]">
        It involves updates, user assistance, & protection against cyber
        threats to maintain system integrity and user trust.
      </h1>
      <Link href="/services">
        <button className="shadow-[6px_7px_4px_rgba(0,0,0,0.25)] mx-[53px] mt-[25px] bg-[#7526FE] text-white w-[147px] h-[49px] text-[20px] font-['Montserrat'] font-semibold rounded-[4px] smooth-hover">
          Read More
        </button>
      </Link>
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
      <footer className="scroll-on-appear bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/img/Jenisys Hero.png" 
                alt="Jenisys" 
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <h3 className="text-xl font-bold text-white mb-3">
                Advancing Excellence Beyond Cost
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Delivering innovative solutions that drive business growth and operational excellence through cutting-edge technology and strategic consulting.
              </p>
            </div>
            
            {/* CTA Button */}
            <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Services', href: '#services' },
                { name: 'About Us', href: '#about' },
                { name: 'Blog', href: '#blog' },
                { name: 'Careers', href: '#careers' },
                { name: 'Case Studies', href: '#case-studies' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    123 Business District<br />
                    Tech Park, Suite 400<br />
                    Bangalore, Karnataka 560001<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a 
                  href="tel:+911234567890" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 8240384648
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a 
                  href="mailto:info@jenisys.in" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  contact@jenisys.in
                </a>
              </div>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Stay Connected</h4>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 mb-6">
              {[
                { 
                  name: 'Instagram', 
                  href: 'https://www.instagram.com/jenisys.in/',
                  icon: '/img/mdi_instagram.png'
                },
                { 
                  name: 'LinkedIn', 
                  href: 'https://www.linkedin.com/company/jenisys',
                  icon: '/img/linkedIn.png'
                },
                { 
                  name: 'Facebook', 
                  href: 'https://www.facebook.com',
                  icon: '/img/facebook.png'
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-700 hover:bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <img 
                    src={social.icon} 
                    alt={social.name}
                    className="w-6 h-6 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all"
                  />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div>
              <p className="text-gray-300 text-sm mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-purple-500 focus:outline-none text-sm"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 Jenisys. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              {[
                { name: 'Privacy Policy', href: '#privacy' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default HomepageCSR;
