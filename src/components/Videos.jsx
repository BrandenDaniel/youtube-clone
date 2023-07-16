import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard } from "./";
import { ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos) return "Loading...";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box
          key={idx}
          sx={{
            flexBasis: { xs: "100%", sm: "320px" },
            width: { xs: "100%", sm: "320px" },
            display: item.id.kind === "youtube#playlist" && "none",
          }}
        >
          {item.id?.kind === "youtube#video" && <VideoCard video={item} />}
          {item.id?.kind === "youtube#channel" && (
            <ChannelCard channelDetail={item} />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
