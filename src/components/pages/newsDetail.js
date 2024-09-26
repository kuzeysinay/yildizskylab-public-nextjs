import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams();
  const [newsDetail, setNewsDetail] = useState(null);

  useEffect(() => {
    fetch(`https://yusufacmaci.com/yildizskylab/news/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.isSuccess) {
          setNewsDetail(data.data);
        }
      });
    
  }, [id]);

  if (!newsDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-lg max-w-3xl mx-auto my-8 shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{newsDetail.title}</h1>
      <p className="text-lg mb-6">{newsDetail.description}</p>
      <img className="w-full h-auto rounded-lg mb-6" src={newsDetail.image_url} alt={newsDetail.title} />
      <p className="text-sm text-gray-600 mb-2">Published on: {new Date(newsDetail.publish_date).toLocaleDateString()}</p>
      <p className="text-sm text-gray-600">Author: {newsDetail.user_name} {newsDetail.user_last_name}</p>
    </div>
  );
};

export default NewsDetail;