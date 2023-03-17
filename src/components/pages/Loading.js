'use client';
import { useEffect, useState, lazy, Suspense } from 'react';
// const Logo = lazy(() => import('./../assets/SkylabPinkLogo.png'));
import Logo from '@/assets/skylab_logo.png';
import Image from 'next/image';

const Loading = ({ loaded }) => {
	const [progress, setProgress] = useState('w-[0%]');
	const [duration, setDuration] = useState('duration-[10000ms]');
	const [visible, setVisible] = useState(true);
	const [hidden, setHidden] = useState('');

	useEffect(() => {
		setProgress('w-[95%]');
	}, []);

	const handleLoad = async () => {
		if (progress === 'w-[100%]') {
		}
		if (loaded) {
			setDuration('duration-[1800ms]');
			setProgress('w-[100%]');
			clearInterval(checkIfLoaded);
			await new Promise(resolve => setTimeout(resolve, 600));
			setVisible(false);
			const myTimeout = setTimeout(() => setHidden('hidden'), 600);
		}
	};

	const checkIfLoaded = setInterval(handleLoad, 1000);

	return (
		<section
			className={`${
				visible ? 'opacity-100' : 'opacity-0'
			} flex h-screen w-screen top-0 left-0 fixed justify-center items-center bg-customDarkPurple z-50 transition-all duration-700 ${hidden}`}
		>
			<div className='w-80 flex flex-col items-center'>
				<Suspense fallback={<span>Loading</span>}>
					{/* <img className='w-24' src={Logo} alt='logo' /> */}
					<Image src={Logo} width={96} height={96} alt='logo' />
				</Suspense>
				<div className='w-full h-1 mt-12 bg-customLightPurple'>
					<div
						className={` h-full transition-all ease-out ${duration} ${progress}  bg-customLightPink`}
					></div>
				</div>
			</div>
		</section>
	);
};

export default Loading;
