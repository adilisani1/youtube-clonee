import React, { useEffect, useState } from 'react';
import ChannelCard from './ChannelCard';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from './Videos';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet%2Cstatistics&id=${id}`);
      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full h-[300px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 flex justify-center items-center">
        <div className="max-w-5xl w-full p-4">
          <ChannelCard channelDetail={channelDetail} />
        </div>
      </div>
      <div className="w-full mt-4 p-4">
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default ChannelDetail;
