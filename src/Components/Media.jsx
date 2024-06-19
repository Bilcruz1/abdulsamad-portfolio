import React from 'react';
import WhatsApp from '../assets/WhatsApp.svg';
import Google from '../assets/Google.svg';
import Behance from '../assets/Behance.svg';
import LinkedIn from '../assets/Linkedin.svg';
import { BsBehance, BsGoogle, BsLinkedin, BsWhatsapp } from 'react-icons/bs';

export default function Media() {
  return (
    <div className="bg-[#0F0F0F] lg:pt-[70px] lg:pb-[30px] pt-[30px] pb-[15px] flex-col flex justify-center items-center">
      <div className="flex gap-[38px] ">
        <BsWhatsapp className="text-[#666666] hover:text-[#cccccc] lg:h-[30px] lg:w-[30px] h-[18px] w-[18px]" />
        <BsGoogle className="text-[#666666] hover:text-[#cccccc] lg:h-[30px] lg:w-[30px] h-[18px] w-[18px]" />
        <BsBehance className="text-[#666666] hover:text-[#cccccc] lg:h-[30px] lg:w-[30px] h-[18px] w-[18px]" />
        <BsLinkedin className="text-[#666666] hover:text-[#cccccc] lg:h-[30px] lg:w-[30px] h-[18px] w-[18px]" />
      </div>
      <p className="lg:mt-[25px] mt-[16px] lg:text-[14px] text-[12px] text-center text-[#777777]">
        Thanks for viewing
      </p>
    </div>
  );
}
