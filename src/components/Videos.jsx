import React, { useEffect, useState } from 'react';
import { demoChannelTitle, demoThumbnailUrl } from '../utils/constant';
import { FaCircleCheck } from "react-icons/fa6";
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Videos = ({ videos }) => {



  // Mock array of video data
  const videoData = [
    { id: 1, title: 'Video Title 1', thumbnail: demoThumbnailUrl, channelTitle: demoChannelTitle },
    { id: 2, title: 'Video Title 2', thumbnail: demoThumbnailUrl, channelTitle: demoChannelTitle },
    { id: 3, title: 'Video Title 3', thumbnail: demoThumbnailUrl, channelTitle: demoChannelTitle },
    { id: 4, title: 'Video Title 4', thumbnail: demoThumbnailUrl, channelTitle: demoChannelTitle },
    { id: 5, title: 'Video Title 5', thumbnail: demoThumbnailUrl, channelTitle: demoChannelTitle },
  ];

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4'>
        {videos.map((video, index) => (
          <div className="w-full" key={index}>
            <div className="flex flex-col">
              <img
                className="w-full h-60 object-cover"
                src={video.thumbnail}
                alt={`Thumbnail for ${video.title}`}
              />
              <h1 className="text-xl font-bold mt-4 font-roboto">{video.title}</h1>
              <div className=' flex gap-1 items-center'>
                <p className=' text-gray-400 font-roboto text-sm'>{video.channelTitle}</p>
                <FaCircleCheck className=' text-gray-400' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;
