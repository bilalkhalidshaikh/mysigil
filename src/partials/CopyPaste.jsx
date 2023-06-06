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
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import gmail from "../images/gmail.png";
import yahoo from "../images/yahoo.png";
import macmail from "../images/macmail.png";
import thunder from "../images/thunder.png";
import rrr from "../images/rrr.png";

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

const ItemCard = ({ img, title, onClick, style }) => {
  return (
    <>
      <Card
        sx={{
          minWidth: 180,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
          width: "163px",
          height: "163px",
          cursor: "pointer",
          boxShadow: "0px 4px 15px #ccc",
          borderRadius: "10px",
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
          <Avatar
            alt="Setting"
            src={img}
            sx={{
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
              width: 76,
              height: 76,
              backgroundSize: "cover",
            }}
          />
          <Typography
            variant="h5"
            component="div"
            textAlign={"center"}
            sx={{
              fontWeight: "300",
              letterSpacing: "0.02em",
              fontFamily: "Outfit",
              fontSize: "20px",
              lineHeight: "75px",
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default function CopyPaste() {
  return (
    <>
      <div>
        <div
          className="overflow-hidden bg-white py-24 sm:py-32"
          style={{ background: `url(${rrr})`,backgroundSize:'cover' }}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p
                    className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                    style={{ color: "#704EF9" }}
                  >
                    Copy Paste HTML code
                  </p>
                  <p className="mt-2 text-lg leading-8 text-gray-600 sm:text-2xl">
                    We have got your covered for the mailing providers which do
                    not support integration in a few easy steps
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <feature.icon
                            className="absolute top-1 left-1 h-5 w-5 text-indigo-600"
                            style={{
                              color: "#A160F7 #787EFF",
                              background: "-webkit-linear-gradient(#eee, #333)",
                              webkitBackgroundClip: "text",
                              textFillColor: "transparent",
                            }}
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                    {/* <LeftPositionedTimeline/> */}
                  </dl>
                </div>
              </div>
              <img
                src={htmlcode}
                alt="Product screenshot"
                //   className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={540}
                height={540}
              />
            </div>
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
        className="mx-auto max-w-5xl py-24 px-8 lg:px-8 text-center"
      >
        <Container
          sx={{
            flexGrow: 1,
          }}
          className={"copy-cards"}
        >
          <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 8, sm: 8, md: 16 }}>
            <Grid item xs={4}>
              <ItemCard img={gmail} title={"Gmail"} />
            </Grid>
            <Grid item xs={4}>
              <ItemCard img={macmail} title={"MacMail"} />
            </Grid>
            <Grid item xs={4}>
              <ItemCard img={thunder} title={"ThunderBird"} />
            </Grid>
            <Grid item xs={4}>
              <ItemCard img={yahoo} title={"Yahoo"} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
