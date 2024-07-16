import React, { useState } from 'react';
import { IoIosArrowDropdown , IoIosAddCircleOutline } from "react-icons/io";
import "../App.css";


   

function NewBlog(){

    const [isOpen, setIsOpen] = useState(false);
    return(
        
        <div className="mt-[90px] pt-[20px] self-stretch bg-radial-gradient flex flex-row ">
        <div className="pl-[20px] flex-col relative">
            <h1 className="text-white font-['Kodchasan'] text-[30px] underline"
            >Blog Title Here</h1>
            <div className="relative inline-block pt-[20px] ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#5851AD] font-['Inter'] text-[#FFFBEB] text-[20px] py-2 pr-24 pl-4 text-lg border-none rounded-full "
      >
        Category
        <IoIosArrowDropdown className='inline ml-[6px]' />
      </button>
      {isOpen && (
        <div className="absolute bg-[#5851AD] min-w-[160px] shadow-lg z-10">
          <a
            href="#"
            className="block text-white font-extrabold py-3 px-4 hover:bg-gray-300 hover:text-black"
          >
             1
          </a>
          <a
            href="#"
            className="block text-white font-extrabold py-3 px-4 hover:bg-gray-300 hover:text-black"
          >
             2
          </a>
          <a
            href="#"
            className="block text-white font-extrabold py-3 px-4 hover:bg-gray-300 hover:text-black"
          >
             3
          </a>
        </div>
      )}
    </div>
    <button className=" bg-[#5851AD] text-[#FFFBEB] text-[20px] text-lg border-none py-2 pr-14 pl-4 rounded-full font-['Inter'] absolute top-[140px] left-[20px]"> <IoIosAddCircleOutline className='inline -mt-[2px]' /> Image</button>
        <img 
        alt="pic"
        src="img/login.png"
        loading='lazy'
        className='mt-[110px] w-[280px] h-[310px]'
        />
        <button className="shadow-lg shadow-black hover:bg-[#F9A825] hover:text-[#5851AD] hover:shadow-white bg-white text-[#5A54A4] text-[20px] text-lg border-none py-2 px-10 mb-[60px] mt-[35px] rounded-full font-['Inter'] "> Publish </button>
        </div>
        <div className='pl-[20px] flex-col relative'>
          <div className="rounded-lg bg-[#5A54A4] px-4 inline flex flex-row text-[#FFFBEB] font-['Kodchasan'] space-x-5 text-[25px]" >
            
            <h1>Fonts Selection</h1>
            <h1>Bold/Italic/Underline</h1>
            <h1>Alignment Options</h1>
            <h1>Fontsize</h1>
            <h1 className='pl-[50px]  '>Preview </h1>
          </div>
          <div className='mt-[30px] pr-[7px]'>
            <textarea
            type="text"
            className='w-full h-[560px] rounded-lg bg-[#D9D9D9]'
            ></textarea>
          </div>
        </div>
        </div>

    );

}
export default NewBlog; 