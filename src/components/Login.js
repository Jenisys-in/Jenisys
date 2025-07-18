import React from "react";
import Image from "next/image";
import "../app/global.css"; 
import "@fontsource/lexend-exa";
import Link from "next/link";

const LogIn = () => {
  return (
    <div className="mt-[85px]  w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/img/logbg.png')" }}>

      <div className="flex-col bg-white w-1/2 mx-[100px] mt-[200px]">
      <Image
      src="/img/Group 29.png"
      alt="Login Image"
      width={500}
      height={500}
       />
      </div>
     
    </div>
  );
};

export default LogIn;
