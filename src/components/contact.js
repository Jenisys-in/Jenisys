
"use client";

import React, { useEffect, useState } from "react";
import "../app/global.css"; 

function Contact() {
  const [showAlert, setShowAlert] = useState(false);
  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);   
  };

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contactNo: '',
    msg: '',
    personalData: false,
    marketting: false,
  });
  const [error, setError] = useState(""); 

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    console.log(formData);
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
    if (e.target.name === "personalData" && e.target.checked) {
      setError(""); // Clear the error if checkbox is checked
    }
  };

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
        handleShowAlert();
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          contactNo: '',
          msg: '',
          personalData: false,
          marketting: false,
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
    <div className="flex overflow-hidden flex-col justify-center bg-white max-md:mt-[50px] md:mt-[85px] md:mt-0">
      <div className="text-center scroll-on-appear mt-20 font-['Montserrat'] md:text-[48px] font-bold tracking-tighter leading-tight text-black max-md:mt-10 max-md:text-[21px]">
        Contact Us
      </div>
      <div className="scroll-on-appear mt-11 mb-10 font-['Montserrat'] text-lg font-semibold tracking-tight leading-8 text-black w-[915px] max-md:mt-10 max-md:max-w-full mx-auto text-center">
    If you have any questions about our services, want to discuss a
    potential collaboration, or just need advice on your tech strategy, our
    team is here to help. Get in touch with us today.
  </div>
      
      <div
  className="w-full bg-cover bg-center py-16 text-white"
  style={{ backgroundImage: "url('/img/cont.png')" }}
>
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
    
    {/* Phone Section */}
    <div className="flex flex-col items-center">
      <div className="bg-white p-4 rounded-lg mb-6">
        <img
          src="/img/cont_phone.png" // replace with your actual icon path or use Heroicons
          alt="Phone Icon"
          className="w-10 h-10"
        />
      </div>
      <h2 className="text-xl font-semibold">Talk to our Team</h2>
      <p className="mt-2 text-base text-gray-200">+91 8240 384 648</p>
    </div>

    {/* Email Section */}
    <div className="flex flex-col items-center">
      <div className="bg-white p-4 rounded-lg mb-6">
        <img
          src="/img/cont_mail.png" // replace with your actual icon path
          alt="Mail Icon"
          className="w-10 h-10"
        />
      </div>
      <h2 className="text-xl font-semibold">Email Us</h2>
      <p className="mt-2 text-base text-gray-200">contact@jenisys.in</p>
    </div>

    {/* Hours Section */}
    <div className="flex flex-col items-center">
      <div className="bg-white p-4 rounded-lg mb-6">
        <img
          src="/img/cont_clock.png" // replace with your actual icon path
          alt="Clock Icon"
          className="w-10 h-10"
        />
      </div>
      <h2 className="text-xl font-semibold">Operating Hours</h2>
      <p className="mt-2 text-base text-gray-200">8am to 5pm</p>
    </div>

  </div>
  
</div>
<div className="bg-black py-16 text-white text-center">
  <h2 className="text-2xl font-semibold mb-8">We're located at</h2>
  <div className="relative w-full max-w-6xl mx-auto px-4">
    <img
      src="/img/maps.png"
      alt="World Map"
      className="w-full h-auto mx-auto"
    />

    {/* Location Pin - Atlanta */}
    <div
      className="absolute"
      style={{ top: '36%', left: '21%' }} // Adjust if needed
    >
      <p className="text-sm font-bold text-black mb-1">Atlanta, USA</p>
      <img src="/img/loca.png" alt="Atlanta, USA" className="w-5 h-5 mx-auto" />
    </div>

    {/* Location Pin - Kolkata */}
    <div
      className="absolute"
      style={{ top: '44%', left: '64%' }} // Adjust if needed
    >
      <p className="text-sm font-bold text-black mb-1">Kolkata, India</p>
      <img src="/img/loca.png" alt="Kolkata, India" className="w-5 h-5 mx-auto" />
    </div>
  </div>
</div>

      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392"
        className="md:hidden block object-contain grow w-full h-[300px] rounded-md aspect-[1.03] max-md:mt-5 max-md:max-w-full"
      />
      
      <div className="flex md:px-[50px] md:pt-[40px] max-md:px-[10px] max-md:pt-[20px]">
        <img
          src="/img/Logo.png"
          alt="Logo"
          className="w-[25px] h-[25px] md:w-[80px] md:h-[75px]"
        />
        <h1 className="font-['Montserrat'] text-[15px] md:text-[35px] font-bold max-md:pt-[2px] md:pt-[15px]">Request Service Assistance</h1>
      </div>
      <h1 className="font-['Montserrat'] md:text-[30px] max-md:text-[12px] md:pl-[50px] md:pr-[110px] md:pt-[40px] max-md:pt-[10px] font-semibold max-md:px-[10px]">We've powered growth and impactful change across all industries, and we're ready to turn your vision into reality. Tell us a bit about yourself, and we'll set things in motion.</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="max-md:mt-[20px] md:mt-[50px] bg-gradient-to-r from-[#000000] from-30% via-[#000000] via-[#1A163B] to-[#4A34F7] max-md:px-[10px]">
          <div className="md:pl-[50px] w-screen grid grid-cols-2 md:pt-[50px] max-md:pt-[30px] md:gap-y-12">
            <div>
              <h1 className="font-['Montserrat'] md:text-[30px] font-semibold text-white max-md:text-[10px]">First Name*</h1>
              <input 
                type="text"
                name="firstname"
                placeholder="John"
                required
                value={formData.firstname}
                onChange={handleChange}
                className="max-md:w-[170px] md:text-[25px] md:w-[460px] md:mt-4 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0"
              />
            </div>
            <div>
              <h1 className="font-['Montserrat'] md:text-[30px] font-semibold text-white max-md:text-[10px]">Last Name</h1>
              <input
                type="text"
                name="lastname"
                placeholder="Doe"
                value={formData.lastname}
                onChange={handleChange}
                className="max-md:w-[170px] md:text-[25px] md:w-[460px] md:mt-4 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0"
              />
            </div>
            <div>
              <h1 className="font-['Montserrat'] md:text-[30px] font-semibold text-white max-md:text-[10px] max-md:pt-[30px]">E-Mail*</h1>
              <input 
                type="email"
                name="email"
                placeholder="john.doe@gmail.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="max-md:w-[170px] md:text-[25px] md:w-[460px] md:mt-4 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0"
              />
            </div>
            <div>
              <h1 className="font-['Montserrat'] md:text-[30px] font-semibold text-white max-md:text-[10px] max-md:pt-[30px]">Contact Number</h1>
              <input
                type="tel"
                name="contactNo"
                placeholder="Contact Number"
                value={formData.contactNo}
                onChange={handleChange}
                className="max-md:w-[170px] md:text-[25px] md:w-[460px] md:mt-4 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0"
              />
            </div>
            <div className="col-span-2">
              <h1 className="font-['Montserrat'] md:text-[30px] font-semibold text-white max-md:text-[10px] max-md:pt-[30px]">How can we help you?</h1>
              <input
                type="text"
                name="msg"
                placeholder="Write your message"
                value={formData.msg}
                onChange={handleChange}
                className="max-md:w-[220px] md:text-[25px] md:w-[460px] md:mt-4 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-white focus:ring-0"
              />
            </div>
          </div>
          <div className="flex md:pl-[50px] md:mt-[50px] max-md:mt-[20px]">
            <input 
              type="checkbox"
              name="personalData"
              checked={formData.personalData}
              onChange={handleCheckboxChange}
              className="md:w-[30px] md:h-[30px] border-2 border-white max-md:mt-[30px]"
            />
            <h1 className="text-white font-['Montserrat'] md:text-[24px] text-[10px] font-medium pl-[10px] max-md:pt-[30px]">I authorize Jenisys to use my personal data to reach out to me.</h1>
          </div>
          {error && (
            <p className="text-red-500 text-[10px] md:text-[14px] font-medium md:pl-[50px] mt-2">
              {error}
            </p>
          )}
          <div className="flex md:pl-[50px] md:mt-[30px]">
            <input 
              type="checkbox"
              name="marketting"
              checked={formData.marketting}
              onChange={handleCheckboxChange}
              className="md:w-[30px] md:h-[30px] border-2 border-white max-md:mt-[30px]"
            />
            <h1 className="text-white font-['Montserrat'] md:text-[24px] text-[10px] font-medium pl-[10px] max-md:mt-[30px]">I would like to receive updates regarding products and services of Jenisys.</h1>
          </div>
          <h1 className="font-['Montserrat'] md:text-[24px] text-white text-[10px] md:pl-[50px] md:mt-[50px] max-md:mt-[30px]">For more information, please refer to the <span className="font-extrabold">Privacy Policy</span> of Jenisys.</h1>
          <button 
            type="submit" 
            className="bg-white text-black md:ml-[50px] md:mt-[50px] max-md:mt-[30px] max-md:text-[10px] md:text-[36px] font-semibold max-md:w-[69px] max-md:h-[22px] md:w-[240px] md:h-[75px] max-md:rounded-[20px] md:rounded-[48px] max-md:mb-[0px] md:mb-[30px] hover:shadow-lg hover:shadow-white"
          >
            Send
          </button>
          {showAlert && (
            <div className="justify-center text-center flex items-center bg-white text-black md:ml-[50px] max-md:text-[7px] md:text-[20px] md:font-semibold max-md:w-[150px] max-md:h-[22px] md:w-[350px] md:h-[75px] max-md:rounded-[2px] md:rounded-[10px] md:mb-[10px]">
              <div>
                <p>Thanks! You'll hear from us soon!</p>
                <button 
                  onClick={handleCloseAlert}
                  className="mx-[20px] md:mx-[130px] bg-[#361CA9] max-md:text-[5px] text-white max-md:rounded-[2px] md:rounded-[5px] px-[10px] md:mt-[10px] max-md:mt-0"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
      <div className=" w-screen bg-black md:h-[190px] max-md:h-[190px] justify-center items-center ">
        <h1 className=" font-['Montserrat'] font-semibold md:text-[26px] text-center text-white md:pt-[30px] max-md:pt-[50px] 3xl:text-[32px]">
          Follow Us On
        </h1>
        <div className="flex flex-row justify-center items-center md:gap-8 md:mt-[20px] mt-[10px] gap-4">
          <a href="https://www.instagram.com/jenisys.in/" target="_blank" rel="noopener noreferrer">
          <div className="bg-[#A3A3A3] md:h-[50px] md:w-[50px] w-[16px] h-[16px] rounded-full flex justify-center items-center">
            <img
              src="../img/mdi_instagram.png"
              className="md:h-[34px] md:w-[34px] w-[12px] h-[12px]"
            />
          </div>
          </a>
          <a href="https://www.linkedin.com/company/jenisys" target="_blank" rel="noopener noreferrer">
          <div className="bg-[#A3A3A3] md:h-[50px] md:w-[50px] w-[16px] h-[16px] rounded-full flex justify-center items-center">
            <img
              src="../img/linkedIn.png"
              className="md:h-[34px] md:w-[34px] w-[12px] h-[12px]"
            />
          </div>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <div className="bg-[#A3A3A3] md:h-[50px] md:w-[50px] w-[16px] h-[16px] rounded-full flex justify-center items-center">
            <img
              src="../img/facebook.png"
              className="md:h-[34px] md:w-[34px] w-[12px] h-[12px]"
            />
          </div>
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
