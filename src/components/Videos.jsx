import React, { useEffect, useState } from 'react';
import { demoChannelTitle, demoThumbnailUrl } from '../utils/constant';
import { FaCircleCheck } from "react-icons/fa6";
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos }) => {
  if (!videos?.length) return "Loading...."
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4'>
      {videos.map((video, index) => (
        <div>
          {
            video?.id?.videoId && <VideoCard video={video} />
          }
          {
            video?.id?.channelId && <ChannelCard channelDetail={video} />
          }
        </div>
      )
      )}
    </div>
  );
}

export default Videos;
