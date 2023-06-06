import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import security from "../images/security.png";
import gdpr from "../images/gdpr.png";
import tech from "../images/tech.png";
import ehosting from "../images/ehosting.png";
import onboard from "../images/onboard.png";

const features = [
  {
    name: "Dedicated Tech Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    icon: CloudArrowUpIcon,
    avt: tech,
  },
  {
    name: "Integration and Onboarding",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
    avt: onboard,
  },
  {
    name: "No Email Hosting",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
    avt: ehosting,
  },
  {
    name: "GDPR & Compliances",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
    avt: gdpr
  },
];

export default function DataSecurity() {
  return (
    <div
      className="bg-white py-24 sm:py-32"
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-left">
          {/* <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
          <Grid container spacing={12} columns={16}>
            <Grid item xs={8}>
              <p
                className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                style={{ color: "#704EF9" }}
              >
                Your Success and Data <br /> Security are Important to us
              </p>
            </Grid>
            <Grid item xs={8}>
              <img src={security} />
            </Grid>
          </Grid>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <Avatar src={feature.avt} sx={{ width: 74, height: 74 }} />
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
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
