import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <div>
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: { xs: "space-between" },
        px: { xs: 2, sm: 3, md: 5 },
        gap: "30px",
        height: { xs: "80px", md: "95px" },
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  </div>
);
export default Navbar;
