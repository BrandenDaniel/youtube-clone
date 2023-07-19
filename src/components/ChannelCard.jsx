import React from "react";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <div className="channelCard">
      <Link
        to={`/channel/${channelDetail?.id?.channelId}`}
        className="channelCard__thumbnail channelCard__thumbnail--channel"
      >
        <img
          src={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
        />
      </Link>
      <Link
        to={`/channel/${channelDetail?.id?.channelId}`}
        className="channelCard__content"
      >
        <h3>
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
        </h3>
        {channelDetail?.statistics?.subscriberCount && (
          <h4>
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString()}{" "}
            Subscribers
          </h4>
        )}
      </Link>
    </div>
  );
};

export default ChannelCard;
