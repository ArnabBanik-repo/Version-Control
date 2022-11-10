import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
const FolderBox = styled(Box)({
  height: "20rem",
  width: "20rem",
  background: "#d9677b",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  borderRadius: "1rem",
  gap: "0.75rem",
});
const CustomLink = styled(Link)({
  fontWeight: "600",
  textTransform: "uppercase",
  textAlign: "center",
  display: "block",
  textDecoration: "none",
  color: "white",
  fontSize: "1.7rem",
});
const File = ({ id, name, author, uploaded, repoId }) => {
  return (
    <FolderBox>
      <CustomLink to={`/fileViewer/${repoId}/${id}`}>
        Filename: {name}
      </CustomLink>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "medium",
          textTransform: "uppercase",
          color: "white",
          textAlign: "center",
          display: "block",
        }}
      >
        Last Updated By: {author}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "medium",
          textTransform: "uppercase",
          color: "white",
          textAlign: "center",
          display: "block",
        }}
      >
        Uploaded at: {uploaded}
      </Typography>
    </FolderBox>
  );
};

export default File;
