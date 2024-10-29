import React from 'react';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos, columnLayout }) => {
  if (!videos?.length) return "Loading....";

  return (
    <div
      className={`${columnLayout
        ? 'flex flex-col gap-4 px-5 py-5'
        : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:px-5 px-5 md:py-5 py-5' // Default grid layout
        }`}
    >
      {videos.map((video, index) => (
        <div key={index} className='flex-shrink-0'>
          {video?.id?.channelId ? (
            <ChannelCard channelDetail={video} />
          ) : (
            <VideoCard video={video} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Videos;
