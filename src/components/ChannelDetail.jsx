import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import "../sass/channelDetail.scss";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  console.log(channelDetail);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh" className="channelDetail">
      <Box>
        <div
          style={{
            background: `url("${channelDetail?.brandingSettings?.image?.bannerExternalUrl}")`,
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} />
      </Box>
      <Box display="flex" p={2}>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
