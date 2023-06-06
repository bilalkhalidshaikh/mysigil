import React, { useState } from "react";
import Modal from "../utils/Modal";
import Ellipse from "../images/Ellipse 1.svg";
import HeroImage from "../images/hero-image.png";
import vid from "../images/vidbox.png";
import logo from "../images/logo.png";
import ellips from "../images/ellipse.png";
import bg1 from "../images/bg1.png";
import iconsback from "../images/iconsback.png";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Typography ,Container} from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import "../css/style.css";

const navigation = [
  { name: "HOME", href: "#" },
  { name: "MYSIGIL", href: "#" },
  { name: "COMUNITY", href: "#" },
  { name: "PLANS", href: "#" },
];

function HeroMain() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div
      className="isolate bg-white"
      style={{
        background: `url(${bg1})`,
        backgroundSize:'cover',
      }}
    >
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8"
                src={logo}
                alt=""
                style={{
                  filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25))",
                  width: "107px",
                  height: "101px",
                }}
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{ fontSize: "14px" }}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              style={{
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
                background: "#787EFF",
                borderRadius: "25px",
                width: "100px",
                height: "48px",
              }}
            >
              LOG IN
            </a>
            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              style={{
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
                background: "#787EFF",
                borderRadius: "25px",
                width: "100px",
                height: "48px",
              }}
            >
              SIGN UP
            </a>
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus="true"
            className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8" src={logo} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
      <main>
        <section className="relative">
          {/* Illustration behind hero content */}
          {/* <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
          <svg
            width="1360"
            height="578"
            viewBox="0 0 1360 578"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="illustration-01"
              >
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
      </div> */}

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Hero content */}
            <div className="pt-42 pb-12 md:pt-10 md:pb-20">
              {/* Section header */}
              <div className="text-center pb-12 md:pb-16">
                <div className="max-w-3xl mx-auto">
                  <p
                    className="text-xl text-gray-600 mb-8"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    Are you tired of spending endless hours creating and
                    installing email signatures for your team? Say goodbye to
                    manual email signature management with MY SIGIL
                  </p>
                </div>
                <Typography
                  sx={{
                    typography: {
                      xs: "subtitle1",
                      sm: "h2",
                    },
                  }}
                >
                  <h1
                    className="text-5xl md:text-7xl font-bold leading-tighter tracking-tighter mb-4 sigil-headings"
                    data-aos="zoom-y-out"
                    style={{ color: "#704EF9", fontFamily: "Outfit",lineHeight: '80px',fontStyle:'normal' }}
                  >
                    Convert your Dead
                    <div> </div>
                    Email Signatures into
                    <div> </div>
                    Revenue Channel
                    {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                wonderful
              </span> */}
                  </h1>
                </Typography>
              </div>

              {/* Hero image */}
              <div>
                <div
                  className="relative flex justify-center mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="450"
                >
                  <div
                    className="flex flex-col justify-center"
                    style={{
                      backgroundImage: `url(${iconsback})`,
                      backgroundSize: "700",
                      flex: "1",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",

                      // position:'absolute'
                    }}
                  >
                    <img
                      className="mx-auto"
                      src={vid}
                      width="768"
                      height="432"
                      alt="Hero"
                      style={{ flex: "-1", zIndex: "-1" }}
                    />
                    <svg
                      className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto"
                      width="768"
                      height="432"
                      viewBox="0 -130 68 332"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <circle cx={39} cy={39} r={39} fill="url(#pattern0)" />
                      <defs>
                        <pattern
                          id="pattern0"
                          patternContentUnits="objectBoundingBox"
                          width={1}
                          height={1}
                        >
                          <use
                            xlinkHref="#image0_12_23"
                            transform="scale(0.000925926)"
                          />
                        </pattern>
                        <image
                          id="image0_12_23"
                          width={1080}
                          height={1080}
                          xlinkHref="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>

                    {/* <svg
                  className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto"
                  width="768"
                  height="432"
                  viewBox="0 0 768 432"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                      id="hero-ill-a"
                    >
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="77.402%" />
                      <stop stopColor="#DFDFDF" offset="100%" />
                    </linearGradient>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="99.24%"
                      id="hero-ill-b"
                    >
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="48.57%" />
                      <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%" />
                    </linearGradient>
                    <radialGradient
                      cx="21.152%"
                      cy="86.063%"
                      fx="21.152%"
                      fy="86.063%"
                      r="79.941%"
                      id="hero-ill-e"
                    >
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                    <circle id="hero-ill-d" cx="384" cy="216" r="64" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <circle
                      fillOpacity=".04"
                      fill="url(#hero-ill-a)"
                      cx="384"
                      cy="216"
                      r="128"
                    />
                    <circle
                      fillOpacity=".16"
                      fill="url(#hero-ill-b)"
                      cx="384"
                      cy="216"
                      r="96"
                    />
                    <g fillRule="nonzero">
                      <use fill="#000" xlinkHref="#hero-ill-d" />
                      <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                    </g>
                  </g>
                </svg> */}
                  </div>
                  {/* <button
                  className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setVideoModalOpen(true);
                  }}
                  aria-controls="modal"
                >
                  <svg
                    className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                    <path d="M10 17l6-5-6-5z" />
                  </svg>
                  <span className="ml-3">Watch the full video (2 min)</span>
                </button> */}
                </div>

                {/* Modal */}
                <Modal
                  id="modal"
                  ariaLabel="modal-headline"
                  show={videoModalOpen}
                  handleClose={() => setVideoModalOpen(false)}
                >
                  <div className="relative pb-9/16">
                    <iframe
                      className="absolute w-full h-full"
                      src="https://player.vimeo.com/video/174002812"
                      title="Video"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Modal>
              </div>
              <div className="max-w-3xl mx-auto">
                <h1
                  className="text-5xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-center sigil-headings"
                  data-aos="zoom-y-out"
                  style={{ color: "#704EF9", fontWeight: "600",lineHeight:'60px' }}
                >
                   Design, Create install & update Email signatures across your
                  organization in
                  <div style={{ color: "#B741FF" }}>less than 10 minutes</div>
                </h1>
              </div>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Are you tired of spending endless hours creating and
                  installing email signatures for your team? Say goodbye to
                  manual email signature management with MY SIGIL
                </p>
              </div>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                <Container
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
                  <a
                    className="sigil-buttons btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
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
                      fontSize: "18px",
                      lineHeight: "35px",
                      marginLeft:'auto',
                      marginRight:'auto'
                    }}
                  >
                    TRY IT NOW RISK FREE
                  </a>
                  </Container>
                </div>
                {/* <div>
                  <a
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="#0"
                  >
                    Learn more
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    // <ThemeProvider theme={theme}>
    <>
      <HeroMain />
    </>
    // {/* </ThemeProvider> */}
  );
}

export default HeroHome;
