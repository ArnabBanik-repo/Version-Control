import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Folder from "./Folder";
import reposData from "../data/reposData";

const Dashboard = () => {
  const [repos, setRepos] = useState(
    JSON.parse(localStorage.getItem("alldata")) || reposData
  );
  // console.log(repos);
  const handleCreateRepo = () => {
    const repoName = prompt("Enter your repo name: ");
    const auth = prompt("Author: ");
    setRepos([
      ...repos,
      {
        id: `${parseInt(Math.random() * 100 + 1)}`,
        name: repoName,
        author: auth,
        files: [],
      },
    ]);
  };
  useEffect(() => {
    localStorage.setItem("alldata", JSON.stringify(repos));
  }, [repos]);

  return (
    <Box
      sx={{
        background: "black",
        height: "100vh",
        padding: "9rem 10rem",
      }}
    >
      <Typography
        color={"white"}
        variant="h2"
        sx={{ textAlign: "center", fontWeight: "normal" }}
      >
        Your Repositories
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          padding: "3rem",
          placeItems: "center",
          gridGap: "1rem",
        }}
      >
        {repos.map((folder, i) => {
          return <Folder {...folder} key={i} />;
        })}
      </Box>
      <Button variant="contained" onClick={() => handleCreateRepo()}>
        Create New Repository
      </Button>
    </Box>
  );
};

export default Dashboard;
