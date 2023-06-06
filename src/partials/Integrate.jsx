import React from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import saturation from "../images/saturation.png";
import maiil from "../images/maiil.png";
import help from "../images/help.png";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import google from "../images/google.png";
import soon from "../images/soon.png";
import csoon from "../images/csoon.png";


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
          width: "199px",
          height: "199px",
          cursor: "pointer",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.25)",
          borderRadius: "20px",                 
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
              width: 86,
              height: 86,
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

export default function Integrate() {
  return (
    <div
      //   className="mx-auto max-w-6xl px-6 lg:px-8 text-center"
      className="mx-auto text-center"
      style={{ marginTop: "-180px" }}
    >
      <div
        // className="mt-26 max-w-6xl"
        style={{
          background:
            "linear-gradient(262.28deg, #8788FE 1.62%, #A160F7 96.4%)",
          boxShadow: "inset 0px 100px 400px rgba(0, 0, 0, 0.25)",
          width: "100%",
          padding:'40px'
        }}
      >
        <p
          style={{ color: "#fff" }}
          className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Integrate With Your Email Provider
        </p>
        <p
          className="text-md leading-8 "
          style={{
            fontWeight: 400,
            fontSize: "21px",
            lineHeight: "25px",
            color: "#F5F5F5",
          }}
        >
          Automatically install and update organization email signatures
        </p>
        <Container className="py-12">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4}>
              <ItemCard img={google} title={"G workspace"} />
            </Grid>
            <Grid item xs={4}>
              <ItemCard img={soon} title={"Coming Soon"} />
            </Grid>
            <Grid item xs={4}>
              <ItemCard img={csoon} title={"Coming Soon"} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
