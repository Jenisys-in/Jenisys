import React from "react";
import "../App.css";

function AboutUs() {
  return (
    <div className="mt-[85px]  relative">
      <div className="flex flex-col justify-center items-center text-center px-[51px] md:px-[220px]">
        <h1 className="text-black font-['Montserrat'] text-[21px] md:text-[48px] font-bold align-center">
          About Us
        </h1>
        <h1 className="text-black font-['Montserrat'] md:text-[18px] text-[9px] font-semibold 3xl:text-[24px] ">
          Welcome to Jenisys, the ultimate tech incubator. We offer unmatched
          expertise in crafting top-tier software and digital solutions that
          help businesses thrive. From consultation to development, we help you
          achieve your goals with excellence and precision.
        </h1>
      </div>
      <div className="mt-[30px] relative">
        <div className="w-full mt-[20px] overflow-hidden">
          <video
            className="w-full h-auto md:h-[403px] object-cover"
            autoPlay
            muted
            loop
          >
            <source src="/About Us.mp4" type="video/mp4" />
          </video>
        </div>

        <h1 className="font-['Montserrat'] md:text-[26px] bg-black font-medium text-[10px] text-white md:pb-[70px] text-center pt-[20px] pb-[20px] md:pt-[70px] md:mt-[0px] px-[51px] md:px-[70px] 3xl:mt-[500px]">
          {" "}
          At Jenisys, we are the architects of innovation, dedicated to
          delivering top-tier software and digital solutions that empower
          businesses to excel. Our commitment to quality and excellence drives
          every project, from consultation to development, ensuring that our
          clients achieve success beyond their expectations. With a focus on
          cutting-edge technology and a deep understanding of industry needs,
          Jenisys is where your business's potential meets our expertise, paving
          the way for a future of limitless possibilities.
        </h1>
        
      </div>
      <div className="flex-col px-[52px] md:px-[60px] mb-[50px] md:mb-[200px] ">
        <img
          src="../img/aboutus2.png"
          className=" mt-[20px] md:mt-0 h-[250px] w-full md:w-[600px] md:h-[750px] md:float-right 3xl:mr-[100px] 3xl:h-[867px] 3xl:w-[800px]"
        />
        <h1 className="font-['Montserrat'] font-bold text-[12px] md:text-[32px] mt-[20px] 3xl:text-[40px]">
          Our Core Values
        </h1>
        <h1 className="font-['Montserrat'] font-semibold text-[16px] mt-[10px] md:text-[43px] 3xl:text-[50px]">
          Innovating Beyond Limits
        </h1>
        <h1 className="font-['Montserrat'] text-white font-semibold text-[12px] mt-[30px] bg-[#4323D0] w-[208px] md:text-[18px] text-center py-[10px] md:w-[560px] 3xl:w-[650px] 3xl:text-[20px]">
          Customer Centric Approach
        </h1>
        <h1 className="font-['Montserrat'] text-[10px] md:text-[16px] font-medium mt-[5px] md:mt-[15px] md:w-[560px] leading-tight 3xl:text-[18px] 3xl:w-[650px]">
          We put your business needs first, always. Our team is dedicated to
          providing personalized solutions that are tailored to your unique
          goals and challenges. Your success is our top priority.
        </h1>
        <h1 className="font-['Montserrat'] text-white font-semibold text-[12px] mt-[30px] bg-[#4323D0] w-[208px] md:text-[18px] text-center py-[10px] md:w-[560px] 3xl:w-[650px] 3xl:text-[20px]">
          Unmatched Expertise
        </h1>
        <h1 className="font-['Montserrat'] text-[10px] md:text-[16px] font-medium mt-[5px] md:mt-[15px] md:w-[560px] leading-tight 3xl:text-[18px] 3xl:w-[650px] ">
          Our team comprises of industry experts who have years of experience in
          software development and digital solutions. Our expertise spans across
          various industries, providing you with the best solutions for your
          business needs.
        </h1>
        <h1 className="font-['Montserrat'] text-white font-semibold text-[12px] mt-[30px] bg-[#4323D0] w-[208px] md:text-[18px] text-center py-[10px] md:w-[560px] 3xl:w-[650px] 3xl:text-[20px]">
          Continous Innovation
        </h1>
        <h1 className="font-['Montserrat'] text-[10px] md:text-[16px] font-medium mt-[5px] md:mt-[15px] md:w-[560px] leading-tight 3xl:text-[18px] 3xl:w-[650px]  ">
          We believe in continuous innovation, pushing boundaries, and
          challenging the status quo. With cutting-edge technology, we deliver
          transformative solutions that give you a competitive edge.
        </h1>
        <h1 className="font-['Montserrat'] text-white font-semibold text-[12px] mt-[30px] bg-[#4323D0] w-[208px] md:text-[18px] text-center py-[10px] md:w-[560px] 3xl:w-[650px] 3xl:text-[20px]">
          Value Driven Services
        </h1>
        <h1 className="font-['Montserrat'] text-[10px] md:text-[16px] font-medium mt-[5px] md:mt-[15px] md:w-[560px] leading-tight 3xl:text-[18px] 3xl:w-[650px]  ">
          Value-driven services prioritize delivering exceptional quality and
          impactful results, ensuring clients receive significant benefits that
          enhance their business outcomes. It's about maximizing value rather
          than just minimizing costs.
        </h1>
      </div>
    </div>
  ); //ha
}

export default AboutUs; //h
