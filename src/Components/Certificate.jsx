import React from 'react';
import cert1 from '../assets/cert1.svg';
import cert2 from '../assets/cert2.svg';
import cert3 from '../assets/cert3.svg';
import cert4 from '../assets/cert4.svg';

export default function Certificate() {
  return (
    <div className="lg:px-[60px] px-[30px]  lg:py-[70px] py-[20px]">
      <h1 className="lg:text-[32px] text-[14px] text-[#FFFFFF] text-center font-bold lg:leading-[66px] leading-[21px] ">
        Certificate
      </h1>
      <p className="lg:text-[16px] text-[12px] leading-[26px] text-[#CCCCCC] lg:mt-[20px] mt-[15px] text-center">
        After years of practical product design experience and a lengthy career
        built on Google, I chose to get certification of expertise, which I am
        very proud to share with you.
      </p>
      <div className="flex lg:flex-row flex-col lg:pt-[70px] pt-[35px] gap-5 ">
        <div className="w-full">
          <img className="w-full" src={cert1} />
        </div>

        <div className="w-full">
          <img className="w-full" src={cert2} />
        </div>
      </div>
    </div>
  );
}
