"use client";
import React, { useEffect } from "react";
import "../app/global.css"; 
import Lottie from "lottie-react";
import animationData from "./AnimationLottie.json";

const Services = () => {
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
    <div className="mt-[85px] w-full overflow-x-hidden">
      {" "}
      <div className="scroll-on-appear w-full">
        {" "}
        <h1 className="font-['Montserrat'] font-bold text-[21px] text-center md:text-[48px]">
          Services
        </h1>
        <h1 className="mt-[20px] font-['Montserrat'] font-semibold text-[9px] md:text-[18px] md:px-[170px] md:tracking-wider text-center px-[50px]">
          Jenisys is a leading tech solutions provider that crafts top-tier
          software and digital solutions for businesses of all sizes. Our
          unparalleled expertise drives your success beyond limits. From
          consultation to development, we are your partner in transformative
          technology.
        </h1>
        <div className="w-full mt-[20px] overflow-hidden">
          <video
            className="w-full h-auto md:h-[403px] object-cover"
            autoPlay
            muted
            loop
            playsInline // Ensures autoplay works on mobile devices
            preload="auto" // Preloads the video to ensure it starts playing immediately
          >
            <source src="/Our Services Video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="scroll-on-appear grid grid-cols-2 max-pm:mx-[40px] pm:mx-[60px] md:mx-0 md:ml-[80px] md:grid-cols-3 3xl:mx-[150px]  mb-[50px]">
        <div className="scroll-on-appear drop-shadow-2xl shadow-[3px_3px_16px_rgba(0,0,0,0.25)] relative rounded-[5px] mt-[40px] md:mt-[100px] w-[140px] md:w-[353px] md:h-[525px]  h-[200px] justify-center bg-white   border-[0.4px]  ">
          <Lottie
            className=" absolute w-[100px] md:w-[340px] bottom-[150px] right-[20px] md:bottom-[360px] md:right-[20px]"
            animationData={animationData}
          />

          <div className="bg-[#8847FA] absolute h-[34px] w-[34px] md:h-[114px] md:w-[114px] rounded-full bottom-[182px] md:bottom-[472px] right-[53px] md:right-[133px] z-1"></div>

          <img
            src="../img/laptop.png"
            className=" absolute w-[19px] h-[18px] md:w-[64px] md:h-[64px] z-2 bottom-[190px] right-[60px] md:bottom-[495px] md:right-[159px] "
          />
          <h1 className="pt-[25px] md:pt-[100px] text-[10px] text-center font-semibold font-['Montserrat'] leading-tight md:text-[24px]">
            Custom Software Development
          </h1>
          <h1 className="text-center  font-['Montserrat']  text-[6px] px-[10px] md:px-[20px] md:mb-[10px] md:text-[15px] ">
            At Jenisys, we specialize in developing custom software solutions
            tailored to meet the unique needs of your business. Our team of
            experienced developers utilizes the latest technologies to create
            software that aligns perfectly with your specific requirements.
            Whether you need a comprehensive enterprise solution, a bespoke web
            application, or a specialized mobile app, we have the expertise to
            deliver high-quality, scalable, and robust software.
          </h1>
          <button className="rounded-[1px] w-[55px] md:w-[147px] md:h-[49px] md:rounded-[4px] text-[8px] h-[15px] mx-[40px] md:mx-[100px]  bg-[#8847FA] text-white  font-['Montserrat'] font-semibold md:text-[20px] ">
            Get Started
          </button>
        </div>
        <div className="scroll-on-appear drop-shadow-2xl shadow-[3px_3px_16px_rgba(0,0,0,0.25)] relative rounded-[5px] mt-[40px] md:mt-[100px] w-[140px] md:w-[353px] md:h-[525px]  h-[200px] justify-center bg-white   border-[0.4px]  ">
          <Lottie
            className=" absolute w-[100px] md:w-[340px] bottom-[150px] right-[20px] md:bottom-[360px] md:right-[20px]"
            animationData={animationData}
          />

          <div className="bg-[#8847FA] absolute h-[34px] w-[34px] md:h-[114px] md:w-[114px] rounded-full bottom-[182px] md:bottom-[472px] right-[53px] md:right-[133px] z-1"></div>

          <img
            src="../img/laptop.png"
            className=" absolute w-[19px] h-[18px] md:w-[64px] md:h-[64px] z-2 bottom-[190px] right-[60px] md:bottom-[495px] md:right-[159px] "
          />
          <h1 className="pt-[25px] md:pt-[100px] text-[10px] text-center font-semibold font-['Montserrat'] leading-tight md:text-[24px]">
            Web & Mobile App Development
          </h1>
          <h1 className="text-center  font-['Montserrat']  text-[6px] px-[10px] md:px-[20px] md:mb-[10px] md:text-[15px] ">
            At Jenisys, we provide comprehensive web and mobile app development
            services designed to help your business establish a robust digital
            presence. Our team creates responsive, SEO-friendly websites and
            intuitive mobile applications, ensuring a seamless and engaging user
            experience across all devices. We focus on building solutions that
            are visually appealing, highly functional, and easy to navigate,
            enhancing user experiance.
          </h1>
          <button className="rounded-[1px] w-[55px] md:w-[147px] md:h-[49px] md:rounded-[4px] text-[8px] h-[15px] mx-[40px] md:mx-[100px]  bg-[#8847FA] text-white  font-['Montserrat'] font-semibold md:text-[20px] ">
            Get Started
          </button>
        </div>
        <div className="scroll-on-appear drop-shadow-2xl shadow-[3px_3px_16px_rgba(0,0,0,0.25)] relative rounded-[5px] mt-[40px] md:mt-[100px] w-[140px] md:w-[353px] md:h-[525px]  h-[200px] justify-center bg-white   border-[0.4px]  ">
          <Lottie
            className=" absolute w-[100px] md:w-[340px] bottom-[150px] right-[20px] md:bottom-[360px] md:right-[20px]"
            animationData={animationData}
          />

          <div className="bg-[#8847FA] absolute h-[34px] w-[34px] md:h-[114px] md:w-[114px] rounded-full bottom-[182px] md:bottom-[472px] right-[53px] md:right-[133px] z-1"></div>

          <img
            src="../img/laptop.png"
            className=" absolute w-[19px] h-[18px] md:w-[64px] md:h-[64px] z-2 bottom-[190px] right-[60px] md:bottom-[495px] md:right-[159px] "
          />
          <h1 className="pt-[25px] md:pt-[100px] text-[10px] text-center font-semibold font-['Montserrat'] leading-tight md:text-[24px]">
            IT Consulting & Digital Transformation
          </h1>
          <h1 className="text-center  font-['Montserrat']  text-[6px] px-[10px] md:px-[20px] md:mb-[10px] md:text-[15px] ">
            We offer comprehensive IT consulting & digital transformation
            services to drive innovation & success in your business. Our experts
            work closely to craft a technology strategy aligned with your goals
            and provide tailored recommendations for growth & efficiency. We
            help you embrace digital transformation through process automation,
            digital tool implementation, and platform integration, ensuring your
            business remains competitive and efficient in the digital age.
          </h1>
          <button className="rounded-[1px] w-[55px] md:w-[147px] md:h-[49px] md:rounded-[4px] text-[8px] h-[15px] mx-[40px] md:mx-[100px]  bg-[#8847FA] text-white  font-['Montserrat'] font-semibold md:text-[20px] ">
            Get Started
          </button>
        </div>
        <div className="scroll-on-appear drop-shadow-2xl shadow-[3px_3px_16px_rgba(0,0,0,0.25)] relative rounded-[5px] mt-[40px] md:mt-[100px] w-[140px] md:w-[353px] md:h-[525px]  h-[200px] justify-center bg-white   border-[0.4px]  ">
          <Lottie
            className=" absolute w-[100px] md:w-[340px] bottom-[150px] right-[20px] md:bottom-[360px] md:right-[20px]"
            animationData={animationData}
          />

          <div className="bg-[#8847FA] absolute h-[34px] w-[34px] md:h-[114px] md:w-[114px] rounded-full bottom-[182px] md:bottom-[472px] right-[53px] md:right-[133px] z-1"></div>

          <img
            src="../img/laptop.png"
            className=" absolute w-[19px] h-[18px] md:w-[64px] md:h-[64px] z-2 bottom-[190px] right-[60px] md:bottom-[495px] md:right-[159px] "
          />
          <h1 className="pt-[25px] md:pt-[100px] text-[10px] text-center font-semibold font-['Montserrat'] leading-tight md:text-[24px]">
            Maintenance, Support & Cybersecurity
          </h1>
          <h1 className="text-center  font-['Montserrat']  text-[6px] px-[10px] md:px-[20px] md:mb-[10px] md:text-[15px] ">
            Jenisys provides comprehensive maintenance, support, and
            cybersecurity services to ensure the smooth and secure operation of
            your software systems. Our maintenance and support services offer
            ongoing updates and technical support to keep your systems running
            efficiently. On the cybersecurity front, we conduct thorough
            security assessments, identify vulnerabilities, and implement robust
            security protocols to protect your systems and data.
          </h1>
          <button className="rounded-[1px] w-[55px] md:w-[147px] md:h-[49px] md:rounded-[4px] text-[8px] h-[15px] mx-[40px] md:mx-[100px]  bg-[#8847FA] text-white  font-['Montserrat'] font-semibold md:text-[20px] ">
            Get Started
          </button>
        </div>
        <div className="scroll-on-appear drop-shadow-2xl shadow-[3px_3px_16px_rgba(0,0,0,0.25)] relative rounded-[5px] mt-[40px] md:mt-[100px] w-[140px] md:w-[353px] md:h-[525px]  h-[200px] justify-center bg-white   border-[0.4px]  ">
          <Lottie
            className=" absolute w-[100px] md:w-[340px] bottom-[150px] right-[20px] md:bottom-[360px] md:right-[20px]"
            animationData={animationData}
          />

          <div className="bg-[#8847FA] absolute h-[34px] w-[34px] md:h-[114px] md:w-[114px] rounded-full bottom-[182px] md:bottom-[472px] right-[53px] md:right-[133px] z-1"></div>

          <img
            src="../img/laptop.png"
            className=" absolute w-[19px] h-[18px] md:w-[64px] md:h-[64px] z-2 bottom-[190px] right-[60px] md:bottom-[495px] md:right-[159px] "
          />
          <h1 className="pt-[25px] md:pt-[100px] text-[10px] text-center font-semibold font-['Montserrat'] leading-tight md:text-[24px]">
            DevOps Services
          </h1>
          <h1 className="text-center  font-['Montserrat']  text-[6px] px-[10px] md:px-[20px] md:mb-[10px] md:text-[15px] ">
            Streamline your development & operations with our DevOps services.
            We implement continuous integration and continuous deployment
            (CI/CD) pipelines to automate and accelerate your software
            development process. Our team uses infrastructure as code (IaC) to
            ensure consistency and scalability in your IT infrastructure. By
            integrating development and operations, we help you achieve faster
            delivery times & improved quality. Trust Jenisys to help you
            environment that supports your business goals.
          </h1>
          <button className="rounded-[1px] w-[55px] md:w-[147px] md:h-[49px] md:rounded-[4px] text-[8px] h-[15px] mx-[40px] md:mx-[100px]  bg-[#8847FA] text-white  font-['Montserrat'] font-semibold md:text-[20px] ">
            Get Started
          </button>
        </div>
        <div className="scroll-on-appear drop-shadow-2xl shadow-[3px_3px_16px_rgba(0,0,0,0.25)] relative rounded-[5px] mt-[40px] md:mt-[100px] w-[140px] md:w-[353px] md:h-[525px]  h-[200px] justify-center bg-white   border-[0.4px]  ">
          <Lottie
            className=" absolute w-[100px] md:w-[340px] bottom-[150px] right-[20px] md:bottom-[360px] md:right-[20px]"
            animationData={animationData}
          />

          <div className="bg-[#8847FA] absolute h-[34px] w-[34px] md:h-[114px] md:w-[114px] rounded-full bottom-[182px] md:bottom-[472px] right-[53px] md:right-[133px] z-1"></div>

          <img
            src="../img/laptop.png"
            className=" absolute w-[19px] h-[18px] md:w-[64px] md:h-[64px] z-2 bottom-[190px] right-[60px] md:bottom-[495px] md:right-[159px] "
          />
          <h1 className="pt-[25px] md:pt-[100px] text-[10px] text-center font-semibold font-['Montserrat'] leading-tight md:text-[24px]">
            Data Analytics & Business Intelligence
          </h1>
          <h1 className="text-center  font-['Montserrat']  text-[6px] px-[10px] md:px-[20px] md:mb-[10px] md:text-[15px] ">
            We help you gather, analyze, and interpret data to gain valuable
            insights and make informed decisions. Our team develops customized
            data solutions that provide you with real-time reporting and
            analytics, enabling you to stay ahead of the competition. Whether
            you need data visualization, predictive analytics, or business
            intelligence tools, we have the expertise to deliver solutions that
            drive growth and efficiency. Let us help you turn your data into a
            strategic asset.
          </h1>
          <button className="rounded-[1px] w-[55px] md:w-[147px] md:h-[49px] md:rounded-[4px] text-[8px] h-[15px] mx-[40px] md:mx-[100px]  bg-[#8847FA] text-white  font-['Montserrat'] font-semibold md:text-[20px] ">
            Get Started
          </button>
        </div>
        <div className="scroll-on-appear drop-shadow-2xl shadow-[3px_3px_16px_rgba(0,0,0,0.25)] relative rounded-[5px] mt-[40px] md:mt-[100px] w-[140px] md:w-[353px] md:h-[525px]  h-[200px] justify-center bg-white   border-[0.4px]  ">
          <Lottie
            className=" absolute w-[100px] md:w-[340px] bottom-[150px] right-[20px] md:bottom-[360px] md:right-[20px]"
            animationData={animationData}
          />

          <div className="bg-[#8847FA] absolute h-[34px] w-[34px] md:h-[114px] md:w-[114px] rounded-full bottom-[182px] md:bottom-[472px] right-[53px] md:right-[133px] z-1"></div>

          <img
            src="../img/laptop.png"
            className=" absolute w-[19px] h-[18px] md:w-[64px] md:h-[64px] z-2 bottom-[190px] right-[60px] md:bottom-[495px] md:right-[159px] "
          />
          <h1 className="pt-[25px] md:pt-[100px] text-[10px] text-center font-semibold font-['Montserrat'] leading-tight md:text-[24px]">
            Branding & Digital Marketing
          </h1>
          <h1 className="text-center  font-['Montserrat']  text-[6px] px-[10px] md:px-[20px] md:mb-[10px] md:text-[15px] ">
            Build a strong brand and reach your target audience with our
            branding and digital marketing services. We offer branding
            strategies that include logo design, color schemes, and messaging to
            create a consistent and memorable brand identity. Our digital
            marketing services include SEO, PPC, and social media marketing to
            increase your online visibility and drive traffic to your website.
            Our team is here to help you achieve your marketing goals.{" "}
          </h1>
          <button className="rounded-[1px] w-[55px] md:w-[147px] md:h-[49px] md:rounded-[4px] text-[8px] h-[15px] mx-[40px] md:mx-[100px]  bg-[#8847FA] text-white  font-['Montserrat'] font-semibold md:text-[20px] ">
            Get Started
          </button>
        </div>
        <div className=" scroll-on-appear drop-shadow-2xl shadow-[3px_3px_16px_rgba(0,0,0,0.25)] relative rounded-[5px] mt-[40px] md:mt-[100px] w-[140px] md:w-[353px] md:h-[525px]  h-[200px] justify-center bg-white   border-[0.4px]  ">
          <Lottie
            className=" absolute w-[100px] md:w-[340px] bottom-[150px] right-[20px] md:bottom-[360px] md:right-[20px]"
            animationData={animationData}
          />

          <div className="bg-[#8847FA] absolute h-[34px] w-[34px] md:h-[114px] md:w-[114px] rounded-full bottom-[182px] md:bottom-[472px] right-[53px] md:right-[133px] z-1"></div>

          <img
            src="../img/laptop.png"
            className=" absolute w-[19px] h-[18px] md:w-[64px] md:h-[64px] z-2 bottom-[190px] right-[60px] md:bottom-[495px] md:right-[159px] "
          />
          <h1 className="pt-[25px] md:pt-[100px] text-[10px] text-center font-semibold font-['Montserrat'] leading-tight md:text-[24px]">
            Emerging Technologies
          </h1>
          <h1 className="text-center  font-['Montserrat']  text-[6px] px-[10px] md:px-[20px] md:mb-[10px] md:text-[15px] ">
            We stay ahead of technological trends and offer solutions that
            incorporate AI, machine learning, blockchain, IoT, and more. Our
            team of experts helps you explore and implement these advanced
            technologies to drive innovation and gain a competitive edge.
            Whether you need AI-powered analytics, blockchain solutions, or IoT
            integration, we have the expertise to deliver cutting edge solutions
            that transform your business.{" "}
          </h1>
          <button className="md:mt-[50px] rounded-[1px] w-[55px] md:w-[147px] md:h-[49px] md:rounded-[4px] text-[8px] h-[15px] mx-[40px] md:mx-[100px]  bg-[#8847FA] text-white  font-['Montserrat'] font-semibold md:text-[20px] ">
            Get Started
          </button>
        </div>
        <div className="scroll-on-appear mx-[50%] md:mx-0 drop-shadow-2xl shadow-[3px_3px_16px_rgba(0,0,0,0.25)] relative rounded-[5px] mt-[40px] md:mt-[100px] w-[140px] md:w-[353px] md:h-[525px]  h-[200px] justify-center bg-white   border-[0.4px]  ">
          <Lottie
            className=" absolute w-[100px] md:w-[340px] bottom-[150px] right-[20px] md:bottom-[360px] md:right-[20px]"
            animationData={animationData}
          />

          <div className="bg-[#8847FA] absolute h-[34px] w-[34px] md:h-[114px] md:w-[114px] rounded-full bottom-[182px] md:bottom-[472px] right-[53px] md:right-[133px] z-1"></div>

          <img
            src="../img/laptop.png"
            className=" absolute w-[19px] h-[18px] md:w-[64px] md:h-[64px] z-2 bottom-[190px] right-[60px] md:bottom-[495px] md:right-[159px] "
          />
          <h1 className="pt-[25px] md:pt-[100px] text-[10px] text-center font-semibold font-['Montserrat'] leading-tight md:text-[24px]">
            Customer - Centric Solutions
          </h1>
          <h1 className="text-center  font-['Montserrat']  text-[6px] px-[10px] md:px-[20px] md:mb-[10px] md:text-[15px] ">
            At Jenisys, we prioritize customer satisfaction by developing
            solutions that focus on user experience and customer feedback. We
            work closely with you to understand your customers' needs and
            preferences, ensuring that our solutions meet their expectations and
            enhance their experience. By gathering and acting on customer
            feedback, we continuously improve our services and deliver solutions
            that drive customer loyalty and satisfaction.{" "}
          </h1>
          <button className="rounded-[1px]  w-[55px] md:w-[147px] md:h-[49px] md:rounded-[4px] text-[8px] h-[15px] mx-[40px] md:mx-[100px]  bg-[#8847FA] text-white  font-['Montserrat'] font-semibold md:text-[20px] ">
            Get Started
          </button>
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

export default Services;
