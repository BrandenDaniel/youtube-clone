import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Loader, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setIsLoading(false);
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search results for:
        <span style={{ color: "#FC1503" }}> {searchTerm}</span> videos
      </Typography>

      {isLoading ? <Loader /> : <Videos videos={videos} />}
    </Box>
  );
};

export default SearchFeed;
