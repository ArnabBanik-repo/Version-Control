import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

import React from "react";
import { HashLink } from "react-router-hash-link";
const CTABox = styled(Box)({ display: "flex", gap: "1rem" });
const CTAButton = styled(Button)({
  height: "3.3rem",
  minWidth: "9.5rem",
  fontSize: "1.1rem",
});
const styles = {
  "&.MuiButton-root": {},
  "&.MuiButton-contained": {
    backgroundColor: "#d9677b",
  },
  "&.MuiButton-outlined": {
    borderColor: "#d9677b",
    color: "#d9677b",
    "&:hover": {
      backgroundColor: "rgba(255, 116, 45, 0.07)",
    },
  },
};
const CTA = () => {
  return (
    <CTABox>
      <HashLink smooth to={"#about"} style={{ textDecoration: "none" }}>
        <CTAButton sx={styles} variant="outlined" size="large">
          Learn More
        </CTAButton>
      </HashLink>
      <HashLink to={"/login"} style={{ textDecoration: "none" }}>
        <CTAButton sx={styles} variant="contained" size="large">
          Log In
        </CTAButton>
      </HashLink>
    </CTABox>
  );
};

export default CTA;
