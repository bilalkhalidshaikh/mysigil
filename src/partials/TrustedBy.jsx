import React from "react";
import mailann from "../images/mailann.png";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import groupo from "../images/groupo.png";
import groupt from "../images/groupt.png";
import groupst from "../images/groupst.png";
import groupf from "../images/groupf.png";

function GroupsCard() {
  return (
    <div className="overflow-hidden  bg-white py-24 sm:py-32 text-white">
      <Card
        sx={{
          minWidth: 275,
          backgroundColor: "#787EFF",
          maxHeight: "167px",
          // maxWidth: "1573px",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        <CardContent>
          <Grid
            container
            spacing={1}
            columns={16}
            sx={{
              alignItems: "top",
              justifyContent: "space-evenly",
            }}
          >
            <Grid item xs={4}>
              <img
                src={groupo}
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "180px",
                  maxHeight: "180px",
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src={groupt}
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "180px",
                  maxHeight: "150px",
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src={groupst}
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "180px",
                  maxHeight: "150px",
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src={groupf}
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "180px",
                  maxHeight: "150px",
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
    </div>
  );
}

export default function TrustedBy() {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-21 sm:px-6 sm:py-18 lg:px-8">
          <div className="relative isolate overflow-hidden bg-white px-2 pt-14 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2
                className="text-5xl font-bold tracking-tight text-white sm:text-6xl"
                style={{
                  fontFamily: "Outfit",
                  color: "#704EF9",
                  fontWeight: "600",
                  lineHeight: "70px",
                }}
              >
                Trusted By
                <br />
                World’s Largest
                <br />
                Groups
              </h2>
              <p
                className="mt-6 text-lg leading-8 text-black-300 sm:text-3xl"
                style={{ fontWeight: "400" }}
              >
                Don't let a lackluster email signature hold you back!
              </p>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="trusted-img absolute top-0 left-0 w-[32rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src={mailann}
                alt="App screenshot"
                width={824}
                height={400}
              />
            </div>
          </div>
        </div>

        <GroupsCard />
      </div>
    </div>
  );
}
