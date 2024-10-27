import React from 'react';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos }) => {
  if (!videos?.length) return "Loading...."
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'>
      {videos.map((video, index) => (
        <div key={index} className=''>
          {video?.id?.channelId ? (
            <ChannelCard channelDetail={video} />
          ) : (
            <VideoCard video={video} />
          )}
        </div>
      ))}
    </div>
  );
}

export default Videos;
