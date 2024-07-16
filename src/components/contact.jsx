import React from 'react';
import "../App.css";

function Contact(){
    return(
            <div className="mt-[90px] pt-[10px] self-stretch bg-radial-gradient flex flex-row ">
                <div className="pt-[20px] text-white font-['Inter'] pl-[40px] text-[20px] ml-[20px] flex flex-col">
                    <h1 className='mb-[7px]'>Name</h1>
                    <input
                    type="text"
                    className='pl-[10px] rounded-full w-[500px] h-[45px] text-black focus:shadow-black focus:shadow-lg'></input>
                    <h1 className='mb-[7px] mt-[20px]'>E-Mail</h1>
                    <input
                    type="text"
                    className='pl-[10px] rounded-full w-[500px] h-[45px] text-black focus:shadow-black focus:shadow-lg'></input>
                    <h1  className='mb-[7px] mt-[20px]'>Phone Number</h1>
                    <input
                    type="text"
                    className='pl-[10px] rounded-full w-[500px] h-[45px] text-black focus:shadow-black focus:shadow-lg'></input>
                    <h1  className='mb-[10px] mt-[20px]'>Message</h1>
                    <textarea
                    className='pl-[10px] rounded-lg w-[500px] h-[200px] text-black focus:shadow-black focus:shadow-lg'></textarea>
                    <button className="rounded-full w-[120px] py-2 bg-[#5851AD] mt-[25px] mb-[41px] shadow-lg shadow-black hover:bg-[#FFFFFF] hover:text-[#5851AD] hover:shadow-white">
                        Submit
                    </button>

                </div>
                <div className="pt-[20px] pl-[210px] mt-[40px] font-['Inter'] relative text-white flex flex-col pr-[70px]">
                    <h1 className='text-[50px]'>Contact Us</h1>
                    <h1 
                    className='text-[24px] leading-6 mt-[10px]'
                    >Over the last several weeks, we’ve had Google I/O, which highlighted the rollout of Google’s Gemini AI engine for smartphones; Microsoft Build, which focused on its Copilot+ rollout for PCs; and Apple’s WWDC24 video, which showcased the rollout of AI on both PCs and smartphones. Let’s explor...</h1>
                    <img 
                    src="img/Phone call.png  "
                    className='w-[60px] h-[60px] bg-[#918ADF] p-4 rounded-full mt-[20px]'
                    />
                    <h1 className='absolute top-[305px] right-[420px] text-[20px]'>+365454321</h1>
                    <img 
                    src="img/Mail.png"
                    className='w-[60px] h-[60px] bg-[#918ADF] p-4 rounded-full mt-[20px]'
                    />
                    <h1 className='absolute top-[390px] right-[380px] text-[20px]'>abcd@gmail.com</h1>
                    <img 
                    src="img/Map pin.png"
                    className='w-[60px] h-[60px] bg-[#918ADF] p-4 rounded-full mt-[20px]' 
                    />
                    <h1 className='absolute top-[465px] right-[411px] text-[20px]'>Kolkata, India</h1>
                    <img
                    src="/img/ellipse.jpeg"
                    alt="Logo"
                    className="ml-[500px] -mt-[20px] w-10 h-10 rounded-full"
                    />
                    <img
                    src="/img/ellipse.jpeg"
                    alt="Logo"
                    className="ml-[400px] mt-[30px] w-16 h-16 rounded-full"
                    />

                </div>

            </div>


    );


}

export default Contact;