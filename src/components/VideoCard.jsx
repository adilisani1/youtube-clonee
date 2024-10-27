import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { demoVideoUrl } from '../utils/constant'
const VideoCard = ({
    video: {
        id: { videoId },
        snippet
    }
}) => {
    return (
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <div className="w-full " >
                <div className="flex flex-col">
                    <img
                        className="w-full  object-contain mb-2 mt-2"
                        src={snippet?.thumbnails?.high?.url}
                        alt={`Thumbnail for ${snippet?.title}`}
                    />
                    <h1 className="text-sm font-bold mt-1 font-roboto">{snippet?.title}</h1>
                    <div className=' flex gap-1 items-center'>
                        <p className=' text-gray-400 font-roboto text-xs'>{snippet?.channelTitle}</p>
                        <FaCircleCheck className=' text-gray-400' />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard