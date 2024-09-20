/**
 * @description      :
 * @author           : Saif
 * @group            :
 * @created          : 17/05/2024 - 23:01:27
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 17/05/2024
 * - Author          : Saif
 * - Modification    :
 **/
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AboutPage } from "../views/About";
import { BuyNow } from "../views/BuyNow";
import { ContactUs } from "../views/Contact";
import { GalleryPage } from "../views/Gallery";
import { Home } from "../views/Home";
import { BookDetailPage } from "../views/BuyNow/BookDetailPage";
import { BookDetailIllusrationPage } from "../views/BuyNow/bookDetailillustration";
import { ReviewPage } from "../views/Reviews";
import { Trailer } from "../views/Trailor";
import BlogPosts from "../views/Blogs";
import { BlogDetails } from "../views/Blogs/blogDetails";
import BetaHome from "../views/Beta";
import { TermsAndConditions } from "../views/TermsAndConditions";
import { PrivacyPolicy } from "../views/PrivacyPolicy";

function AppRouter() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} index />
        {/* <Route path="/beta" element={<BetaHome />} /> */}
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/buynow" element={<BuyNow />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/blogs" element={<BlogPosts />} />
        <Route path="/blogs/:sulg/:id" element={<BlogDetails />} />
        <Route path="/trailers" element={<Trailer />} />
        <Route path="/book-detail/:slug" element={<BookDetailPage />} />
        <Route
          path="/book-detail-illustration/:slug"
          element={<BookDetailIllusrationPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
