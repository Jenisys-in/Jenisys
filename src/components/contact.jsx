import React, { useEffect } from "react";
import "../App.css";

function Contact() {
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
    <div className="flex overflow-hidden flex-col items-center px-20 pb-56 bg-white max-md:px-5 max-md:pb-24">
      <div className="scroll-on-appear mt-28 text-5xl font-bold tracking-tighter leading-tight text-black max-md:mt-10 max-md:text-4xl">
        Contact Us
      </div>
      <div className="scroll-on-appear mt-11 text-lg font-semibold tracking-tight leading-8 text-center text-black w-[915px] max-md:mt-10 max-md:max-w-full">
        If you have any questions about our services, want to discuss a
        potential collaboration, or just need advice on your tech strategy, our
        team is here to help. Get in touch with us today.
      </div>
      <div className="scroll-on-appear mt-20 text-4xl font-bold tracking-tighter leading-tight text-black max-md:mt-10 max-md:max-w-full">
        Contact our team for a consultation
      </div>
      <div className="scroll-on-appear mt-20 w-full max-w-[1147px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center leading-tight text-black max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c259cefb2f8833ec7b6a447f60406cf5d2903ef4a0874fdc696704a888fb5287?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c259cefb2f8833ec7b6a447f60406cf5d2903ef4a0874fdc696704a888fb5287?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c259cefb2f8833ec7b6a447f60406cf5d2903ef4a0874fdc696704a888fb5287?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c259cefb2f8833ec7b6a447f60406cf5d2903ef4a0874fdc696704a888fb5287?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c259cefb2f8833ec7b6a447f60406cf5d2903ef4a0874fdc696704a888fb5287?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c259cefb2f8833ec7b6a447f60406cf5d2903ef4a0874fdc696704a888fb5287?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c259cefb2f8833ec7b6a447f60406cf5d2903ef4a0874fdc696704a888fb5287?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c259cefb2f8833ec7b6a447f60406cf5d2903ef4a0874fdc696704a888fb5287?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392"
                className="object-contain max-w-full rounded-lg aspect-square w-[105px]"
              />
              <div className="mt-7 text-3xl font-semibold tracking-tight">
                Talk to our Team
              </div>
              <div className="self-stretch mt-6 ml-[60px] text-xl tracking-tight">
                +14047365291, +918240384648
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center leading-tight text-black max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b9e360ac99f97e7e9c7fbc97a2002af4ee2f1252bd083a868dc859b84d53d3a3?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9e360ac99f97e7e9c7fbc97a2002af4ee2f1252bd083a868dc859b84d53d3a3?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9e360ac99f97e7e9c7fbc97a2002af4ee2f1252bd083a868dc859b84d53d3a3?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9e360ac99f97e7e9c7fbc97a2002af4ee2f1252bd083a868dc859b84d53d3a3?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9e360ac99f97e7e9c7fbc97a2002af4ee2f1252bd083a868dc859b84d53d3a3?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9e360ac99f97e7e9c7fbc97a2002af4ee2f1252bd083a868dc859b84d53d3a3?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9e360ac99f97e7e9c7fbc97a2002af4ee2f1252bd083a868dc859b84d53d3a3?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9e360ac99f97e7e9c7fbc97a2002af4ee2f1252bd083a868dc859b84d53d3a3?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392"
                className="object-contain max-w-full rounded-lg aspect-square w-[105px]"
              />
              <div className="mt-7 text-3xl font-semibold tracking-tight">
                Email Us
              </div>
              <div className="self-stretch mt-5 ml-[60px] text-xl tracking-tight">
                tuhin.das@jenisys.in
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center leading-tight text-black max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/953cbefbd3c0e319848d7047fb41a447c592c28c3c451256fe18472cb73f56d1?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/953cbefbd3c0e319848d7047fb41a447c592c28c3c451256fe18472cb73f56d1?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/953cbefbd3c0e319848d7047fb41a447c592c28c3c451256fe18472cb73f56d1?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/953cbefbd3c0e319848d7047fb41a447c592c28c3c451256fe18472cb73f56d1?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/953cbefbd3c0e319848d7047fb41a447c592c28c3c451256fe18472cb73f56d1?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/953cbefbd3c0e319848d7047fb41a447c592c28c3c451256fe18472cb73f56d1?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/953cbefbd3c0e319848d7047fb41a447c592c28c3c451256fe18472cb73f56d1?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/953cbefbd3c0e319848d7047fb41a447c592c28c3c451256fe18472cb73f56d1?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392"
                className="object-contain max-w-full rounded-lg aspect-square w-[105px]"
              />
              <div className="self-stretch mt-7 ml-[60px] text-3xl font-semibold tracking-tight">
                Operating Hours
              </div>
              <div className="mt-4 text-xl tracking-tight">8am to 5pm</div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-on-appear mt-32 w-full max-w-[1325px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-28 w-full leading-tight text-black max-md:mt-10 max-md:max-w-full">
              <div className="self-start text-5xl font-bold tracking-tighter max-md:text-4xl">
                Let’s Talk Tech
              </div>
              <div className="flex flex-wrap gap-5 items-start mt-20 max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
                  <div className="self-start text-2xl font-semibold tracking-tight">
                    Name
                  </div>
                  <input
                    className="w-[190px]  h-[30px] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] border-[rgba(0,0,0,0.25)] border-[0.5px] font-light font-montserrat  top-[14px] left-[13px] tracking-[-0.02em] leading-[120%] text-black text-left inline-block h-5 p-0 z-[1]"
                    placeholder="Ex. Parker"
                    type="text"
                  />
                </div>
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
                  <div className="self-start text-2xl font-semibold tracking-tight">
                    Email
                  </div>
                  <input
                    className="w-[200px] h-[30px] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] border-[rgba(0,0,0,0.25)] border-[0.5px] font-light font-montserrat  top-[14px] left-[13px] tracking-[-0.02em] leading-[120%] text-black text-left inline-block h-5 p-0 z-[2]"
                    placeholder="Ex. yourmail@gmail.com"
                    type="text"
                  />
                </div>
              </div>
              <div className="self-start mt-12 text-2xl font-semibold tracking-tight max-md:mt-10">
                Message
              </div>
              <input
                className="w-[338px] h-[30px] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] border-[rgba(0,0,0,0.25)] border-[0.5px] font-light font-montserrat text-mini bg-[transparent] h-5 relative tracking-[-0.02em] leading-[120%] text-black text-left inline-block max-w-full p-0 z-[1]"
                placeholder="Type Your Message Here"
                type="text"
              />
              <button className="px-16 py-8 mt-14 text-2xl font-semibold tracking-tight text-white bg-indigo-800 rounded-md max-md:px-5 max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/31b99f91a536bf5fd77dbe61227cd7e8d92011d52c400e342fe0421e08fda931?apiKey=150ca4726f0b413090f132e093d2a392&&apiKey=150ca4726f0b413090f132e093d2a392"
              className="object-contain grow w-full rounded-md aspect-[1.03] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
