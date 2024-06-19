import React, { useState } from 'react';

import { Link } from 'react-scroll';

import { HiX, HiChevronDown, HiArrowSmUp } from 'react-icons/hi';

function Hamburger({ setIsOpen }) {
	return (
		<div>
			<div
				className="lg:hidden opacity-100 backdrop-blur fixed top-0 l-0 w-full h-full flex justify-end z-50"
				onClick={() => setIsOpen(!setIsOpen)}
			>
				<div className=" h-full w-1/2 bg-[#0A0A0A]  font-medium flex flex-col text-white text-center pt-[40px] px-[20px]">
					<Link
						onClick={() => {
							setIsOpen(!setIsOpen);
							window.scrollTo({ top: 0, behavior: 'smooth' });
						}}
						className="text-[#AAAAAA] text-[16px] pb-[9px]  font-semibold cursor-pointer  border border-t-0 border-r-0 border-l-0 border-b-1 border-b-[#181818]"
					>
						Home
					</Link>

					<Link
						to="works"
						duration={500}
						smooth={true}
						offset={-70}
						className="text-[#AAAAAA] text-[16px] pt-[27px] pb-[9px]  font-semibold cursor-pointer  border border-t-0 border-r-0 border-l-0 border-b-1 border-b-[#181818]"
						onClick={() => setIsOpen(!setIsOpen)}
					>
						Works
					</Link>

					<Link
						to="experience"
						duration={500}
						smooth={true}
						offset={-70}
						className="text-[#AAAAAA] text-[16px] pt-[27px] pb-[9px]  font-semibold cursor-pointer  border border-t-0 border-r-0 border-l-0 border-b-1 border-b-[#181818]"
						onClick={() => setIsOpen(!setIsOpen)}
					>
						Experience
					</Link>

					<Link
						to="contact"
						duration={500}
						smooth={true}
						offset={-70}
						className="text-[#AAAAAA] text-[16px] pt-[27px]  pb-[9px]  font-semibold cursor-pointer  border border-t-0 border-r-0 border-l-0 border-b-1 border-b-[#181818]"
						onClick={() => setIsOpen(!setIsOpen)}
					>
						Contact
					</Link>

					<div className="pt-[27px]">
						<a
							className=" text-[#3555FB] text-[16px] font-semibold rounded"
							href="./AbdulsamadResumee.pdf"
						>
							Download Resume
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hamburger;
