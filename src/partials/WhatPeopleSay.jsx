import React from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import htmlcode from "./../images/htmlcode.png";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FiberSmartRecordIcon from "@mui/icons-material/FiberSmartRecord";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import saturation from "../images/saturation.png";
import maiil from "../images/maiil.png";
import help from "../images/help.png";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import anna from "../images/anna.png";
import yahoo from "../images/yahoo.png";
import darius from "../images/darius.png";
import gilbert from "../images/gilbert.png";
import feedback from "../images/feedback.png";
import rrr from "../images/rrr.png";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const features = [
  {
    name: "Step 1",
    description: "Simply import your co workers via Excel.      ",
    icon: FiberSmartRecordIcon,
  },
  {
    name: "Step 2",
    description: "Create departments and map your employees.",
    icon: FiberSmartRecordIcon,
  },
  {
    name: "Step 3",
    description: "Create the email signature of your choice.      ",
    icon: FiberSmartRecordIcon,
  },
  {
    name: "Step 4",
    description: "Deploy the signature email.",
    icon: FiberSmartRecordIcon,
  },
  {
    name: "Step 5",
    description:
      "Each employee will receive a email notification of  Copy Paste Signature code and steps to change in your email provider.",
    icon: FiberSmartRecordIcon,
  },
];

function LeftPositionedTimeline() {
  return (
    <Timeline position="right">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

const ItemCard = ({ img, title, onClick, style, feed, name, rating }) => {
  return (
    <>
      <Card
        sx={{
          minWidth: 180,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
          width: "313px",
          height: "293px",
          cursor: "pointer",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
          borderRadius: "32px",
        }}
        elevation={4}
        onClick={onClick}
        style={style}
      >
        <CardContent
          sx={{
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10px",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            textAlign={"left"}
            sx={{
              fontWeight: "400",
              fontFamily: "Outfit",
              fontSize: "16px",
              lineHeight: "20px",
            }}
          >
            {feed}
          </Typography>
        </CardContent>
        <CardActions
        // sx={{display:'flex',alignItems:'flex-end',justifyContent:'space-between'}}
        >
          <div>
            <Grid container spacing={3} columns={16}>
              <Grid item xs={14}>
                <Typography
                  variant="h5"
                  component="div"
                  textAlign={"left"}
                  sx={{
                    fontWeight: "500",
                    fontFamily: "Outfit",
                    fontSize: "20px",
                    // lineHeight: "20px",
                    color: "#5245F",
                    marginTop: "10px",
                  }}
                >
                  {name}
                </Typography>
                <Rating
                  name="size-small"
                  defaultValue={5}
                  readOnly
                  size="small"
                />
              </Grid>
              <Grid item xs={2}>
                <Avatar
                  alt="Setting"
                  src={img}
                  sx={{
                    //   alignItems: "center",
                    //   justifyContent: "center",
                    //   marginLeft: "auto",
                    //   marginRight: "auto",
                    width: 76,
                    height: 76,
                    backgroundSize: "cover",
                  }}
                />
              </Grid>
            </Grid>
          </div>
        </CardActions>
      </Card>
    </>
  );
};

export default function WhatPeopleSay() {
  return (
    <>
      <div>
        <div
          className="overflow-hidden py-24 bg-white py-24 sm:py-32 text-white "
          style={{
            background:
              "linear-gradient(258.77deg, #787EFF 1.76%, #A160F7 99.32%)",
            boxShadow: "inset 0px 20px 250px rgba(0, 0, 0, 0.25)",
            marginTop: "140px",
          }}
        >
          <div className="mx-auto max-w-7xl px-2 lg:px-12">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
              <Grid item xs={10}>
                <h2
                  className="text-5xl font-bold tracking-tight text-white sm:text-5xl"
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    // fontFamily: "Outfit"
                  }}
                >
                  See What <br /> People Say <br /> About MY SIGIL
                </h2>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <img
                    style={{
                      width: "346px",
                      height: "346px",
                      marginTop: "-60px",
                    }}
                    src={feedback}
                  />
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "150px",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "center",
        }}
        className="mx-auto max-w-5xl py-15 px-8 lg:px-8 text-left testi-cards"
      >
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 24 }}>
            <Grid item xs={8}>
              <ItemCard
                img={anna}
                feed={
                  "Before using your system, I was spending hours trying to generate leads on my own. But with your done-for-you system, I was able to streamline my process and generate qualified leads faster than ever before. I highly recommend it to anyone looking to grow their business."
                }
                name={"Anna"}
              />
            </Grid>
            <Grid item xs={8}>
              <ItemCard
                img={darius}
                name={"Gilbert"}
                feed={
                  "I was skeptical at first, but after trying your funnel templates, I was blown away by the results. Not only was I able to generate more leads, but the quality of those leads was much higher. I've already recommended it to several of my colleagues."
                }
              />
            </Grid>
            <Grid item xs={8}>
              <ItemCard
                img={gilbert}
                name={"Darius"}
                feed={
                  "Game-changing landing pages for my business. I was able to scale my lead generation efforts quickly and easily, and I've seen a significant increase in leads and sales as a result. Thank you for making it so simple! I've already recommended it to several of my colleagues."
                }
              />
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
