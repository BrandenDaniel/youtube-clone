// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

import "../sass/videoCard.scss";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
  slice,
}) => {
  return (
    <div className="videoCard">
      <Link
        to={videoId ? `/video/${videoId}` : demoVideoUrl}
        className="videoCard__thumbnail"
      >
        <img
          src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
        />
      </Link>

      <Link
        to={videoId ? `/video/${videoId}` : demoVideoUrl}
        className="videoCard__content"
      >
        {slice && snippet?.title.length > slice ? (
          <h3>
            {snippet?.title.slice(0, slice) + " ..." ||
              demoVideoTitle.slice(0, slice) + " ..."}
          </h3>
        ) : (
          <h3>{snippet?.title.slice(0, 70) || demoVideoTitle.slice(0, 60)}</h3>
        )}
        <h4>
          {snippet?.channelTitle || demoChannelTitle} <CheckCircle />
        </h4>
      </Link>
    </div>
  );
};

export default VideoCard;
