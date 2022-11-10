import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import CTA from "./CTA";
import About from "./About";

const HeroSection = styled(Box)({
  padding: "10rem 7rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const TextBox = styled(Box)({
  marginTop: "7rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  textAlign: "left",
  gap: "1.5rem",
  color: "white",
});

const Hero = () => {
  return (
    <>
      <HeroSection className="hero">
        <TextBox>
          <Typography
            sx={{
              width: "60rem",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "4.3rem",
              lineHeight: "150%",
              letterSpacing: "0.03em",
            }}
          >
            <span style={{ color: "#d9677b", display: "block" }}>
              VERSION CONTROL
            </span>
            IS HERE TO CONTROL YOUR VERSIONS
          </Typography>
          <CTA />
        </TextBox>
      </HeroSection>
      <About />
    </>
  );
};

export default Hero;
