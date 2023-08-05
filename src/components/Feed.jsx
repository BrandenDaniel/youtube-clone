import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Loader, Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setIsLoading(false);
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "calc(100vh - 95px)" },
          px: { xs: 0, sm: 3, md: 5 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>

      <Box
        sx={{
          overflowY: "auto",
          height: { md: "calc(100vh - 95px)" },
          flex: 2,
          p: { xs: 3 },
          pt: { md: 0 },
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#FC1503" }}> videos</span>
        </Typography>

        {isLoading ? <Loader /> : <Videos videos={videos} />}
      </Box>
    </Stack>
  );
};

export default Feed;
