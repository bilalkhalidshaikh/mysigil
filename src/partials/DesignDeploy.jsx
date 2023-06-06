import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import design from "../images/design.png";
import deploy from "../images/deploy.png";
import setting from "../images/setting.png";
import update from "../images/update.png";
import depart from "../images/depart.png";
import bg003 from "../images/bg003.png";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

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
              fontSize: "32px",
              lineHeight: "35px",
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

const DepartSec = ({ pOne, pTwo, img }) => {
  return (
    <div
      style={{
        marginTop: "40px",
        background:
          '"linear-gradient(0.71deg, rgba(161, 96, 247, 0.54) 1.93%, rgba(161, 96, 247, 0.156767) 53.62%, rgba(161, 96, 247, 0) 99.41%)" !important',
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        width:'100%',
        overflow:'hidden'
      }}
    >
      <div
        className="mx-auto max-w-4xl lg:text-left"
        style={{
          marginTop: "20px",
          background:
            '"linear-gradient(0.71deg, rgba(161, 96, 247, 0.54) 1.93%, rgba(161, 96, 247, 0.156767) 53.62%, rgba(161, 96, 247, 0) 99.41%)"',
        }}
      >
        <p
          className="mt-6 text-md leading-8 text-gray-600"
          style={{ fontWeight: 400, fontSize: "16px", lineHeight: "30px" }}
        >
          {pOne}
          <br />

          {pTwo}
        </p>
        <Container
          // fixed
          // maxWidth={"100vw"}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "auto",
            width:'100vw',
            marginRight: "auto",
            overflow:'hidden'
          }}
        >
          <Box
            sx={{
              bgcolor: "#cfe8fc",
              height: "100vh",
              background: `url(${img})`,
              width: "920px",
              // maxWidth: "980",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
              backgroundSize: "contain",
              backgroundRepeat:'no-repeat',
              marginLeft:'-25px'
            }}
            className="tabs-img"
          />
        </Container>
        {/* <button
          className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          style={{
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
            background: "#787EFF",
            borderRadius: "25px",
            width: "100px",
            height: "48px",
        marginLeft: "auto",
        marginRight: "auto",
          }}
        >
          <a href="#" >Try SIGIL FOR FREE</a>
        </button> */}
      </div>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      style={{width:'100%'}}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "transparent", width: "100%" }}>
      <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          // variant="fullWidth"
          aria-label="full width tabs example"
          centered
          TabIndicatorProps={{ sx: { display: "none" } }}
          sx={{
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
            },
          }}
        >
          <Tab
            label={<ItemCard img={setting} title={"Setup"} />}
            {...a11yProps(0)}
          />
          <Tab
            label={<ItemCard img={design} title={"Design"} />}
            {...a11yProps(1)}
          />
          <Tab
            label={<ItemCard img={deploy} title={"Deploy"} />}
            {...a11yProps(2)}
          />
          <Tab
            label={<ItemCard img={update} title={"Update"} />}
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <DepartSec
            pOne={
              "  1. Add your employee data directly from email provider or via CSV"
            }
            pTwo={"2. Create departments with different co workers"}
            img={depart}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <DepartSec
            pOne={
              "1. Choose Our Customizable Templates with Various Color, Font and Icon Options."
            }
            pTwo={
              "2. Boost Your Marketing Efforts by Adding Call to Action or Promotional Banners"
            }
            img={depart}
          />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <DepartSec
            pOne={"1. Update email signatures in real time."}
            pTwo={
              "2. Make your desired changes to the email signatures and deploy it across the department and see the changes happen in real time."
            }
            img={depart}
          />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <DepartSec
            pOne={"1. Sync your customer list and map contacts into interests."}
            pTwo={"2. Deploy different signatures banners for each interest."}
            img={depart}
          />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

function ColumnsGrid() {
  const [selCardOne, setselCardOne] = React.useState(true);
  const [selCardTwo, setselCardTwo] = React.useState(false);
  const [selCardThree, setselCardThree] = React.useState(false);
  const [selCardFour, setselCardFour] = React.useState(false);

  const clickCard = () => {
    setselCardOne((current) => !current);
  };
  const clickCardTwo = () => {
    setselCardTwo((current) => !current);
  };
  const clickCardThree = () => {
    setselCardThree((current) => !current);
  };
  const clickCardFour = () => {
    setselCardFour((current) => !current);
  };

  return (
    <Box sx={{ flexGrow: 1, }}   >
      <Container maxWidth="lg">
        {/* <Grid container spacing={1} columns={16}>
          <Grid item xs={4}>
            <ItemCard
              style={{
                border: selCardOne ? "1px solid #ccc" : "",
                background: selCardOne ? "#EEF1FC" : "",
              }}
              onClick={clickCard}
              img={setting}
              title={"Setup"}
            />
          </Grid>
          <Grid item xs={4}>
            <ItemCard
              img={design}
              title={"Design"}
              style={{
                border: selCardTwo ? "1px solid #ccc" : "",
                background: selCardTwo ? "#EEF1FC" : "",
              }}
              onClick={clickCardTwo}
            />
          </Grid>
          <Grid item xs={4}>
            <ItemCard
              img={deploy}
              title={"Deploy"}
              style={{
                border: selCardThree ? "1px solid #ccc" : "",
                background: selCardThree ? "#EEF1FC" : "",
              }}
              onClick={clickCardThree}
            />
          </Grid>
          <Grid item xs={4}>
            <ItemCard
              img={update}
              title={"Update"}
              style={{
                border: selCardFour ? "1px solid #ccc" : "",
                background: selCardFour ? "#EEF1FC" : "",
              }}
              onClick={clickCardFour}
            />
          </Grid>
        </Grid> */}
        <FullWidthTabs />
      </Container>
      {/* {selCardOne ? (
        <DepartSec
          pOne={
            "  1. Add your employee data directly from email provider or via CSV"
          }
          pTwo={"2. Create departments with different co workers"}
          img={depart}
        />
      ) : (
        <></>
      )} */}
    </Box>
  );
}

export default function DesignDeploy() {
  return (
    <div>
      <div className="bg-white" style={{
      background: `url(${bg003})`,
      backgroundSize: "cover",
    }}>
        <div className="mx-auto max-w-2xl lg:text-center" style={{padding:'10px'}}>
          {/* <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Deploy faster</h2> */}
          <p
            className="mt-2 text-5xl font-bold tracking-tight sm:text-5xl sigil-headings"
            style={{ color: "#704EF9" }}
          >
            Design Deploy & Update in less than 10 minutes
          </p>
          <p
            className="mt-6 text-md leading-8 text-gray-600 sigil-headings"
            style={{ fontWeight: 400, fontSize: "28px", lineHeight: "25px" }}
          >
            Roll out email signature updates to your whole organization in a few
            simple clicks.
          </p>
        </div>
        <div
          className="mx-auto max-w-5xl py-18 lg:text-center"
        
        >
          <ColumnsGrid />
        </div>

        {/* <div className="mx-auto max-w-7xl py-21 sm:px-6 sm:py-28 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Boost your productivity.
                <br />
                Start using our app today.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-base font-semibold leading-7 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div> */}

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
              padding: "20px 15px",
              width: "330px",
              height: "86px",
              fontFamily: "Outfit",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "35px",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            TRY IT NOW RISK FREE
          </a>
        </Container>
      </div>
    </div>
  );
}
