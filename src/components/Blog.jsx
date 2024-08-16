import React from "react"; // eslint-disable-line
import "../App.css";



function Blog() {
  return (
    <div className="flex justify-center items-center h-screen"> 
    <div className="border-2 flex flex-col justify-center items-center p-32 rounded-[90px] hover:shadow-[#361CA9] hover:shadow-lg transition duration-300"> 
      <a href="/">
      <img 
        src="../img/Jenisys Hero.png"
        alt="logo"
        className="md:shadow-2xl hover:shadow-[#361CA9] transition duration-300 aspect-auto"

      /></a>
      <h1 className="font-['Montserrat'] md:text-[1.5rem] text-center md:mt-16">
        This page is currently under construction. Stay tuned!
      </h1>
    </div>
  </div>
  
  );
}

export default Blog;
