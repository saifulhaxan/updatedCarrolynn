import React, { useEffect, useState } from "react";
import LayoutTheme from "../Layout";
import { SubHeader } from "../../components/SubHeader";
import dogBanner from "/images/gallery-dog2.png";
import { ReviewsBox } from "../../components/Reviews";
import { Helmet } from "react-helmet";
import BannerImage from "/images/hero-bg.png";
import { initBFCacheHandling } from "../../utils/bfcache";
export const TermsAndConditions = () => {
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

  const termsAndConditions = [
    {
      title: "Intellectual Property",
      description:
        "All content on this website, including text, images, graphics, and logos, is the property of Carolynntucciarone or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or use any content from this site without our explicit written permission.",
    },
    {
      title: "Use of Website",
      description:
        "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of or restrict or inhibit anyone else's use and enjoyment of the website. You may not use the website in any way that may damage or impair the website or interfere with any other party's use of the website.",
    },
    {
      title: "Product Information and Availability",
      description:
        "We make every effort to ensure that the information on our website is accurate and up-to-date. However, we do not warrant that all information is error-free or complete. Product availability may vary, and we reserve the right to modify or discontinue products at our discretion.",
    },
    {
      title: "Purchases",
      description:
        "When you make a purchase through our website, you agree to provide accurate and complete information. Payment for products must be made using a valid payment method. We reserve the right to refuse or cancel any order for reasons including but not limited to product availability or suspected fraud.",
    },
    {
      title: "Limitation of Liability",
      description:
        "To the fullest extent permitted by law, Carolynntucciarone will not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of this website or the purchase of products from our site. This includes but is not limited to damages for loss of profits, data, or other intangible losses.",
    },
    {
      title: "Privacy Policy",
      description:
        "Your use of our website is also governed by our Privacy Policy, which can be found here. By using our site, you consent to the collection and use of your information as described in the Privacy Policy.",
    },
    {
      title: "Links to Other Websites",
      description:
        "Our website may contain links to third-party websites. These links are provided for your convenience and do not signify endorsement of the linked websites. We are not responsible for the content or practices of any third-party websites.",
    },
    {
      title: "Modifications to Terms",
      description:
        "We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page with an updated effective date. Your continued use of the website following the posting of changes constitutes your acceptance of such changes.",
    },
    {
      title: "Governing Law",
      description:
        "These Terms and Conditions are governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles. Any disputes arising from these terms shall be resolved in the courts located in Los Angeles County, California.",
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
  const currentCards = termsAndConditions.slice(startIndex, endIndex);

  // Function to handle page change when pagination is clicked
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(termsAndConditions.length / cardsPerPage);

  return (
    <LayoutTheme>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Understand the Terms and Conditions governing Carolynn Tucciarone’s
          site, including rules, policies, and user obligations
        </title>
        <meta
          name="description"
          content="Learn about the privacy policy on Carolynn Tucciarone’s site, including how we handle and secure your personal information."
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <SubHeader
        name="Terms And Conditions"
        img={BannerImage}
        subHeading="Our Terms And Conditions"
      />

      <div className="inner_page_section_head head_modified">
        <h2>Terms And Conditions</h2>
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
