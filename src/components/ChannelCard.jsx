import { demoProfilePicture } from "../utils/constant"
import { Link } from "react-router-dom"


const ChannelCard = ({ channelDetail, }) => {
    return (

        <div
        >

            <Link to={`/channel/${channelDetail?.id?.channelId}`}>

                <div>
                    <img
                        src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}

                    />
                    <h3 variant="h6">
                        {channelDetail?.snippet?.title}
                        {/* <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} /> */}
                    </h3>
                    {channelDetail?.statistics?.subscriberCount && (
                        <p>
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
                        </p>
                    )}
                </div>

            </Link>
        </div>


    )
}

export default ChannelCard