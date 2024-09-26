'use client';
import React, { forwardRef, useImperativeHandle, useRef, useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { fetchNews } from '@/services/newsService';
import Link from 'next/link';

const NewsPage = forwardRef(function NewsPage(props, ref) {
  const pageRef = useRef(null);
  const [news, setNews] = useState([]);

  useImperativeHandle(ref, () => ({
    scrollIntoView() {
      pageRef.current.scrollIntoView();
    },
  }));

  useEffect(() => {
    async function getNews() {
      const newsData = await fetchNews();
      if (newsData.isSuccess) {
        setNews(newsData.data);
      }
    }
    getNews();
  }, []);

  return (
    <section
      className='h-screen w-screen snap-start pt-20 lg:pt-36 bg-customDarkPurple'
      ref={pageRef}
    >
      <div className='w-screen hidden lg:flex lg:justify-center lg:mt-0 lg:mb-4'>
        <h2 className='text-customAccent text-3xl lg:text-5xl'>HABERLER</h2>
      </div>
      <div className='text-center lg:text-left h-full flex justify-center sm:items-center lg:items-start px-12 text-xs lg:text-base font-inter'>
        <div className='w-full lg:w-10/12 xl:w-10/12'>
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            centerMode={true}
            centerSlidePercentage={30}
          >
            {news.map((item) => (
              <Link href={`/news/${item.id}`} key={item.id}>
                <div className='cursor-pointer'>
                  {/* Görsel Konteynırı */}
                  <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden flex items-center justify-center">
                    <img
                      src={item.cover_image.url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Başlık */}
                  <p className='legend mt-2 text-center text-white'>{item.title}</p>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
});

export default NewsPage;
