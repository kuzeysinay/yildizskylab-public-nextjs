'use client';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const AboutPage = forwardRef(function AboutPage(props, ref) {
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
			className='h-screen w-screen snap-start pt-28 lg:pt-36 bg-customDarkPurple'
			ref={pageRef}
		>
			<div className='w-screen hidden lg:flex lg:justify-center lg:mt-10 lg:mb-24'>
				<h2 className='text-customAccent text-3xl lg:text-5xl'>HAKKIMIZDA</h2>
			</div>
			<div className='text-center lg:text-left h-full flex justify-center sm:items-center lg:items-start  px-12 text-xs lg:text-base font-inter'>
				<p className='lg:w-1/2 font-bold'>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SKY LAB Bilgisayar Bilimleri Kulübü
					Yıldız Teknik Üniversitesi bünyesinde ar-ge,proje, organizasyon, iş
					geliştirme ve tanıtım ekipleri ile ana yapısını oluşturan en aktif ve
					etkin kulüplerden biridir.
					<br />
					<br />
					Akran öğrenmesini baz alan workshop ve bootcamp programları ile
					temel-orta-ileri seviyede eğitimler sunmayı, sektör-öğrenci
					buluşmaları için büyük-küçük düzeyde seminer etkinlikleri ile
					networking anları yaratmayı hedefler.Yapay zekadan mobile, gömülü
					sistemlerden siber güvenliğe bilgisayar bilimlerinin 8 farklı alanını
					besleyen ar-ge ekipleri ile öğren-uygula metodunu kullanarak proje
					ekiplerini dinamik yapıda tutmayı hedefler.
					<br />
					<br />
					Bilgisayar bilimleri ekosisteminde hem sosyalleşerek hem de öğrenip
					geliştirerek var olmak istiyorsanız{' '}
					<span className='text-customAccent font-bold'>
						<a href='#'>bize katılın!</a>
					</span>
				</p>
				{/* STATS  */}
				<div className=''></div>
			</div>
		</section>
	);
});

export default AboutPage;
