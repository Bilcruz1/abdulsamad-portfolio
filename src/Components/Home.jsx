import React from 'react';
import abs from '../assets/ABS.svg';
import ellipse1 from '../assets/Ellipse102.svg';
import ellipse2 from '../assets/Ellipse103.svg';

export default function Home() {
  return (
    <div className="h-full">
      <div className="flex justify-between">
        <div className="flex flex-col w-3/5">
          <div>
            <h1 className="font-bold text-[32px] leading-[50px]">
              Hi, I am Abdulkadir Abdulsamad <br />
              Product designer
            </h1>
          </div>
          <div className="w-4/5 text-[#555555] text-[18px] font-normal pt-[20px]">
            As an experienced designer, I find joy in bringing clients' visions
            to life, particularly when it benefits users. User-centered
            solutions are crucial for valuable digital resources.
          </div>
          <div className="pt-[60px]">
            <button className="bg-[#3555FB] text-white py-[9px] px-[20px] font-normal rounded-sm text-[16px]">
              Download Resume
            </button>
          </div>
        </div>
        <div className=" w-1/4   relative ">
          <img className="absolute top-0 right-0" src={ellipse2} />
          <img className="absolute top-5 right-2" src={ellipse1} />
          <img className="absolute top-14 right-5 " src={abs} />
        </div>
      </div>
    </div>
  );
}
