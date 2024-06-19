import React from 'react';
import { Link } from 'react-scroll';
export default function Homee() {
  return (
    <div className=" text-white bg-[url('/src/assets/bgimg1.jpeg')] bg-cover flex justify-center items-center lg:py-[250px] pt-[130px]  lg:px-[60px] px-[30px] ">
      <div className="w-[790px]">
        <div className="">
          <h1 className=" flex justify-center items-center font-bold lg:text-[48px] text-[16px] lg:leading-[80px] leading-[25px]">
            Hi, I am Abdulkadir Abdulsamad <br />
          </h1>
          <h1 className=" flex justify-center items-center font-bold lg:text-[48px] text-[16px]">
            a Product designer
          </h1>
        </div>
        <div className=" flex justify-center items-center lg:mt-[24px] mt-[16px] ">
          <p className="  text-[#CCCCCC] lg:text-[20px] text-[12px] font-normal text-center md:leading-[30px] leading-[20px] ">
            As an experienced designer, I find joy in bringing clients' visions
            to life, particularly when it benefits users. User-centered
            solutions are crucial for valuable digital resources.
          </p>
        </div>
        <div>
          <Link
            className="flex justify-center items-center lg:mt-[80px] my-[40px]"
            to="contact"
            duration={500}
            smooth={true}
            offset={-30}>
            <button className="bg-[#3555FB] text-white lg:py-[10px] py-[7px] lg:px-[75px] px-[40px] font-normal rounded-sm text-[16px] hover:text-[#3555FB] hover:bg-[#000000] hover:border hover:border-[#3555FB] ">
              Let’s talk
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
