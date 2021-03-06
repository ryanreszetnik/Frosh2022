import { useTheme } from "@emotion/react";
import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";
import Header from "../../images/header_welcome.png";
import UpcomingTimeline from "./UpcomingTimeline";
import SponsorImage from "../../images/sponsors.png";

export default function Home() {
  const theme = useTheme();
  return (
    <ParallaxProvider>
      <div
        style={{
          position: "fixed",
          textAlign: "center",
          zIndex: -1,
          width: "100%",
          height: "375px",
          // backgroundColor: theme.background,
        }}
      >
        <img
          height="100%"
          width="100%"
          style={{ objectFit: "cover" }}
          src={Header}
        />
      </div>
      <div
        style={{
          zIndex: 1,
          backgroundColor: theme.background,
          borderRadius: "5px 5px 0 0",
          boxShadow: `0px -6px 40px 15px ${theme.background}`,
          marginTop: "375px",
        }}
      >
        <div
          style={{
            width: "90%",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            height: "fit-content",
          }}
        >
          <Typography variant="h2">Frosh Theme</Typography>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
        <UpcomingTimeline />
        <div>
          <Typography variant="h2">Sponsors</Typography>
          <Card
            style={{
              width: "fit-content",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <CardMedia
              component="img"
              style={{
                width: "auto",
                height: "auto",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "90%",
                objectFit: "contain",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
              image={SponsorImage}
              alt="No img"
            />
          </Card>
        </div>
      </div>
    </ParallaxProvider>
  );
}
