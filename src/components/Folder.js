import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const FolderBox = styled(Box)({
  height: "15rem",
  width: "15rem",
  background: "#d9677b",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "1rem",
});

const CustomLink = styled(Link)({
  textDecoration: "none",
  color: "black",
});

const Folder = ({ name, id }) => {
  return (
    <FolderBox>
      <CustomLink to={`/repo/${id}`} exact>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "normal",
            textTransform: "uppercase",
            color: "white",
          }}
        >
          {name}
        </Typography>
      </CustomLink>
    </FolderBox>
  );
};

export default Folder;
