import { demoProfilePicture } from "../utils/constant";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail }) => {
    return (
        <Link to={`/channel/${channelDetail?.id?.channelId}`} className="flex flex-col items-center w-full">
            <div className="w-full flex flex-col items-center ">
                <img
                    className="w-56 h-56 rounded-full object-cover mb-2"
                    src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={channelDetail?.snippet?.title}
                />
                <h3 className="text-center text-white text-md font-bold">{channelDetail?.snippet?.title}</h3>
                {channelDetail?.statistics?.subscriberCount && (
                    <p className="text-gray-200 text-xs">
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
                    </p>
                )}
            </div>
        </Link>
    );
}

export default ChannelCard;
