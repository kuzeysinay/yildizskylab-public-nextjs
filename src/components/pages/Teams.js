'use client';
import React, {
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
// import axios from 'axios';
import teams from '@/data/teams.json';
import DownArrow from '@/components/DownArrow';
import Logo from '@/assets/SkylabPinkLogo.png';
import Image from 'next/image';

const Teams = forwardRef(function Teams(props, ref) {
	// const [teamData, setTeamData] = useState([]);
	const pageRef = useRef(null);
	const teamsRef = useRef(null);

	// const fetchData = async () => {
	// 	// const res = await axios.get(
	// 	// 	'https://yildizskylab-backend.onrender.com/teams'
	// 	// );
	// 	// const data = fetch('https://yildizskylab-backend.onrender.com/teams');
	// 	// const res = await data.json();
	// 	// setTeamData(res);
	// 	// console.log(data);
	// 	fetch('https://yildizskylab-backend.onrender.com/teams')
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			setTeamData(data);
	// 			console.log(data);
	// 		});
	// };

	// useEffect(() => {
	// 	fetchData();
	// }, []);

	useImperativeHandle(ref, () => {
		return {
			scrollIntoView() {
				pageRef.current.scrollIntoView();
			},
		};
	});

	const handleScroll = element => {
		if (element) {
			const horizontal =
				element.target.offsetLeft - (window.innerWidth / 2 - 24);
			teamsRef.current.scroll(horizontal, 0);
		} else {
			teamsRef.current.scroll(0, 0);
		}
	};

	const [teamSelect, setTeamSelect] = useState('arge');
	const [teamIndex, setTeamIndex] = useState(0);
	const [selectedTeam, setSelectedTeam] = useState('algolab');

	return (
		<section
			className='h-screen snap-start relative pt-24 lg:pt-36 bg-customDarkPurple white'
			ref={pageRef}
		>
			<div className=' text-customLightPink text-xl tracking-wide lg:text-2xl my-10 lg:my-16 flex justify-center'>
				<div className='flex ml-3 lg:ml-0 justify-between w-auto items-center'>
					<div
						onClick={() => {
							setTeamSelect('arge');
							setTeamIndex(0);
							setSelectedTeam('algolab');
							handleScroll();
						}}
						className={`px-3 pt-[0.2rem] pb-[0.1rem] cursor-pointer leading-tight ${
							teamSelect === 'arge' ? 'bg-customAccent' : 'bg-customDarkPurple'
						} `}
					>
						ARGE EKİPLERİ
					</div>
					<div
						onClick={() => {
							setTeamSelect('social');
							setTeamIndex(0);
							setSelectedTeam('organizasyon');
							handleScroll();
						}}
						className={`px-3 pt-[0.2rem] py-[0.1rem] cursor-pointer ${
							teamSelect === 'social'
								? 'bg-customAccent'
								: 'bg-customDarkPurple'
						} `}
					>
						SOSYAL EKİPLER
					</div>
				</div>
			</div>
			<div>
				<div
					ref={teamsRef}
					className='h-[150px] lg:h-50 scroll-smooth flex justify-start lg:justify-center pl-[calc(50%-2rem)] pr-[calc(50%-2rem)] lg:pr-0 lg:pl-0 w-screen overflow-x-scroll lg:overflow-x-visible space-x-12'
				>
					{(teamSelect === 'arge' ? teams.arge : teams.social).map(
						(team, index) => {
							return (
								<div
									key={index}
									className='flex flex-col justify-center lg:justify-between items-center space-y-10'
								>
									<div
										key={index}
										onClick={e => {
											setTeamIndex(index);
											setSelectedTeam(team.name);
											handleScroll(e);
										}}
										className={`w-16 lg:min-w-[5.2rem] h-16 lg:min-h-[5.2rem] flex justify-center items-center ring-customAccent ${
											teamIndex === index ? 'ring-8' : null
										} p-2 cursor-pointer bg-customLightPink overflow-hidden rounded-[50%]`}
									>
										<img
											onClick={() => ''}
											src={team.logo}
											width={75}
											height={75}
											className='object-cover rounded-full'
											alt='logo'
										/>
									</div>
									<div className='text-customLightPink mr-10 h-0 text-xs lg:text-lg text-end w-0 -rotate-45 '>
										{team.name}
									</div>
								</div>
							);
						}
					)}
				</div>
				<div className='w-screen text-sm lg:text-md flex mt-10 lg:mt-28 justify-center'>
					<div className='font-inter w-11/12 lg:w-1/2 text-center'>
						{teams[teamSelect].find(team => team.name === selectedTeam).details}
					</div>
				</div>
			</div>
			{/* <DownArrow /> */}
		</section>
	);
});

export default Teams;
