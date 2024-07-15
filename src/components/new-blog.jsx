import React, { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import "../App.css";


   

function NewBlog(){

    const [isOpen, setIsOpen] = useState(false);
    return(
        
        <div className="mt-[90px] pt-[20px] self-stretch bg-[#30248c] relative flex-row ">
        <div className="pl-[20px] flex-col">
            <h1 className="text-white font-['Kodchasan'] text-[30px] underline"
            >Blog Title Here</h1>
            <div className="relative inline-block pt-[20px] ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#5851AD] font-['Inter'] text-white text-[20px] py-2 pr-28 pl-4 text-lg border-none rounded-full "
      >
        Category
        {/* <IoIosArrowDropdown  /> */}
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
    <button className='absolute'>Image</button>
        </div>
        </div>

    );

}
export default NewBlog; 