import React from 'react';

export default function Skills() {
  return (
    <div className="lg:px-[60px] px-[30px] lg:py-[70px] pt-[20px] bg-[#0F0F0F] ">
      <h1 className="lg:text-[32px] text-[14px] text-[#FFFFFF] text-center font-bold lg:leading-[66px] leading-[21px] ">
        Design Skills
      </h1>
      <div className="w-full lg:mt-[70px] mt-[20px] ">
        <div className="flex flex-col sm:flex-row ">
          <div className="flex-1">
            <div className=" lg:border lg:border-t-0 lg:border-l-0 lg:border-b-1 lg:border-r-1 lg:border-[#1A1A1A] lg:pr-14">
              <div>
                <h2 className="lg:text-[18px] text-[14px] leading-[26px] font-semibold text-[#CCCCCC]">
                  UX Research
                </h2>
                <p className="lg:text-[14px] text-[12px] font-normal text-[#AAAAAA] leading-[26px] lg:py-[30px] pt-[8px] pb-[40px] ">
                  Conducting studies or interviews that examine how people use
                  the product, identifying user pain points, empathizing with
                  users, and exploring how the product can help solve their
                  problems, in a summarized form.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="lg:border lg:border-t-0 lg:border-l-0 lg:border-b-1 lg:border-r-0 lg:border-[#1A1A1A] lg:pl-14">
              <div>
                <h2 className="lg:text-[18px] text-[14px] leading-[26px] font-semibold text-[#CCCCCC]">
                  Visual & Brand Design
                </h2>
                <p className="lg:text-[14px] text-[12px] font-normal text-[#AAAAAA] leading-[26px] lg:py-[30px] pt-[8px] pb-[40px] ">
                  focuses on how a product looks, in creation of the brand
                  identity as well as deciding on good font, color, size and
                  placement. on the layout of each page, screens and make all of
                  the design elements fit together.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="flex-1">
            <div className="lg:border lg:border-t-0 lg:border-l-0 lg:border-b-0 lg:border-r-1 lg:border-[#1A1A1A] lg:pr-14">
              <div>
                <h2 className="lg:text-[18px] text-[14px] leading-[26px] font-semibold text-[#CCCCCC] lg:pt-[40px]">
                  Interaction Design
                </h2>
                <p className="lg:text-[14px] text-[12px] font-normal text-[#AAAAAA] leading-[26px] lg:py-[30px] pt-[8px] pb-[40px] ">
                  Focuses on designing the experience of a product and how it
                  functions, by striving to understand the user flow or the path
                  that a typical user takes to complete a task on a product
                  designed.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="lg:border lg:border-t-0 lg:border-l-0 lg:border-b-0 lg:border-r-0 lg:border-[#1A1A1A] lg:pl-14">
              <div>
                <h2 className="lg:text-[18px] text-[14px] leading-[26px] font-semibold text-[#CCCCCC] lg:pt-[40px]">
                  UX Product Management
                </h2>
                <p className="lg:text-[14px] text-[12px] font-normal text-[#AAAAAA] leading-[26px] lg:py-[30px] pt-[8px] pb-[40px] ">
                  Ensuring clear and timely communication, so that the process
                  of building a useful product moves smoothly from start to
                  finish, by setting the goals, writing project plan, and
                  allocating team resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
