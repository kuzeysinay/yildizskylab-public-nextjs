'use client';
import React, {
	forwardRef,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
// import DownArrow from '../DownArrow';
import dashedLine from '@/assets/dashedLine.png';
import events from '@/data/events.json';
import Image from 'next/image';

const Events = forwardRef(function Events(props, ref) {
	const [selectEvent, setSelectEvent] = useState(0);

	const pageRef = useRef(null);

	useImperativeHandle(ref, () => {
		return {
			scrollIntoView() {
				pageRef.current.scrollIntoView();
			},
		};
	});

	return (
		<section
			className='snap-start relative bg-customDarkPurple pt-36 h-screen'
			ref={pageRef}
		>
			<div className='w-screen hidden lg:flex justify-center mt-10 mb-24'>
				<h2 className='text-customAccent text-5xl'>GELECEK ETKİNLİKLER</h2>
			</div>
			<div className='overflow-y-hidden relative h-full'>
				{/* <div className='absolute left-[15%] lg:left-1/2 lg:-translate-x-1/2 mt-14 mb-36'>
					<Image src={dashedLine} alt='line' />
				</div> */}
				<div className='w-full h-full flex justify-center items-center'>
					<span className='md:hidden text-2xl -mt-24'>
						ETKİNLİKLER ÇOK YAKINDA...
					</span>
					<span className='hidden md:block text-2xl -mt-80'>
						ÇOK YAKINDA...
					</span>
				</div>
				{/* {events.map((event, index) => {
					return (
						<div
							key={index}
							className={`w-screen flex ${
								index % 2 === 0
									? 'flex-row-reverse lg:flex-row'
									: 'flex-row-reverse'
							} mb-16 mt-2`}
						>
							<div
								className={`w-screen lg:w-1/2 flex  ${
									index % 2 === 0
										? ' flex-row-reverse lg:flex-row'
										: 'flex-row-reverse'
								} justify-end`}
							>
								<div
									onClick={() => setSelectEvent(index)}
									className=' w-7/12 ml-2 lg:ml-8 lg:w-[20rem]'
								>
									<div className='flex flex-row-reverse lg:flex-row justify-center text-lg lg:text-3xl'>
										<span className='text-customLightPurple ml-2 lg:mr-6'>
											{event.date}
										</span>
										<span
											className={`${
												index === selectEvent
													? 'text-customAccent'
													: 'text-customLightPink'
											}`}
										>
											{event.name}
										</span>
									</div>
									<p
										className={`mt-2 text-xs lg:text-base text-ellipsis ${
											index === selectEvent ? null : 'whitespace-nowrap'
										} overflow-x-hidden`}
									>
										{event.description}
									</p>
								</div>
								<div
									onClick={() => setSelectEvent(index)}
									className={`${
										index === selectEvent
											? 'w-[4rem] lg:w-[8.5rem] h-[4rem] lg:h-[8.5rem] -translate-x-[1.42rem] lg:-translate-x-0 ml-[15%] lg:ml-0 ring-[6px] lg:ring-8'
											: 'w-8 lg:w-[5rem] h-8 lg:h-[5rem] -translate-x-[0.4rem] ml-[15%] lg:ml-10 lg:mx-10'
									} ${
										index === selectEvent
											? index % 2 === 0
												? 'lg:ml-7'
												: 'lg:mr-6'
											: null
									} rounded-[50%] z-10 transition-all duration-700 cursor-pointer ring-customAccent bg-customLightPink`}
								></div>
							</div>

							<div className='w-0 lg:w-1/2'></div>
						</div>
					);
				})} */}
			</div>
			<div className='h-36'></div>
			{/* <DownArrow /> */}
		</section>
	);
});

export default Events;
