import React, { useState, useEffect } from "react";
import LayoutTheme from "../Layout";
import { SubHeader } from "../../components/SubHeader";
import dogBanner from "/images/gallery-dog2.png";
import { Link } from "react-router-dom";
import BannerImage from "/images/hero-bg.png";

import {
  facebookIcon,
  twitterIcon,
  instaIcon,
  linkedinIcon,
  scrollIcon,
} from "/public/images";
import { initBFCacheHandling } from "../../utils/bfcache";
import { Helmet } from "react-helmet";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
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

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const postsPerPage = 10; // Define the number of posts per page


  useEffect(() => {
    const fetchPosts = async () => {
      const apiUrl = `https://carolynntucciarone.com/admin/wp-json/wp/v2/posts/?per_page=${postsPerPage}&page=${currentPage}`;
      document.querySelector(".loaderBox").classList.add("d-block");

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const totalPosts = response.headers.get("X-WP-Total");
        const totalPages = response.headers.get("X-WP-TotalPages");

        setTotalPages(parseInt(totalPages));

        const data = await response.json();

        // Fetch and attach featured images for each post
        const fetchFeaturedImages = data.map((post) => {
          if (post.featured_media) {
            return fetch(
              `https://carolynntucciarone.com/admin/wp-json/wp/v2/media/${post.featured_media}`
            )
              .then((response) => response.json())
              .then((mediaData) => {
                return {
                  ...post,
                  featuredImageUrl: mediaData.source_url,
                };
              });
          } else {
            return { ...post, featuredImageUrl: null };
          }
        });

        const postsWithFeaturedImages = await Promise.all(fetchFeaturedImages);
        setPosts(postsWithFeaturedImages);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        document.querySelector(".loaderBox").classList.remove("d-block");
      }
    };

    fetchPosts();
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };


  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <LayoutTheme>
      <Helmet>
        <title>Blogs | Carolynn Tucciarone’s Latest Posts</title>
        <meta
          name="description"
          content="Follow Carolynn Tucciarone’s blogs for the latest updates, ideas, and reflections. Don’t
miss out on her regularly updated blogs."
        />
        <link rel="canonical" href="https://carolynntucciarone.com/blogs/" />
      </Helmet>
      <SubHeader name="Blogs" img={BannerImage} subHeading="our blogs" />
      <div className="blogListing">
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-md-4">
              <div className="blogBox">
                {post.featuredImageUrl && (
                  <img src={post.featuredImageUrl} alt={post.title.rendered} />
                )}
                <div className="blogBox_content">
                  <span className="blog_date">{post?.date}</span>
                  <h4>{post.title.rendered}</h4>
                  <div
                    className="blogContent"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  <div className="readMore">
                    <Link to={`/blogs/${post.slug}/${post.id}`} className="btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="loaderBox">
          <div class="spinner"></div>
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageClick(pageNumber)}
                className={pageNumber === currentPage ? "active" : ""}
              >
                {pageNumber}
              </button>
            )
          )}
        </div>
      </div>
    </LayoutTheme>
  );
};

export default BlogPosts;
