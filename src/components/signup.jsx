import React from "react";
import "../App.css";
import "@fontsource/lexend-exa";
import { Link } from "react-router-dom";

const SignUp = () => {
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
            <h1 className="font-['Encode_Sans_Semi_Expanded'] px-[150px] text-[20px] pt-[35px] text-white ">
              Already have an account?{" "}
            </h1>
            <Link to="/login">
              <button className=" duration-300 hover:[box-shadow:0_7px_8px_0_#E6BE8A_,_0_7px_50px_0_#E6BE8A] hover:bg-[#F9A825] text-[18px] active:border-white duration-300 active:text-white absolute left-[410px] top-[30px] bg-white text-black border-zinc-200 rounded-full px-4 py-2 drop-shadow-xl">
                Sign In
              </button>
            </Link>
          </div>
        </div>
        <form>
          <div className="mt-[60px]">
            <h1 className="pl-[90px] text-white text-[20px] mt-[10px]">Name</h1>
            <input
              id="name"
              className=" mt-[10px] ml-[70px] text-black font-semibold pr-[170px] py-[20px] rounded-full white drop-shadow-xl"
            />
            <h1 className="pl-[90px] text-white text-[20px] mt-[10px]">
              Username
            </h1>
            <input
              id="usn"
              className=" mt-[10px] ml-[70px] text-black font-semibold pr-[170px] py-[20px] rounded-full white drop-shadow-xl"
            />
            <h1 className="pl-[90px] text-white text-[20px] mt-[10px]">
              Password
            </h1>
            <input
              id="pass1"
              type="password"
              className=" mt-[10px] ml-[70px] text-black font-semibold pr-[170px] py-[20px] rounded-full white drop-shadow-xl"
            />

            <h1 className="pl-[90px] text-white  text-[20px] mt-[10px]">
              Re-enter Password
            </h1>
            <input
              id="pass2"
              type="password"
              className=" mt-[10px] ml-[70px] text-black font-semibold pr-[170px] py-[20px] rounded-full white drop-shadow-xl"
            />
          </div>
          <button className=" text-[18px] hover:[box-shadow:0_7px_8px_0_#E6BE8A_,_0_7px_50px_0_#E6BE8A] hover:bg-[#F9A825] active:border-white duration-300 active:text-white ml-[270px] left-[390px] top-[30px] bg-white text-black border-zinc-200 rounded-full px-4 py-2 drop-shadow-xl mt-[20px]">
            Sign Up
          </button>
        </form>
        <div>
          <button className=" text-[18px]  hover:[box-shadow:0_7px_8px_0_#E6BE8A_,_0_7px_50px_0_#E6BE8A] hover:bg-[#F9A825] active:border-white duration-300 active:text-white ml-[110px] left-[390px]  bg-white text-black border-zinc-200 rounded-full px-32 py-2 drop-shadow-xl mt-[40px] mb-[55px] ">
            Sign Up with Google
            <img
              className="w-[30px] h-[30px] absolute left-[180px] top-[802px] absolute"
              src="https://d1nc6vzg2bevln.cloudfront.net/images/general/google.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
