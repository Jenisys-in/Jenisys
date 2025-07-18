import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowDropdown, IoIosAddCircleOutline } from "react-icons/io";

function NewBlog() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const [blogContent, setBlogContent] = useState('');
  const [blogTitle, setBlogTitle] = useState('Blog Title Here');

  const categories = [
    { id: 1, name: 'Technology' },
    { id: 2, name: 'Lifestyle' },
    { id: 3, name: 'Business' }
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category.name);
    setIsOpen(false);
  };

  const handlePublish = () => {
    // Add your publish logic here
    console.log('Publishing blog:', { blogTitle, selectedCategory, blogContent });
  };

  const handleImageUpload = () => {
    // Add image upload logic here
    console.log('Image upload clicked');
  };

  return (
    <div className="mt-[90px] pt-[20px] self-stretch bg-gradient-to-br from-purple-600 to-blue-600 flex flex-col lg:flex-row min-h-screen">
      {/* Left Section */}
      <div className="pl-[20px] flex-col relative lg:w-1/3">
        <input
          type="text"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
          className="text-white font-['Kodchasan'] text-[30px] underline bg-transparent border-none outline-none w-full"
          placeholder="Blog Title Here"
        />
        
        {/* Category Dropdown */}
        <div className="relative inline-block pt-[20px]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#5851AD] font-['Inter'] text-[#FFFBEB] text-[20px] py-2 pr-24 pl-4 border-none rounded-full hover:bg-[#4a439a] transition-colors duration-200"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
          >
            {selectedCategory}
            <IoIosArrowDropdown className={`inline ml-[6px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          {isOpen && (
            <div className="absolute bg-[#5851AD] min-w-[160px] shadow-lg z-10 rounded-md mt-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category)}
                  className="block w-full text-left text-white font-extrabold py-3 px-4 hover:bg-gray-300 hover:text-black transition-colors duration-200"
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Image Upload Button */}
        <button 
          onClick={handleImageUpload}
          className="bg-[#5851AD] text-[#FFFBEB] text-[20px] border-none py-2 pr-14 pl-4 rounded-full font-['Inter'] absolute top-[140px] left-[20px] hover:bg-[#4a439a] transition-colors duration-200"
        > 
          <IoIosAddCircleOutline className='inline -mt-[2px]' /> Image
        </button>

        {/* Image Preview */}
        <div className="mt-[110px] w-[280px] h-[310px] relative">
          <Image 
            alt="Blog preview image"
            src="/img/login.png"
            fill
            sizes="280px"
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
            priority={false}
          />
        </div>

        {/* Publish Button */}
        <button 
          onClick={handlePublish}
          className="shadow-lg shadow-black hover:bg-[#F9A825] hover:text-[#5851AD] hover:shadow-white bg-white text-[#5A54A4] text-[20px] border-none py-2 px-10 mb-[60px] mt-[35px] rounded-full font-['Inter'] transition-all duration-200"
        > 
          Publish 
        </button>
      </div>

      {/* Right Section - Editor */}
      <div className='pl-[20px] flex-col relative lg:w-2/3 flex-1'>
        {/* Toolbar */}
        <div className="rounded-lg bg-[#5A54A4] px-4 py-3 flex flex-wrap gap-4 text-[#FFFBEB] font-['Kodchasan'] text-[16px] lg:text-[20px]">
          <button className="hover:text-gray-300 transition-colors">Fonts Selection</button>
          <button className="hover:text-gray-300 transition-colors">Bold/Italic/Underline</button>
          <button className="hover:text-gray-300 transition-colors">Alignment Options</button>
          <button className="hover:text-gray-300 transition-colors">Font Size</button>
          <button className="hover:text-gray-300 transition-colors ml-auto">Preview</button>
        </div>

        {/* Content Editor */}
        <div className='mt-[30px] pr-[7px] flex-1'>
          <textarea
            value={blogContent}
            onChange={(e) => setBlogContent(e.target.value)}
            placeholder="Start writing your blog content here..."
            className='w-full h-[560px] rounded-lg bg-[#D9D9D9] p-4 resize-none outline-none focus:ring-2 focus:ring-[#5851AD] transition-all duration-200'
          />
        </div>
      </div>
    </div>
  );
}

export default NewBlog;