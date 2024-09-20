import React, { useEffect, useState } from "react";
import LayoutTheme from "../Layout";
import { SubHeader } from "../../components/SubHeader";
import dogBanner from "/images/gallery-dog2.png";
import { ReviewsBox } from "../../components/Reviews";
import { Helmet } from "react-helmet";
import BannerImage from "/images/hero-bg.png";
import { initBFCacheHandling } from "../../utils/bfcache";
export const PrivacyPolicy = () => {
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
  // Sample data array containing review data

  const privacyPolicy = [
    {
      title: "Information We Collect",
      description:
        "Personal Information: We may collect personal information such as your name, email address, and any other information you provide through contact forms, newsletter sign-ups, and purchases.\nUsage Data: We collect information about your interactions with our website, including your IP address, browser type, pages visited, and the time spent on each page.\nCookies: We use cookies and similar tracking technologies to enhance your experience on our site. Cookies help us understand your preferences and improve our services.",
    },
    {
      title: "How We Use Your Information",
      description:
        "To Provide Services: We use your information to process orders, respond to inquiries, and provide personalized recommendations.\nTo Improve Our Website: Usage data helps us analyze trends, troubleshoot issues, and enhance the functionality and content of our site.\nTo Communicate with You: We may send you updates, newsletters, and promotional offers related to our books and services based on your preferences.",
    },
    {
      title: "How We Protect Your Information",
      description:
        "Security Measures: We implement appropriate technical and organizational measures to safeguard your personal information from unauthorized access, disclosure, alteration, or destruction.\nData Retention: We retain your personal information only as long as necessary to fulfill the purposes for which it was collected or as required by law.",
    },
    {
      title: "Sharing Your Information",
      description:
        "Third-Party Service Providers: We may share your information with third-party service providers who assist us in operating our website, processing payments, and sending communications.\nLegal Requirements: We may disclose your information if required by law or in response to a valid request from public authorities.",
    },
    {
      title: "Your Choices",
      description:
        "Access and Update: You have the right to access and update your personal information by contacting us.\nOpt-Out: You may opt-out of receiving promotional emails by following the unsubscribe instructions provided in those emails.",
    },
    {
      title: "Changes to This Privacy Policy",
      description:
        "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.",
    },
  ];

  // Number of cards to display per page
  const cardsPerPage = 15;

  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the cards to display on the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  // Slice the data array to get the cards for the current page
  const currentCards = privacyPolicy.slice(startIndex, endIndex);

  // Function to handle page change when pagination is clicked
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(privacyPolicy.length / cardsPerPage);

  return (
    <LayoutTheme>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Privacy Policy | Understanding Your Privacy</title>
        <meta
          name="description"
          content="Learn about the privacy policy on Carolynn Tucciarone’s site, including how we handle and secure your personal information"
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <SubHeader name="Reviews" img={BannerImage} subHeading="Testimonials" />

      <div className="inner_page_section_head head_modified">
        <h2>Privacy Policy</h2>
      </div>

      <div className="Feedbacks modified_feedback">
        {currentCards.map((ReviewData, index) => (
          <ReviewsBox
            key={index}
            title={ReviewData.title}
            description={ReviewData.description}
          />
        ))}
      </div>

      {/* Render pagination */}
      <div className="pagination modified_pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </LayoutTheme>
  );
};
