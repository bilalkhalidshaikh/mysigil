import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import up from "../images/up.png";
import down from "../images/down.png";
import dot from "../images/dot.png";
import { Timeline } from "antd";

const TimelineComponent = () => (
  <Box sx={{ fontSize: "94px" }}>
    <Timeline
      style={{ fontSize: "94px" }}
      dot={
        <>
          <Avatar sx={{ width: 56, height: 56 }} />
        </>
      }
    >
      <Timeline.Item
        style={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px" }}
      >
        Keep them engaged with company news and brand content.
      </Timeline.Item>
      <Timeline.Item
        style={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px" }}
      >
        Promote brand content (newsletter, blog post etc)
      </Timeline.Item>
      <Timeline.Item
        style={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px" }}
      >
        Promote company culture and values Collect employee feedback survey
      </Timeline.Item>
      <Timeline.Item
        style={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px" }}
      >
        Learn how processes can be improved
      </Timeline.Item>
      <Timeline.Item
        style={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px" }}
      >
        Market the latest events & internal programs
      </Timeline.Item>
      <Timeline.Item
        style={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px" }}
      >
        Company vision and target goals
      </Timeline.Item>
    </Timeline>
  </Box>
);
const TimelineComponentNext = () => (
  <Box sx={{ fontSize: "94px" }}>
    <Timeline
      style={{ fontSize: "94px" }}
      dot={
        <>
          <Avatar sx={{ width: 56, height: 56 }} />
        </>
      }
    >
      <Timeline.Item
        style={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px" }}
      >
        Book appointment CTA buttons
      </Timeline.Item>
      <Timeline.Item
        style={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px" }}
      >
        Product, Portfolio & Services CTA
      </Timeline.Item>
      <Timeline.Item
        style={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px" }}
      >
        Download brochure & Services CTA
      </Timeline.Item>
      <Timeline.Item
        style={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px" }}
      >
        Market new offers
      </Timeline.Item>
      <Timeline.Item
        style={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px" }}
      >
        Job opening for HR & Talent Managers
      </Timeline.Item>
      <Timeline.Item
        style={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px" }}
      >
        Feature updates for tech products
      </Timeline.Item>
      <Timeline.Item
        style={{ fontSize: "16px", fontWeight: 600, lineHeight: "24px" }}
      >
        Reselling Email signature real estate
      </Timeline.Item>
    </Timeline>
  </Box>
);


const ItemCards = ()=>{
  return(
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
      dhf
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}

{/* <Avatar src={feature.avt} sx={{width:94,height:94}} />
<p
  className="mt-2 text-2xl  tracking-tight text-gray-900 sm:text-2xl"
  style={{
    color: "#704EF9",
    fontWeight: 700,
    fontSize: "36px",
    lineHeight: "40px",
  }}
>
  {feature.name}
</p>
<Typography variant="h5" component="div">
  {feature.description}
</Typography> */}

export default function IncreaseRevenue() {
  return (
    <div>
      <div className="bg-white py-2 sm:py-8">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p
              style={{ color: "#704EF9 " }}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
              How Are Company Using My <br /> Sigil To Increase Their Revenue
            </p>
          </div>
          <div className="bg-white py-6 sm:py-18">
            <Grid
            container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={6}>
                <Card
                  sx={{
                    minWidth: 275,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                    width: "461px",
                    background: "#F5F5F5",
                  }}
                  className="increase-head"
                >
                  <CardContent>
                    <Grid
                      container
                      rowSpacing={4}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item xs={6}>
                        <Typography
                          variant="h5"
                          component="div"
                          sx={{
                            fontWeight: 400,
                            fontSize: "54px",
                            lineHeight: "70px",
                            color: "#656363",
                          }}
                        >
                          Inbound
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <img
                          src={up}
                          style={{ width: 52, height: 62, marginTop: "5px" }}
                          className={"up-down"}
                        />
                      </Grid>
                    </Grid>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 500,
                        fontSize: "21px",
                      }}
                    >
                      Existing Connections & Collaborators
                    </Typography>
                  </CardContent>
                </Card>
                <div className="bg-transparent py-12 sm:py-18">
                  <TimelineComponent />
                </div>
              </Grid>
              <Grid item xs={6}>
                <Card

                  sx={{
                    minWidth: 275,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                    width: "461px",
                    background: "#F5F5F5",
                  }}
                  className="increase-head"
                >
                  <CardContent>
                    <Grid
                      container
                      rowSpacing={12}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item xs={6}>
                        <Typography
                          variant="h5"
                          component="div"
                          sx={{
                            fontWeight: 400,
                            fontSize: "54px",
                            lineHeight: "70px",
                            color: "#656363",
                          }}
                        >
                          Outbound
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <img
                          src={down}
                          style={{
                            width: 62,
                            height: 62,
                            marginTop: "5px",
                            marginLeft: "20px",
                          }}
                          className={"up-down"}
                        />
                      </Grid>
                    </Grid>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 500,
                        fontSize: "21px",
                      }}
                    >
                      New Leads & Support tickets
                    </Typography>
                  </CardContent>
                </Card>
                <div className="bg-transparent py-12 sm:py-18">
                  <TimelineComponent />
                </div>
              </Grid>
              {/* <Grid item xs={6}></Grid>
              <Grid item xs={6}></Grid> */}
            </Grid>
          </div>
        </div>
        <div>
        <Container
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            marginTop:'-60px'
          }}
        >
          <a
            className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
            href="#0"
            style={{
                      backgroundColor: "#787EFF",
                      boxShadow: " 0px 10px 20px rgba(0, 0, 0, 0 ,15)",
                      borderRadius: "30px",
                      padding: "20px 15px",
                      width: "330px",
                      height: "86px",
                      fontFamily: "Outfit",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "20px",
                      lineHeight: "35px",
                      textAlign:'center',
                      justifyContent:'center',
                      alignItems:'center'
                    }}
          >
          Try SIGIL FOR FREE
          </a>
        </Container>
        </div>
      </div>
    </div>
  );
}
