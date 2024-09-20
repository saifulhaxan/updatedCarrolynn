import React, { useEffect } from "react";
import LayoutTheme from "../Layout";
import { SubHeader } from "../../components/SubHeader";
import { ReviewsBox } from "../../components/Reviews";
import { Helmet } from "react-helmet";
import BannerImage from "/images/hero-bg.png";
import { initBFCacheHandling } from "../../utils/bfcache";
const videoLink = [
  "ChristmasOnHolidayIsland",
  "MovingOnWelcometoaNewYearofMysteryAndChaos!",
  "MovingOnGettingOutOfTheBox",
  "MovingOnToNewHeightsAndNewAdventures",
  "Carolynn-Tucciarone-Books",
  "MysterAtTheDogResscue",
  "SpotOnCanineBabies-Trailer",
  "SpotOnMysteryAtTheDogRescue-Trailer",
];

export const Trailer = () => {
  useEffect(() => {
    const onShow = () => {
      console.log("Page was restored from bfcache");
      // Any reinitialization logic
    };

    const onHide = () => {
      console.log("Page is being stored in bfcache");
      // Any cleanup logic
    };

    initBFCacheHandling(onShow, onHide);

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener("pageshow", onShow);
      window.removeEventListener("pagehide", onHide);
    };
  }, []);
  return (
    <LayoutTheme>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Trailers | Book Previews by Carolynn Tucciarone</title>
        <meta
          name="description"
          content="Explore captivating trailers for Carolynn Tucciarone’s works, offering insight into her
inspiring and heartfelt storie"
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <SubHeader name="Trailers" img={BannerImage} subHeading="OUR TRAILERS" />
      <div className="Feedbacks trailorAlign">
        {videoLink.map((videoLinkData, index) => (
          <ReviewsBox key={index} videoContent={videoLinkData} />
        ))}
      </div>
    </LayoutTheme>
  );
};
