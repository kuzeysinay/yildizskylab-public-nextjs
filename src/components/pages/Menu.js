'use client';
import React from 'react';
import { useRecoilState } from 'recoil';
import { menuState } from '@/states/atom';
import logo from '@/assets/ytu.png';
import Image from 'next/image';
// import smoothscroll from 'smoothscroll-polyfill';
// smoothscroll.polyfill();

const Menu = ({
	refs: { aboutRef, landingRef, teamsRef, eventsRef, contactRef, announcementsRef, newsRef, boardRef },
}) => {
	const [menuOpened, setMenuOpened] = useRecoilState(menuState);
	const handleScroll = ref => {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div
			className={`${
				menuOpened ? null : '-translate-x-full'
			} flex justify-center h-screen w-screen items-center z-40 transition-all duration-300 bg-customLightPurple fixed`}
		>
			<ul className='text-center text-customDarkPurple space-y-8 z-50 text-xl'>
				<li>
					<button
						className='tracking-[0.10em]'
						onClick={() => {
							handleScroll(landingRef);
							setMenuOpened(false);
						}}
					>
						ANASAYFA
					</button>
				</li>
				<li>
					<button
						className='tracking-[0.10em]'
						onClick={() => {
							handleScroll(aboutRef);
							setMenuOpened(false);
						}}
					>
						HAKKIMIZDA
					</button>
				</li>
				<li>
					<button
						className='tracking-[0.10em]'
						onClick={() => {
							handleScroll(teamsRef);
							setMenuOpened(false);
						}}
					>
						EKİPLER
					</button>
				</li>
				
				<li>
					<button
						className='tracking-[0.10em]'
						onClick={() => {
							handleScroll(newsRef);
							setMenuOpened(false);
						}}
					>
						HABERLER
					</button>
				</li>
				<li>
					<button
						className='tracking-[0.10em]'
						onClick={() => {
							handleScroll(boardRef);
							setMenuOpened(false);
						}}
					>
						YÖNETİM KURULUMUZ
					</button>
				</li>
				
				
				
			</ul>
			<div className='absolute w-40 bottom-8'>
				<Image src={logo} alt='' />
			</div>
		</div>
	);
};

export default Menu;
