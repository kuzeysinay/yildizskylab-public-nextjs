'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { HiArrowLeft } from 'react-icons/hi';

import './style.css';
import Footer from '@/components/footer/footer';


function NewsDetailPage({ params }) {
  const { id } = params;
  const router = useRouter();
  const [newsData, setNewsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getNewsDetail() {
      try {
        const res = await fetch(`https://yusufacmaci.com/yildizskylab/news/${id}`);

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        setNewsData(data);
      } catch (error) {
        setError(error);
      }
    }

    getNewsDetail();
  }, [id]);

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Haber Yüklenemedi</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  if (!newsData) {
    return (
      <div className="container mx-auto p-4">
        <p>Yükleniyor...</p>
      </div>
    );
  }

  const item = newsData.data;

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 text-white p-4 flex items-center">
        <button onClick={() => router.back()} className="mr-4">
          <HiArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">Haber Detayı</h1>
      </nav>

      {/* İçerik */}
      <div className="flex justify-center text-center content-center pt-16">
        <div className="p-4 text-white custom-prose max-w-3xl">
          <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
          <p className="text-gray-200 mb-4">
            Yayınlanma Tarihi: {new Date(item.publish_date).toLocaleDateString('tr-TR')}
          </p>
          <div className="mb-4">
            <img
              src={`data:${item.image_type};base64,${item.image_url}`}
              alt={item.title}
              className="w-full mx-auto h-auto"
            />
          </div>
          <div
            className="prose prose-lg text-white"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default NewsDetailPage;
