
"use client";

import React, { useEffect, useState } from "react";
import "../app/global.css"; 

function Contact() {
  const [formData , setFormData] = useState({
    firstname : '',
    lastname : '',
    email : '',
    contactNo : '',
    msg : '',
    personalData:false,
    marketting:false,
  });
  const [error, setError] = useState(""); 

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
    console.log(formData);
  };
  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
    if (e.target.name === "personalData" && e.target.checked) {
      setError(""); // Clear the error if checkbox is checked
    }  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.firstname || !formData.email || !formData.personalData) {
      console.log('Required fields are missing');
      if (!formData.personalData) {
        setError("Tap on this checkbox to hear from us!"); // Show error message
      }
      return; // Prevent form submission if required fields are empty
    }
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Email sent successfully');
        setFormData({
          firstname : '',
          lastname : '',
          email : '',
          contactNo : '',
          msg : '',
          personalData:false,
          marketting:false,
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
    <div className="flex overflow-hidden flex-col justify-center  bg-white max-md:mt-[50px]   md:mt-[85px] md:mt-0">
      <div className="text-center scroll-on-appear mt-20 font-['Montserrat']  md:text-[48px] font-bold tracking-tighter leading-tight text-black max-md:mt-10 max-md:text-[21px]">
        Contact Us
      </div>
      <div className="flex md:px-[50px] md:pt-[40px] max-md:px-[10px] max-md:pt-[20px]">
      <img
        src="/img/Logo.png"
        className="w-[25px] h-[25px] md:w-[80px] md:h-[75px]"
      />
      <h1 className="font-['Montserrat'] text-[15px] md:text-[35px] font-bold max-md:pt-[2px] md:pt-[15px] ">Request Service Assistance</h1>
      </div>
      <h1 className="font-['Montserrat'] md:text-[30px] max-md:text-[12px] md:pl-[50px] md:pr-[110px] md:pt-[40px] max-md:pt-[10px] font-semibold max-md:px-[10px]">We’ve powered growth and impactful change across all industries, and we’re ready to turn your vision into reality. Tell us a bit about yourself, and we’ll set things in motion.</h1>
      <form onSubmit={handleSubmit}>
      <div className="max-md:mt-[20px] md:mt-[50px] bg-gradient-to-r from-[#000000] from-30% via-[#000000] from-74% via-[#1A163B]  from-74% via-[#1A163B] from-82% via-[#4A34F7] to-95% to-[#7D29FE] max-md:px-[10px]">
      <div className="md:pl-[50px] w-screen grid grid-col-2 md:pt-[50px]  max-md:pt-[30px] md:gap-y-12">
        
        <div >
        <h1 className="font-['Montserrat'] md:text-[30px] font-semibold text-white max-md:text-[10px]">First Name*</h1>
        <input 
        type="text"
        name="firstname"
        placeholder="John"
        required
        value={formData.firstname}
        onChange={handleChange}
        className=" max-md:w-[170px] md:text-[25px] md:w-[460px]  md:mt-4 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0" />
        </div>
        <div>
        <h1 className="font-['Montserrat'] md:text-[30px] font-semibold text-white max-md:text-[10px]">Last Name*</h1>
        <input
        type="text"
        name="lastname"
        placeholder="Doe"
        value={formData.lastname}
        onChange={handleChange}
        className="max-md:w-[170px]  md:text-[25px] md:w-[460px] md:mt-4 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0"  />
        </div>
        <div>
        <h1 className="font-['Montserrat'] md:text-[30px] font-semibold text-white max-md:text-[10px] max-md:pt-[30px]">E-Mail*</h1>
        <input 
        type="text"
        name="email"
        placeholder="john.doe@gmail.com"
        required
        value={formData.email}
        onChange={handleChange}
        className="max-md:w-[170px]  md:text-[25px] md:w-[460px] md:mt-4 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0" />
        </div>
        <div>
        <h1 className="font-['Montserrat'] md:text-[30px] font-semibold text-white max-md:text-[10px] max-md:pt-[30px]">Contact Number*</h1>
        <input
        type="text"
        name="contactNo"
        placeholder="Contact Number"
        value={formData.contactNo}
        onChange={handleChange}
        className="max-md:w-[170px]  md:text-[25px] md:w-[460px] md:mt-4 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0"  />
        </div>
        <div className="col-span-2">
        <h1 className="font-['Montserrat'] md:text-[30px] font-semibold text-white max-md:text-[10px] max-md:pt-[30px]">How can we help you ?</h1>
        <input
        type="text"
        name="msg"
        placeholder="Write your message"
        value={formData.msg}
        onChange={handleChange}
        className="max-md:w-[220px]  md:text-[25px] md:w-[460px] md:mt-4 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0"  />
        </div>
      </div>
      <div className="flex md:pl-[50px] md:mt-[50px] max-md:mt-[20px]">
      <input type="checkbox"
      name="personalData"
      checked={formData.personalData}
      onChange={handleCheckboxChange}
      className="md:w-[30px] md:h-[30px] border-2 border-white max-md:mt-[30px] " />
      <h1 className="text-white font-['Montserrat'] md:text-[24px] text-[10px] font-medium pl-[10px] max-md:pt-[30px]">I authorize Jenisys to use my personal data to reach out to me.</h1> </div>
      {error && (
            <p className="text-red-500 text-[10px] md:text-[14px] font-medium md:pl-[50px] mt-2">
              {error}
            </p>
          )}
      <div className="flex md:pl-[50px] md:mt-[30px]">
      <input type="checkbox"
      name="marketting"
      checked={formData.marketting}
      onChange={handleCheckboxChange}
      className="md:w-[30px] md:h-[30px] border-2 border-white max-md:mt-[30px] " />
      <h1 className="text-white font-['Montserrat'] md:text-[24px] text-[10px] font-medium pl-[10px] max-md:mt-[30px]">I would like to recieve updates regarding products and services of Jenisys.</h1> </div>
      <h1 className="font-['Montserrat'] md:text-[24px] text-white text-[10px] md:pl-[50px] md:mt-[50px] max-md:mt-[30px]">For more information, please refer to the <span className="font-extrabold">Privacy Policy</span> of Jenisys.</h1>
      <button type="submit" className="bg-white text-black md:ml-[50px] md:mt-[50px] max-md:mt-[30px] max-md:text-[10px] md:text-[36px] font-semibold max-md:w-[69px] max-md:h-[22px] md:w-[240px] md:h-[75px] max-md:h-[20px]  max-md:rounded-[20px]  md:rounded-[48px] max-md:mb-[20px] md:mb-[90px] hover:shadow-lg hover:shadow-white">Send</button>
       
      </div>
      </form>
      <div className=" w-screen bg-black md:h-[190px] max-md:h-[190px] justify-center items-center ">
        <h1 className=" font-['Montserrat'] font-semibold md:text-[26px] text-center text-white md:pt-[30px] max-md:pt-[50px] 3xl:text-[32px]">
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
