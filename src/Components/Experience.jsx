import React, { useRef, useState } from 'react';
import Swap from './Experiences/Swap';
import Onepint from './Experiences/Onepint';
import Sixsol from './Experiences/Sixsol';
import Hyperscale from './Experiences/Hyperscale';
import Gripp from './Experiences/Gripp';
import next from '../assets/next2.svg';
import prev from '../assets/prev2.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Experience() {
	const customNavigationStyles = {
		nextEl: '.experience-custom-front-button',
		prevEl: '.experience-custom-back-button',
	};
	const paginationStyles = `
    .swiper-pagination-bullet {
      background-color: transparent;
      border: 1px solid #B2B2B2;
      width: 13px;
      height: 13px; 
      
      
    }

    .swiper-pagination-bullet-active {
      background-color: #B2B2B2;
      width: 13px;
      height: 13px;
      
    }
  `;
	return (
		<>
			<style>{paginationStyles}</style>
			<div
				className="lg:px-[60px] relative bg-[#0F0F0F] text-white md:py-[70px] pt-[40px] pb-[20px] "
				id="experience"
			>
				<h1 className="md:text-[32px] text-[18px] text-white text-center font-bold md:leading-[66px] leading-[21px] ">
					Experience
				</h1>

				<div className="swiper-container md:pt-[50px] pt-[20px] flex">
					<div className="lg:flex hidden py-16">
						<button className="experience-custom-back-button h-[80px] w-[80px]  ">
							<img
								src={prev}
								className="hover:bg-[#343434] hover:rounded-full"
							/>
						</button>
					</div>

					<Swiper
						spaceBetween={30}
						effect={'fade'}
						navigation={customNavigationStyles}
						pagination={{
							clickable: true,
						}}
						modules={[EffectFade, Navigation, Pagination]}
						scrollbar={false}
						className="lg:pb-[100px] pb-[50px] lg:px-6 px-0 "
					>
						<SwiperSlide>
							<Hyperscale />
						</SwiperSlide>
						<SwiperSlide>
							<Gripp />
						</SwiperSlide>
						<SwiperSlide>
							<Swap />
						</SwiperSlide>
						<SwiperSlide>
							<Sixsol />
						</SwiperSlide>
						<SwiperSlide>
							<Onepint />
						</SwiperSlide>
					</Swiper>
					<div className="lg:flex hidden py-16">
						<button className="experience-custom-front-button h-[80px] w-[80px]  ">
							<img
								src={next}
								className="hover:bg-[#343434] hover:rounded-full"
							/>
						</button>
					</div>
				</div>
				<div className="lg:hidden flex justify-between px-[30px] mt-[20px]">
					<div className="flex ">
						<button className="experience-custom-back-button h-[40px] w-[40px]  ">
							<img
								src={prev}
								className="hover:bg-[#343434] hover:rounded-full"
							/>
						</button>
					</div>
					<div className="flex ">
						<button className="experience-custom-front-button h-[40px] w-[40px]  ">
							<img
								src={next}
								className="hover:bg-[#343434] hover:rounded-full"
							/>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
