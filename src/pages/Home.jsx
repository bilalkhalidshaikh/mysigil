import React from 'react';
import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import Banner from '../partials/Banner';
import Benifits from '../partials/Benifits';
import TrustedBy from '../partials/TrustedBy';
import DesignDeploy from '../partials/DesignDeploy';
import RevenueMachine from '../partials/RevenueMachine';
import IncreaseRevenue from '../partials/IncreaseRevenue';
import Integrate from '../partials/Integrate';
import CopyPaste from '../partials/CopyPaste';
import WhatPeopleSay from '../partials/WhatPeopleSay';
import DataSecurity from '../partials/DataSecurity';
import "../css/style.css"

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      {/* <Header /> */}

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <Benifits/>
        <TrustedBy/>
        <br/>
        <DesignDeploy/>
        <RevenueMachine/>
        <Integrate/>
        <CopyPaste/>
        <WhatPeopleSay/>
        <br/>
        <DataSecurity/>
        <br/>
        <IncreaseRevenue/>
        <br/>
        <br/>
        <br/>
        <br/>
        {/* <FeaturesHome /> */}
        {/* <FeaturesBlocks /> */}
        {/* <Testimonials /> */}
        {/* <Newsletter /> */}

      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      {/* <Footer /> */}

    </div>
  );
}

export default Home;