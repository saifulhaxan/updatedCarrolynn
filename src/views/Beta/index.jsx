import React, { useEffect } from "react";
import "./style.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./Hero";
import AboutSection from "./About";
import Christmas from "./Christmas";
import MovingSection from "./Moving";
import AdvantureBook from "./AdvantureBook";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Navbar from "./Navbar";
import LayoutTheme from "../Layout";
import { initBFCacheHandling } from "../../utils/bfcache";

const BetaHome = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    const onShow = () => {
      console.log('Page was restored from bfcache');
      // Any reinitialization logic
    };

    const onHide = () => {
      console.log('Page is being stored in bfcache');
      // Any cleanup logic
    };

    initBFCacheHandling(onShow, onHide);

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener('pageshow', onShow);
      window.removeEventListener('pagehide', onHide);
    };
  }, []);
  return (
    <LayoutTheme>
      {/* <Navbar /> */}
      <Hero />
      <AboutSection />
      <Christmas />
      <MovingSection />
      <AdvantureBook />
      <ContactUs />
      {/* <Footer /> */}
    </LayoutTheme>
  );
};

export default BetaHome;
