import React, { useEffect, useState } from 'react'
import ChannelCard from './ChannelCard';
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from './Videos';

const ChannelDetail = () => {


  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])


  const { id } = useParams()

  useEffect(() => {


    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        setChannelDetail(data?.items[0])
      })

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        setVideos(data?.items)
      })
  })

  return (
    <div className='w-full min-h-72 '>
      <div className=' h-[300px] bg-purple-600'>
        <ChannelCard channelDetail={channelDetail} />
      </div>
      <div>
        <Videos videos={videos} />
      </div>
    </div>
  )
}

export default ChannelDetail;