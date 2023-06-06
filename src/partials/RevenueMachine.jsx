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
import arrow from "../images/arrow.png";
import employee from "../images/employee.png";
import emailsent from "../images/emailsent.png";
import rm1 from "../images/rm1.png";
import rm2 from "../images/rm2.png";
import rm3 from "../images/rm3.png";

const features = [
  {
    name: "Saturation of existing channels",
    description:
      "The saturation of online distribution channels leads to increased customer acquisition costs and decreased click-through rates, making it difficult to effectively reach and engage potential customers.",
    icon: saturation,
  },
  {
    name: "How can My Sigil help you leverage this?",
    description:
      "My Sigil turns your signature into a marketing channel with marketing banners & CTA’s which you can update instantly, and we take personalized marketing to a whole new level, you can sync your contact list and map them into interest groups and set customized banner for each interest which will make your emails laser targeted and your signature banner will dynamically change based on the recipient.",
    icon: help,
  },
  {
    name: "The under leveraged and free one",
    description:
      "Email is something you and your team use everyday, On an average a company of 10 co workers on an average send more than 2000 emails per week, that is a lot of outreach which can be converting into new customers or upselling existing ones.      ",
    icon: maiil,
  },
];

export default function RevenueMachine() {
  const num = 10;
  const [value, setValue] = React.useState(0);
  const [emailSent, setEmailSent] = React.useState(300);
  const [emailSentW, setEmailSentW] = React.useState('2 100');
  const CalculateValue = (e) => {
    setValue(e)
    console.log("here ", e);
    setEmailSent(e*30)
    setEmailSentW(e*210)
  };
  React.useEffect(() => {
}, [CalculateValue]);
  return (
    <div>
      <div className="bg-white py-20 sm:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p
              style={{ color: "#704EF9 ", textAlign: "center" }}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
              Transform your email <br /> Into a Revenue Machine
            </p>
          </div>
          {/* <div
            className="mx-auto mt-36 max-w-3xl py-12 sm:mt-20 lg:mt-24 lg:max-w-6xl lg:max-h-8x1"
            style={{
              background:
                "linear-gradient(264.64deg, rgba(120, 126, 255, 0.9) 2.62%, #A160F7 98.38%, rgba(161, 96, 247, 0.74) 98.38%)",
              padding: "40px",
              boxShadow: "inset 0px 100px 250px rgba(0, 0, 0, 0.25)",
              borderRadius: "20px",
              marginTop: "15px",
            }}
          >
            <d className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative pl-30 text-white"
                  style={{ marginTop: "5px" }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={feature.icon}
                    sx={{ width: 52, height: 56 }}
                  />
                  <Typography
                    variant={"h6"}
                    fontWeight={"bold"}
                    sx={{ fontSize: "16px", lineHeight: "20px" }}
                  >
                    {feature.name}
                  </Typography>
                  <Typography
                    variant={"subtitle2"}
                    sx={{
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "28px",
                    }}
                  >
                    {feature.description}
                  </Typography>
                </div>
              ))}
            </d>
          </div> */}

          <div
            className="mx-auto max-w-5xl py-20 px-6 lg:px-8 text-left"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={6} md={8}>
                  <Box>
                    <p
                      className="mt-2 text-4xl  tracking-tight text-gray-900 sm:text-4xl"
                      style={{
                        color: "#704EF9",
                        fontWeight: 500,
                        fontSize: "36px",
                        lineHeight: "40px",
                      }}
                    >
                      Saturation of existing channels
                    </p>
                    <p
                      className="mt-2 text-lg leading-8 text-gray-600 sm:text-2xl"
                      style={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "24px",
                        lineHeight: "28px",
                      }}
                    >
                      The saturation of online distribution channels leads to
                      increased customer acquisition costs and decreased
                      click-through rates, making it difficult to effectively
                      reach and engage potential customers.
                    </p>
                  </Box>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Box gridColumn="span 4">
                    <img
                      src={rm1}
                      style={{
                        position: "absolute",
                        width: "252px",
                        height: "250px",
                        marginTop: "-40px",
                      }}
                      className="rm-imgs"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6} md={8}>
                  <Box>
                    <p
                      className="mt-2 text-4xl  tracking-tight text-gray-900 sm:text-4xl"
                      style={{
                        color: "#704EF9",
                        fontWeight: 500,
                        fontSize: "36px",
                        lineHeight: "40px",
                      }}
                    >
                      How can My Sigil help you leverage this?
                    </p>
                    <p
                      className="mt-2 text-lg leading-8 text-gray-600 sm:text-2xl"
                      style={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "24px",
                        lineHeight: "28px",
                      }}
                    >
                      My Sigil turns your signature into a marketing channel
                      with marketing banners & CTA’s which you can update
                      instantly, and we take personalized marketing to a whole
                      new level, you can sync your contact list and map them
                      into interest groups and set customized banner for each
                      interest which will make your emails laser targeted and
                      your signature banner will dynamically change based on the
                      recipient.
                    </p>
                  </Box>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Box gridColumn="span 4">
                    <img
                      src={rm2}
                      style={{
                        position: "absolute",
                        width: "252px",
                        height: "250px",
                        marginTop: "-40px",
                      }}
                      className="rm-imgs"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6} md={8}>
                  <Box>
                    <p
                      className="mt-2 text-4xl  tracking-tight text-gray-900 sm:text-4xl"
                      style={{
                        color: "#704EF9",
                        fontWeight: 500,
                        fontSize: "36px",
                        lineHeight: "40px",
                      }}
                    >
                      The under leveraged and free one 
                    </p>
                    <p
                      className="mt-2 text-lg leading-8 text-gray-600 sm:text-2xl"
                      style={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "24px",
                        lineHeight: "28px",
                      }}
                    >
                      Email is something you and your team use everyday, On an
                      average a company of 10 co workers on an average send more
                      than 2000 emails per week, that is a lot of outreach which
                      can be converting into new customers or upselling existing
                      ones.
                    </p>
                  </Box>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Box gridColumn="span 4">
                    <img
                      src={rm3}
                      style={{
                        position: "absolute",
                        width: "252px",
                        height: "250px",
                        marginTop: "-40px",
                      }}
                      className="rm-imgs"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-20 px-6 lg:px-8 text-center">
          <p
            style={{ color: "#704EF9 " }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            The average click-through rate for paid marketing channels across
            all industries
          </p>
          <div className="mt-12 py-6">
            <Box sx={{ flexGrow: 4, marginTop: "20px" }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 20 }}
              >
                <Grid item xs={4}>
                  <Typography
                    variant={"h6"}
                    fontWeight={"bold"}
                    sx={{
                      // fontSize: "16px",
                      lineHeight: "20px",
                      fontWeight: 300,
                      fontSize: "20px",
                    }}
                  >
                    Facebook ads
                  </Typography>
                  <Typography
                    variant={"h6"}
                    fontWeight={"bolder"}
                    sx={{
                      fontFamily: "Outfit",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "28px",
                      lineHeight: "70px",
                      /* or 146% */

                      color: "#B741FF",
                    }}
                  >
                    0.9%
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant={"h6"}
                    fontWeight={"bold"}
                    sx={{
                      // fontSize: "16px",
                      lineHeight: "20px",
                      fontWeight: 300,
                      fontSize: "20px",
                    }}
                  >
                    Google ads
                  </Typography>
                  <Typography
                    variant={"h6"}
                    fontWeight={"bolder"}
                    sx={{
                      fontFamily: "Outfit",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "28px",
                      lineHeight: "70px",
                      /* or 146% */

                      color: "#B741FF",
                    }}
                  >
                    3.2%
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant={"h6"}
                    fontWeight={"bold"}
                    sx={{
                      // fontSize: "16px",
                      lineHeight: "20px",
                      fontWeight: 300,
                      fontSize: "20px",
                    }}
                  >
                    Youtube ads
                  </Typography>
                  <Typography
                    variant={"h6"}
                    fontWeight={"bolder"}
                    sx={{
                      fontFamily: "Outfit",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "28px",
                      lineHeight: "70px",
                      /* or 146% */

                      color: "#B741FF",
                    }}
                  >
                    5%
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant={"h6"}
                    fontWeight={"bold"}
                    sx={{
                      // fontSize: "16px",
                      lineHeight: "20px",
                      fontWeight: 300,
                      fontSize: "20px",
                    }}
                  >
                    Linkedin ads
                  </Typography>
                  <Typography
                    variant={"h6"}
                    fontWeight={"bolder"}
                    sx={{
                      fontFamily: "Outfit",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "28px",
                      lineHeight: "70px",
                      /* or 146% */

                      color: "#B741FF",
                    }}
                  >
                    0.35%
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant={"h4"}
                    fontWeight={"bold"}
                    sx={{
                      fontSize: "26px",
                      lineHeight: "20px",
                      fontWeight: 700,
                      // fontSize: "24px",
                    }}
                  >
                    My Sigil
                  </Typography>
                  <Typography
                    variant={"h5"}
                    fontWeight={"bolder"}
                    sx={{
                      fontFamily: "Outfit",
                      fontStyle: "normal",
                      fontWeight: 800,
                      fontSize: "28px",
                      lineHeight: "70px",
                      /* or 146% */

                      color: "#B741FF",
                    }}
                  >
                    12%
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </div>
          <div className="mt-26 py-20 max-w-6xl ">
            <p
              style={{ color: "#704EF9 " }}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Calculate how many emails that company sends which could
              beleveraged into revenue.
            </p>
            <Container className="py-12">
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12, lg: 28 }}
              >
                <Grid item xs={4}>
                  <Card
                    sx={{
                      minWidth: 175,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "20px",
                    }}
                    elevation={5}
                  >
                    <CardContent
                      sx={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      <Avatar
                        alt="Email Sent"
                        src={employee}
                        sx={{
                          width: 52,
                          height: 56,
                          alignItems: "center",
                          justifyContent: "center",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      />
                      <Typography variant="h5" component="div"></Typography>
                      <Typography
                        sx={{
                          mb: 1.5,
                          color: "#B741FF",
                          fontSize: "28px",
                          fontWeight: "700",
                        }}
                      >
                        <input
                          type="number"
                          // value={value}
                          onChange={(e) => CalculateValue(e.target.value)}
                          placeholder={10}
                          className="getnum"
                          align="middle"
                        />
                      </Typography>
                      <div
                        style={{
                          border: "1px solid #333",
                          height: "0px",
                          width: "84px",
                          marginLeft: "auto",
                          marginRight: "auto",
                          marginTop: "-10px",
                        }}
                      ></div>
                      <Typography
                        variant="body2"
                        sx={{
                          marginTop: "10px",
                          fontSize: "14px",
                          fontWeight: 300,
                        }}
                      >
                        Number of employees in your company
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      flexGrow: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "30px",
                      marginTop: "50px",
                    }}
                  >
                    <img src={arrow} className="arrow-img" />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Card
                    sx={{
                      minWidth: 175,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "20px",
                    }}
                    elevation={5}
                  >
                    <CardContent
                      sx={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      <Avatar
                        alt="Email Sent"
                        src={emailsent}
                        sx={{
                          width: 52,
                          height: 56,
                          alignItems: "center",
                          justifyContent: "center",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      />
                      <Typography variant="h5" component="div"></Typography>
                      <Typography
                        sx={{
                          mb: 1.5,
                          color: "#B741FF",
                          fontSize: "28px",
                          fontWeight: "700",
                        }}
                      >
                        30
                      </Typography>
                      <div
                        style={{
                          border: "1px solid #333",
                          height: "0px",
                          width: "84px",
                          marginLeft: "auto",
                          marginRight: "auto",
                          marginTop: "-10px",
                        }}
                      ></div>
                      <Typography
                        variant="body2"
                        sx={{
                          marginTop: "10px",
                          fontSize: "14px",
                          fontWeight: 300,
                        }}
                      >
                        Average emails sent per employee per day
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      flexGrow: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "30px",
                      marginTop: "50px",
                    }}
                  >
                    <img src={arrow} className="arrow-img" />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Card
                    sx={{
                      minWidth: 175,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "20px",
                    }}
                    elevation={5}
                  >
                    <CardContent
                      sx={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      <Avatar
                        alt="Email Sent"
                        src={emailsent}
                        sx={{
                          width: 52,
                          height: 56,
                          alignItems: "center",
                          justifyContent: "center",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      />
                      <Typography variant="h5" component="div"></Typography>
                      <Typography
                        sx={{
                          mb: 1.5,
                          color: "#B741FF",
                          fontSize: "28px",
                          fontWeight: "700",
                        }}
                      >
                        {/* {emailSent} */}
                        {value==0?emailSent:value*30}
                        {/* {value*30} */}
                      </Typography>
                      <div
                        style={{
                          border: "1px solid #333",
                          height: "0px",
                          width: "84px",
                          marginLeft: "auto",
                          marginRight: "auto",
                          marginTop: "-10px",
                        }}
                      ></div>
                      <Typography
                        variant="body2"
                        sx={{
                          marginTop: "10px",
                          fontSize: "14px",
                          fontWeight: 300,
                        }}
                      >
                        Total emails sent every day
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      flexGrow: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "30px",
                      marginTop: "50px",
                    }}
                  >
                    <img src={arrow} className="arrow-img" />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Card
                    sx={{
                      minWidth: 175,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "20px",
                    }}
                    elevation={5}
                  >
                    <CardContent
                      sx={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      <Avatar
                        alt="Email Sent"
                        src={emailsent}
                        sx={{
                          width: 52,
                          height: 56,
                          alignItems: "center",
                          justifyContent: "center",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      />
                      <Typography variant="h5" component="div"></Typography>
                      <Typography
                        sx={{
                          mb: 1.5,
                          color: "#B741FF",
                          fontSize: "28px",
                          fontWeight: "700",
                        }}
                      >
                        {/* {emailSentW} */}
                        {/* {value*210} */}
                        {value==0?emailSentW:value*210}
                      </Typography>
                      <div
                        style={{
                          border: "1px solid #333",
                          height: "0px",
                          width: "84px",
                          marginLeft: "auto",
                          marginRight: "auto",
                          marginTop: "-10px",
                        }}
                      ></div>
                      <Typography
                        variant="body2"
                        sx={{
                          marginTop: "10px",
                          fontSize: "14px",
                          fontWeight: 300,
                        }}
                      >
                        Total emails sent in 1 week
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container>
            <Container
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <a
                className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                href="#0"
                style={{
                  backgroundColor: "#787EFF",
                  boxShadow: " 0px 10px 20px rgba(0, 0, 0, 0 ,15)",
                  borderRadius: "30px",
                  padding: "20px 20px",
                  width: "330px",
                  height: "86px",
                  fontFamily: "Outfit",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "35px",
                }}
              >
                Be a cut above others
              </a>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}
