import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import "../sass/videoDetail.scss";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetails(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetails?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  return (
    <Box
      sx={{
        p: { xs: 2, md: 3 },
        pt: { xs: 0, md: 0 },
      }}
      className="videoDetail"
    >
      <section className="videoDetail__player">
        <div>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
            playing="true"
          />
          <div className="videoDetail__details">
            <h3>{title}</h3>
            <div>
              <h4>
                {channelTitle}{" "}
                <CheckCircle
                  sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                />
              </h4>

              <div>
                <span>{parseInt(viewCount).toLocaleString()} views</span>
                <span>{parseInt(likeCount).toLocaleString()} likes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="videoDetail__relatedVideos">
        <Videos videos={videos} direction="column" videoDetailPage="true" />
      </section>
    </Box>
  );
};

export default VideoDetail;
