'use client';
import React, { useEffect, useState } from 'react';
import Logo from '@/assets/skylab_logo.png';
// import smoothscroll from 'smoothscroll-polyfill';
import { menuState } from '@/states/atom';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
// smoothscroll.polyfill();

const Nav = ({
	refs: { aboutRef, landingRef, teamsRef, eventsRef, contactRef, announcementsRef, newsRef, boardRef, sitesRef },
}) => {
	const [menuOpened, setMenuOpened] = useRecoilState(menuState);
	const handleScroll = ref => {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		window.addEventListener('resize', () => setMenuOpened(false));
	}, []);

	return (
		<div className='px-3 h-24 flex lg:h-36 w-full fixed top-0 flex-row items-center justify-center lg:justify-between container z-50'>
			<div className='absolute z-40 w-screen h-24 flex items-center'>
				<div
					onClick={() => setMenuOpened(!menuOpened)}
					className={`${
						menuOpened ? ' left-1/2 -translate-x-1/2' : 'ml-5 left-0'
					} p-2 pb-3 transition-all duration-300 rounded-md cursor-pointer lg:hidden absolute`}
				>
					<svg
						className='overflow-visible'
						width='28'
						height='16'
						viewBox='0 0 28 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<line
							className={`${
								menuOpened ? 'rotate-45 -translate-y-[0.3rem]' : null
							} origin-left duration-500 transition-all`}
							y1='1'
							x2='28'
							y2='1'
							stroke={menuOpened ? '#06032C' : '#EADAFF'}
							strokeWidth='2'
						/>
						<line
							className={`${
								menuOpened ? 'opacity-0' : null
							} duration-300 transition-all`}
							y1='8'
							x2='28'
							y2='8'
							stroke={menuOpened ? '#06032C' : '#EADAFF'}
							strokeWidth='2'
						/>
						<line
							className={`${
								menuOpened ? '-rotate-45 translate-y-[0.3rem]' : null
							} origin-left duration-500 transition-all`}
							y1='15'
							x2='28'
							y2='15'
							stroke={menuOpened ? '#06032C' : '#EADAFF'}
							strokeWidth='2'
						/>
					</svg>
				</div>
			</div>

			<div
				className={` ${
					menuOpened ? 'hidden' : 'flex'
				} items-center flex-row space-x-2 lg:space-x-6`}
			>
				<div className='w-9 h-9 lg:w-10 lg:h-10'>
					<Image src={Logo} alt='' />
				</div>
				<div className='hidden lg:flex w-2 h-2 mb-[0.4rem] rounded-full bg-customLightPink'></div>
				<div className=''>
					<span className='font-bebasNeue text-3xl lg:text-5xl tracking-[0.3em] font-light'>
						Sky Lab
					</span>
				</div>
			</div>
			<ul className='hidden lg:flex flex-row z-50 space-x-12 text-lg'>
				<li>
					<button
						className='tracking-[0.10em]'
						onClick={() => handleScroll(landingRef)}
					>
						ANASAYFA
					</button>
				</li>
				<li>
					<button
						className='tracking-[0.10em]'
						onClick={() => handleScroll(aboutRef)}
					>
						HAKKIMIZDA
					</button>
				</li>
				<li>
					<button
						className='tracking-[0.10em]'
						onClick={() => handleScroll(teamsRef)}
					>
						EKİPLER
					</button>
				</li>
				
				<li>
					<button
						className='tracking-[0.10em]'
						onClick={() => handleScroll(newsRef)}
					>
						HABERLER
					</button>
				</li>
				<li>
					<button
						className='tracking-[0.10em]'
						onClick={() => handleScroll(boardRef)}
					>
						YÖNETİM KURULUMUZ
					</button>
				</li>
				<li>
					<button
						className='tracking-[0.10em]'
						onClick={() => handleScroll(sitesRef)}
					>
						SİTELERİMİZ
					</button>
				</li>
				
			</ul>
		</div>
	);
};

export default Nav;
