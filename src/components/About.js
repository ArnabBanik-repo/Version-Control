import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import About1 from "../assets/imgs/ebook.svg";

const Section = styled(Box)({
  padding: "9rem 7rem",
  display: "flex",
  alignItems: "center",
  gap: "10rem",
  background: "#ff7bab",
  height: "70vh",
});

const TextBox = styled(Box)({
  flex: 1.19,
});

const ImageBox = styled(Box)({
  flex: 1,
});

const About = () => {
  return (
    <div id="about">
      <Section>
        <TextBox sx={{ width: "40rem" }}>
          <Typography
            sx={{
              textAlign: "left",
              color: "white",

              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "4.3rem",
              lineHeight: "170.02%",

              letterSpacing: "0.03em",
            }}
          >
            UPLOAD FILES AND
            <span style={{ display: "block" }}>EASILY TRACK VERSIONS</span>
          </Typography>
        </TextBox>
        <ImageBox>
          <img src={About1} alt="main page" height={"450rem"} />
        </ImageBox>
      </Section>
    </div>
  );
};

export default About;
