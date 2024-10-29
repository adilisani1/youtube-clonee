import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { FaCircleCheck } from 'react-icons/fa6';
import Videos from './Videos';
import { IoMdThumbsUp } from "react-icons/io";

const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null);
  const [video, setVideo] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const videoData = await fetchFromAPI(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`);
        setVideoDetail(videoData.items[0]);

        const relatedVideos = await fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`);
        setVideo(relatedVideos.items);
      } catch (error) {
        if (error.response && error.response.status === 429) {
          console.log("Rate limit exceeded. Please try again later.");
        } else {
          console.error("An error occurred:", error);
        }
      }
    };

    fetchVideoDetails();
  }, [id]);


  if (!videoDetail) return 'Loading...';

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;


  return (
    <div className='m-h-[95v]'>

      <div className="md:flex md:flex-row flex-col">

        <div className="flex-[4]">
          <div className="sticky w-full top-[86px]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />

            <div className="flex justify-between items-center px-4 py-4">
              <div className=''>
                <h1 className="text-2xl font-bold mb-1">{title}</h1>
                <p className="text-gray-800 text-md flex items-center gap-2">
                  {channelTitle}
                  <FaCircleCheck className='text-red-400 mt-1' />
                </p>
              </div>
              <div className='flex gap-2 justify-end'>
                <p className="text-black px-3 py-2 rounded-full text-sm bg-gray-100 shadow-lg">
                  {parseInt(viewCount).toLocaleString()} views
                </p>
                <p className="text-black px-3 rounded-full text-sm bg-gray-100 shadow-lg flex gap-1 items-center">
                  {parseInt(likeCount).toLocaleString()} likes
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex-[1] overflow-x-auto'>
          <Videos videos={video} columnLayout />
        </div>

      </div>

    </div>
  )
}

export default VideoDetail