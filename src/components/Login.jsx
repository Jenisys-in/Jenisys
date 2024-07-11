import React from "react";
import "../App.css";
import "@fontsource/lexend-exa";


const LogIn = () => {
  return (

    <div className="mt-[35px]  relative flex  items-start text-2xl w-fit max-md:max-w-full min-h-screen">
      <div>
      <img
      loading="lazy"
      src='img/login.png'
      alt='login'
      className="self-stretch h-[750px]"
      />
      </div>
      
       <div className="mt-[50px] relative align-items-center bg-[linear-gradient(180deg,#FFFDF6_0%,#1E12A7_100%)]">
       <h1 className="font-['Encode-Sans-Semi-Expanded']">Welcome</h1>
          <h1>Don't have an account? </h1>
          <button className="active:border-white duration-300 active:text-white absolute ">
            Learn More
          </button>
        </div>        
   
      </div>

     
      
      

  );}

  export default LogIn;