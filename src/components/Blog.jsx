import React from "react"; // eslint-disable-line
import "../App.css";

function Blog() {
  return (
    <div  className="mt-[90px] bg-[#30248c] ">
    <div className=" flex flex-row pt-[25px] pb-[10px]">
      <h1 className="font-['Kodchasan'] text-[35px] ml-[25px] mr-[500px] text-white">Categories</h1>
     
      <button className="font-['Inter'] ml-[480px] text-[22px]  text-[#FFFBEB] bg-[#5851AD] rounded-full py-2 px-3">
        New Blog
      </button>
     
    </div>
    <hr className="border-[1px] w-[1355px] border-[#FFFFFF] ml-[10px]" />
    <div className="mt[20px]  bg-[#30248c] py-4 ">
    <button className="font-['Inter'] ml-[6px] text-[22px] hover:bg-[#5A54A4] border-[1px] border-[#FFFFFF] text-[#FFFBEB] bg-[#918ADF] rounded-full py-2 px-8 mr-[9px]">
        Technology
      </button>
      <button className="font-['Inter'] hover:bg-[#5A54A4] text-[22px] border-[1px] border-[#FFFFFF] text-[#FFFBEB] bg-[#918ADF] rounded-full py-2 px-8 mr-[9px]">
      Technology
      </button>
      <button className="font-['Inter'] hover:bg-[#5A54A4] text-[22px] border-[1px] border-[#FFFFFF] text-[#FFFBEB] bg-[#918ADF] rounded-full py-2 px-8 mr-[9px]">
      Technology
      </button>
      <button className="font-['Inter'] hover:bg-[#5A54A4] text-[22px] border-[1px] border-[#FFFFFF] text-[#FFFBEB] bg-[#918ADF] rounded-full py-2 px-8 mr-[9px]">
      Technology
      </button>
      <button className="font-['Inter'] hover:bg-[#5A54A4] text-[22px] border-[1px] border-[#FFFFFF] text-[#FFFBEB] bg-[#918ADF] rounded-full py-2 px-8 mr-[9px]">
      Technology
      </button>
      <button className="font-['Inter'] hover:bg-[#5A54A4] text-[22px] border-[1px] border-[#FFFFFF] text-[#FFFBEB] bg-[#918ADF] rounded-full py-2 px-8 mr-[9px]">
      Technology
      </button>
      <button className="font-['Inter'] hover:bg-[#5A54A4] text-[22px] border-[1px] border-[#FFFFFF] text-[#FFFBEB] bg-[#918ADF] rounded-full py-2 px-8">
      Technology
      </button>
    </div>
    <div className="flex flex-row mt-[30px] mx-[20px] pb-[30px]">
      <img
      src="img/Blog.png"
      alt="blog"
      className="w-[750px] h-[450px]"
      />
      <div className="flex flex-col">
      <h1 className=" px-10 text-wrap text-white font-['Inter'] text-[33px] mr-[20px] leading-8 mb-[15px] ">How Apple Outperformed Google and Microsoft in AI Rollout</h1>
      <h1 className=" pt-[15px] px-10 text-wrap text-white font-['Inter'] text-[18px] ">Over the last several weeks, we’ve had Google I/O, which highlighted the rollout of Google’s Gemini AI engine for smartphones; Microsoft Build, which focused on its Copilot+ rollout for PCs; and Apple’s WWDC24 video, which showcased the rollout of AI on both PCs and smartphones. Let’s explor...</h1>
      <button className="shadow-lg ml-10 mt-5 font-['Inter']  hover:shadow-white text-[22px]  text-[#5A54A4] bg-[#FFFBEB] rounded-full w-[155px] h-[50px]">
        Read More
      </button>

    </div>
    </div>
    <img 
    className="ml-[1300px] "
    src="img/arrowdown.png"
    alt="arrow"
    />
    </div>
  );
}

export default Blog;
