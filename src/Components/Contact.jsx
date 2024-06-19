import React from 'react';

export default function Contact() {
  return (
    <div>
      <div
        className=" lg:px-[60px] px-[30px] lg:py-[70px] py-[20px]"
        id="contact">
        <div className="w-full">
          <h1 className="lg:text-[32px] text-[14px] text-[#FFFFFF] text-center font-bold lg:leading-[66px] leading-[21px]">
            Contact
          </h1>
          <div className="lg:mt-[70px] mt-[20px] flex justify-center items-center ">
            <form className="lg:w-3/5 w-full">
              <div className="  ">
                <div className=" lg:text-[18px] text-[14px] lg:leading-[25px] leading-[20px] text-[#CCCCCC]">
                  Full Name
                </div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className=" rounded-xl p-6 w-full text-[#dddddd]  placeholder-[#999999] lg:text-[14px] text-[12px] mt-4 bg-[#0A0A0A] focus:outline-none border border-1 border-[#2F2F2F]"
                />
                <p>FYOJFTKLTFKLFKL</p>
              </div>
              <div className="  mt-[34px]">
                <div className="lg:text-[18px] text-[14px] lg:leading-[25px] leading-[20px] text-[#CCCCCC]">
                  Email address
                </div>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className=" rounded-xl p-6 w-full text-[#dddddd] placeholder-[#999999] lg:text-[14px] text-[12px] mt-4 bg-[#0A0A0A] focus:outline-none border border-1 border-[#2F2F2F]"
                />
              </div>
              <div className="   mt-[34px] ">
                <div className="lg:text-[18px] text-[14px] lg:leading-[25px] leading-[20px] text-[#CCCCCC]">
                  Message
                </div>
                <textarea
                  className="w-full lg:h-[400px] h-[200px] text-[#dddddd] rounded-xl p-6 placeholder-[#999999] lg:text-[14px] text-[12px] mt-4 bg-[#0A0A0A] focus:outline-none  resize-none border border-1 border-[#2F2F2F]"
                  placeholder="Drop a message"
                />
              </div>
              <div className=" mt-[20px] flex justify-center items-center">
                <button className="bg-[#3555FB] text-white lg:py-[10px] py-[7px] lg:px-[75px] px-[40px] font-normal rounded-[4px] text-[16px] hover:text-[#3555FB] hover:bg-[#000000] hover:border hover:border-[#3555FB] ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
