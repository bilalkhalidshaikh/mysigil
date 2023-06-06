import React from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import dot from "./../images/dot.png";
import bg002 from "./../images/bg002.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

export default function Benifits() {
  return (
    <>
      <div
        className=" py-24 sm:py-32"
        style={{
          background: `url(${bg002})`,
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="mx-auto max-w-2xl lg:text-center"
            //       style={{
            //   background: `url(${bg1})`,
            //   backgroundSize:'cover',
            // }}
          >
            <h1
              className="text-5xl md:text-4 xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
              style={{ color: "#5245FF",textAlign:'center' }}
            >
              BENIFITS
            </h1>
          </div>
          {/* <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div> */}
          <Card
            sx={{ minWidth: 275, maxWidth: 986, borderRadius: "60px" }}
            className="mx-auto max-w-2xl lg:text-center"
            elevation={5}
          >
            <CardContent>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={6}>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                    aria-label="contacts"
                  >
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <img
                            src={dot}
                            style={{
                              width: "38px",
                              height: "38px",
                              filter:
                                "drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25))",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Update Email signatures in 1 click." />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <img
                            src={dot}
                            style={{
                              width: "38px",
                              height: "38px",
                              filter:
                                "drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25))",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Transform your Email signature into a powerful marketing channel." />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <img
                            src={dot}
                            style={{
                              width: "38px",
                              height: "38px",
                              filter:
                                "drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25))",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Maintain brand uniformity & Design." />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <img
                            src={dot}
                            style={{
                              width: "38px",
                              height: "38px",
                              filter:
                                "drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25))",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Convert your email signature into a marketing channel." />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <img
                            src={dot}
                            style={{
                              width: "38px",
                              height: "38px",
                              filter:
                                "drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25))",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Show the relevant signature banner to the right audience." />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <img
                            src={dot}
                            style={{
                              width: "38px",
                              height: "38px",
                              filter:
                                "drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25))",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Add CTA buttons directly in your email signatures." />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <img
                            src={dot}
                            style={{
                              width: "38px",
                              height: "38px",
                              filter:
                                "drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25))",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Add marketing banners in your email signatures." />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={6}>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                    aria-label="contacts"
                  >
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <img
                            src={dot}
                            style={{
                              width: "38px",
                              height: "38px",
                              filter:
                                "drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25))",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Integrates with your email provide." />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <img
                            src={dot}
                            style={{
                              width: "38px",
                              height: "38px",
                              filter:
                                "drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25))",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Responsive signatures on both desktop and mobile." />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <img
                            src={dot}
                            style={{
                              width: "38px",
                              height: "38px",
                              filter:
                                "drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25))",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="30 + Email signature templates made by experienced UI Designers." />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <img
                            src={dot}
                            style={{
                              width: "38px",
                              height: "38px",
                              filter:
                                "drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25))",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Create different departments and update their email signatures dynamically with department relevant banners & CTA’s." />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <img
                            src={dot}
                            style={{
                              width: "38px",
                              height: "38px",
                              filter:
                                "drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25))",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Sync your contact list and turn them into targetable interest groups." />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <img
                            src={dot}
                            style={{
                              width: "38px",
                              height: "38px",
                              filter:
                                "drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25))",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Keep your legal disclaimers & Sign off’s consistent." />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Grid>
                {/* <Grid item xs={6}>
                  <div>
                    <img src={dot.png} />
                    <p
                      className="text-xl text-gray-600 mb-8"
                      data-aos="zoom-y-out"
                      data-aos-delay="150"
                    >
                      Update Email signatures in 1 click.
                    </p>
                  </div>
                </Grid> */}
                {/* <Grid item xs={6}>
                  <div>
                    <img src={dot.png} />
                    <p
                      className="text-xl text-gray-600 mb-8"
                      data-aos="zoom-y-out"
                      data-aos-delay="150"
                    >
                      Update Email signatures in 1 click.
                    </p>
                  </div>
                </Grid> */}
              </Grid>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
