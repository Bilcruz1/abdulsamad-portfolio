import React, { useState } from 'react';
import logo from '../assets/AB-Tech.svg';
import { Link } from 'react-scroll';
import { HiMenu } from 'react-icons/hi';
import Hamburger from './Hamburger';

export default function Header() {
	const [activeLink, setActiveLink] = useState('Home');
	const [isOpen, setIsOpen] = useState(false);

	const handleLinkClick = linkName => {
		setActiveLink(linkName);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div>
			{isOpen && <Hamburger setIsOpen={setIsOpen} />}
			<div className="flex justify-between md:px-[60px] px-[30px] py-[20px] bg-[#0C0C0C] fixed w-full z-30 border border-r-0 border-l-0 border-t-0 border-b-[1px] border-[#222222]">
				<div
					className="flex justify-center items-center "
					onClick={() => handleLinkClick('Home')}
				>
					<img
						src={logo}
						alt=""
					/>
				</div>
				<button
					className="lg:hidden text-blue-500 flex justify-between items-center"
					onClick={handleOpen}
				>
					<HiMenu className="w-8 h-8" />
				</button>
				<ul className="lg:flex gap-[40px] justify-center items-center text-[16px] hidden ">
					<li
						className={`cursor-pointer ${
							activeLink === 'Home'
								? 'text-blue-500 hover:text-blue-400'
								: 'text-[#AAAAAA]'
						} hover:text-white`}
						onClick={() => handleLinkClick('Home')}
					>
						Home
					</li>
					<Link
						to="works"
						duration={500}
						smooth={true}
						offset={-70}
					>
						<li
							className={`cursor-pointer ${
								activeLink === 'Works' ? 'text-blue-500' : 'text-[#AAAAAA]'
							} hover:text-white ${
								activeLink === 'Works' ? 'hover:text-blue-500' : ''
							}`}
							onClick={() => handleLinkClick('Works')}
						>
							Works
						</li>
					</Link>
					<Link
						to="experience"
						duration={500}
						smooth={true}
						offset={-70}
					>
						<li
							className={`cursor-pointer ${
								activeLink === 'Experience' ? 'text-blue-500' : 'text-[#AAAAAA]'
							} hover:text-white ${
								activeLink === 'Experience' ? 'hover:text-blue-500' : ''
							}`}
							onClick={() => handleLinkClick('Experience')}
						>
							Experience
						</li>
					</Link>
					<Link
						to="contact"
						duration={500}
						smooth={true}
						offset={-30}
					>
						<li
							className={`cursor-pointer ${
								activeLink === 'Contact' ? 'text-blue-500' : 'text-[#AAAAAA]'
							} hover:text-white ${
								activeLink === 'Contact' ? 'hover:text-blue-500' : ''
							}`}
							onClick={() => handleLinkClick('Contact')}
						>
							Contact
						</li>
					</Link>
				</ul>
				<div className="lg:block hidden">
					<a
						className="rounded-[4px] text-[#3555FB] py-[3px] font-normal  text-[16px] hover:border-b-[1px] hover:border-[#3555FB] "
						href="./AbdulsamadResumee.pdf"
					>
						Download Resume
					</a>
				</div>
			</div>
		</div>
	);
}
