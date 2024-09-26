'use client';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import sitesData from './sitesData';

const SitesPage = forwardRef(function SitesPage(props, ref) {
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
      className="h-screen w-screen snap-start mt-72 lg:mt-96 pt-28 lg:pt-36 bg-customDarkPurple"
      ref={pageRef}
    >
      {/* Başlık kısmı */}
      <div className="w-screen hidden lg:flex lg:justify-center lg:mt-10 lg:mb-24">
        <h2 className="text-customAccent text-3xl lg:text-5xl">SİTELER</h2>
      </div>
      
      {/* Grid yapısı, her siteyi grid içerisinde gösterir */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 justify-items-center relative z-20">
        {sitesData.map((site, index) => (
          <a
            key={index}
            href={site.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col rounded-[15px] w-80 max-w-xs bg-gradient-to-b from-[rgba(212,184,249,0.42)] to-[rgba(234,218,255,0.41)] p-5 text-center overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 justify-center items-center"
          >
            <img src={site.logo} alt={site.name} className="w-24 h-24 mb-4" />
            <p className="text-white text-lg font-semibold">{site.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
});

export default SitesPage;
