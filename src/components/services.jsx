import React from 'react' ;
import "../App.css";
import Lottie from "lottie-react";
import animationData from "./AnimationLottie.json";

const Services = () => {

    return(
        <div className='mt-[85px]'>
            <div>
                <h1 className="font-['Montserrat'] font-bold text-[21px] text-center md:text-[48px]">Services</h1>
                <h1 className="mt-[20px] font-['Montserrat'] font-semibold text-[9px] md:text-[18px] md:px-[170px] md:tracking-wider text-center px-[50px]">Jenisys is a leading tech solutions provider that crafts top-tier software and digital solutions for businesses of all sizes. Our unparalleled expertise drives your success beyond limits. From consultation to development, we are your partner in transformative technology.</h1>
                <img 
                src="../img/services1.png"
                className='w-full h-[183px] md:h-[403px] mt-[20px]' />
            </div>
            <div className="grid grid-cols-2 px-[40px] md:grid-cols-3   mb-[100px]">
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
              At Jenisys, we specialize in developing custom software solutions tailored to meet the unique  needs of your business. Our team of experienced developers utilizes the latest technologies to  create software that aligns perfectly with your specific requirements. Whether you need a  comprehensive enterprise solution, a bespoke web application, or a specialized mobile app,  we have the expertise to deliver high-quality, scalable, and robust software.
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
              At Jenisys, we specialize in developing custom software solutions tailored to meet the unique  needs of your business. Our team of experienced developers utilizes the latest technologies to  create software that aligns perfectly with your specific requirements. Whether you need a  comprehensive enterprise solution, a bespoke web application, or a specialized mobile app,  we have the expertise to deliver high-quality, scalable, and robust software.
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
              At Jenisys, we specialize in developing custom software solutions tailored to meet the unique  needs of your business. Our team of experienced developers utilizes the latest technologies to  create software that aligns perfectly with your specific requirements. Whether you need a  comprehensive enterprise solution, a bespoke web application, or a specialized mobile app,  we have the expertise to deliver high-quality, scalable, and robust software.
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
              At Jenisys, we specialize in developing custom software solutions tailored to meet the unique  needs of your business. Our team of experienced developers utilizes the latest technologies to  create software that aligns perfectly with your specific requirements. Whether you need a  comprehensive enterprise solution, a bespoke web application, or a specialized mobile app,  we have the expertise to deliver high-quality, scalable, and robust software.
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
              At Jenisys, we specialize in developing custom software solutions tailored to meet the unique  needs of your business. Our team of experienced developers utilizes the latest technologies to  create software that aligns perfectly with your specific requirements. Whether you need a  comprehensive enterprise solution, a bespoke web application, or a specialized mobile app,  we have the expertise to deliver high-quality, scalable, and robust software.
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
              At Jenisys, we specialize in developing custom software solutions tailored to meet the unique  needs of your business. Our team of experienced developers utilizes the latest technologies to  create software that aligns perfectly with your specific requirements. Whether you need a  comprehensive enterprise solution, a bespoke web application, or a specialized mobile app,  we have the expertise to deliver high-quality, scalable, and robust software.
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
              At Jenisys, we specialize in developing custom software solutions tailored to meet the unique  needs of your business. Our team of experienced developers utilizes the latest technologies to  create software that aligns perfectly with your specific requirements. Whether you need a  comprehensive enterprise solution, a bespoke web application, or a specialized mobile app,  we have the expertise to deliver high-quality, scalable, and robust software.
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
              At Jenisys, we specialize in developing custom software solutions tailored to meet the unique  needs of your business. Our team of experienced developers utilizes the latest technologies to  create software that aligns perfectly with your specific requirements. Whether you need a  comprehensive enterprise solution, a bespoke web application, or a specialized mobile app,  we have the expertise to deliver high-quality, scalable, and robust software.
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
              At Jenisys, we specialize in developing custom software solutions tailored to meet the unique  needs of your business. Our team of experienced developers utilizes the latest technologies to  create software that aligns perfectly with your specific requirements. Whether you need a  comprehensive enterprise solution, a bespoke web application, or a specialized mobile app,  we have the expertise to deliver high-quality, scalable, and robust software.
              </h1>
              <button className="rounded-[1px] w-[55px] md:w-[147px] md:h-[49px] md:rounded-[4px] text-[8px] h-[15px] mx-[40px] md:mx-[100px]  bg-[#8847FA] text-white  font-['Montserrat'] font-semibold md:text-[20px] ">
                Get Started
              </button>
            </div>




            </div>

        </div>




    );

}

export default Services;
