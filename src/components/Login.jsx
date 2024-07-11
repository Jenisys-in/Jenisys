import React from "react";
import "../App.css";
import "@fontsource/lexend-exa";

const LogIn = () => {
  return (
    <div className="mt-[35px]  relative flex  items-start text-2xl w-fit max-md:max-w-full min-h-screen">
      <div>
        <img
          loading="lazy"
          src="img/login.png"
          alt="login"
          className="self-stretch h-[750px]"
        />
      </div>

      <div className="mt-[80px] relative align-items-center bg-[linear-gradient(180deg,#FFFDF6_0%,#1E12A7_100%)]  ">
        <div className="mt-[40px]">
          <h1 className="font-['Encode_Sans_Semi_Expanded'] text-[70px] px-[150px] self-stretch text-white">
            Welcome
          </h1>
          <div className="flex flex-row relative">
            <h1 className="font-['Encode_Sans_Semi_Expanded'] px-[150px] text-[20px] pt-[35px] text-white">
              Don't have an account?{" "}
            </h1>
            <button className=" text-[18px] active:border-white duration-300 active:text-white absolute left-[390px] top-[30px] bg-white text-black border-zinc-200 rounded-full px-4 py-2 drop-shadow-xl">
              Sign Up
            </button>
          </div>
        </div>
        <div className="mt-[60px]">
          <h1 className="pl-[90px] text-white text-[20px]">Username</h1>
          <input
            type="usn"
            className=" mt-[10px] ml-[70px] text-black font-semibold pr-[170px] py-[20px] rounded-full white drop-shadow-xl"
          />
          <h1 className="pl-[90px] text-white  text-[20px] mt-[10px]">
            Password
          </h1>
          <input
            type="usn"
            className=" mt-[10px] ml-[70px] text-black font-semibold pr-[170px] py-[20px] rounded-full white drop-shadow-xl"
          />
        </div>
        <div className="flex flex-row pl-[80px] mt-[20px]">
          <h3 className="text-[20px] text-white">
            <input type="checkbox" /> Keep me logged in
          </h3>
          <h3 className="text-white text-[20px] pl-[100px] underline">
            {" "}
            Forgot Password?
          </h3>
        </div>
        <button className=" text-[18px] active:border-white duration-300 active:text-white ml-[270px] left-[390px] top-[30px] bg-white text-black border-zinc-200 rounded-full px-4 py-2 drop-shadow-xl mt-[20px]">
          Log in
        </button>
        <button className=" text-[18px] active:border-white duration-300 active:text-white ml-[110px] left-[390px]  bg-white text-black border-zinc-200 rounded-full px-32 py-2 drop-shadow-xl mt-[40px] mb-[55px]">
          Log in with Google
        </button>
      </div>
    </div>
  );
};

export default LogIn;
