'use client';
import React, {
	forwardRef,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
import Loading from './Loading';

import LandingPageImage from '@/assets/landing-page.png';
import Image from 'next/image';

const LandingPage = forwardRef(function LandingPage(props, ref) {
	const pageRef = useRef(null);
	const [loaded, setLoaded] = useState(false);
	useImperativeHandle(ref, () => {
		return {
			scrollIntoView() {
				pageRef.current.scrollIntoView();
			},
		};
	});

	return (
		<div
			className='h-screen snap-start pt-36  bg-cover bg-[0%] flex justify-center items-center  overflow-hidden relative'
			ref={pageRef}
		>
			<Image
				src={LandingPageImage}
				alt=''
				className='absolute top-0 bottom-0 h-screen min-w-[1024px] w-full'
				onLoad={() => setLoaded(true)}
			/>
			<Loading loaded={loaded} />
			<div className='flex flex-row '>
				{/* <div className='w-[1000px] bg-customLightPink h-[400px]'></div> */}
				<div className='flex flex-col text-center items-center justify-center mb-24 lg:-mb-28 space-y-5 w-[calc(100vw-5vw)]'>
					<span className='text-[2.8rem] lg:text-[4rem] tracking-[0.2em] lg:tracking-wider -mr-3 leading-[3.4rem] lg:leading-none z-10'>
						YILDIZ TEKNİK ÜNİVERSİTESİ
					</span>
					<span className='text-[4.4rem] lg:text-[9rem] leading-none tracking-[0.3em] z-10 -mr-6 text-center text-customDarkPurple'>
						SKY LAB
					</span>
				</div>
				{/* <div className='flex-shrink-0 w-[700px] bg-customLightPink h-[400px]'></div> */}
			</div>
			<div className=''></div>
		</div>
	);
});

export default LandingPage;
