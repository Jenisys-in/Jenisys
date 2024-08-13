import React from "react";
import "../App.css";
import Lottie from "lottie-react";
import animationData from "./AnimationLottie.json";

const Services = () => {
  return (
    <div className="mt-[85px] w-full">
      {" "}
      <div className="w-full">
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
          >
            <source src="/Our Services Video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="grid grid-cols-2 px-[40px] ml-[80px] md:grid-cols-3 3xl:mx-[150px]  mb-[100px]">
        <div className="drop-shadow-2xl shadow-[3px_3px_16px_rgba(0,0,0,0.25)] relative rounded-[5px] mt-[40px] md:mt-[100px] w-[140px] md:w-[353px] md:h-[525px]  h-[200px] justify-center bg-white   border-[0.4px]  ">
          <Lottie
            className=" absolute w-[100px] md:w-[340px] bottom-[150px] right-[20px] md:bottom-[360px] md:right-[20px]"
            animationData={animationData}
          />

          <div className="bg-[#8847FA] absolute  h-[114px] w-[114px] rounded-full bottom-[181px] md:bottom-[472px] right-[133px] z-1"></div>

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
        <div className="drop-shadow-2xl shadow-[3px_3px_16px_rgba(0,0,0,0.25)] relative rounded-[5px] mt-[40px] md:mt-[100px] w-[140px] md:w-[353px] md:h-[525px]  h-[200px] justify-center bg-white   border-[0.4px]  ">
          <Lottie
            className=" absolute w-[100px] md:w-[340px] bottom-[150px] right-[20px] md:bottom-[360px] md:right-[20px]"
            animationData={animationData}
          />

          <div className="bg-[#8847FA] absolute  h-[114px] w-[114px] rounded-full bottom-[181px] md:bottom-[472px] right-[133px] z-1"></div>

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
        <div className="drop-shadow-2xl shadow-[3px_3px_16px_rgba(0,0,0,0.25)] relative rounded-[5px] mt-[40px] md:mt-[100px] w-[140px] md:w-[353px] md:h-[525px]  h-[200px] justify-center bg-white   border-[0.4px]  ">
          <Lottie
            className=" absolute w-[100px] md:w-[340px] bottom-[150px] right-[20px] md:bottom-[360px] md:right-[20px]"
            animationData={animationData}
          />

          <div className="bg-[#8847FA] absolute  h-[114px] w-[114px] rounded-full bottom-[181px] md:bottom-[472px] right-[133px] z-1"></div>

          <img
            src="../img/laptop.png"
            className=" absolute w-[19px] h-[18px] md:w-[64px] md:h-[64px] z-2 bottom-[190px] right-[60px] md:bottom-[495px] md:right-[159px] "
          />
          <h1 className="pt-[25px] md:pt-[100px] text-[10px] text-center font-semibold font-['Montserrat'] leading-tight md:text-[24px]">
            IT Consulting & Digital Transformation
          </h1>
          <h1 className="text-center  font-['Montserrat']  text-[6px] px-[10px] md:px-[20px] md:mb-[10px] md:text-[15px] ">
            {" "}
            We offer comprehensive IT consulting & digital transformation
            services to drive innovation and success in your business. Our
            experts work closely to craft a technology strategy aligned with
            your goals and provide tailored recommendations for growth &
            efficiency. We help you embrace digital transformation through
            process automation, digital tool implementation, and platform
            integration, ensuring your business remains competitive and
            efficient in the digital age.
          </h1>
          <button className="rounded-[1px] w-[55px] md:w-[147px] md:h-[49px] md:rounded-[4px] text-[8px] h-[15px] mx-[40px] md:mx-[100px]  bg-[#8847FA] text-white  font-['Montserrat'] font-semibold md:text-[20px] ">
            Get Started
          </button>
        </div>
        <div className="drop-shadow-2xl shadow-[3px_3px_16px_rgba(0,0,0,0.25)] relative rounded-[5px] mt-[40px] md:mt-[100px] w-[140px] md:w-[353px] md:h-[525px]  h-[200px] justify-center bg-white   border-[0.4px]  ">
          <Lottie
            className=" absolute w-[100px] md:w-[340px] bottom-[150px] right-[20px] md:bottom-[360px] md:right-[20px]"
            animationData={animationData}
          />

          <div className="bg-[#8847FA] absolute  h-[114px] w-[114px] rounded-full bottom-[181px] md:bottom-[472px] right-[133px] z-1"></div>

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
            Our team is here to help you achieve your marketing goals.
          </h1>
          <button className="rounded-[1px] w-[55px] md:w-[147px] md:h-[49px] md:rounded-[4px] text-[8px] h-[15px] mx-[40px] md:mx-[100px]  bg-[#8847FA] text-white  font-['Montserrat'] font-semibold md:text-[20px] ">
            Get Started
          </button>
        </div>
        <div className="drop-shadow-2xl shadow-[3px_3px_16px_rgba(0,0,0,0.25)] relative rounded-[5px] mt-[40px] md:mt-[100px] w-[140px] md:w-[353px] md:h-[525px]  h-[200px] justify-center bg-white   border-[0.4px]  ">
          <Lottie
            className=" absolute w-[100px] md:w-[340px] bottom-[150px] right-[20px] md:bottom-[360px] md:right-[20px]"
            animationData={animationData}
          />

          <div className="bg-[#8847FA] absolute  h-[114px] w-[114px] rounded-full bottom-[181px] md:bottom-[472px] right-[133px] z-1"></div>

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
            that transform your business.
          </h1>
          <button className="rounded-[1px] w-[55px] md:w-[147px] md:h-[49px] md:rounded-[4px] text-[8px] h-[15px] mx-[40px] md:mx-[100px]  bg-[#8847FA] text-white  font-['Montserrat'] font-semibold md:text-[20px] ">
            Get Started
          </button>
        </div>
        <div className="drop-shadow-2xl shadow-[3px_3px_16px_rgba(0,0,0,0.25)] relative rounded-[5px] mt-[40px] md:mt-[100px] w-[140px] md:w-[353px] md:h-[525px]  h-[200px] justify-center bg-white   border-[0.4px]  ">
          <Lottie
            className=" absolute w-[100px] md:w-[340px] bottom-[150px] right-[20px] md:bottom-[360px] md:right-[20px]"
            animationData={animationData}
          />

          <div className="bg-[#8847FA] absolute  h-[114px] w-[114px] rounded-full bottom-[181px] md:bottom-[472px] right-[133px] z-1"></div>

          <img
            src="../img/laptop.png"
            className=" absolute w-[19px] h-[18px] md:w-[64px] md:h-[64px] z-2 bottom-[190px] right-[60px] md:bottom-[495px] md:right-[159px] "
          />
          <h1 className="pt-[25px] md:pt-[100px] text-[10px] text-center font-semibold font-['Montserrat'] leading-tight md:text-[24px]">
            Customer-Centric Solutions
          </h1>
          <h1 className="text-center  font-['Montserrat']  text-[6px] px-[10px] md:px-[20px] md:mb-[10px] md:text-[15px] ">
            At Jenisys, we prioritize customer satisfaction by developing
            solutions that focus on user experience and customer feedback. We
            work closely with you to understand your customers' needs and
            preferences, ensuring that our solutions meet their expectations and
            enhance their experience. By gathering and acting on customer
            feedback, we continuously improve our services and deliver solutions
            that drive customer loyalty and satisfaction.
          </h1>
          <button className="rounded-[1px] w-[55px] md:w-[147px] md:h-[49px] md:rounded-[4px] text-[8px] h-[15px] mx-[40px] md:mx-[100px]  bg-[#8847FA] text-white  font-['Montserrat'] font-semibold md:text-[20px] ">
            Get Started
          </button>
        </div>
        <div className="drop-shadow-2xl shadow-[3px_3px_16px_rgba(0,0,0,0.25)] relative rounded-[5px] mt-[40px] md:mt-[100px] w-[140px] md:w-[353px] md:h-[525px]  h-[200px] justify-center bg-white   border-[0.4px]  ">
          <Lottie
            className=" absolute w-[100px] md:w-[340px] bottom-[150px] right-[20px] md:bottom-[360px] md:right-[20px]"
            animationData={animationData}
          />

          <div className="bg-[#8847FA] absolute  h-[114px] w-[114px] rounded-full bottom-[181px] md:bottom-[472px] right-[133px] z-1"></div>

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
        <div className="drop-shadow-2xl shadow-[3px_3px_16px_rgba(0,0,0,0.25)] relative rounded-[5px] mt-[40px] md:mt-[100px] w-[140px] md:w-[353px] md:h-[525px]  h-[200px] justify-center bg-white   border-[0.4px]  ">
          <Lottie
            className=" absolute w-[100px] md:w-[340px] bottom-[150px] right-[20px] md:bottom-[360px] md:right-[20px]"
            animationData={animationData}
          />

          <div className="bg-[#8847FA] absolute  h-[114px] w-[114px] rounded-full bottom-[181px] md:bottom-[472px] right-[133px] z-1"></div>

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
        <div className="drop-shadow-2xl shadow-[3px_3px_16px_rgba(0,0,0,0.25)] relative rounded-[5px] mt-[40px] md:mt-[100px] w-[140px] md:w-[353px] md:h-[525px]  h-[200px] justify-center bg-white   border-[0.4px]  ">
          <Lottie
            className=" absolute w-[100px] md:w-[340px] bottom-[150px] right-[20px] md:bottom-[360px] md:right-[20px]"
            animationData={animationData}
          />

          <div className="bg-[#8847FA] absolute  h-[114px] w-[114px] rounded-full bottom-[181px] md:bottom-[472px] right-[133px] z-1"></div>

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
      </div>
    </div>
  );
};

export default Services;
